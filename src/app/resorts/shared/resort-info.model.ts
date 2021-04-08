export interface ResortInfo {
    resortId: string;
    resortSnowfallInInches: number;
    adultTicketPrice: number;
    skiableAcres: number;
    numberOfLifts: number;
    terrainParks: number;
    percentGreen: number;
    percentBlue: number;
    percentBlack: number;
    bikePark: boolean;
    sideCountryAccess: boolean;
}

export interface ResortData {
    resortId: string;
    name: string;
    city: string;
    state: string;
    country: string;
    liftTicketCost: ResortDataMeasurement;
    snow: ResortDataMeasurement;
    skiableAcres: ResortDataMeasurement;
    description: string;
    coverPhoto: string;
    resortCardPhoto: string;
    lifts: number;
    latitude: string;
    longitude: string;
    trails: number;
    vertical: ResortDataMeasurement;
    skiPasses: string[];
    terrainParks: number;
    percentGreen: number;
    percentBlue: number;
    percentBlack: number;
    percentExpert: number;
    bikePark: boolean;
    nearestAirport: ResortDataMeasurement;
    sideCountryAccess: boolean;
    bestTimeToVisit: string;
}

/* future implementations 
    Airbnb cost
    more lift ticket and related costs
*/

export interface ResortDataMeasurement {
    unit: string;
    data: number;
}