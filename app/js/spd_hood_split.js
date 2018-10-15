//LIST OF NEIGHBORHOODS FROM SPD//
var neighborhoods =  ["ALASKA JUNCTION", "ALKI", "BALLARD NORTH", "BALLARD SOUTH", 
                    "BELLTOWN", "BITTERLAKE", "BRIGHTON/DUNLAP", "CAPITOL HILL", "CENTRAL AREA/SQUIRE PARK", 
                    "CHINATOWN/INTERNATIONAL DISTRICT", "CLAREMONT/RAINIER VISTA", "COLUMBIA CITY", "COMMERCIAL DUWAMISH", 
                    "COMMERCIAL HARBOR ISLAND", "DOWNTOWN COMMERCIAL", "EASTLAKE - WEST", "FAUNTLEROY SW", "FIRST HILL", 
                    "FREMONT", "GENESEE", "GEORGETOWN", "GREENWOOD", "HIGH POINT", "HIGHLAND PARK", "HILLMAN CITY", 
                    "JUDKINS PARK/NORTH BEACON HILL", "LAKECITY", "LAKEWOOD/SEWARD PARK", "MADISON PARK", "MADRONA/LESCHI", 
                    "MAGNOLIA", "MID BEACON HILL", "MILLER PARK", "MONTLAKE/PORTAGE BAY", "MORGAN", "MOUNT BAKER", "NEW HOLLY", 
                    "NORTH ADMIRAL", "NORTH BEACON HILL", "NORTH DELRIDGE", "NORTHGATE", "PHINNEY RIDGE", "PIGEON POINT", 
                    "PIONEER SQUARE", "QUEEN ANNE", "RAINIER BEACH", "RAINIER VIEW", "ROOSEVELT/RAVENNA", "ROXHILL/WESTWOOD/ARBOR HEIGHTS", 
                    "SANDPOINT", "SLU/CASCADE", "SODO", "SOUTH BEACON HILL", "SOUTH DELRIDGE", "SOUTH PARK", "UNIVERSITY", 
                    "WALLINGFORD"]
//LIST OF PRECINCTS FROM SPD//

console.log(east_precinct);
// var precincts = ["EAST","NORTH","SOUTH","SOUTHWEST","WEST"];
 
var precincts = [east_precinct, north_precinct, south_precinct, southwest_precinct, west_precinct];
var neighborhood_groups = [];

// //CREATE NAV SECTIONS FROM PRECINCTS//
function navMaker(){
    var nav_list = document.getElementById('nav_list');
    for ( i = 0; i <= 4; i++){
        console.log(precincts[i][0]);
        var hood_section= document.createElement('SECTION');
        hood_section.setAttribute('class', 'hood_section');
        hood_section.setAttribute('id', precincts[i][0] + 'section');
        var precinct_title = document.createElement("H2");
        precinct_title.setAttribute('class', 'precinct_head');
        var e = document.createTextNode(precincts[i][0]);
        precinct_title.appendChild(e);
         
                    var arrow = document.createElement('IMG');
                    arrow.setAttribute('src','../images/arrow.png');
                    arrow.setAttribute('class', 'arrow');
                    arrow.setAttribute('id', precincts[i][0] + 'up_arrow');
                
                    var nav = document.createElement("NAV");             
                    nav.setAttribute('class', 'precinct_nav');
                    nav.setAttribute('id', precincts[i][0]);
           
           
            hood_section.appendChild(precinct_title);
            hood_section.appendChild(arrow);
            hood_section.appendChild(nav);
            
        
        hood_section.appendChild(nav);
        hood_section.setAttribute('id', precincts[i][0] + 'nav');
      
      nav_list.appendChild(hood_section);
    
    }
    btnMaker();
}

// MAKES NEIGHBORHOOD BUTTONS//

 function btnMaker(){
     var j =0; 
    while(j< 5){
  for(i = 1; i < precincts[j].length; i++){
    var btn = document.createElement("BUTTON"); 
    var lowcapped = precincts[j][i];
 
    const toTitleCase = (phrase) => {
                return phrase
                  .toLowerCase()
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
              };
    
    title = toTitleCase(lowcapped);
    var t = document.createTextNode(title);
    var id_maker =title.replace(/\s/g, '');

    btn.setAttribute('id', lowcapped);
    btn.setAttribute('class', 'hood_button');
 
    btn.appendChild(t);      
    
    var the_nav = document.getElementById(precincts[j][0]);
    the_nav.appendChild(btn);
    
    document.getElementById(lowcapped).addEventListener('click', crime)
  }
  j++;
}}
//document.getElementById("MyElement").className = "class1 class2";

   
 function tests(){
     console.log(this.id);
 }

navMaker();
document.getElementById("Eastup_arrow").addEventListener("click", east_neighborhood_menu_open);
document.getElementById("Northup_arrow").addEventListener("click", north_neighborhood_menu_open);
document.getElementById("Southup_arrow").addEventListener("click", south_neighborhood_menu_open);
document.getElementById("Southwestup_arrow").addEventListener("click", southwest_neighborhood_menu_open);
document.getElementById("Westup_arrow").addEventListener("click", west_neighborhood_menu_open);
 let east_count = 0;
function east_neighborhood_menu_open(){
    if (east_count === 0){
    document.getElementById('East').style.display = 'grid';
    document.getElementById('Eastup_arrow').style.transform = 'rotate(-90deg)';
    east_count = 1;
}
    else{
    document.getElementById('East').style.display = 'none';
    document.getElementById('Eastup_arrow').style.transform = 'rotate(0deg)';
    east_count = 0;
}

}
let north_count = 0;
function north_neighborhood_menu_open(){
    if (north_count === 0){
    document.getElementById('North').style.display = 'grid';
    document.getElementById('Northup_arrow').style.transform = 'rotate(-90deg)';
    north_count = 1;
}
    else{
    document.getElementById('North').style.display = 'none';
    document.getElementById('Northup_arrow').style.transform = 'rotate(0deg)';
    north_count = 0;
}

}

let south_count = 0;
function south_neighborhood_menu_open(){
    if (south_count === 0){
    document.getElementById('South').style.display = 'grid';
    document.getElementById('Southup_arrow').style.transform = 'rotate(-90deg)';
    south_count = 1;
}
    else{
    document.getElementById('South').style.display = 'none';
    document.getElementById('Southup_arrow').style.transform = 'rotate(0deg)';
    south_count = 0;
}

}
let southwest_count = 0;
function southwest_neighborhood_menu_open(){
    if (southwest_count === 0){
    document.getElementById('Southwest').style.display = 'grid';
    document.getElementById('Southwestup_arrow').style.transform = 'rotate(-90deg)';
    southwest_count = 1;
}
    else{
    document.getElementById('Southwest').style.display = 'none';
    document.getElementById('Southwestup_arrow').style.transform = 'rotate(0deg)';
    southwest_count = 0;
}

}
let west_count = 0;
function west_neighborhood_menu_open(){
    if (west_count === 0){
    document.getElementById('West').style.display = 'grid';
    document.getElementById('Westup_arrow').style.transform = 'rotate(-90deg)';
    west_count = 1;
}
    else{
    document.getElementById('West').style.display = 'none';
    document.getElementById('Westup_arrow').style.transform = 'rotate(0deg)';
    west_count = 0;
}

}

// // //https://data.seattle.gov/resource/xurz-654a.json

// console.log('uggff');