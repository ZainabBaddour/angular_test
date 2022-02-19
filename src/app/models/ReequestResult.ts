import { Card } from "./element.model";

export interface RequestResult {
    page: number;
    per_page: number;
    total: number;
    total_pages : number;
    data: Card[];
}