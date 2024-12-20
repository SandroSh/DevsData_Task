export type characterType = {
    name:string;
    height:string;
    mass:string;
    hair_color:string;
    skin_color:string;
    eye_color:string;
    birth_year:string;
    gender:string;
    homeworld:string;
    films: string[];
    species:string[];
    vehicles:string[];
    starships:string[];
}

export type detailsType = {
    films:any[];
    species:[]
    vehicles:[];
    starships:[];
}

export type apiDataType = {
    key:string;
    url:string;
}

export type paginationUrlType = {
    previous:string;
    next:string;
};