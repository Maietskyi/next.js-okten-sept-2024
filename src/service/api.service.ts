import {ICar} from "@/models/ICar";
const BASE_API_URL = "http://185.69.152.209";
const API_URL = `${BASE_API_URL}/carsAPI/v1`;

export const getAllCars = async (): Promise<ICar[]> => {
    const response = await fetch(`${API_URL}/cars`);
    return response.json();
};

export const addCar = async (car: ICar): Promise<ICar> => {
    const response = await fetch(`${API_URL}/cars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
    });
    return response.json();
}