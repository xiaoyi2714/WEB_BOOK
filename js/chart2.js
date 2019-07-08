// var myChart = echarts.init(document.getElementById('chart2'));
// myChart.setOption({
//     title:{
//         text: '年龄与购买量'
//     },
//     xAxis: {
//     },
//     yAxis: {},
// });
function displayChart2(){
    document.getElementById("chart2").style.display="block";
    var myChart = echarts.init(document.getElementById('chart2'));
    var option = {
        xAxis:{
            type:'category',
            data:['10岁以下', '10-20', '20-30', '30-40','40岁以上']
        },
        yAxis:{
            type:'value'
        },
        series:[{
            type: 'line',
            name:'购买量',
            data:[3.5, 6, 13, 20, 15]
        }]
    };
    myChart.setOption(option);
}
function closeChart(){
    var myChart = echarts.init(document.getElementById('chart2'));
    myChart.clear();
    document.getElementById("chart2").style.display="none";
}

