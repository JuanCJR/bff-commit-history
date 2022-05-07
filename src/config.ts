import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  app: {
    port: parseInt(process.env.APP_PORT),
    gitApiUrl: process.env.GIT_API_URL,
  },
}));
