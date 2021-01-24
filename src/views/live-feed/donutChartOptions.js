// colors
const chartColors = {
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
    series6: '#41b883'
  }
}

export default {
  legend: {
    show: true,
    position: 'bottom',
    fontSize: '14px',
    fontFamily: 'Montserrat'
  },
  colors: [
    chartColors.donut.series1,
    chartColors.donut.series2,
    chartColors.donut.series3,
    chartColors.donut.series4,
    chartColors.donut.series5
  ],
  dataLabels: {
    enabled: true,
    formatter(val) {
      // eslint-disable-next-line radix
      return `${parseInt(val)}%`
    }
  },
  labels: ['Go Faster', 'Go Slower', 'Interested', 'Sleepy', 'Confused'],
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
