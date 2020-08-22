const express = require('express');
const path = require('path');
const { PORT, NODE_ENV } = require('./config/env');
const { routes } = require('./routes/routes');
const {
  handleRequests,
  onInterrupt,
  onTerminate,
} = require('./config/shutdown');

const app = express();

app.use(express.json());
app.use(handleRequests());

app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/public', express.static(path.join(__dirname, 'public')));

routes(app);

const server = app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);

onInterrupt(server);
onTerminate(server);
