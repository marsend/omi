webpackJsonp([43],{103:function(n,e){n.exports="## ColorPicker\n\n\u57fa\u4e8e [pickr](https://github.com/Simonwep/pickr) \u6539\u9020\u5f97\u989c\u8272\u9009\u62e9\u5668\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-color-picker \n  id='picker' \n  save=\"0\" \n  preview=\"0\" \n  button='0' \n  clear='0' \n  width=\"300px\">\n</m-color-picker>\n\n<script>\n  var picker = document.querySelector('#picker')\n  picker.addEventListener('change', function(evt){\n    console.log(evt.detail.color)\n  })\n<\/script>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  button?: boolean;\n  preview?: boolean;\n  opacity?: boolean;\n  hue?: boolean;\n  hex?: boolean;\n  rgba?: boolean;\n  hsla?: boolean;\n  hsva?: boolean;\n  input?: boolean;\n  clear?: boolean;\n  save?: boolean;\n  cmyk?: boolean;\n  default?: string;\n  swatches?: string[];\n  inline?: boolean;\n  strings?: {\n      save: string;\n      clear: string;\n  };\n  width?: string;\n}\n```\n\n### defaultProps\n\n```jsx\n{\n  button: true,\n  preview: true,\n  opacity: true,\n  hue: true,\n\n  hex: true,\n  rgba: true,\n  hsla: true,\n  hsva: false,\n  input: true,\n  clear: true,\n  save: true,\n  cmyk: false,\n\n  default: '#3365B7',\n\n  swatches: [],\n  inline: true,\n\n  strings: {\n    save: 'Save',  // \u4fdd\u5b58\u6309\u94ae\u7684\u6587\u5b57\n    clear: 'Clear' // \u6e05\u695a\u6309\u94ae\u7684\u6587\u5b57\n  }\n}\n```"}});
//# sourceMappingURL=43.4058c5ff.chunk.js.map