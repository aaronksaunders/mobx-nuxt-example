# Mobx NuxtJS Example

My  Nuxt.js project showing integration of Mobx.
A simple two tabbed application which renders a filtered list of products, "socks" and "shoes". When clicked they are added to the cart.

The cart is accessed by clicking on the cart button and it lists the items in the cart and the total cost. Items are deleted from the cart by clicking on them

![mobx-nuxt-example/assets/readme.image.png](https://github.com/aaronksaunders/mobx-nuxt-example/blob/master/assets/readme.image.png)

## Added Mobx

>MobX is a battle tested, simple and scalable state management library transparently applying functional reactive programming (TFRP). The Mobx design principle is very simple:

>Anything that can be derived from the application state, should be derived. Automatically.

>https://github.com/mobxjs/mobx

```console
yarn add mobx-vue mobx
```

Added the `store.js` file to a new folder created called `services`, will need to import the store in the `index.vue` file

```javascript
  import Vue from 'vue'
  import { Store } from '../services/store'
  import { Observer, observer } from 'mobx-vue'

  const store = new Store()
  Vue.prototype.$store = store
```  

## Added Support for Decorators

### Install the appropriate plugins

```console
yarn add -D  @babel/plugin-proposal-class-properties
yarn add -D babel-plugin-transform-decorators-legacy
```

### Update the `nuxt.config.js` file
```javascript
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true
          }
        ],
        [
          '@babel/plugin-proposal-class-properties',
          {
            loose: true
          }
        ]
      ]
    },
```
## Using Vuetify

>Vuetify is developed exactly according to Material Design spec. Every component is hand crafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.

### Configured the plugin to support Vuetify in the file `plugins/vuetify.js`
```javascript
// plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: "#26A69A",
    secondary: "#26A69A",
    accent: "#00796B",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#004D40"
  }
})
```

#### Setup my `default.vue` in the layouts folder

```html
<template>
  <v-app>
    <nuxt />
  </v-app>
</template>
```


https://vuetifyjs.com/en/

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
