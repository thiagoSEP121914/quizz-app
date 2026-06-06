import { InternalServerErrorException, Logger } from "@nestjs/common";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().default(8080),
  MONGO_URL: z.string(),
  SALT_ROUNDS: z.coerce.number(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  Logger.error(`env error: ${_env.error.format}`);
  throw new InternalServerErrorException(
    "Theres is a error on enviroment variables",
  );
}

export const env = _env.data;
