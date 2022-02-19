import { Card } from "./element.model";

export interface RequestUser { 
    data: Card;
    support: {
        url: string;
        text: string;
    }

}