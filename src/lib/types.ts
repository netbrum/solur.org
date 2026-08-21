export type Minecraft = {
  hostname: string;
  eula_blocked: boolean;
  version: string;
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  motd: {
    raw: string[];
    clean: string[];
    html: string[];
  };
  ip: string;
  port: number;
};

export type NewsPreview = {
  id: string;
  title: string;
  preview: string;
  published_at: string;
};

export type News = {
  id: string;
  title: string;
  content: string;
  published_at: string;
};
