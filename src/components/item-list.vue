<template>
  <div class="list-container">
    <h1 class="title">Shopping List</h1>
    <ul class="ul">
      <li v-for="item in items" :key="item.itemId">
        <itemPreview :item="item" :itemIdx="items.indexOf(item) + 1" />
      </li>
    </ul>
    <div class="total">
      <div></div>
      <div>total:</div>
      <div>{{ total }}</div>
    </div>
  </div>
</template>
<script>
import itemPreview from './item-preview.vue'
export default {
  props: ['items'],
  components: {
    itemPreview,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    total() {
      return this.priceArr.reduce((sum, num) => sum + +num)
    },
    priceArr() {
      //   var arr = []
      return this.items.map((item) => item.itemPrice)
    },
  },
}
</script>
