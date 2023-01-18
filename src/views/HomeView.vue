<template>
  <item-list :items="itemsList" />
  <add-item />
</template>
<script>
import itemList from '../components/item-list.vue'
import addItem from '../components/add-item.vue'
export default {
  components: {
    itemList,
    addItem,
  },
  data: () => {
    return {}
  },
  methods: {},
  computed: {
    itemsList() {
      return this.$store.getters.items
    },
  },
}
</script>
<style></style>
