<template>
  <v-list one-line>
      <!-- {{ productType }} -->
    <template v-for="(product, index) in productsForDisplay" track-by="id">
      <v-list-tile
        :key="product.id"
        avatar
        ripple
        @click="removeFromCart(index)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{product.id}} {{product.name}} {{product.price}}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider
        v-if="index + 1 < $store.filteredProducts.length"
        :key="index"
      ></v-divider>
    </template>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Total: {{formatter.format($store.cartTotal)}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

  </v-list>
</template>
<script>
// based on value set the proper filter
import { observer } from "mobx-vue";

export default observer({
  props: ["productType"],
  computed: {
    productsForDisplay: function() {
      return this.$store.cartItems;
    }
  },
  methods: {
    removeFromCart: function(_item) {
      this.$store.removeItemFromCart(_item);
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      formatter: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      })
    };
  }
});
</script>