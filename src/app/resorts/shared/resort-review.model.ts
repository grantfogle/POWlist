// export interface ResortReview {
//     resortId: string;
//     review: string;
//     overallRating: number;
//     powderRating: number;
//     valueRating: number;
//     terrainRating: number;
// }

export interface ResortReview {
    resortId: string;
    icon: string;
    date: string;
    userName: string;
    review: string;
    overall: number;
    snow: number;
    value: number;
    begTerrain: number;
    intTerrain: number;
    bcAccess: number;
    nightlife: number;
    terrainParks: number
    crowds: number;
}