export interface Country {

    name: string;
    capital: string;
    region: string;
    subregion: string;
    area: number;
    population: number;
    flag: string;
    currencies: any[];


};

interface currencies {
    code: string;
    name: string;
    symbol: string;
};