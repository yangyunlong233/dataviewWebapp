<template>
  <div class="map-area" id="mapArea">
    <div class="area-total">
      <img class="icon" src="../../../assets/images/icon_map_tt.svg">
      <h2><i class="txb">西乡县</i></h2>
      <div class="cont">
        <div class="item">
          <h3>茶区面积（万亩）</h3>
          <div class="data">
            <span class="line" style="width: 100%"><i></i></span>
            <span class="d1"><i class="ubm">92923</i></span>
          </div>
        </div>
        <div class="item">
          <h3>经济总量（万元）</h3>
          <div class="data">
            <span class="line" style="width: 60%"><i></i></span>
            <span class="d1"><i class="ubm">92923</i></span>
          </div>
        </div>
        <div class="item">
          <h3>溯源码数（个）</h3>
          <div class="data">
            <span class="line" style="width: 50%"><i></i></span>
            <span class="d1"><i class="ubm">92923</i></span>
          </div>
        </div>
        <div class="item">
          <h3>茶企数量（家）</h3>
          <div class="data">
            <span class="line" style="width: 40%"><i></i></span>
            <span class="d1"><i class="ubm">92923</i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapArea'
}
</script>

<style lang="scss" scoped>
.map-area {
  position: absolute;
  z-index: 9;
  top: 110px;
  left: 630px;
  width: 495px;

  // background: rgba(#002208, .3);
  .area-total {
    .icon {
      position: absolute;
      z-index: 99;
      top: 10px;
      left: 0;
    }

    h2 {
      position: absolute;
      top: 10px;
      left: 50px;
      font-size: 20px;
      color: #fff;
    }

    .cont {
      position: absolute;
      z-index: 9;
      top: 40px;
      left: 20px;
      border-left: 1px solid rgba(#fff, .3);
      padding-left: 30px;

      .item {
        margin: 20px 0;

        h3,
        span {
          font-size: 12px;
          color: #fff;
        }

        h3 {
          font-weight: bold;
          margin: 0 0 10px;
        }

        .data {
          white-space: nowrap;
        }

        span {
          display: inline-block;
        }

        .line {
          width: 200px;
          margin-right: 10px;

          i {
            display: inline-block;
            width: 100%;
            height: 10px;
            background: linear-gradient(90deg, #FA9600 0%, #00EE98 102.49%);
            border-radius: 10px;
          }
        }
      }
    }

    .cont:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -3px;
      width: 5px;
      height: 5px;
      background: rgba(#fff, .6);
      border-radius: 5px;
    }
  }
}
</style>
