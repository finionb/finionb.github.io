var myChartObject = document.getElementById('myChart');

var chart = new Chart(myChartObject, {
    type: 'line',
    data: {
        labels: ["2002", "2003", "2004", "2006", "2007", "2008", "2009", "2010", "2011", "2012", 
        "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    
        datasets: [{
            label: "Anzahl bedrohter Tierarten",
            backgroundColor: 'rgb(255,0,0,0.4)',
            borderColor: 'rgb(255,0,0,1)',
            data: [4078, 4077, 5747, 6245, 6365, 6592, 6854, 7447, 7849, 8079, 8286, 8671, 8827, 9428, 9788, 9979, 10660, 11840, 12707, 13084]
        },{
            label: "Anzahl überprüfter Tierarten",
            backgroundColor: 'rgb(255,255,225,0.4)',
            borderColor: 'rgba(255,255,225,1)',
            data: [7016, 10102, 23504, 25484, 26493, 27863, 30512, 36737, 38623, 40287, 41966, 44527, 47090, 51281, 53731, 55507, 59515, 65652, 69255, 72661]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Jahre', // Beschriftung der x-Achse
                    fontColor: 'rgba(223, 222, 222, 0.8)' // Schriftfarbe der x-Achse
                },
                ticks: {
                    fontColor: 'rgb(223, 222, 222)'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Anzahl Tierarten', // Beschriftung der y-Achse
                    fontColor: 'rgba(223, 222, 222, 0.8)' // Schriftfarbe der x-Achse
                },
                ticks: {
                    beginAtZero: true,
                    fontColor: 'rgb(223, 222, 222)'
                }
            }]
        },
        layout: {
            padding: {
                left: 20, // Linker Abstand zum Bildschirmrand
                right: 30, // Rechter Abstand zum Bildschirmrand
                top: 70,
                bottom: 0 // Unten Abstand zum Bildschirmrand
            }
        },
        legend: {
            labels: {
                fontColor: 'rgba(223, 222, 222, 0.9)', 
                padding: 40,
                fontSize: 14
            }
        },
        tooltips: {
            mode: 'index', 
            intersect: false,
            titleFontSize: 16, 
            bodyFontSize: 14,  
            callbacks: {
                label: function(tooltipItem, data) {
                    var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                    var currentValue = tooltipItem.yLabel;
                    var verifiedValue = data.datasets[1].data[tooltipItem.index]; // Anzahl überprüfter Tierarten
                    var percentage = ((currentValue / verifiedValue) * 100).toFixed(2) + '%';
                    var label = datasetLabel + ': ' + currentValue;
                
                    if (tooltipItem.datasetIndex === 0) { // Nur für den ersten Datensatz
                        label += ' , ' + 'Prozentzahl: ' + percentage;
                    }
                
                    
                    return label;
                }                
            }
        },
        hover: {
            mode: 'index',
            intersect: false
        }    
    }    
});
