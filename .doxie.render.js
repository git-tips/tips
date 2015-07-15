function escapeStr(str) {
  return str
      .replace(/\"/g, '\\"')
      .replace(/\n/g, '\\n');
}

var render = function(data) {
  var data = data.data;

  return [
    '## ' + data.title,
    '```sh',
    data.tip,
    '```',
    '\n'
  ].join('\n');
};

module.exports = render;
