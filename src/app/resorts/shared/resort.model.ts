export class Resort {
    name: string;
    city: string;
    province: string;
    country: string;
    latitude: string;
    longitude: string;
    website: string;
    description: string;
    coverImage: string;
    logo: string;
    cardImage: string;
    stats: ResortStats;
    terrainBreakdown: TerrainBreakdown;
}

export class ResortStats {
    adultFullDayTicketInUSD: ResortStatsObj;
    bestTimeToVisit: ResortStatsObj;
    bikePark: ResortStatsObj;
    lifts: ResortStatsObj;
    nearestAirportInMiles: ResortStatsObj;
    skiableAcres: ResortStatsObj;
    skiPasses: ResortStatsObj;
    sideCountryAccess: ResortStatsObj;
    snowPerYearInInches: ResortStatsObj;
    terrainParks: ResortStatsObj;
    trails: ResortStatsObj;
    verticalFeet: ResortStatsObj;
}

export class TerrainBreakdown {
    advTerrainPercentage: ResortStatsObj;
    begTerrainPercentage: ResortStatsObj
    intTerrainPercentage: ResortStatsObj;
    exTerrainPercentage: ResortStatsObj;
}

export class ResortStatsObj {
    label: string;
    value: any;
}