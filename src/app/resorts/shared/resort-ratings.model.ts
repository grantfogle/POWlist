import { Resort } from './resort.model';

export interface ResortRatings {
    resortId: string;
    ratingId?: string;
    overallRating: ResortCategoryRating;
    reviewCategories: ResortCategory;
};

export interface ResortCategory {
    snow: ResortCategoryRating;
    value: ResortCategoryRating;
    nightLife: ResortCategoryRating;
    crowds: ResortCategoryRating;
    bcAccess: ResortCategoryRating;
    begTerrain: ResortCategoryRating;
    intTerrain: ResortCategoryRating;
    advTerrain: ResortCategoryRating;
    exTerrain: ResortCategoryRating;
    terrainParks: ResortCategoryRating;
}

export interface ResortCategoryRating {
    count: number;
    label: string;
    score: number;
}