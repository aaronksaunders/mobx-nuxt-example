import { observable, computed, action } from "mobx";

export class Store {
  @observable cartItems = [];
  @observable
  products = new Map([
    [
      "10-SOCKS",
      {
        name: "blue socks",
        price: 1.99
      }
    ],
    [
      "20-SOCKS",
      {
        name: "red tube socks",
        price: 2.99
      }
    ],
    [
      "30-SOCKS",
      {
        name: "ankle socks",
        price: 1.0
      }
    ],
    [
      "10-SHOES",
      {
        name: "blue suede",
        price: 110.99
      }
    ],
    [
      "20-SHOES",
      {
        name: "red converse all stars",
        price: 72.99
      }
    ],
    [
      "30-SHOES",
      {
        name: "zip up ankle boot",
        price: 89.99
      }
    ]
  ]);
  @observable filter = "SHOES";

  @action
  showProduct(_value) {
    this.filter = _value;
  }

  @action
  addItemToCart(_product) {
    this.cartItems.push({
      id: _product.id,
      ...this.products.get(_product.id)
    });
  }
  @action
  removeItemFromCart(index) {
    let r = this.cartItems.splice(index, 1);
    return r;
  }

  @action
  clearCart(_product) {
    this.cartItems = [];
  }

  @computed
  get cartSize() {
    return this.cartItems.length;
  }

  @computed
  get currentFilter() {
    return this.filter;
  }

  @computed
  get cartTotal() {
    return this.cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0.0);
  }

  @computed
  get filteredProducts() {
    console.log("filteredProducts: " + this.filter);
    return this._filterByValue(this.products, this.filter);
  }

  
  _filterByValue(products, filter) {
    let result = [];
    products.forEach((v, k) => {
      if (k.indexOf(filter) !== -1 || filter === "SHOW_ALL") {
        result.push({ ...v, id: k });
      }
    });
    return result;
  }
}
