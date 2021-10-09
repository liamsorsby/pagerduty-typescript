import express, { Express } from 'express';
import { Logger } from 'winston';
import { default as timeout } from 'connect-timeout';
import { IConfig } from './config/Config';
import { Server as HttpServer } from 'http';
import { webhooksRouter } from './router/webhooks';

export class Server {
  private config: IConfig;
  private logger: Logger;

  constructor(config: IConfig, logger: Logger) {
    this.config = config;
    this.logger = logger;
  }

  start(): void {
    const app = express();
    this.setupServerSettings(app);
    this.setupRoutes(app);

    const server = app.listen(this.config.port);
    this.setupErrorHandlers(server);
    this.setupEventListeners(server);
  }

  private setupServerSettings(app: Express): void {
    app.use(timeout(this.config.timeout));
  }

  private setupRoutes(app: Express): void {
    app.use('/webhooks', webhooksRouter);
  }

  private setupEventListeners(app: HttpServer): void {
    app.on('listening', () =>
      this.logger.info(`Server listening on 0.0.0.0:${this.config.port}`)
    );
    app.on('error', this.logger.error);
    app.on('connection', (e) => this.logger.debug(e));
  }

  private setupErrorHandlers(server: HttpServer): void {
    process.on('SIGTERM', () => {
      this.logger.debug('SIGTERM signal received: closing HTTP server');
      server.close(() => {
        this.logger.info('HTTP server closed');
      });
    });
  }
}
