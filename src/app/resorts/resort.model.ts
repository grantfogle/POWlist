export class Resort {
    public name: string;
    public location: string;
    public country: string;
    public latlong: string;
    public description: string;
    public geo: string[];
    public rating: number;
    public imagePath: string;
    public reviews: string[];
    public snowInInches: string;
    public skiPasses: string;
    public liftPassCost: number;

    constructor(name: string,
        location: string,
        country: string,
        rating: number,
        description: string,
        imagePath: string,
        skiPasses: string,
        snowInInches: string) {

        this.name = name;
        this.location = location;
        this.country = country;
        this.rating = rating;
        this.description = description;
        this.imagePath = imagePath;
        this.skiPasses = skiPasses;
        this.snowInInches = snowInInches;
    }
}