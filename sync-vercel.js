const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🔄 ==========================================');
console.log('⚡ VERCEL LIVE PROJECTS AUTO-SYNC ENGINE');
console.log('==========================================');

function runCommand(cmd) {
  try {
    const res = cp.spawnSync(cmd, { encoding: 'utf8', shell: true });
    return (res.stdout || '') + '\n' + (res.stderr || '');
  } catch (err) {
    return (err.stdout || '') + '\n' + (err.stderr || '');
  }
}

function fetchAllVercelProjects() {
  const allProjects = [];
  let nextCursor = null;

  for (let page = 1; page <= 5; page++) {
    const cmd = nextCursor 
      ? `npx vercel project ls --next ${nextCursor}`
      : `npx vercel project ls`;
    
    console.log(`📡 Fetching page ${page} from Vercel CLI...`);
    const raw = runCommand(cmd);
    const clean = raw.replace(/\x1B\[[0-?]*[ -/]*[@-~]/g, '');

    let foundInPage = 0;
    clean.split('\n').forEach(line => {
      const match = line.match(/^\s*([a-zA-Z0-9_-]+)\s+(https:\/\/[^\s]+)/);
      if (match) {
        const name = match[1];
        const url = match[2];
        if (name !== 'myproject' && !name.includes('Project') && !name.includes('Name')) {
          if (!allProjects.some(p => p.name === name || p.url === url)) {
            allProjects.push({ name, url });
            foundInPage++;
          }
        }
      }
    });

    const cursorMatch = clean.match(/--next\s+([0-9]+)/);
    if (cursorMatch && cursorMatch[1] && cursorMatch[1] !== nextCursor) {
      nextCursor = cursorMatch[1];
    } else {
      break;
    }
  }

  return allProjects;
}

const projects = fetchAllVercelProjects();
console.log(`\n✓ Found ${projects.length} live projects on Vercel.`);

// Read current app.js
const appJsPath = path.join(__dirname, 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Check which projects are already in app.js
const missingProjects = [];
projects.forEach(p => {
  const normUrl = p.url.replace(/\/$/, '');
  const urlDomain = normUrl.replace(/^https?:\/\//, '');
  if (!appJsContent.includes(urlDomain) && !appJsContent.includes(p.name)) {
    missingProjects.push(p);
  }
});

if (missingProjects.length === 0) {
  console.log('✨ All Vercel projects are already synced and up to date in NEXUS Showcase!');
  process.exit(0);
}

console.log(`\n🚀 Discovered ${missingProjects.length} NEW Vercel project(s) to add:`);
missingProjects.forEach(p => console.log(` + ${p.name} (${p.url})`));

// Format new app items
function formatTitle(name) {
  return name
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function detectCategory(name) {
  const str = name.toLowerCase();
  if (str.includes('audio') || str.includes('video') || str.includes('vdo') || str.includes('clip') || str.includes('tool') || str.includes('poster') || str.includes('post') || str.includes('convert') || str.includes('remove') || str.includes('color')) {
    return 'Tool';
  }
  if (str.includes('app') || str.includes('attendance') || str.includes('portal')) {
    return 'APP';
  }
  return 'Web';
}

const newItems = missingProjects.map(p => {
  const title = formatTitle(p.name);
  const category = detectCategory(p.name);
  const id = 'app-' + p.name;
  return `  {
    id: "${id}",
    title: "${title}",
    category: "${category}",
    description: "${title} — Web Application deployed on Vercel.",
    descriptionEn: "${title} — Web Application deployed on Vercel.",
    url: "${p.url}",
    imageUrl: "https://api.microlink.io/?url=${encodeURIComponent(p.url)}&screenshot=true&meta=false&embed=screenshot.url",
    logoUrl: "https://www.google.com/s2/favicons?domain=${encodeURIComponent(p.url)}&sz=256",
    tags: ["Vercel", "${category}", "Web App"],
    githubUrl: "",
    views: 100,
    likes: 5,
    featured: false,
    createdAt: new Date().toISOString().split('T')[0]
  }`;
});

// Insert into DEFAULT_APPS in app.js
const insertMarker = 'const DEFAULT_APPS = [\n';
const insertIndex = appJsContent.indexOf(insertMarker);

if (insertIndex !== -1) {
  const insertionPoint = insertIndex + insertMarker.length;
  const insertionText = newItems.join(',\n') + ',\n';
  appJsContent = appJsContent.slice(0, insertionPoint) + insertionText + appJsContent.slice(insertionPoint);
  fs.writeFileSync(appJsPath, appJsContent, 'utf8');
  console.log('✓ Successfully updated app.js with new Vercel projects!');

  // Commit and deploy
  try {
    console.log('🚀 Committing and pushing to GitHub...');
    cp.execSync('git add app.js && git commit -m "sync: Auto-sync new Vercel projects" && git push origin main', { stdio: 'inherit' });
    console.log('🚀 Deploying to Vercel production...');
    cp.execSync('npx vercel --prod --yes', { stdio: 'inherit' });
    console.log('\n🎉 ALL DONE! Your new Vercel projects are now live on https://visalproject.vercel.app');
  } catch (deployErr) {
    console.warn('Note: Git commit or deploy step completed with notice:', deployErr.message);
  }
} else {
  console.error('Could not find DEFAULT_APPS insertion marker in app.js');
}
