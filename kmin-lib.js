function sleep(milliseconds) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {}
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// export {sleep, getRandomInteger};

exports.getRandomInteger = getRandomInteger;
exports.sleep = sleep;