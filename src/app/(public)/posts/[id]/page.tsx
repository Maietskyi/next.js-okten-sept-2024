import {FC} from "react";
import {Metadata} from "next";

type PropsType = {
    params: { id: string };
}

export const generateMetadata = async ({params}: PropsType): Promise<Metadata> => {
    const {id} = await params;
    console.log(id);
    return {
        title: 'Posts page ' + id,
    }
}

const page: FC<PropsType> = async ({params}) => {
    const {id} = await params;

    return (
        <div>
            Posts content: {id}
        </div>
    );
};

export default page;