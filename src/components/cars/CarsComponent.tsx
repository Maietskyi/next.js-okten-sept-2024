"use client";

import { useEffect, useState } from "react";
import {getAllCars} from "@/service/api.service";
import {ICar} from "@/models/ICar";


export default function CarsComponent() {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        async function fetchCars() {
            const data = await getAllCars();
            setCars(data);
        }
        fetchCars();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Car List</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Brand</th>
                    <th className="border p-2">Price</th>
                    <th className="border p-2">Year</th>
                </tr>
                </thead>
                <tbody>
                {cars.map((car) => (
                    <tr key={car.id} className="text-center border">
                        <td className="border p-2">{car.id}</td>
                        <td className="border p-2">{car.brand}</td>
                        <td className="border p-2">${car.price}</td>
                        <td className="border p-2">{car.year}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}