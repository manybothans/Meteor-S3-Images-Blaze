Package.describe({
    name: "altapp:s3-images-blaze",
	summary: "Upload files to S3. Allows use of Knox Server-Side and get files urls on client-side.",
	git: "https://github.com/Altapp/Meteor-S3-Images-Blaze.git",
    version: "1.2.0"
});

/* This defines your actual package */
Package.onUse(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
  api.versionsFrom('0.9.0');

	api.use(["underscore", "ejson","service-configuration"]);
	api.use(["ui","templating","spacebars"], "client");
	api.addFiles("client/blocks.html", "client");
	api.addFiles("client/events.js", "client");
	api.addFiles("s3server.js", "server");
});


Npm.depends({
	knox: "0.8.5"
});
