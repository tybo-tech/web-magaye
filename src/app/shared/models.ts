

export interface CardModel {
    heading: string;
    body: string;
    sub?: string;
    CreateDate?: string;
    img: string;
    url: string;
    Price?: number;
    PriceLabel?: string;
}

export interface NavModel {
    Name: string;
    Url: string;
    Classes?: string[];
}