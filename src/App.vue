<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main-layout">
    <div class="mobile">
      <div class="grey-div"></div>
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style>
.mobile {
  background-color: rgb(243, 243, 243);
  height: 90vh;
  position: relative;
  top: 5vh;
  border-radius: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grey-div {
  width: 50%;
  height: 10%;
  background-color: rgb(217, 222, 226);
  position: absolute;
  transform: translate(0, -75%);
  border-radius: 30px;
}
</style>
