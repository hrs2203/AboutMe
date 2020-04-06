// url : https://pomber.github.io/covid19/timeseries.json

var genCompData = () => $.ajax({
  type: "get",
  url: `https://pomber.github.io/covid19/timeseries.json`,
  success: (response) => {
    response = response["India"]
    // console.log(response);

    x_axis = []
    totalCase = []
    death = []
    recovered = []

    incrementCount_x = []
    incrementCount_y = []


    for (var i = 0; i < response.length; i++) {
      x_axis.push(response[i].date)
      totalCase.push(response[i].confirmed)
      death.push(response[i].deaths)
      recovered.push(response[i].recovered)
    }
    for (var i = 1; i < response.length; i++) {
      incrementCount_x.push(response[i].date)
      incrementCount_y.push(response[i].confirmed - response[i - 1].confirmed)
    }

    var ctx = document.getElementById("popmyChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: x_axis,
        datasets: [
          {
            label: 'totalCases',
            data: totalCase,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,125,255,1)',
            borderWidth: 1
          },
          {
            label: 'death',
            data: death,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 1
          },
          {
            label: 'recovered',
            data: recovered,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 1
          },

        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {

            }
          }]
        }
      }
    });

    var ctx = document.getElementById("popincChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: x_axis,
        datasets: [
          {
            label: 'totalCases',
            data: totalCase,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,125,255,1)',
            borderWidth: 1
          },
          {
            label: 'death',
            data: death,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 1
          },
          {
            label: 'recovered',
            data: recovered,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 1
          },

        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {

            }
          }]
        }
      }
    });

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: x_axis,
        datasets: [
          {
            label: 'totalCases',
            data: totalCase,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,125,255,1)',
            borderWidth: 1,
            pointRadius: 1
          },
          {
            label: 'death',
            data: death,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 1,
            pointRadius: 1
          },
          {
            label: 'recovered',
            data: recovered,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 1,
            pointRadius: 1
          },

        ]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }]
        }
      }
    });

    ctx = document.getElementById("incChart").getContext('2d');
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: incrementCount_x,
        datasets: [
          {
            label: 'increment',
            data: incrementCount_y,
            backgroundColor: 'rgba(0,125,255,1)',
            borderColor: 'rgba(0,125,255,1)',
            borderWidth: 1,
            pointRadius: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }]
        }
      }
    });
  }
})
