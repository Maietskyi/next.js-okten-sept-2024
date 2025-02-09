import Menu from "@/components/menu/Menu";
import CreateCarComponent from "@/components/create-car/CreateCarComponent";

export default function CarsCreatePage() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Menu/>
            <CreateCarComponent/>
        </div>
    );
}
