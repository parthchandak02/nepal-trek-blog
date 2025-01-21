// Check if we're on GitHub Pages
const isGitHubPages = process.env.NODE_ENV === 'production' || process.env.GITHUB_PAGES === 'true';
const prefix = process.env.NODE_ENV === 'production' ? '/nepal-trek-blog' : '';

export { prefix };
