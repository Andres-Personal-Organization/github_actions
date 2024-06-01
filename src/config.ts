export default () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  fallbackLanguage: 'en',
  APP_ENV: process.env.APP_ENV,

  MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL,

  // // email settings
  // SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  // DEFAULT_FROM_NAME: process.env.DEFAULT_FROM_NAME,
  // DEFAULT_FROM_EMAIL: process.env.DEFAULT_FROM_EMAIL,

  // // aws settings
  // AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  // AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  // AWS_REGION: process.env.AWS_REGION,

  // // // cognito settings (used for auth)
  // COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
  // COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
  // COGNITO_REGION: process.env.COGNITO_REGION || process.env.AWS_REGION,
  // COGNITO_AUTHORITY: `https://cognito-idp.${process.env.COGNITO_REGION || process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
});
