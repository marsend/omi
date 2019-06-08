webpackJsonp([72],{74:function(n,a){n.exports="## Radar\n\nRadar chart.\n\n## Usage\n\n```html\n<m-radar id=\"myRadar\" width=\"600\" height=\"300\" \n  data=\"{\n    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n    datasets: [{\n      label: '# of Votes',\n      data: [12, 19, 3, 5, 2, 3],\n      backgroundColor: 'rgba(255, 99, 132, .2)',\n      borderColor: 'rgb(255, 99, 132)',\n      borderWidth: 1\n    }]\n  }\"\n\n  options=\"{\n    maintainAspectRatio: true,\n    spanGaps: false,\n    elements: {\n      line: {\n        tension: 0.000001\n      }\n    },\n    plugins: {\n      filler: {\n        propagate: false\n      },\n      'samples-filler-analyser': {\n        target: 'chart-analyser'\n      }\n    }\n  }\">\n</m-radar>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  data: object,\n  options: object,\n  width: number,\n  height: number\n}\n```"}});
//# sourceMappingURL=72.c877adde.chunk.js.map