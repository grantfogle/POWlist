export interface ResortCategories {
    resortId: string;
    reviewCategories: ResortCategory;
};

export interface ResortCategory {
    overallRating: ResortCategoryScore;
    snow: ResortCategoryScore;
    value: ResortCategoryScore;
    nightLife: ResortCategoryScore;
    crowds: ResortCategoryScore;
    bcAccess: ResortCategoryScore;
    begTerrain: ResortCategoryScore;
    intTerrain: ResortCategoryScore;
    advTerrain: ResortCategoryScore;
    terrainParks: ResortCategoryScore;
}

export interface ResortCategoryScore {
    name: string;
    score: number;
    count: number;
}