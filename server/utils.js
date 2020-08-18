const handle = (promise) =>
  promise
    .then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));

exports.handle = handle;
