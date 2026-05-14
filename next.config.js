/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY || '';
const repositoryName = repository.split('/')[1] || '';
const isGitHubPagesCi = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgSite = repositoryName.endsWith('.github.io');
const basePath =
  isGitHubPagesCi && repositoryName && !isUserOrOrgSite
    ? `/${repositoryName}`
    : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
};

module.exports = nextConfig;
