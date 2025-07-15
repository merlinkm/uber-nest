import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://merlin2996:jcP0TlPspnJ2hKFR@chat.g2w4wzd.mongodb.net/chat?retryWrites=true&w=majority'), RiderCoordinatesModule],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
