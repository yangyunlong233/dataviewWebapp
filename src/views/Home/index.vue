<template>
    <div class="page home" id="Home">
      <mainHeader />
      <div class="charts-layout">
        <router-link to="/list"><chartsA /></router-link>
        <router-link to="/list"><chartsB /></router-link>
        <router-link to="/list"><chartsC /></router-link>
        <router-link to="/device"><chartsD /></router-link>
        <router-link to="/list"><chartsE /></router-link>
      </div>
      <mapTotal />
      <mapArea />
      <mapEnterprise />
      <mapInner style="opacity: .7" />
    </div>
</template>

<script>
import mainHeader from '@/components/mainHeader'
import chartsA from './components/chartsA.vue'
import chartsB from './components/chartsB.vue'
import chartsC from './components/chartsC.vue'
import chartsD from './components/chartsD.vue'
import chartsE from './components/chartsE.vue'
import mapArea from './components/mapArea.vue'
import mapTotal from './components/mapTotal.vue'
import mapEnterprise from './components/mapEnterprise.vue'
import mapInner from './components/mapInner.vue'
export default {
  name: 'NotFound',
  components: {
    mainHeader,
    chartsA,
    chartsB,
    chartsC,
    chartsD,
    chartsE,
    mapArea,
    mapTotal,
    mapEnterprise,
    mapInner
  }
}
</script>

<style lang="scss">
.home {
  background-image: url("../../assets/images/main_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
