import {marked} from 'marked'
import Vue from 'vue'

import hljs from "highlight.js"; // 引入 highlight.js
import "highlight.js/styles/default.css"; // 引入高亮样式 这里我用的是sublime样式
import "highlight.js/styles/a11y-dark.css"; // 引入高亮样式 这里我用的是sublime样式
// import

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    return hljs.highlightAuto(code).value
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});


Vue.prototype.$marked = marked

