var MAX_STEPS = 10000;

function countSteps(race) {
  var steps = 0;
  var pos = 0;
  while(pos < race.length && steps < MAX_STEPS) {
    if (pos < 0) {
      return MAX_STEPS;
    }
    pos = pos + race[pos];
    steps++;
  }
  return steps;
}

module.exports = function getBestRacer(distance) {
  var steps = [];
  var min = MAX_STEPS + 1;
  distance.forEach(function (item, index) {
    var s = countSteps(item);
    if (s < min) min = s;
  });
  return min;
}
