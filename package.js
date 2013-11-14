Package.describe({
  summary: "adds a way for users to configure their settings in your app"
});

Package.on_use(function (api, where) {
  api.add_files('user-settings.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('user-settings');

  api.add_files('user-settings_tests.js', ['client', 'server']);
});
