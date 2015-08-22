module.exports = {
  port: 3444,
  data_location: __dirname + '/../data/',
  rest_base_url: '/api/v1/*',
  static_site_root: __dirname + '/../build', //up a dir and find build
  use_proxy: true,
  api_host: 'https://dev.edepo.com',
  api_path: '/api/v1/'
};