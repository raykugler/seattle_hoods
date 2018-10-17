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
                    "WALLINGFORD"];

const east_precinct=[
    "East",
    "CENTRAL AREA/SQUIRE PARK",
    "FIRST HILL",
    "CAPITOL HILL",
    "MILLER PARK",
    "MADRONA/LESCHI",
    "JUDKINS PARK/NORTH BEACON HILL",
    "MONTLAKE/PORTAGE BAY",
    "MADISON PARK"
    ]
const north_precinct=[
                        "North",
                        "NORTHGATE",
                        "LAKECITY",
                        "ROOSEVELT/RAVENNA",
                        "WALLINGFORD",
                        "SANDPOINT",
                        "BITTERLAKE",
                        "GREENWOOD",
                        "PHINNEY RIDGE",
                        "UNIVERSITY",
                        "BALLARD NORTH",
                        "BALLARD SOUTH",
                        "FREMONT"
                      ]                
const south_precinct =[
                        "South",
                        "LAKEWOOD/SEWARD PARK",
                        "BRIGHTON/DUNLAP",
                        "CLAREMONT/RAINIER VISTA",
                        "HILLMAN CITY",
                        "SODO",
                        "SOUTH BEACON HILL",
                        "RAINIER VIEW",
                        "NORTH BEACON HILL",
                        "RAINIER BEACH",
                        "MID BEACON HILL",
                        "MOUNT BAKER",
                        "GENESEE",
                        "COLUMBIA CITY",
                        "NEW HOLLY",
                        "GEORGETOWN"
                      ]
const southwest_precinct = [
                        "Southwest",
                        "ALKI",
                        "HIGH POINT",
                        "ROXHILL/WESTWOOD/ARBOR HEIGHTS",
                        "ALASKA JUNCTION",
                        "SOUTH PARK",
                        "NORTH ADMIRAL",
                        "HIGHLAND PARK",
                        "FAUNTLEROY SW",
                        "MORGAN",
                        "SOUTH DELRIDGE",
                        "NORTH DELRIDGE",
                        "COMMERCIAL HARBOR ISLAND",
                        "COMMERCIAL DUWAMISH",
                        "PIGEON POINT"
                      ]
const west_precinct = [
                          "West",
                        "QUEEN ANNE",
                        "SLU/CASCADE",
                        "MAGNOLIA",
                        "CHINATOWN/INTERNATIONAL DISTRICT",
                        "BELLTOWN",
                        "PIONEER SQUARE",
                        "DOWNTOWN COMMERCIAL",
                        "EASTLAKE - WEST"
                      ]
