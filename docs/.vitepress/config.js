import { defineConfig } from 'vitepress'
import {nav} from './nav'
import { sidebar } from './sidebar'


// https://vitepress.dev/reference/site-config
export default defineConfig({
 
  
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav:nav,
    base:'./',

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
