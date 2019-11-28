export class Hotels{
    key: string;
    hotelsId: string;
    availability: number;
    city: string;
    category: string;
    description: string;
    latitude: number;
    longitude: number;
    name: string;
    photo1: string;
    photo2: string;
    photo3: string;
    photos: string;
    popularity: number;
    price: number;
    stars: number;
    state: string;
    active: boolean;
    services: boolean[];
    rooms: Room[];
}

export class Room{
    name: string;
    photo:string;
    price: number;
    description: string;
    
}
