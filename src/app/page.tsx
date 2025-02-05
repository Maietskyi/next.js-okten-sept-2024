import Form from "next/form";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/*<form action="/submit">*/}
            {/*    <input type="text" name={"name"} placeholder={'login'}/>*/}
            {/*    <input type="text" name={"password"} placeholder={'password'}/>*/}
            {/*    <button>submit</button>*/}
            {/*</form>*/}

            <Form action={'/submit'}>
                    <input type="text" name={"name"} placeholder={'login'}/>
                    <input type="text" name={"password"} placeholder={'password'}/>
                    <button>submit</button>
            </Form>
        </div>
    );
}
