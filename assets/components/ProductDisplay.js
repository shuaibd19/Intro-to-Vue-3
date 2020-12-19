app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    // html
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image" :class="{outOfStockImg: !inStock}">
                <img :src="image" alt="socks" />
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>

                <div
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{backgroundColor: variant.colour}">
                </div>

                <p>Shipping: {{ shipping }}</p>

                <button
                class="button"
                :class="{disabledButton: !inStock}"
                :disabled="!inStock"
                @click="onAddToCart">
                Add to Cart
                </button>

                <button class="button" @click="onEmptyCart">Empty Cart</button>
            </div>
        </div>
  </div>`,

  data() {
    return {
      product: "Socks",
      description: "Second hand used socks for the kinky people out there",
      url: "https://codepen.io/VueMastery/project/editor/AqemLM",
      inventory: 0,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% pure unadulterated badass"],
      variants: [
        {
          id: 1234,
          colour: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 5,
        },
        {
          id: 1235,
          colour: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      cart: 0,
      styles: {
        color: "red",
        fontsize: "14px",
      },
      brand: "Vue Mastery",
      selectedVariant: 0,
    };
  },
  methods: {
    onAddToCart() {
      //adding logic to add increment cart and reduce stock
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    onEmptyCart() {
      this.$emit("empty-cart");
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.product + " by " + this.brand;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
