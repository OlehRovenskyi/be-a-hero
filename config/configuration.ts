// eslint-disable-next-line complexity
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  app_code: 'UserManagement',
  deploy_stage: process.env.DEPLOY_STAGE || 'dev',
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT) || 5432,
  },
});
