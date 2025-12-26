module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      options: {
        algorithm: 'RS512',
        privateKey: process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n'),
        publicKey: process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n'),
        issuer: 'idzemat-api',
        audience: 'admin'
      },
      accessTokenLifespan: 2 * 30 * 60, // 60 minutes
      maxRefreshTokenLifespan: 30 * 24 * 60 * 60, // 30 days
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  serveAdminPanel: env.bool('SERVE_ADMIN_PANEL', false),
});
