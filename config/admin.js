module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc6b13cf5526a568a69e40b97b536cc6'),
  },
});
