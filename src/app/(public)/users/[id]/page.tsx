import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type Props = {
    params: Promise<{id: string }>,
    searchParams: Promise<SearchParams>,
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params;
    console.log(id);


    return {
        title: 'User page title ' + id,
    }}

const UserPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === "string") {
        obj = JSON.parse(data) as IUser;
    }

    return (
        <div>
            {
                obj &&<>
                    Users page content: {obj.id} {obj.name}
                </>
            }

        </div>
    );
};

export default UserPage;