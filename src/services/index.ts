import { ICharger, ILatLng, IResponseChargers } from "../models";

const data: ICharger[] = [
    {
        "id": 1,
        "name": "Ann Arbor City Hall",
        "chargePoint": "62 - 62.5 kW Residential",
        "price": 0.52,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 1",
        "address": {
            "street": "Av.Rio grande 12",
            "city": "Canoas",
            "number": 235,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.9109446,
            "longitude": -51.18435968
        },
        "available": 1
    },
    {
        "id": 2,
        "name": "Meijer",
        "chargePoint": "31 - 62.5 kW Shopping Center",
        "price": 0.86,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 2",
        "address": {
            "street": "R.Marcio dias, 242",
            "city": "Canoas",
            "number": 235,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.91098302,
            "longitude": -51.18517898
        },
        "available": 1
    },
    {
        "id": 3,
        "name": "Ibis Canoas Shopping",
        "chargePoint": "AutochargeShopping Center",
        "price": 0.52,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 2",
        "address": {
            "street": "Rua das corujas",
            "city": "Canoas",
            "number": 235,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.91139809,
            "longitude": -51.18418962
        },
        "available": 0
    },
    {
        "id": 4,
        "name": "Cubo Self Storage",
        "chargePoint": "AutochargeShopping Center",
        "price": 0.52,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 2",
        "address": {
            "street": "R. Mathias Velho",
            "city": "Canoas",
            "number": 200,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.91043983,
            "longitude": -51.18290348
        },
        "available": 0
    },
    {
        "id": 5,
        "name": "Cubo Self Storage",
        "chargePoint": "AutochargeShopping Center",
        "price": 0.52,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 2",
        "address": {
            "street": "Rua Visconde 12",
            "city": "Canoas",
            "number": 200,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.90899459,
            "longitude": -51.18478278
        },
        "available": 1
    },
    {
        "id": 6,
        "name": "Cubo Self Storage",
        "chargePoint": "AutochargeShopping Center",
        "price": 0.52,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 2",
        "address": {
            "street": "R. Vencia, 34",
            "city": "Canoas",
            "number": 200,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.90887369,
            "longitude": -51.18350069
        },
        "available": 0
    },
    {
        "id": 7,
        "name": "Canoas Shopping",
        "chargePoint": "AutochargeShopping Center",
        "price": 0.52,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 2",
        "address": {
            "street": "R. Morunbi",
            "city": "Canoas",
            "number": 200,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.90873517,
            "longitude": -51.182393
        },
        "available": 1
    },
    {
        "id": 8,
        "name": "Carrefour",
        "chargePoint": "Carrefour Center",
        "price": 0.52,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 2",
        "address": {
            "street": "Beco dos fagundes",
            "city": "Canoas",
            "number": 200,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.91010529,
            "longitude": -51.18608862
        },
        "available": 0
    },
    {
        "id": 9,
        "name": "Carrefour",
        "chargePoint": "Carrefour Center",
        "price": 0.52,
        "time": "Open 24/7",
        "parking": "Parking: Free",
        "type": "Level 2",
        "address": {
            "street": "Av. Farroupilha",
            "city": "Canoas",
            "number": 200,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.90866858,
            "longitude": -51.18663847
        },
        "available": 1
    },
    {
        "id": 10,
        "name": "Ann Arbor City Hall",
        "chargePoint": "",
        "price": 0,
        "time": "O",
        "parking": "Parking: Free",
        "type": "Level 1",
        "address": {
            "street": "Rua C (Toda)",
            "city": "Canoas",
            "number": 23,
            "country": "Brazil"
        },
        "location": {
            "latitude": -29.911894842192094,
            "longitude": -51.18560013801524
        },
        "available": 0
    }
]

export async function _fetchChargers(): Promise<IResponseChargers[]> {
    let result: IResponseChargers;

    try {
        const response = await fetch('http://localhost:3000/chargers-list');
        result = await response.json();
    } catch (error) {
        console.log(error);

    }

    return result;
}
export async function fetchData(): Promise<ICharger[]> {
    return await new Promise((resolver) => {
        setTimeout(() => {
            resolver(data)
        }, 2 * 1000);
    })
}

export async function addChargers({ latitude, longitude }: ILatLng): Promise<ICharger> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newCharger: ICharger = {
        id: 1,
        name: "Ann Arbor City Hall",
        chargePoint: "",
        price: 0.0,
        time: "O",
        parking: "Parking: Free",
        type: "Level 1",
        address: {
            street: `${latitude} / ${longitude}`,
            city: "",
            number: 0,
            country: "",
        },
        location: {
            latitude,
            longitude,
        },
        available: 1,
    };

    data.push(newCharger);

    return newCharger;
}