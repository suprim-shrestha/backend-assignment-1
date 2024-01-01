import dotenv from "dotenv";

dotenv.config();

const config = {
  serverPort: process.env.SERVER_PORT || 3000,
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  },
};

export default config;
