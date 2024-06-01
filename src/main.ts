import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createLightship } from 'lightship';
import * as express from 'express';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import helmet from 'helmet';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';

const lightship = createLightship({
  detectKubernetes: false,
  port: parseInt(process.env.HEALTH_CHECK_PORT || '3001'),
});

const app = express();

async function bootstrap() {
  const nestApp = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(app),
    {
      cors: true,
      logger: WinstonModule.createLogger({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike(),
            ),
          }),
        ],
      }),
    },
  );

  nestApp.enableShutdownHooks();
  nestApp.use(helmet());
  nestApp.use(compression());
  nestApp.setGlobalPrefix('account');

  nestApp.use(bodyParser.json({ limit: '550mb' }));
  nestApp.use(bodyParser.urlencoded({ limit: '550mb', extended: true }));

  await nestApp.init();
}
bootstrap();

lightship.queueBlockingTask(bootstrap());

const server = app.listen(parseInt(process.env.SERVER_PORT || '3000'), () => {
  lightship.signalReady();
});

lightship.registerShutdownHandler(() => {
  server.close();
});
