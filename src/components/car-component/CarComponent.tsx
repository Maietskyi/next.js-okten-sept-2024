import React from 'react';
import {ICar} from "@/models/ICar";

type CarProps = {
    car: ICar;
}

const CarComponent = ({car}:CarProps) => {
    return (
                <tr  key={car.id} className="text-center border ">
                    <td className="border p-2">{car.id}</td>
                    <td className="border p-2">{car.brand}</td>
                    <td className="border p-2">${car.price}</td>
                    <td className="border p-2">{car.year}</td>
                </tr>
    );
};

export default CarComponent;