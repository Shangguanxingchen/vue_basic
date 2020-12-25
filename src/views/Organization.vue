<template>
  <div class="org">
    <div ref="myEchart" style="width:500px;height:500px;margin: 100px auto"></div>
  </div>
</template>

<script>
import echarts from "echarts"
export default {
  name: 'Organization',
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart =  echarts.init(this.$refs.myEchart);
      this.chart.setOption({
        visualMap:{
            min:0,
            max:100,
            inRange:{
                colorLightness:[0,1]
            }
        },
        series:{
            type:'pie',
            data:[
                {name:'html',value:30},
                {name:'css',value:20},
                {name:'js',value:40},
                {name:'canvas',value:41},
            ],
            roseType:'radius',
            // roseType:'area',
            itemStyle:{
                color:'#00acec'
            }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>