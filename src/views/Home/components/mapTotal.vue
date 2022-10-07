<template>
  <div class="map-total" id="mapTotal">
    <div class="area-gen">
      <div class="item">
        <img src="../../../assets/images/icon_map_gen_1.svg">
        <span>茶叶总产量</span>
        <span><i class="ubm">2.3</i>万吨</span>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="../../../assets/images/icon_map_gen_2.svg">
        <span>茶叶总交易量</span>
        <span><i class="ubm">11.7</i>亿元</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapTotal'
}
</script>

<style lang="scss" scoped>
.map-total {
  position: absolute;
  z-index: 9;
  top: 110px;
  right: 630px;
  width: 272px;

  // background: rgba(#002208, .3);

  .area-gen {
    position: absolute;
    top: 10px;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    border: 1px solid rgba(#83C38E, .7);
    border-radius: 10px;
    background: rgba(#2A5A3B, .7);
    padding: 15px 0;

    .line {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 40px;
      border-right: 1px solid rgba(#fff, .2);
    }

    .item {
      text-align: center;

      img,
      span {
        margin: 0 auto;
        display: block;
      }

      span {
        width: 180px;
        color: #fff;
        font-size: 14px;

        i {
          font-size: 20px;
        }
      }

      span:first-of-type {
        margin: 5px 0;
      }
    }
  }
}
</style>
