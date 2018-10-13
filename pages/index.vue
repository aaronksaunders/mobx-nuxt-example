<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        Cart
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-tabs slot="extension" v-model="tabs" fixed-tabs color="transparent">
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#mobile-tabs-5-1" class="primary--text">
            <v-icon>phone</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-2" class="primary--text">
            <v-icon>favorite</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-3" class="primary--text">
            <v-icon>account_box</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs" class="white elevation-1">
          <v-tab-item v-for="i in 3" :id="'mobile-tabs-5-' + i" :key="i">
            <v-card>
              <v-card-text>{{i}}</v-card-text>
              <ProductCatalogList :product-type=i></ProductCatalogList>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ProductCatalogList from '../components/ProductCatalogList.vue'
  import { Store } from '../services/store'
  import { Observer, observer } from 'mobx-vue'

  const store = new Store()
  Vue.prototype.$store = store

  export default {
    name: 'Home',
    components: {
      ProductCatalogList
    },
    data() {
      return {
        tabs: {},
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
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
