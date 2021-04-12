export interface ResortCategories {
    resortId: string;
    reviewCategories: ResortCategory;
};

export interface ResortCategory {
    snow: {label: string, score: number};
    value: {label: string, score: number};
    nightLife: {label: string, score: number};
    crowds: {label: string, score: number};
    bcAccess: {label: string, score: number};
    begTerrain: {label: string, score: number};
    intTerrain: {label: string, score: number};
    advTerrain: {label: string, score: number};
    terrainParks: {label: string, score: number};
}

export interface ResortCategoryScore {
    score: number;
}