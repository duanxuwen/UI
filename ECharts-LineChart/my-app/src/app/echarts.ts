export const GRAPH1 = {
    xAxis: {
        type: 'category',
        name: 'TIME',
        nameLocation: 'middle',
        nameTextStyle: {
            color: "#4B5E70",
            fontSize: 10,
            padding: [2, 0, 0, 335],
            fontFamily: '微软雅黑',
            fontWeight: 'bold',
            width: 50,
        },
        //boundaryGap:false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#4B5E70',
                fontSize: 8,
                fontFamily: '微软雅黑',
                fontWeight: 'bold',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#EBEAEB',
                width: 5,
            }
        },
        axisTick: {
            lineStyle: {
                width: 2,
            },
            inside: true,
        }
    },
    yAxis: {
        type: 'value',
        name: 'DISTANCE(METERS)',
        nameLocation: 'middle',
        nameGap: 20,
        nameTextStyle: {
            color: "#4B5E70",
            fontSize: 10,
            padding: [0, 45, 0, 0],
            fontFamily: '微软雅黑',
            fontWeight: 'bold',
        },
        nameRotate: 270,
        //data: ['0.0','0.1', '0.2', '0.3', '0.4','0.5','0.6','0.7','0.8'],
        splitLine: {
            show: false
        },
        min:0.0,
        max:0.4,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#4B5E70',
                fontSize: 8,
                fontFamily: '微软雅黑',
                fontWeight: 'bold'
            },
            formatter: function (value: number) { 
                var texts = [];
                if (value == 0.0){
                    texts.push('');
                }
                else {
                    texts.push(value);
                }
                return texts;
            }
        },
        axisLine: {
            lineStyle: {
                color: '#EBEAEB',
                width: 5,
            }
        },
        axisTick: {
            lineStyle: {
                width: 2,
            },
            inside: true,
            length: 6,
        }
    },
    series: [
        {
            symbol: 'circle',
            symbolSize: 3,
            data: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color:'',
                    lineStyle: {
                        color: '',
                        width: 1,
                    }
                }
            },
        }
    ]
};