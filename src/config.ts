import { config } from "dotenv";

const pathToEnv = __dirname + "/../.env";

config({ path: pathToEnv });

const serverConfig = {
  serverPort: process.env.SERVER_PORT || 3000,
  saltRounds:
    (process.env.SALT_ROUNDS && Number(process.env.SALT_ROUNDS)) || 10,
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY,
  },

  database: {
    charset: "utf8",
    client: process.env.DB_CLIENT,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    timezone: "UTC",
    user: process.env.DB_USER,
  },
};

export default serverConfig;
