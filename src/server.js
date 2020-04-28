const express = require('express');
const { default: AdminBro } = require('admin-bro');
const mongoose = require('mongoose');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');

const app = express();
const port = 3000;

const run = async () => {
  await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);

  app.use(admin.options.rootPath, router);

  app.use('/uploads', express.static('uploads'));

  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
};


module.exports = run;
