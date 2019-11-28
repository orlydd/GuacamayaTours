export class Itinerary {
    itineraryCode: string; 
    clientName: string;
    clientID: string;
    email: string;
    phoneNumber: string;
    roomType: string;
    totalPrice: number;
    adress: string;
    destination: string;
    hotel: string;
    arrivalDate: string;
    departureDate: string;
    members : Members[];
    key: string;
}

export class Members{
    name: string;
    lastName: string;
    personID: string;
    age: number;


}
