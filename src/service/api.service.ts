import {ICar} from "@/models/ICar";

const API_URL = "http://185.69.152.209/carsAPI/v1/cars";

export const getAllCars = async (page: number = 1, limit: number = 10): Promise<ICar[]> => {
    const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
    return response.json();
};

export const addCar = async (car: Omit<ICar, "id">): Promise<ICar> => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
    });

    if (!response.ok) {
        throw new Error("Failed to add car");
    }

    return response.json();
};