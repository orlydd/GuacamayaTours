export class Hotels{
    id: String;
    name: String;
    stars: number;
    latitude: number;
    longitude: number;
    direction: String;
    state: String;
    photos:Photo;
    city: String;
    pricePerPerson: number;
    services: Services;
    pricePerNight: number;
    roomType: Room;
}

export class Room{
    name: string;
    photo: Photo;
    maxPeople: number;
    comodities: Comodities;
}
export class Comodities{
    comodity1: string;
    comodity2: string;
    comodity3: string;
    comodity4: string;
    comodity5: string;
}
export class Photo{
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    photo5: string;
}
export class Services{
    service1: string;
    service2: string;
    service3: string;
    service4: string;
    service5: string;
}