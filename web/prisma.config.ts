import { defineConfig } from 'prisma/config';

export default defineConfig({
  experimental: {
    // Connection string for migrate / db push is read from env
  },
});
