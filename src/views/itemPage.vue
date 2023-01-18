<template>
  <div class="item-page-container">
    <router-link class="back" to="/">🡐</router-link>

    <h1 class="title" v-if="item">{{ item.itemName }}</h1>
    <div v-if="item">{{ item.description }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      item: null,
      items: null,
      itemId: null,
    }
  },
  async created() {
    this.itemId = this.$route.params.itemId

    this.items = await this.$store.getters.items
  },
  methods: {
    calc() {
      var items = JSON.parse(JSON.stringify(this.items))
      var item = items.find((itemm) => itemm.itemId == this.itemId)
      this.item = item
    },
  },
  watch: {
    items() {
      this.calc()
    },
  },
  computed: {},
}
</script>
