import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import {
  markdownDirectives,
  remarkFrontmatter,
  rehypeFrontmatter,
  remarkRestyling,
  rehypeRestyling,
} from "./src/exMarkdown/md";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax";
import remarkDirective from "remark-directive";

import vue from "@astrojs/vue";

import { SiteConfig } from "./src/site_config";
import { generateSearchData } from "./src/exMarkdown/generateSearchData.js";

import astroI18next from "astro-i18next";

const remarkPlugins: any = [
  remarkFrontmatter,
  remarkGfm,
  SiteConfig.markdownMath !== false && remarkMath,
  remarkRestyling,
  remarkDirective,
  markdownDirectives,
  SiteConfig.localSearch && generateSearchData,
].filter(Boolean);

const rehypePlugins: any = [
  rehypeFrontmatter,
  rehypeRestyling,
  SiteConfig.markdownMath === "Katex" && rehypeKatex,
  SiteConfig.markdownMath === "Mathjax" && rehypeMathjax,
].filter(Boolean);

const ServerPort = 3000;
const LocalHostURL = `http://localhost:${ServerPort}`;
const LiveURL = "https://zaaacqwq.github.io/";
let BaseURL = LocalHostURL;

if (process.env.NODE_ENV === "production") {
  BaseURL = LiveURL;
}

export default defineConfig({
  site: "https://zaaacqwq.github.io/",
  integrations: [astroI18next(), sitemap(), vue()],
  output: "static",
  build: {
    format: "directory",
  },
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins,
  },
  trailingSlash: "ignore",
});
