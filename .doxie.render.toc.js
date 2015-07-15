var readFileSync = require('fs').readFileSync;
var tips = require('cson').parse(readFileSync(__dirname + '/tips.cson'));
  // TODO: Use `doxie --append` once it’s there

var render = function(data) {
  var data = data.data;

  var out = '* [' + data.title + '](https://github.com/git-tips/tips#' + data.title + ')\n';

  if (tips[tips.length -1].title === data.title) out = out + '\n';
  return out;
};

module.exports = render;
