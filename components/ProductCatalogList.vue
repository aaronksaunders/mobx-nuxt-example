<template>
  <v-list one-line>
    {{ productType }}
    <template v-for="(product, index) in $store.filteredProducts">
      <v-list-tile :key="product.id" avatar ripple @click="toggle(index)">
        <v-list-tile-content>
          <v-list-tile-title>{{product.id}} {{product.name}} {{product.price}}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider v-if="index + 1 < $store.filteredProducts.length" :key="index"></v-divider>
    </template>
  </v-list>
</template>
<script>
  // based on value set the proper filter
  export default {
    props: ['productType'],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App '
      }
    }
  }
</script>
