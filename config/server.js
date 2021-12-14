module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 80),
  url: env('','http://strapicrm.donaldschiffmann.com')
});
