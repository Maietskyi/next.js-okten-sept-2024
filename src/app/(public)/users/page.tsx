import {FC} from "react";

type Props = {
    params: { id: string }
}
const UsersPage: FC<Props> = async ({params}) => {
    let result = await params;
    console.log(result)
    return (
        <div>

            Users page content
        </div>
    );
};

export default UsersPage;