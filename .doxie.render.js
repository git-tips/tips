function escapeStr(str) {
  return str
      .replace(/\"/g, '\\"')
      .replace(/\n/g, '\\n');
}

var render = function(data) {
  var data = data.data;

  var tips = [
    '## ' + data.title,
    '```sh',
    data.tip,
    '```',
    '\n'
  ];
  Array.isArray(data.alternatives) && tips.push(['__Alternatives:__']) &&
  data.alternatives.map(function(alternative){
     tips = tips.concat(['```sh',alternative,'```','\n'])
  });
  return tips.join('\n');
};

module.exports = render;


//suibian xiexie
