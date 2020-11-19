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
    public snowInInches: string;
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
        snowInInches: string) {

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