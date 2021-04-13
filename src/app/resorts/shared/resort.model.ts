export class Resort {
    public name: string;
    public city: string;
    public province: string;
    public country: string;
    public latitude: string;
    public longitude: string;
    public description: string;
    public rating: number;
    public imagePath: string;
    public snowInInches: number;
    public skiPasses: string;
    public liftPassCost: number;

    constructor(name: string,
        country: string,
        city: string,
        province: string,
        rating: number,
        description: string,
        imagePath: string,
        skiPasses: string,
        snowInInches: number) {

        this.name = name;
        this.city = city;
        this.province = province;
        this.country = country;
        this.rating = rating;
        this.description = description;
        this.imagePath = imagePath;
        this.skiPasses = skiPasses;
        this.snowInInches = snowInInches;
    }
}

export class Resort2 {
    name: string;
    city: string;
    province: string;
    country: string;
    latitude: string;
    longitude: string;
    overallRating: number;
    coverImage: string;
    logo: string;
    cardImage: string;
    stats: ResortStats;
}

export class ResortStats {
    description: string;
    snowPerYear: string;
    skiPasses: string[];
    liftPassCost: string;
    lifts: number;
    skiableAcres: number;
    terrainParks: number;
    vertical: number;
    greenTerrain: number;
    intermediateTerrain: number;
    advancedTerrain: number;
    trails: number;
    adultFullDayTicket: number;
}