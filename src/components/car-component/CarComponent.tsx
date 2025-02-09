import React from 'react';
import {ICar} from "@/models/ICar";

type CarProps = {
    car: ICar;
}

const CarComponent = ({car}:CarProps) => {
    return (
        <div>
            {car.id} -- {car.brand}
        </div>
    );
};

export default CarComponent;