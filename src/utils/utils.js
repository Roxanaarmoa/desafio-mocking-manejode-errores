//faker

import {faker} from "@faker-js/faker";

export const generarProductos = () =>{
    return {
        id:faker.database.mongodbObjectId(),
        Title: faker.vehicle.bicycle(),
        Description: faker.database.type(),
    }
}