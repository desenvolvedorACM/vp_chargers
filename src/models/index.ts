interface IBaseResponseType {
    status: string;
    message: string;
}

export interface ICharger {
    id: number;
    name: string;
    chargePoint: string;
    price: number;
    time: string;
    parking: string;
    type: string;
    address: IAddress
    location: ILatLng;
    available: number;
}

interface IAddress {
    street: string;
    city: string;
    number: number;
    country: string;
}

export interface ILatLng {
    latitude: number;
    longitude: number;
}

export interface ISearchIcon {
    text: string;
    icon: string;
    tIcon?: boolean;
}

export interface IResponseChargers extends IBaseResponseType {
    data: ICharger[]
}