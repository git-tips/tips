var tips = require('./tips.json');

var render = function(data) {
  var data = data.data;

  var out = '* [' + data.title + '](https://github.com/git-tips/tips#' + data.title + ')\n';

  if (tips[tips.length -1].title === data.title) out = out + '\n';
  return out;
};

module.exports = render;