const neighborhood_long_lats = [
                        {
                          "hoodname": "ALASKA JUNCTION",
                          "hoodlat": 47.5611253,
                          "hoodlong": -122.386796
                        },
                        {
                          "hoodname": "ALKI",
                          "hoodlat": 47.5754629,
                          "hoodlong": -122.4106578
                        },
                        {
                          "hoodname": "BALLARD NORTH",
                          "hoodlat": 47.6655022,
                          "hoodlong": -122.3821377
                        },
                        {
                          "hoodname": "BALLARD SOUTH",
                          "hoodlat": 47.6792172,
                          "hoodlong": -122.3860312
                        },
                        {
                          "hoodname": "BELLTOWN",
                          "hoodlat": 47.6147023,
                          "hoodlong": -122.3447964
                        },
                        {
                          "hoodname": "BITTERLAKE",
                          "hoodlat": 47.7195988,
                          "hoodlong": -122.3494069
                        },
                        {
                          "hoodname": "BRIGHTON/DUNLAP",
                          "hoodlat": 47.539015,
                          "hoodlong": -122.276049
                        },
                        {
                          "hoodname": "CAPITOL HILL",
                          "hoodlat": 47.625305,
                          "hoodlong": -122.3221835
                        },
                        {
                          "hoodname": "CENTRAL AREA/SQUIRE PARK",
                          "hoodlat": 47.6075154,
                          "hoodlong": -122.3090726
                        },
                        {
                          "hoodname": "CHINATOWN/INTERNATIONAL DISTRICT",
                          "hoodlat": 47.5987122,
                          "hoodlong": -122.3239762
                        },
                        {
                          "hoodname": "CLAREMONT/RAINIER VISTA",
                          "hoodlat": 47.5634667,
                          "hoodlong": -122.2946206
                        },
                        {
                          "hoodname": "COLUMBIA CITY",
                          "hoodlat": 47.55986559999999,
                          "hoodlong": -122.2864991
                        },
                        {
                          "hoodname": "COMMERCIAL DUWAMISH",
                          "hoodlat": 47.5525319,
                          "hoodlong": -122.3272165
                        },
                        {
                          "hoodname": "COMMERCIAL HARBOR ISLAND",
                          "hoodlat": 47.5854945,
                          "hoodlong": -122.3524064
                        },
                        {
                          "hoodname": "DOWNTOWN COMMERCIAL",
                          "hoodlat": 47.60621769999999,
                          "hoodlong": -122.333842
                        },
                        {
                          "hoodname": "EASTLAKE - WEST",
                          "hoodlat": 47.6417654,
                          "hoodlong": -122.3264872
                        },
                        {
                          "hoodname": "FAUNTLEROY SW",
                          "hoodlat": 47.5239691,
                          "hoodlong": -122.3830019
                        },
                        {
                          "hoodname": "FIRST HILL",
                          "hoodlat": 47.609369,
                          "hoodlong": -122.3250359
                        },
                        {
                          "hoodname": "FREMONT",
                          "hoodlat": 47.6541773,
                          "hoodlong": -122.3500004
                        },
                        {
                          "hoodname": "GENESEE",
                          "hoodlat": 47.563306,
                          "hoodlong": -122.392791
                        },
                        {
                          "hoodname": "GEORGETOWN",
                          "hoodlat": 47.5431717,
                          "hoodlong": -122.3221362
                        },
                        {
                          "hoodname": "GREENWOOD",
                          "hoodlat": 47.6968728,
                          "hoodlong": -122.3561758
                        },
                        {
                          "hoodname": "HIGH POINT",
                          "hoodlat": 47.550208,
                          "hoodlong": -122.369238
                        },
                        {
                          "hoodname": "HIGHLAND PARK",
                          "hoodlat": 47.5246979,
                          "hoodlong": -122.3460227
                        },
                        {
                          "hoodname": "HILLMAN CITY",
                          "hoodlat": 47.551260,
                          "hoodlong": -122.2800648
                        },
                        {
                          "hoodname": "JUDKINS PARK/NORTH BEACON HILL",
                          "hoodlat": 47.595068,
                          "hoodlong": -122.302056
                        },
                        {
                          "hoodname": "LAKECITY",
                          "hoodlat": 47.713960,
                          "hoodlong": -122.298169
                        },
                        {
                          "hoodname": "LAKEWOOD/SEWARD PARK",
                          "hoodlat": 47.564425,
                          "hoodlong": -122.271790
                        },
                        {
                          "hoodname": "MADISON PARK",
                          "hoodlat": 47.635403,
                          "hoodlong": -122.287630
                        },
                        {
                          "hoodname": "MADRONA/LESCHI",
                          "hoodlat": 47.626665,
                          "hoodlong": -122.318027
                        },
                        {
                          "hoodname": "MAGNOLIA",
                          "hoodlat": 47.650662,
                          "hoodlong": -122.403151
                        },
                        {
                          "hoodname": "MID BEACON HILL",
                          "hoodlat": 47.555902,
                          "hoodlong": -122.307912
                        },
                        {
                          "hoodname": "MILLER PARK",
                          "hoodlat": 47.621638,
                          "hoodlong": -122.304729
                        },
                        {
                          "hoodname": "MONTLAKE/PORTAGE BAY",
                          "hoodlat": 47.646992,
                          "hoodlong": -122.304395
                        },
                        {
                          "hoodname": "MORGAN",
                          "hoodlat": 47.544695,
                          "hoodlong": -122.280756
                        },
                        {
                          "hoodname": "MOUNT BAKER",
                          "hoodlat": 47.578502,
                          "hoodlong": -122.288372
                        },
                        {
                          "hoodname": "NEW HOLLY",
                          "hoodlat": 47.580907,
                          "hoodlong": -122.386301
                        },
                        {
                          "hoodname": "NORTH ADMIRAL",
                          "hoodlat": 47.5916198,
                          "hoodlong": -122.3040738
                        },
                        {
                          "hoodname": "NORTH BEACON HILL",
                          "hoodlat": 47.579217,
                          "hoodlong": -122.310166
                        },
                        {
                          "hoodname": "NORTH DELRIDGE",
                          "hoodlat": 47.5706539,
                          "hoodlong": -122.3592935
                        },
                        {
                          "hoodname": "NORTHGATE",
                          "hoodlat": 47.712053,
                          "hoodlong": -122.332487
                        },
                        {
                          "hoodname": "PHINNEY RIDGE",
                          "hoodlat": 47.676176,
                          "hoodlong": -122.355066
                        },
                        {
                          "hoodname": "PIGEON POINT",
                          "hoodlat": 47.512255,
                          "hoodlong": -122.2639761
                        },
                        {
                          "hoodname": "PIONEER SQUARE",
                          "hoodlat": 47.601144,
                          "hoodlong": -122.331844
                        },
                        {
                          "hoodname": "QUEEN ANNE",
                          "hoodlat": 47.632378,
                          "hoodlong": -122.356431
                        },
                        {
                          "hoodname": "RAINIER BEACH",
                          "hoodlat": 47.513166,
                          "hoodlong": -122.264055
                        },
                        {
                          "hoodname": "RAINIER VIEW",
                          "hoodlat": 47.503405,
                          "hoodlong": -122.263022
                        },
                        {
                          "hoodname": "ROOSEVELT/RAVENNA",
                          "hoodlat": 47.6780881,
                          "hoodlong": -122.3156459
                        },
                        {
                          "hoodname": "ROXHILL/WESTWOOD/ARBOR HEIGHTS",
                          "hoodlat": 47.52146579999999,
                          "hoodlong": -122.367496
                        },
                        {
                          "hoodname": "SANDPOINT",
                          "hoodlat": 47.6786923,
                          "hoodlong": -122.2570483
                        },
                        {
                          "hoodname": "SLU/CASCADE",
                          "hoodlat": 47.6219695,
                          "hoodlong": -122.331715
                        },
                        {
                          "hoodname": "SODO",
                          "hoodlat": 47.5829755,
                          "hoodlong": -122.3348036
                        },
                        {
                          "hoodname": "SOUTH BEACON HILL",
                          "hoodlat": 47.5317989,
                          "hoodlong": -122.2887598
                        },
                        {
                          "hoodname": "SOUTH DELRIDGE",
                          "hoodlat": 47.526912,
                          "hoodlong": -122.3606824
                        },
                        {
                          "hoodname": "SOUTH PARK",
                          "hoodlat": 47.5310941,
                          "hoodlong": -122.3257361
                        },
                        {
                          "hoodname": "UNIVERSITY",
                          "hoodlat": 47.661215,
                          "hoodlong": -122.309229
                        },
                        {
                          "hoodname": "WALLINGFORD",
                          "hoodlat": 47.661258,
                          "hoodlong": -122.3298912
                        }
                      ];                    
