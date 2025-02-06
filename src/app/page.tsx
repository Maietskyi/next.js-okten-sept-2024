import Form from "next/form";
import {getMeals, saveMeal} from "@/server-actions/server-actions";

export default async function Home() {

    const mealsArray = await getMeals();

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Form action={saveMeal}>
                    <input type="text" name={"title"} placeholder={'text'}/>
                    {/*<input type="text" name={"password"} placeholder={'password'}/>*/}
                    <button>submit</button>
            </Form>

            <div className={'meals'}>
                {mealsArray.map(meal => (<div key={meal.id}>{meal.title}</div>))}
            </div>
        </div>
    );
}
