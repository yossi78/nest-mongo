import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
