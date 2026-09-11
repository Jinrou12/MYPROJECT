module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let token = process.env.VERCEL_API_TOKEN || process.env.VERCEL_TOKEN;
  if (!token && req.headers.authorization) {
    token = req.headers.authorization.replace(/^Bearer\s+/i, '').trim();
  }
  if (!token && req.query && req.query.token) {
    token = req.query.token.trim();
  }
  const teamId = process.env.VERCEL_TEAM_ID || req.query.teamId || 'team_eUORGOrJjfO61VbiWmm7MMwa';

  if (!token) {
    return res.status(200).json({
      connected: false,
      message: 'No Vercel Token provided. Set VERCEL_API_TOKEN in Vercel settings or enter it in the Manager Panel.',
      projects: []
    });
  }

  // Handle DELETE request to delete a project from Vercel
  if (req.method === 'DELETE') {
    let projectName = req.query.name || req.query.projectId;
    if (!projectName && req.body) {
      try {
        const parsedBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        projectName = parsedBody.name || parsedBody.projectName || parsedBody.projectId;
      } catch (e) {}
    }

    if (!projectName) {
      return res.status(400).json({ success: false, error: 'Project name or ID is required.' });
    }

    // Safety guard: prevent deleting the showcase app itself!
    const cleanName = projectName.toLowerCase().trim();
    if (cleanName === 'myproject' || cleanName === 'visalproject' || cleanName === 'prj_oqxq3vhxfkbexr8pmdaxjgeug6pa') {
      return res.status(400).json({ success: false, error: 'Cannot delete the showcase application itself!' });
    }

    try {
      const deleteUrl = `https://api.vercel.com/v9/projects/${encodeURIComponent(projectName)}?teamId=${teamId}`;
      const delResponse = await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!delResponse.ok) {
        const errText = await delResponse.text();
        return res.status(delResponse.status).json({ success: false, error: errText });
      }

      return res.status(200).json({
        success: true,
        message: `Project ${projectName} deleted successfully from Vercel.`,
        projectName
      });
    } catch (delErr) {
      return res.status(500).json({ success: false, error: delErr.message });
    }
  }

  try {
    const url = `https://api.vercel.com/v9/projects?limit=100&teamId=${teamId}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ connected: false, error: err });
    }

    const data = await response.json();
    function formatTitle(name) {
      return name
        .split(/[-_]/)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    }

    function detectCategory(name) {
      const s = name.toLowerCase();
      if (s.includes('audio') || s.includes('video') || s.includes('vdo') || s.includes('clip') || s.includes('tool') || s.includes('poster') || s.includes('post') || s.includes('convert') || s.includes('remove') || s.includes('color')) {
        return 'Tool';
      }
      if (s.includes('app') || s.includes('attendance') || s.includes('portal') || s.includes('manage')) {
        return 'APP';
      }
      return 'Web';
    }

    const projects = (data.projects || []).map(p => {
      let prodUrl = '';
      if (p.targets && p.targets.production && p.targets.production.url) {
        prodUrl = 'https://' + p.targets.production.url;
      } else if (p.latestDeployments && p.latestDeployments[0] && p.latestDeployments[0].url) {
        prodUrl = 'https://' + p.latestDeployments[0].url;
      }
      if (!prodUrl && p.name) {
        prodUrl = `https://${p.name}.vercel.app`;
      }

      const cat = detectCategory(p.name);
      const title = formatTitle(p.name);

      return {
        id: 'app-' + p.name,
        name: p.name,
        title: title,
        category: cat,
        description: `${title} — Web Application deployed on Vercel.`,
        descriptionEn: `${title} — Web Application deployed on Vercel.`,
        url: prodUrl,
        imageUrl: `https://api.microlink.io/?url=${encodeURIComponent(prodUrl)}&screenshot=true&meta=false&embed=screenshot.url`,
        logoUrl: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(prodUrl)}&sz=256`,
        tags: ["Vercel", cat, "Web App"],
        githubUrl: p.link && p.link.repo ? `https://github.com/${p.link.org || p.link.repoOwner}/${p.link.repo}` : "",
        views: 120,
        likes: 12,
        featured: false,
        updatedAt: p.updatedAt,
        framework: p.framework
      };
    }).filter(p => p.url && p.name !== 'myproject');

    return res.status(200).json({
      connected: true,
      count: projects.length,
      projects
    });
  } catch (err) {
    return res.status(500).json({ connected: false, error: err.message });
  }
};
