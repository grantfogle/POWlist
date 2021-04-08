export interface ResortInfoReview {
    resortId: string;
    reviewCategories: ResortInfoReviewScore[];
    // overallRating: ResortInfoReviewScore;
    // snow: ResortInfoReviewScore;
    // value: ResortInfoReviewScore;
    // nightLife: ResortInfoReviewScore;
    // crowds: ResortInfoReviewScore;
    // bcAccess: ResortInfoReviewScore;
    // begTerrain: ResortInfoReviewScore;
    // intTerrain: ResortInfoReviewScore;
    // advTerrain: ResortInfoReviewScore;
    // terrainParks: ResortInfoReviewScore;
};

export interface ResortInfoReviewScore {
    name: string;
    score: number;
}