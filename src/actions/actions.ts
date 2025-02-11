"use server";

import {ICar} from "@/models/ICar";
import {createCar, fetchCars} from "@/services/api.service";

export async function getAllCars() {
    return await fetchCars();
}

export async function addCar(car: ICar) {
    return await createCar(car);
}