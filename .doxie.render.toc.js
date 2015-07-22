// from https://gist.github.com/mathewbyrne/1280286
slugify = function(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

var render = function(data) {
  var data = data.data;

  var out = '* [' + data.title + '](https://github.com/git-tips/tips#' + slugify(data.title) + ')\n';

  return out;
};

module.exports = render;
