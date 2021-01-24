// colors
const chartColors = {
  donut: {
    series1: '#ffc600',
    series2: '#00d4bd',
    series3: '#826bf8',
    // series4: '#2b9bf4',
    series5: '#FFA1A1'
  }
}

export default {
  donutChart: {
    series: [10, 20, 20, 50],
    chartOptions: {
      legend: {
        show: false,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: 'Lato'
      },
      colors: [
        chartColors.donut.series1,
        chartColors.donut.series5,
        chartColors.donut.series3,
        chartColors.donut.series2
      ],
      dataLabels: {
        enabled: false,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        }
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '90%',
            labels: {
              show: true,
              name: {
                fontSize: '5rem',
                fontFamily: 'Lato'
              },
              value: {
                fontSize: '2rem',
                fontFamily: 'Lato',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                }
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter(val) {
                  return val
                  // eslint-disable-next-line radix
                  // return w.globals.seriesTotals.reduce((a, b) => return a + b, 0)
                }
              }
            }
          }
        }
      },
      labels: ['Sleepy', 'Neutral', 'Confused', 'Happy'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380
            },
            legend: {
              position: 'bottom'
            }
          }
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem'
                    },
                    value: {
                      fontSize: '1rem'
                    },
                    total: {
                      fontSize: '1.5rem'
                    }
                  }
                }
              }
            },
            legend: {
              show: true
            }
          }
        }
      ]
    }
  }
}
