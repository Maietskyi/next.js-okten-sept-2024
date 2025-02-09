import {getAllCars} from "@/service/api.service";
import CarComponent from "@/components/car-component/CarComponent";


const CarsComponent = async () => {
    const cars = await getAllCars();

    return (
        <div>
            {
                cars.map((car) =>
                    <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};

export default CarsComponent;