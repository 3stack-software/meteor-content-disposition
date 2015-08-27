Package.describe({
  name: "3stack:content-disposition",
  version: "0.5.0",
  summary: 'https://github.com/jshttp/content-disposition',
  git: 'https://github.com/3stack-software/meteor-content-disposition',
  documentation: null
});

Npm.depends({
  "content-disposition": "0.5.0"
});

Package.onUse(function(api){
  api.export('contentDisposition');
  api.use('cosmos:browserify@0.4.0');
  api.addFiles([
    'content-disposition.browserify.js'
  ]);
});
