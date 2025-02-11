
import CarComponent from "@/components/car/CarComponent";
import React from "react";
import {ICar} from "@/models/ICar";
import {getAllCars} from "@/actions/actions";

const CarsComponent = async () => {
    const cars = await getAllCars();

    return (
        <div  className="container mx-auto p-4">
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
                {
                    cars.map((car: ICar) =>
                        <CarComponent key={car.id} car={car}/>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default CarsComponent;