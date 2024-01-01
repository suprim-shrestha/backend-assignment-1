import dotenv from "dotenv";

dotenv.config();

const config = {
  serverPort: process.env.SERVER_PORT || 3000,
  saltRounds:
    (process.env.SALT_ROUNDS && Number(process.env.SALT_ROUNDS)) || 10,
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY,
  },
};

export default config;
