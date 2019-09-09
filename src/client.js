import { sync } from 'vuex-router-sync'

import Router from '@/router'
import Store from '@/store'

import main from '@/app'

const router = Router()
const store = Store()

sync(store, router)

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

const app = main(router, store)
router.onReady(() => app.$mount('#csr'))
