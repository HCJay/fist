var data = {
    labels: ["周一","周二","周三","周四","周五","周六","周日"],
    datasets: [
        {
            label: "游客",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [565, 559, 580, 581, 556, 555, 540],
            spanGaps: false,
        },
        {
            label: "会员",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(230,  0, 18)",
            borderColor: "rgba(230,  0, 18)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(230,  0, 18)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(230,  0, 18)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1653, 1510, 1830, 1811, 1526, 1565, 1440],
            spanGaps: false,
        }

    ]
};
$(function () {
    var ctx = $("#myChart").get(0).getContext("2d");
    var charObject = Chart.Line(ctx,{
        data:data,
        option:"option"
    });
});
