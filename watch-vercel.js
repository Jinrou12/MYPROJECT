const cp = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ ========================================================');
console.log('🚀 NEXUS VERCEL BACKGROUND AUTO-WATCHER STARTED');
console.log('📡 Checking for newly deployed Vercel projects every 60s...');
console.log('⚡ ========================================================');

const CHECK_INTERVAL_MS = 60 * 1000;

function runSyncOnce() {
  const syncScript = path.join(__dirname, 'sync-vercel.js');
  try {
    const output = cp.execSync(`node "${syncScript}"`, { encoding: 'utf8' });
    if (output.includes('Discovered') && output.includes('NEW Vercel project')) {
      console.log(`[${new Date().toLocaleTimeString()}] 🚀 NEW DEPLOYMENT DETECTED & SYNCED!`);
    } else {
      process.stdout.write(`.`);
    }
  } catch (err) {
    console.warn(`[${new Date().toLocaleTimeString()}] Sync notice:`, err.message);
  }
}

// Initial sync on start
runSyncOnce();

// Loop
setInterval(runSyncOnce, CHECK_INTERVAL_MS);
