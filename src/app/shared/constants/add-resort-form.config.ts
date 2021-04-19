  export let ADD_RESORT_FORM_BASIC_INFO = [
    { name: 'name', label: 'Resort Name', placeholder: 'Beaver Creek' },
    { name: 'city', label: 'City', placeholder: 'Avon' },
    { name: 'province', label: 'Province', placeholder: 'Colorado' },
    { name: 'country', label: 'Country', placeholder: 'United States of America' },
    { name: 'latitude', label: 'Latitude', placeholder: '39.6042' },
    { name: 'longitude', label: 'Longitude', placeholder: '-106.5165' },
    { name: 'website', label: 'Website', placeholder: 'beavercreek.com' },
  ];
  
  export let ADD_RESORT_FORM_STATS = [
    { name: 'adultFullDayTicketInUSD', label: 'Adult Full Day Ticket Cost ($)', placeholder: '148' },
    { name: 'lifts', label: 'Number of lifts', placeholder: '14' },
    { name: 'nearestAirportInMiles', label: 'Nearest airport in miles', placeholder: '140' },
    { name: 'skiableAcres', label: 'Skiable Acres', placeholder: '2200' },
    { name: 'snowPerYearInInches', label: 'Average Snowfall (inches)', placeholder: '250' },
    { name: 'terrainParks', label: 'Number of Terrain Parks', placeholder: '2' },
    { name: 'trails', label: 'Number of Trails', placeholder: '84' },
    { name: 'verticalFeet', label: 'Vertical Feet', placeholder: '300' },
  ];

  export let ADD_RESORT_FORM_TERRAIN_BREAKDOWN = [
    { name: 'begTerrainPercentage', label: 'Beginner Terrain (%)', placeholder: '33'},
    { name: 'intTerrainPercentage', label: 'Intermediate Terrain (%)', placeholder: '27'},
    { name: 'advTerrainPercentage', label: 'Advanced Terrain (%)', placeholder: '30'},
    { name: 'exTerrainPercentage', label: 'Expert Terrain (%)', placeholder: '10'},
  ];

  export let ADD_RESORT_FORM_DROPDOWNS = [
    { 
      name: 'bestTimeToVisit',
      label: 'Best Time to Visit', 
      options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    {
      name: 'bikePark',
      label: 'Bike Park?',
      options: ['No', 'Yes'],
    },
    {
      name: 'sideCountryAccess',
      label: 'Sidecountry Access?',
      options: ['No', 'Yes'],
    },
    {
      name: 'skiPasses',
      label: 'Ski Passes',
      options: ['Epic', 'Ikon', 'Mountain Collective'],
    }
  ];