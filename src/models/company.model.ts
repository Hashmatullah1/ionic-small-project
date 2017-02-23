export interface Company {
    name : string,
    address : string,
    isOnline : boolean,
    imgSrc? : string
}

let companies : Company[] = [
    {
        name : 'Autolinee Toscane',
        address : 'Fl, Toscana',
        isOnline : true
    },
    {
        name : 'Greenline Tour',
        address : 'RM, Lazio',
        isOnline : false
    },
    {
        name : 'EuroLines',
        address : 'Ml, Lombardia',
        isOnline : false
    },
    {
        name : 'Ias Autolinee',
        address : 'CS, Calabria',
        isOnline : true
    },
    {
        name : 'Trotta',
        address : 'RM, Lazio',
        isOnline : true
    },
    {
        name : 'RealiTour',
        address : 'RM, Lazio',
        isOnline : true
    },
];

export let COMPANIES = companies;