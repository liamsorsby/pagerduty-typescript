import { logger } from './lib/logger';
import { Server } from './server';
import { Config } from './config/Config';

const server = new Server(Config, logger);
server.start();
