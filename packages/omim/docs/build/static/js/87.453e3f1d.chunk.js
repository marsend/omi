webpackJsonp([87],{59:function(n,e){n.exports="# Omim\n\nCross-Frameworks components, powered by Material Design and [Omi](https://github.com/Tencent/omi).\n\n![](https://tencent.github.io/omi/packages/omim/assets/pv4.jpeg?a=1)\n\n## Features\n\n* Render by Custom Elements of Web Components\n* Any framework can use the components, such as Omi, React, Vue and Angular \n* Support both JSX and native HTML elements \n* Each element can be used independently\n* Super easy to change theme colors, fonts and rounded corners\n* Extended HTML capabilities, you can pass false attributes to elements through string `'0'` or string `'flase'`\n\n## Usage\n\n### Via script\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script src=\"https://unpkg.com/@omim/core@latest/button/index.js\"><\/script>\n\n<m-button>I am button</m-button>\n```\n\n### Via npm\n\n``` bash\nnpm install @omim/core\n```\n\nThen:\n\n```js\nimport '@omim/core/button'\n```\n\nThen use the element in Omi, React, Vue or Angular:\n\n``` html\n<m-button>I am button</m-button>\n```\n\nIt can also be used in pure js:\n\n```js\nvar button = document.createElement('m-button')\nbutton.innerHTML = 'I am button'\ndocument.body.append(button)\nbutton.addEventListener('click', function () {\n  console.log('Clicked!')\n})\n\n//or\n//document.body.innerHTML = '<m-button>I am button</m-button>'\n```\n\n## Change Theme Color\n\n```js\ndocument.body.style.setProperty('--mdc-theme-primary', 'red')\ndocument.body.style.setProperty('--mdc-theme-secondary', 'blue')\ndocument.body.style.setProperty('--mdc-theme-error', 'yellow')\n```\n\nAll the config:\n\n```css\n--mdc-theme-primary: #0072d9;\n--mdc-theme-secondary: #2170b8;\n--mdc-theme-error: #f5222d;\n--mdc-theme-surface: #ffffff;\n--mdc-theme-on-primary: #ffffff;\n--mdc-theme-on-secondary: #ffffff;\n--mdc-theme-on-error: #ffffff;\n--mdc-theme-on-surface: #000000;\n--mdc-theme-background: #ffffff;\n--mdc-shape-small-component-radius: 4px;\n--mdc-shape-medium-component-radius: 4px;\n--mdc-shape-large-component-radius: 0px;\n--mdc-typography--font-family: Roboto, sans-serif;\n```\n\n## HTML Extention \n\nYou can set boolean prop to false from markup by 0 or false string.\n\n```js\ndefine('my-element', class extends WeElement {\n  static defaultProps = {\n    show: true\n  }\n\n static propTypes = {\n    show: Boolean\n  }\n\n  render(props) {\n    ...\n    ...\n  }\n})\n```\n\nUse:\n\n```html\n<my-element show=\"false\"></my-element>\n```\n\nor\n\n```html\n<my-element show=\"0\"></my-element>\n```\n\n## Contribution\n\n### CMD\n\nBuild component:\n\n```bash\nnpm run build -- component-name\n```\n\nBuild all components:\n\n```bash\nnpm run build-all\n```\n\nBuild demo:\n\n```bash\nnpm start demo-name\n```\n\nPublish:\n\n```bash\nnpm publish --access public\n```\n\n## Links\n\n* [material.io docs](https://material.io/develop/web/components/buttons/) \n* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) \n* [material-theme-builder](https://material-theme-builder.glitch.me/)\n* [material-components-web](https://github.com/material-components/material-components-web)\n"}});
//# sourceMappingURL=87.453e3f1d.chunk.js.map