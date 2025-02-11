
import {axiosInstance} from "@/constants/url";
import {ICar} from "@/models/ICar";

// Отримати всі авто
export const getAllCars = async ():Promise<ICar[]> =>{
    try {
        const { data } = await axiosInstance.get<ICar[]>("/cars");
        return data;
    } catch (error) {
        console.error("Помилка пошуку автомобілів:", error);
        throw error;
    }
}

// Отримати авто за ID
export const getCarById = async (id: number): Promise<ICar> => {
    try {
        const { data } = await axiosInstance.get<ICar>(`/cars/${id}`);
        return data;
    } catch (error) {
        console.error("Помилка пошуку авто:", error);
        throw error;
    }
};

// додати авто
export const createCar = async (newCar: ICar): Promise<ICar> => {
    try {
        const { data } = await axiosInstance.post<ICar>("/cars", newCar);
        console.log('Car created successfully:', data);
        return data;
    } catch (error: any) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            throw new Error(`Server error: ${JSON.stringify(error.response.data)}`);
        }
        console.error("Помилка створення авто:", error);
        throw new Error("Error creating car: " + error.message);
    }
};


// "use client";
// import {ICar} from "@/models/ICar";
// const BASE_API_URL = "http://185.69.152.209";
// const API_URL = `${BASE_API_URL}/carsAPI/v1`;
//
// export const getAllCars = async (): Promise<ICar[]> => {
//     const response = await fetch(`${API_URL}/cars`);
//     return response.json();
// };
//
// export const addCar = async (car: ICar): Promise<ICar> => {
//     const response = await fetch(`${API_URL}/cars`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(car),
//     });
//     return response.json();
// }