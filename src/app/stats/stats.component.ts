import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
export const chartOptions = (title, xAxisData, seriesData) => {
    return {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Click the columns to view more.'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'category',
            labels: {
                style: {
                    color: 'black',
                    textDecoration: "none",
                    fontWeight: 'normal'
                }
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            max: 100,
            visible: true,
            gridLineWidth: 0,
            minorGridLineWidth: 0,


        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 1,
                borderRadius: 2,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%',
                    style: {
                        color: 'black',
                        textDecoration: "none",
                        fontWeight: 'normal'
                    }
                }
            },
            column: {
                colorByPoint: true
            }
        },
        colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        }),
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of target<br/>'
        },

        series: [
            {
                name: title,
                data: xAxisData
            }
        ],
        drilldown: {
            series: seriesData,
            activeAxisLabelStyle: {
                textDecoration: 'none',
                color: "black",
                fontWeight: 'normal'
            },
            activeDataLabelStyle: {
                textDecoration: 'none',
                color: "black",
                fontWeight: 'normal'
            }
        }
    }
};
@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss']
})

export class StatsComponent implements OnInit {
    title = 'myHighchart';
    options: any;
    historyTypes: any[] = [];
    xAxisData: any[] = [];
    seriesData: any[] = [];
    historyChartOptions: any;
    historyTypeSelect: any;
    highcharts = Highcharts;
    selectedFilter: string;

    constructor() {

    }

