import { sync } from 'vuex-router-sync'

import Router from '@/router'
import Store from '@/store'

import main from '@/app'

export default context => new Promise((resolve, reject) => {
  const router = Router()
  const store = Store()

  sync(store, router)
  router.push(context.url)

  router.onReady(() => {
    if (!router.getMatchedComponents().length) {
      reject({ code: 404, message: 'Not found' })
    }

    context.state = store.state
    resolve(main(router, store))
  },
  err => reject({ code: 500, message: 'Renderer error', err }))
})
