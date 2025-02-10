"use client";

import {carValidator} from "@/validator/CarValidator";
import {ICar} from "@/models/ICar";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {addCar, getAllCars} from "@/service/api.service";
import {useEffect, useState} from "react";


const CreateCarComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    console.log(cars)

    const {register, handleSubmit, reset, formState:{errors}} = useForm<ICar>({
        resolver:joiResolver(carValidator)
    });

    useEffect(() => {
        async function fetchCars() {
            const data = await getAllCars();
            setCars(data);
        }
        fetchCars();
    }, []);

    const onSubmit = async (data: ICar) => {
        try {
            await addCar(data);
            setCars(await getAllCars());
            console.log(data);
            reset();
        } catch (error) {
            console.error("Failed to add car:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Add Car Page</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mb-6 space-y-4">
                <div>
                    <label className="block">Brand:</label>
                    <input {...register("brand")} className="border p-2 w-full"/>
                    {errors.brand && <p className="text-red-500">{errors.brand?.message}</p>}
                </div>

                <div>
                    <label className="block">Price:</label>
                    <input type="number" {...register("price")} className="border p-2 w-full"/>
                    {errors.price && <p className="text-red-500">{errors.price?.message}</p>}
                </div>

                <div>
                    <label className="block">Year:</label>
                    <input type="number" {...register("year")} className="border p-2 w-full"/>
                    {errors.year && <p className="text-red-500">{errors.year?.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Add Car
                </button>
            </form>
        </div>
    );
};

export default CreateCarComponent;