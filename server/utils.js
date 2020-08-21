const path = require('path');

exports.handle = (promise) =>
  promise
    .then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));

exports.relativeDir = (dir) => path.join(__dirname, dir);
