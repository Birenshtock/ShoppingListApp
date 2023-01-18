<template>
  <div class="add-item-container">
    <div class="add-btn">
      <div @click="showForm = !showForm" class="plus">+</div>
      <div @click="showForm = !showForm">Add Product</div>
    </div>

    <form @submit.prevent="addItem" :class="[showForm ? 'display-form' : 'dont-display-form']">
      <button class="exit-form-btn" type="button" @click="showForm = !showForm">x</button>
      <div class="top-inputs">
        <div class="user-input-container">
          <label>Name</label>
          <input v-model="newItem.itemName" type="text" />
        </div>

        <div class="user-input-container">
          <label>price</label>
          <input v-model="newItem.itemPrice" type="text" />
        </div>
      </div>

      <div class="text-container">
        <textarea placeholder="Description" v-model="newItem.description" cols="30" rows="10"></textarea>
      </div>

      <button type="submit" class="submit-btn">⮚</button>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {
      newItem: {
        itemName: null,
        itemPrice: null,
        description: null,
      },
      showForm: false,
    }
  },
  methods: {
    async addItem() {
      const newItem = {
        ...this.newItem,
        itemId: Date.now().toString(36),
        isApproved: false,
      }
      this.$store.dispatch({ type: 'addItem', newItem: newItem })

      this.newItem = {
        itemName: null,
        itemPrice: null,
        description: null,
      }
      this.showForm = false
    },
  },
  computed: {},
}
</script>

<style>
.display-form {
  transform: translateY(-60vh);
  opacity: 1;
  z-index: 100;
  width: 100%;
  height: auto;
}
.dont-display-form {
  transform: translateY(60vh);
  opacity: 0;
  width: 0px;
  height: 0px;
}
</style>
