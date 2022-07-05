import { createApp } from 'terezzujs'

import { notFound } from './pages/notFound'
import { main } from './pages/main'
import { home } from './pages/home'

const routes = [
  {
    hash: '#/',
    regex: /^\#\/$/,
    isInitial: true,
    module: home
  },
  {
    hash: '#/404',
    regex: /^\#\/404$/,
    isDefault: true,
    module: notFound
  }
]

const app = createApp()

app.setMain({
  main: { main }
})

app.setRouter({
  router: { routes }
})

app.init()
