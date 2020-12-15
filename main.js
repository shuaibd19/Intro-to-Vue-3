const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "Second hand used socks for the kinky people out there",
      image: "./assets/images/socks_green.jpg",
      url: "https://codepen.io/VueMastery/project/editor/AqemLM",
      inStock: true,
      inventory: 5,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% pure unadulterated badass"],
      variants: [
        { id: 1234, colour: "green", image: "./assets/images/socks_green.jpg" },
        { id: 1235, colour: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      cart: 0,
    };
  },
  methods: {
    onAddToCart() {
      this.cart += 1;
    },
    onEmptyCart() {
      this.cart = 0;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
