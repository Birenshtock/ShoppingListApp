<template>
  <div @mouseover="isHover = true" @mouseleave="isHover = false" @click="moveToItemPage(item.itemId)" class="preview-container">
    <div class="item-preview">
      <div class="itemIdx">
        {{ itemIdx }}
        <hr class="devider" />
      </div>

      <div>{{ item.itemName }}</div>
      <div>{{ item.itemPrice }}</div>
      <!-- <div>{{ item.isApproved }}</div> -->

      <div :class="[isHover ? 'display-btns' : 'dont-display-btns']">
        <button class="itemBtn" @click.stop="deleteItem(item.itemId)">🗑</button>
        <button class="itemBtn" @click.stop="approveItem(item.itemId)">🖊</button>
      </div>
    </div>
  </div>

  <hr class="approved-line" :class="[item.isApproved ? 'dont-display-line' : 'display-line']" />
  <hr />
</template>
<script>
export default {
  props: ['item', 'itemIdx'],
  components: {},
  data: () => {
    return {
      isHover: false,
    }
  },
  methods: {
    moveToItemPage(itemId) {
      this.$router.push(`/item/${itemId}`)
    },
    deleteItem(itemId) {
      this.$store.dispatch({ type: 'deleteItem', itemId })
    },
    approveItem(itemId) {
      this.$store.dispatch({ type: 'approveItem', itemId })
    },
  },
  computed: {},
}
</script>
<style>
.display-line {
  display: none;
}
.dont-display-line {
  display: block;
}

.display-btns {
  opacity: 1;
}
.dont-display-btns {
  opacity: 0;
}
</style>
