// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '';

// https://astro.build/config
export default defineConfig({
  base: isGitHubPages ? `${repoName}/` : '/',
});