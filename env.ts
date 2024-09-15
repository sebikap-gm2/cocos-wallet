import { z } from 'zod'

const envSchema = z.object({
  EXPO_PUBLIC_BASE_URL: z.string(),
})

const env = envSchema.parse(process.env)

export default env