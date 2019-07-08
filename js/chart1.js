var myChart = echarts.init(document.getElementById('chart'));
myChart.setOption({
    title:{
        text: '销量Top10的书籍'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: []
    }]
});
function displayChart(){
    var myChart = echarts.init(document.getElementById('chart'));
    var option = {
        xAxis:{
            data:['追风筝的人', '彷徨之刃', '放学后', '湖畔']
        },
        series:[{
            name:'销量',
            data:[100, 80, 30, 20]
        }]
    };
    myChart.setOption(option);
}
