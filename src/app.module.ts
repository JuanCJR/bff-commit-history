import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { enviroments } from './enviroments';
import config from './config';

import { AppController } from './app.controller';
import { CommitsController } from './controllers/commits.controller';
import { ProfilesController } from './controllers/profiles.controller';
import { RepositoriesController } from './controllers/repositories.controller';

import { AppService } from './app.service';
import { ProfilesService } from './services/profiles.service';
import { RepositoriesService } from './services/repositories.service';
import { CommitsService } from './services/commits.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV || '.env'],
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        APP_PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [
    AppController,
    CommitsController,
    RepositoriesController,
    ProfilesController,
  ],
  providers: [AppService, ProfilesService, RepositoriesService, CommitsService],
})
export class AppModule {}
