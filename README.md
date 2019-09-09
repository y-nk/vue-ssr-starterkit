# vue-ssr-starterkit
Vue.js project with SSR capability and backend agnostic service capabilities

### What

A quick prototype to have Vue.js boilerplate with SSR capabilities. It provides everything you need to kickstart a project, a bit similar to @vue/cli create, although it's not using it.

### Why

- I didn't want to use Nuxt because it's already too advanced. There's a page system, etc... It's nice for a lot of us but I wanted to provide something more barebone.
- I was looking to gain knowledge on Vue.js & SSR combination, and especially how Laravel integration was done, hoping to provide a more generic approach to it (my team has a java backend so...)

Some explanation on the choices mades:

- I embedded vue-router and vuex, and code splitting which i believe is the goal we all crave for when looking for this kind of architecture
- I was eagerly trying to use @vue/cli because i wanted a neat integration with Vue ecosystem. Sadly, vue-service does not support multiple configs as required for client manifest and server bundle build
- I didn't want to fall for the current trend of using multiple webpack instances in parallel, even though someone could argue webpack with multi-config is quite similar :)
- I went for a "renderer.js" design, which you can call from command line, making it quite easy to integrate with any architecture/strategy. You can use this file in a node webserver (for a php-fpm-ish stragegy), call the .js file from php's v8js (like laravel mix) or even call the node binary directly in a child thread and serve the stdout.


### How

#### Client side

- To develop, run `yarn serve` (similar api from vue-cli-service)
- To build run `yarn build` (similar api from vue-cli-service)


#### Server side

I've provided multiple repos and strategies for a lot of situation and technologies.

- vue-ssr-php-v8js-starterkit
- vue-ssr-node-binary-starterkit
- vue-ssr-internal-server-starterkit
