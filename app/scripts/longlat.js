


var map;
var service;
var infowindow;

function longLat() {

  let loc = this.id;
  let lat = 47.608195;
  let lng = -122.332661;
  var mapProp= {
      center:new google.maps.LatLng(lat, lng),
      zoom:10,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
}

function longLatRefresh(crime_hood) {
  let loc = crime_hood;
  let newlat = 0;
  let newlng = 0;
  for (i = 0; i < neighborhood_long_lats.length; i++){
    console.log(loc);
  if(neighborhood_long_lats[i].hoodname === loc){
   newlat = neighborhood_long_lats[i].hoodlat;
   newlng = neighborhood_long_lats[i].hoodlong;
   console.log(newlat + newlng);
 }};
  var mapProp= {
      center:new google.maps.LatLng(newlat, newlng),
      zoom:15,

}
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
}

function restaurants(){
  
}

// for (i = 0; i < neighborhoods.length; i++){
//   longslats[i] ={
//   hoodname: neighborhoods[i],
//   hoodlat: longsandlats[i * 2],
//   hoodlong: longsandlats[i * 2 + 1],
//   }
//  }
// for (i = 0; i < neighborhoods.length; i++){
//   neighborhood_loc = neighborhoods[i];
//   console.log(neighborhood_loc);
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
// $.ajax({
//   url: "https://maps.googleapis.com/maps/api/place/details/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&fields=name&key=AIzaSyCssmb2izo9FOE5vYnc4jx_x1gHMrm5ncI",
//       type: "GET",
//       }).done(function(loc_data){
//         console.log(loc_data);
//       })}
//  //       longslats.push(loc_data.results[0].geometry.location.lng);
      
//   })}

// }).done(function(data) {
//     var longlatspec = [];
//   data.forEach(long_lat => { 
//     console.log(long_lat.geometry); 
// });})
// for (i = 0; i < myJSONResult.results.length; i++) {
//   myAddress[i] = myJSONResult.results[i].formatted_address;

longLat(this.id);
longsandlats=[
  47.5611253,
  -122.386796,
  47.5754629,
  -122.4106578,
  47.6655022,
  -122.3821377,
  47.6792172,
  -122.3860312,
  47.6147023,
  -122.3447964,
  47.7195988,
  -122.3494069,
  47.5360554,
  -122.2752313,
  47.625305,
  -122.3221835,
  47.6075154,
  -122.3090726,
  47.5987122,
  -122.3239762,
  47.5634667,
  -122.2946206,
  47.55986559999999,
  -122.2864991,
  47.5525319,
  -122.3272165,
  47.5854945,
  -122.3524064,
  47.60621769999999,
  -122.333842,
  47.6417654,
  -122.3264872,
  47.5239691,
  -122.3830019,
  47.609369,
  -122.3250359,
  47.6541773,
  -122.3500004,
  47.563306,
  -122.392791,
  47.5431717,
  -122.3221362,
  47.6968728,
  -122.3561758,
  47.53315689999999,
  -121.9784512,
  47.5246979,
  -122.3460227,
  47.5494692,
  -122.280412,
  47.6059232,
  -122.2835373,
  47.63963020000001,
  -122.3996602,
  47.552585,
  -122.300937,
  47.6211233,
  -122.3050083,
  47.64603779999999,
  -122.3129235,
  46.99201859999999,
  -120.5430771,
  48.7766868,
  -121.8144143,
  47.538914,
  -122.2861044,
  47.5811956,
  -122.3865523,
  47.5794213,
  -122.3113231,
  47.5623473,
  -122.3654777,
  47.7085904,
  -122.3232354,
  47.5916198,
  -122.3040738,
  47.67478329999999,
  -122.3566014,
  47.5706539,
  -122.3592935,
  47.6015184,
  -122.3342975,
  47.6323268,
  -122.3568641,
  47.512255,
  -122.2639761,
  47.7192927,
  -122.2951857,
  47.5038209,
  -122.2603777,
  47.5595846,
  -122.2709395,
  47.6346093,
  -122.2796452,
  47.6780881,
  -122.3156459,
  47.52146579999999,
  -122.367496,
  47.6786923,
  -122.2570483,
  47.6219695,
  -122.331715,
  47.5829755,
  -122.3348036,
  47.5317989,
  -122.2887598,
  47.526912,
  -122.3606824,
  47.5310941,
  -122.3257361,
  47.4312399,
  -120.3354938,
  47.661258,
  -122.3298912
];