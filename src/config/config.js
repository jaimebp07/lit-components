import dotenv from "dotenv";

const ENV = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${ENV}` });

export const config = {
  nodeEnv: process.env.NODE_ENV,
  sourceMap: process.env.SOURCE_MAP === "true",
};
