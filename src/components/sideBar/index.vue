<template>
  <div class="cmpt-side-bar" id="cmptSideBar">
    <h2 class="txb">{{title}}</h2>
    <ul>
      <li v-for="item, index in menu" :key="index" :class="index == 0 ? 'current' : ''">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  props: ['title', 'menu']
}
</script>

<style lang="scss" scoped>
.cmpt-side-bar {
  position: absolute;
  top: 70px;
  bottom: 1px;
  width: 240px;
  background: rgba(42, 90, 59, 0.7);
  border: 1px solid rgba(131, 195, 142, 0.7);
  .txb {
    width: auto;
    text-align: center;
    font-size: 22px;
    color: #fff;
    padding: 30px 0 20px;
    margin: 0 20px;
    border-bottom: 1px solid #fff;
  }
  ul {
    width: auto;
    padding: 20px 0;
    li {
      width: auto;
      padding: 15px 40px;
      margin: 10px 0;
      font-size: 14px;
      color: #fff;
    }
    li.current {
      border-left: 5px solid #83c38e;
      background: #1c4329;
    }
    li:hover {
      background: #1c4329;
    }
  }
}
</style>
