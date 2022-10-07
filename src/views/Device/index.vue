<template>
  <div class="page device" id="Device">
    <mainHeader />
    <sideBar title="直播监控" :menu="menu" />
    <div class="contains-layout">
      <div class="search-form">
        <div class="item">
          <label>设备名称</label>
          <input type="text" placeholder="请输入">
        </div>
        <div class="item">
          <label>所属区域</label>
          <input type="text" placeholder="请输入">
        </div>
        <div class="item">
          <label>设备编号</label>
          <input type="text" placeholder="请输入">
        </div>
        <div class="item">
          <button>查询</button>
        </div>
      </div>
      <div class="content">
        <h3>监控列表</h3>
        <div class="buttons">
          <div class="ex"><img src="../../assets/images/icon_device_ex.svg">导出</div>
          <div class="no">批量禁用</div>
          <div class="add">添加设备</div>
        </div>
        <ul>
          <li class="tt">
            <span></span>
            <span>序号</span>
            <span>设备名称</span>
            <span>设备SN</span>
            <span>所属区域</span>
            <span>状态</span>
            <span>操作</span>
          </li>
          <li v-for="item, index in lisData" :key="index" :style="{background: lis.includes(index) ? '#39704A' : 'none'}">
            <span><input type="checkbox" v-model="lis" id="index" :value="index"></span>
            <span>{{item.no}}</span>
            <span>{{item.name}}</span>
            <span>{{item.sn}}</span>
            <span>{{item.area}}</span>
            <span><img src="../../assets/images/icon_device_switch.svg"></span>
            <span>查看 | 编辑</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from '@/components/mainHeader'
import sideBar from '@/components/sideBar'
export default {
  name: 'Device',
  data () {
    return {
      menu: ['设备列表'],
      lis: [],
      lisData: [
        {
          no: 1,
          name: '摄像监测设备',
          sn: 'YRJ0034',
          area: '西乡县-0382'
        },
        {
          no: 2,
          name: '摄像监测设备',
          sn: 'YRJ0034',
          area: '西乡县-0382'
        },
        {
          no: 3,
          name: '摄像监测设备',
          sn: 'YRJ0034',
          area: '西乡县-0382'
        },
        {
          no: 4,
          name: '摄像监测设备',
          sn: 'YRJ0034',
          area: '西乡县-0382'
        },
        {
          no: 5,
          name: '摄像监测设备',
          sn: 'YRJ0034',
          area: '西乡县-0382'
        },
        {
          no: 6,
          name: '摄像监测设备',
          sn: 'YRJ0034',
          area: '西乡县-0382'
        }
      ]
    }
  },
  components: {
    mainHeader,
    sideBar
  }
}
</script>

<style lang="scss">
.device {
  background-image: url("../../assets/images/main_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .contains-layout {
    position: absolute;
    top: 120px;
    right: 20px;
    left: 260px;
    bottom: 20px;
    .search-form {
      position: relative;
      background: rgba(#2A5A3B, .7);
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      padding: 30px;
      .item {
        label,input {
          display: inline-block;
          font-size: 16px;
        }
        label {
          color: #fff;
          margin-right: 15px;
        }
        input {
          margin-right: 60px;
          height: 38px;
          width: 280px;
          border: 1px solid rgba(131, 195, 142, 0.7);
          border-radius: 2px;
          background: rgba(#000, .05);
          color: #fff;
          outline: none;
        }
        button {
          width: 100px;
          height: 40px;
          background: #4C9973;
          color: #fff;
          border: 0;
          border-radius: 6px;
        }
      }
    }
    .content {
      position: absolute;
      top: 125px;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(#2A5A3B, .7);
      h3 {
        font-size: 18px;
        font-family: txb;
        color: #fff;
        padding: 25px;
      }
      .buttons {
        position: absolute;
        right: 20px;
        top: 20px;
        div {
          display: inline-block;
          vertical-align: middle;
          margin: 0 10px;
          color: #fff;
          font-size: 14px;
        }
        .ex, .no {
          width: 84px;
          height: 36px;
          line-height: 36px;
          border: 1px solid #83C38E;
          text-align: center;
          img {
            position: relative;
            top:2px;
            margin-right: 5px;
          }
        }
        .add {
          width: 86px;
          height: 38px;
          line-height: 38px;
          background: #83C38E;
          text-align: center;
        }
      }
      ul {
        margin: 30px;
        li.tt {
          border-bottom: 1px solid #E5F9E2;
          background: #39704A;
          span {
            color: #fff!important;
            font-weight: bold;
          }
        }
        li {
          border-bottom: 1px solid rgba(#E5F9E2, .3);
          padding: 25px 15px;
          span {
            display: inline-block;
            font-size: 16px;
            color: #fff;
            text-align: center;
          }
          span:nth-of-type(1) {
            width: 60px;
          }
          span:nth-of-type(2) {
            width: 60px;
          }
          span:nth-of-type(3) {
            width: 300px;
          }
          span:nth-of-type(4) {
            width: 300px;
          }
          span:nth-of-type(5) {
            width: 300px;
          }
          span:nth-of-type(6) {
            width: 200px;
          }
          span:nth-of-type(7) {
            width: 200px;
            color: #63E6B7;
          }
        }
        li:hover {
          background: rgba(#194228, .7)!important;
        }
      }
    }
  }
}
</style>
