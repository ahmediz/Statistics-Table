// Sales by days
Highcharts.chart("barChart", {
    chart: {
        type: "column"
    },
    title: {
        text: "Sales by days"
    },
    xAxis: {
        type: "category"
    },
    yAxis: {
        title: {
            text: "Sales"
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: "{point.y:.1f}%"
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "Saturday",
                    y: 62.74
                },
                {
                    name: "Sunday",
                    y: 10.57
                },
                {
                    name: "Monday",
                    y: 7.23
                },
                {
                    name: "Tuesday",
                    y: 5.58
                },
                {
                    name: "Wednesday",
                    y: 4.02
                },
                {
                    name: "Thursday",
                    y: 1.92
                },
                {
                    name: "Firday",
                    y: 7.62
                }
            ]
        }
    ]
});

// Brand Share

Highcharts.chart("pieChart", {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
    },
    title: {
        text: "Brand share"
    },
    tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
                enabled: true,
                format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                style: {
                    color:
                        (Highcharts.theme &&
                            Highcharts.theme.contrastTextColor) ||
                        "black"
                }
            }
        }
    },
    series: [
        {
            name: "Brands",
            colorByPoint: true,
            data: [
                {
                    name: "Borden",
                    y: 61.41
                },
                {
                    name: "Organic Valley Beverages",
                    y: 11.84
                },
                {
                    name: "Horizon",
                    y: 10.85
                },
                {
                    name: "Dairyland",
                    y: 4.67
                },
                {
                    name: "Whole Foods Market",
                    y: 4.18
                },
                {
                    name: "Dean Foods",
                    y: 1.64
                },
                {
                    name: "Hood",
                    y: 1.6
                },
                {
                    name: "Amul",
                    y: 1.2
                },
                {
                    name: "Promised Land",
                    y: 2.61
                },
                {
                    name: "Stonyfield Farm",
                    y: 2.61
                }
            ]
        }
    ]
});
