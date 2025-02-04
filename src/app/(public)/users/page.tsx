import {FC} from "react";
import {UsersComponent} from "@/components/users/UsersComponent";

type Props = {
    params: { id: string }
}
const UsersPage: FC<Props> = async ({params}) => {
    let result = await params;
    console.log(result)
    return (
        <div>
            <UsersComponent/>
            Users page content
        </div>
    );
};

export default UsersPage;