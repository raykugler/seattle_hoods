var crime = ['theft', 'assualt', 'robbery'];
var count =[ 4, 67,65];
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


function makeGraph(crimea, counta){
var ctx = document.getElementById('myChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    
    // The data for our dataset
    data: {
        datasets: [{
            data: counta
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: 
            crimea
        
    },
    

    // Configuration options go here
    options: {
        
    }

});
}


// let journal = [
//     {events: ["work", "touched tree", "pizza",
//               "running", "television"],
//      squirrel: false},
//     {events: ["work", "ice cream", "cauliflower",
//               "lasagna", "touched tree", "brushed teeth"],
//      squirrel: false},
//     {events: ["weekend", "cycling", "break", "peanuts",
//               "beer"],
//      squirrel: true},
//     /* and so on... */
//   ];
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: options
// });
// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: "My First dataset",
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });