'use server';

import {createCar} from "@/services/api.service";

export const addNewCarAction = async (form:FormData) => {
    const brand = form.get('brand')?.toString();
    const price = form.get('price')?.toString();
    const year = form.get('year')?.toString();

    if (!brand || !price || !year) {
        throw new Error("All fields are required");
    }

    const newCar = {
        brand,
        price: parseFloat(price),
        year: parseInt(year),
    };

    try {
        await createCar(newCar);
        console.log('Created car:', newCar);
    } catch (error) {
        console.error('Error creating car:', error);
        throw new Error('Error creating car');
    }
};