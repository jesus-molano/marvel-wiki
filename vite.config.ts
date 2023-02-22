import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
      '@router': '/src/router',
      '@types': '/src/types',
      '@assets': '/src/assets',
      '@apis': '/src/apis',
      '@styles': '/src/styles',
    }
  }
})