//   var private_schools = [
//     {   zipcode: "98105" ,
//         schoolName: 'Academy for Precision Learning',
//         grades: 'K-12'
//     },
//     {   zipcode: '98118',
//         schoolName: 'Alfajer School',
//         grades: 'K-12'
//     }
//   ];

  //const zipcodes =[
//  
//     {   neighborhood: 'ALASKA JUNCTION',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'ALKI',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'BALLARD NORTH',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'BALLARD SOUTH',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'BELLTOWN',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'BITTERLAKE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'BRIGHTON/DUNLAP',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'CAPITOL HILL',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'CENTRAL AREA/SQUIRE PARK',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'CHINATOWN/INTERNATIONAL DISTRICT',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'CLAREMONT/RAINIER VISTA',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'COLUMBIA CITY',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'COMMERCIAL DUWAMISH',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'COMMERCIAL HARBOR ISLAND',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'DOWNTOWN COMMERCIAL',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'EASTLAKE - WEST',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'FAUNTLEROY SW',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'FIRST HILL',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'FREMONT',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'GENESEE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'GEORGETOWN',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'GREENWOOD',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'HIGH POINT',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'HIGHLAND PARK',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'HILLMAN CITY',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'JUDKINS PARK/NORTH BEACON HILL',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'LAKECITY',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'LAKEWOOD/SEWARD PARK',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'MADISON PARK',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'MADRONA/LESCHI',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'MAGNOLIA',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'MID BEACON HILL',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'MILLER PARK',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'MONTLAKE/PORTAGE BAY',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'MORGAN',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'MOUNT BAKER',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'NEW HOLLY',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'NORTH ADMIRAL',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'NORTH BEACON HILL',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'NORTH DELRIDGE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'NORTHGATE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'PHINNEY RIDGE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'PIGEON POINT',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'PIONEER SQUARE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'QUEEN ANNE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'RAINIER BEACH',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'RAINIER VIEW',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'ROOSEVELT/RAVENNA',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'ROXHILL/WESTWOOD/ARBOR HEIGHTS',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'SANDPOINT',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'SLU/CASCADE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'SODO',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'SOUTH BEACON HILL',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'SOUTH DELRIDGE',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'SOUTH PARK',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'UNIVERSITY',
//         precinct: '',
//         zipcode: '' ,       
//     }
//     {   neighborhood: 'WALLINGFORD',
//         precinct: '',
//         zipcode: '' ,       
//     }

// ]                    
