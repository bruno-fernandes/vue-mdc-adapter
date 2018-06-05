(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{139:function(s,t,a){s.exports=a(55)},55:function(s,t,a){"use strict";a.r(t);var v=a(0),_=Object(v.a)(null,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",[a("h2",[s._v("Usage")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab-bar")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onSelected"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("item one"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("item two"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("item three"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab-bar")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" vm = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    onSelected(idx) {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("`selected index: "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${idx}")]),s._v("`")]),s._v(");\n    },\n  },\n});\n")])]),s._v(" "),a("h3",[s._v("props")]),s._v(" "),a("h4",[s._v("mdc-tab")]),s._v(" "),a("p",[s._v("mdc-tab behaves as a navigational link. Add an "),a("code",{pre:!0},[s._v("href")]),s._v(" for simple link behavior\nor the "),a("code",{pre:!0},[s._v("to")]),s._v(" property for router-link behavior. mdc-tab dispatches "),a("code",{pre:!0},[s._v("@click")]),s._v(" event.")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("prop")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("active")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("set the tab active")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("event")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("optional")]),s._v(" "),a("td",[s._v("optional event to emit on click")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("event-target")])]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("vm.$root")]),s._v(" "),a("td",[s._v("optional event target, defaults to root bus")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("event-args")])]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("[]")]),s._v(" "),a("td",[s._v("optional event args")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("to")])]),s._v(" "),a("td",[s._v("String, Object")]),s._v(" "),a("td",[s._v("undefined")]),s._v(" "),a("td",[s._v("router-link property "),a("em",[s._v("(*)")])])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("replace")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("router-link property "),a("em",[s._v("(*)")])])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("append")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("router-link property "),a("em",[s._v("(*)")])])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("exact")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("router-link property "),a("em",[s._v("(*)")])])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("active-class")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("router-link-active")]),s._v(" "),a("td",[s._v("router-link property "),a("em",[s._v("(*)")])])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("exact-active-class")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("router-link-exact-active")]),s._v(" "),a("td",[s._v("router-link property "),a("em",[s._v("(*)")])])])])]),s._v(" "),a("blockquote",[a("p",[a("em",[s._v("(*)")]),s._v(" Requires "),a("a",{attrs:{href:"https://router.vuejs.org"}},[s._v("vue-router")]),s._v("\nIf the "),a("code",{pre:!0},[s._v("to")]),s._v(" property is defined, the item behaves as a\n"),a("a",{attrs:{href:"https://router.vuejs.org/en/api/router-link.html"}},[s._v("router-link")])])]),s._v(" "),a("h4",[s._v("mdc-tab-bar")]),s._v(" "),a("h3",[s._v("events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("props")]),s._v(" "),a("th",[s._v("args")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("@change")])]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("notify listeners with the active index as parameter.")])])])]),s._v(" "),a("h3",[s._v("Tabs with icons")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab-bar")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"phone"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{className: 'fa fa-favorite'}\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("svg")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"icon"')]),s._v(">")]),s._v("..."),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("svg")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab-bar")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("blockquote",[a("p",[s._v("use "),a("code",{pre:!0},[s._v("icon")]),s._v(" slot for custom icon markup")])]),s._v(" "),a("h3",[s._v("Tabs with icons and text")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab-bar")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"phone"')]),s._v(">")]),s._v("Recents"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"favorite"')]),s._v(">")]),s._v("Favorites"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"personal_pin"')]),s._v(">")]),s._v("Nearby"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-tab-bar")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h3",[s._v("reference")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://material.io/components/web/catalog/tabs"}},[s._v("https://material.io/components/web/catalog/tabs")])])])])}],!1,null,null,null);t.default=_.exports}}]);
//# sourceMappingURL=30.5f84165b335d3d572107.js.map