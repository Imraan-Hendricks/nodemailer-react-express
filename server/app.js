const express = require('express');
const path = require('path');
const shutdown = require('./config/shutdown');
const { PORT } = require('./config/env');

const app = express();

app.use(express.json());
app.use(shutdown.handleRequests());

app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/public', express.static(path.join(__dirname, 'public')));

const server = app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

shutdown.onInterrupt(server);
shutdown.onTerminate(server);
