import { Injectable, NestMiddleware,Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}
    private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);

    console.log(`MONGO_DB = ${this.configService.get('MONGO_DB')}`);
    console.log(`MONGO_PORT = ${this.configService.get('MONGO_PORT')}`);

    this.logger.log(`MONGO_DB = ${this.configService.get('MONGO_USER')}`);
    this.logger.log(`MONGO_PORT = ${this.configService.get('MONGO_PASSWORD')}`);
    next();

  }
}
