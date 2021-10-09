export interface IConfig {
  port: number;
  timeout: string;
}

export const Config: IConfig = {
  port: Number(process.env.PORT || 3000),
  timeout: process.env.timeout || '3s'
};
