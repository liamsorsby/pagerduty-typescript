import { Server, IServer } from "../server";
import request from "supertest";
import { IConfig } from "../config/Config";
import { logger } from '../lib/logger';

afterAll(async done => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    done();
});

describe('Webhook integration tests', () => {
    let server: Server;
    let appServer: IServer;

    const config: IConfig = {
        port: Math.floor(Math.random() * (4000 - 3000) + 3000), // random port number
        timeout: "1s"
    }

    beforeAll(done => {
        server = new Server(config, logger);
        appServer = server.start(done);
    });

    afterAll(done => {
        appServer.server.close();
        done
    });

    it('responds with json', (done) => {
        request(appServer.app)
        .get('/webhooks/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200)
        .end(done);
    });
});