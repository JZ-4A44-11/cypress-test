import { resolve } from 'path'
import { startDevServer } from '@cypress/vite-dev-server'

const config: Cypress.PluginConfig = (on, config) => {
  on('dev-server:start', async (options) => {
    return await startDevServer({
      options,
      viteConfig: {
        configFile: resolve(__dirname, '..', '..', 'vite.config.ts'),
      },
    })
  })
  return config
}
export default config
