<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">Mobx Nuxt Vue Sample</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="displayCart = !displayCart" :ripple=true color="secondary">
        {{displayCart ? 'Back' : 'Cart (' + this.$store.cartItems.length +')'}}
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <template v-if="displayCart">
          <Cart />
        </template>
        <template v-else>
          <v-tabs slot="extension" v-model="tabs" fixed-tabs color="transparent">
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#mobile-tabs-5-1" class="primary--text">
              Shoes
            </v-tab>

            <v-tab href="#mobile-tabs-5-2" class="primary--text">
              Socks
            </v-tab>

          </v-tabs>

          <v-tabs-items v-model="tabs" class="white elevation-1">
            <v-tab-item v-for="i in 2" :id="'mobile-tabs-5-' + i" :key="i">
              <v-card>
                <ProductCatalogList :product-type=i></ProductCatalogList>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </template>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ProductCatalogList from '../components/ProductCatalogList.vue'
  import Cart from '../components/Cart.vue'
  import { Store } from '../services/store'
  import { Observer, observer } from 'mobx-vue'

  const store = new Store()
  Vue.prototype.$store = store

  export default observer({
    name: 'Home',
    components: {
      ProductCatalogList,
      Cart
    },
    data() {
      return {
        tabs: "",
        displayCart: false
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
