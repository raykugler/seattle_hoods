
function crime(){
//     var crime_hood = this.id;
//     console.log('lll');
//     var crimes = []
//     var start_date = '2015-01-01';
// $.ajax({
//     url: "https://data.seattle.gov/resource/xurz-654a.json",
//     type: "GET",
//     data: {
//       "$limit" : 500000,
//       "$$app_token" : "YcG5XVo8DJz8Zzk5db9CjuGIr"
//     }
// }).done(function(data) {
//     var crime_count = 0;
//   data.forEach(crime => { 
//     if (crime.neighborhood === crime_hood && crime.reported_date > '2015-01-01'){
//         crime_count++;
//         crimes.push(crime.crime_subcategory)
//     }; 
// });

// var unique_crimes = []
//     for(let i = 0;i < crimes.length; i++){
//         if(unique_crimes.indexOf(crimes[i]) == -1){
//             unique_crimes.push(crimes[i])
//         }
//     }
//   console.log(crimes);
//   console.log(unique_crimes);

//   for(p = 0; p < unique_crimes.length; p++){
//       var specific_crime= unique_crimes[p];
//       var spec_crime_count = 0;
//       for (y = 0; y < crimes.length; y++){
       
//         if(specific_crime === crimes[y]){
//               spec_crime_count += 1;
//         } 
//       }
//       console.log(specific_crime + ': ' + spec_crime_count);
//   }
  
// });

longLat();
}
// function crime(){
//    var crime_hood = this.id;
//    console.log(crime_hood);
//     var request = new XMLHttpRequest();
//   var m = 0;
//     request.open("GET", "https://data.seattle.gov/resource/xurz-654a.json", true);
    
//     request.onreadystatechange = function(){
//         var crimes = [];
//         var crime_count = 0;
//         var data = JSON.parse(request.responseText);
//         if(request.readyState === 4 && request.status === 200) {
          
            
            
//           }
//           console.log(crime_count);      
//     };
//     request.send();
   
    


// var xhr = new XMLHttpRequest(),
//     method = "GET",
//     url = "https://developer.mozilla.org/";

// xhr.open(method, url, true);
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.send();
// var request = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// request.onload = function () {

//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       console.log(movie.title);
//     });
//   } else {
//     console.log('error');
//   }
// }

// request.send();