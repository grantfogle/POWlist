import { ResortData } from './resort-data.model';
import { ResortRatings } from './resort-ratings.model';

export interface Resort {
    resortData: ResortData;
    resortReviews: ResortRatings;
}