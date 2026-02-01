import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // This adds the 'document' object!
    globals: true,       // Allows you to use 'describe' and 'it' without importing them
    setupFiles: './vitest.setup.ts', // Optional: for custom matchers
  },
});
