import { z } from "zod";

const envSchema = z.object({
  EXPO_PUBLIC_BASE_URL: z.string(),
  EXPO_PUBLIC_SENTRY_URL: z.string(),
});

const env = envSchema.parse({
  EXPO_PUBLIC_BASE_URL: process.env.EXPO_PUBLIC_BASE_URL,
  EXPO_PUBLIC_SENTRY_URL: process.env.EXPO_PUBLIC_SENTRY_URL,
});

export default env;
