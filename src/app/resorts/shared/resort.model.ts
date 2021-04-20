import { ResortData } from './resort-data.model';
import { ResortReviews } from './resort-reviews.model';

export interface Resort {
    resortData: ResortData;
    resortReviews: ResortReviews;
}