    ngOnInit(): void {
        this.historyTypes = ["Last Week", "Last month"];
        this.selectedFilter = this.historyTypes[0];
        this.loadweeklyChart();


    }
    loadweeklyChart() {
        this.xAxisData = [
            {
                name: "MON",
                y: 62.74,
                drilldown: "MON"
            },
            {
                name: "TUE",
                y: 90.57,
                drilldown: "TUE"
            },
            {
                name: "WED",
                y: 57.23,
                drilldown: "WED"
            },
            {
                name: "THU",
                y: 35.58,
                drilldown: "THU"
            },
            {
                name: "FRI",
                y: 74.02,
                drilldown: "FRI"
            },
            {
                name: "SAT",
                y: 31.92,
                drilldown: "SAT"
            },
            {
                name: "SUN",
                y: null,
                drilldown: null
            }
        ];
        this.seriesData = [
            {
                name: "MON",
                id: "MON",
                data: [
                    [
                        "8:00 AM",
                        20.1
                    ],
                    [
                        "9:23 AM",
                        51.3
                    ],
                    [
                        "11:01 AM",
                        53.02
                    ],
                    [
                        "1:00 PM",
                        71.4
                    ],
                    [
                        "2:05 PM",
                        10.88
                    ],
                    [
                        "3:00 PM",
                        10.56
                    ],
                    [
                        "6:00 PM",
                        0.45
                    ],
                    [
                        "7:00 PM",
                        0.49
                    ],
                    [
                        "8:30 PM",
                        0.32
                    ],
                    [
                        "9:00 PM",
                        0.29
                    ]
                ]
            },
            {
                name: "TUE",
                id: "TUE",
                data: [
                    [
                        "10:45 AM",
                        51.02
                    ],
                    [
                        "12:00 PM",
                        7.36
                    ],
                    [
                        "1:20 PM",
                        0.35
                    ],
                    [
                        "1:34 PM",
                        90.11
                    ],
                    [
                        "4:02 PM",
                        0.1
                    ],
                    [
                        "6:00 PM",
                        20.95
                    ],
                    [
                        "8:20 PM",
                        40.15
                    ]
                ]
            },
            {
                name: "WED",
                id: "WED",
                data: [
                    [
                        "12:00 PM",
                        66.2
                    ],
                    [
                        "4:04 PM",
                        70.29
                    ],
                    [
                        "5:00 PM",
                        20.27
                    ],
                    [
                        "7:00 PM",
                        50.47
                    ]
                ]
            },
            {
                name: "THU",
                id: "THU",
                data: [
                    [
                        "1:00 PM",
                        91.4
                    ],
                    [
                        "2:05 PM",
                        70.88
                    ],
                    [
                        "3:00 PM",
                        40.56
                    ],
                    [
                        "6:00 PM",
                        0.45
                    ],
                    [
                        "7:00 PM",
                        70.49
                    ]
                ]
            },
            {
                name: "FRI",
                id: "FRI",
                data: [
                    [
                        "6:00 AM",
                        12.6
                    ],
                    [
                        "12:00 PM",
                        10.92
                    ],
                    [
                        "1:30 PM",
                        10.4
                    ],
                    [
                        "8:00 PM",
                        10.1
                    ]
                ]
            },
            {
                name: "SAT",
                id: "SAT",
                data: [
                    [
                        "11:09 AM",
                        70.96
                    ],
                    [
                        "3:32 PM",
                        50.82
                    ],
                    [
                        "5:00 PM",
                        20.14
                    ]
                ]
            }
        ];
        this.historyChartOptions = chartOptions('Week', this.xAxisData, this.seriesData);
    }
    loadMonthlyChart() {
        this.xAxisData = [
            {
                name: "WEEK 1",
                y: 62.74,
                drilldown: "W1"
            },
            {
                name: "WEEK 2",
                y: 90.57,
                drilldown: "W2"
            },
            {
                name: "WEEK 3",
                y: 57.23,
                drilldown: "W3"
            },
            {
                name: "WEEK 4",
                y: 35.58,
                drilldown: "W4"
            }
        ];
        this.seriesData = [
            {
                name: "WEEK 1",
                id: "W1",
                data: [
                    [
                        "MON",
                        20.1
                    ],
                    [
                        "TUE",
                        51.3
                    ],
                    [
                        "WED",
                        53.02
                    ],
                    [
                        "THU",
                        71.4
                    ],
                    [
                        "FRI",
                        10.88
                    ],
                    [
                        "SAT",
                        10.56
                    ],
                    [
                        "SUN",
                        0.45
                    ]
                ]
            },
            {
                name: "WEEK 2",
                id: "W2",
                data: [
                    [
                        "MON",
                        20.1
                    ],
                    [
                        "TUE",
                        51.3
                    ],
                    [
                        "WED",
                        53.02
                    ],
                    [
                        "THU",
                        71.4
                    ],
                    [
                        "FRI",
                        10.88
                    ],
                    [
                        "SAT",
                        10.56
                    ],
                    [
                        "SUN",
                        0.45
                    ]
                ]
            },
            {
                name: "WEEK 3",
                id: "W3",
                data: [
                    [
                        "MON",
                        20.1
                    ],
                    [
                        "TUE",
                        51.3
                    ],
                    [
                        "WED",
                        53.02
                    ],
                    [
                        "THU",
                        71.4
                    ],
                    [
                        "FRI",
                        10.88
                    ],
                    [
                        "SAT",
                        10.56
                    ],
                    [
                        "SUN",
                        0.45
                    ]
                ]
            },
            {
                name: "WEEK 4",
                id: "W4",
                data: [
                    [
                        "MON",
                        20.1
                    ],
                    [
                        "TUE",
                        51.3
                    ],
                    [
                        "WED",
                        53.02
                    ],
                    [
                        "THU",
                        71.4
                    ],
                    [
                        "FRI",
                        10.88
                    ],
                    [
                        "SAT",
                        10.56
                    ],
                    [
                        "SUN",
                        0.45
                    ]
                ]
            }

        ];
        this.historyChartOptions = chartOptions('Month', this.xAxisData, this.seriesData);
    }
    filter() {
        if (this.selectedFilter == "Last Week") {
            this.loadweeklyChart();

        }
        else {
            this.loadMonthlyChart();

        }
    }



}
