import {NextRequest} from "next/server";

export const middleware = async (request: NextRequest) => {
    // console.log('middleware');
    // const login = request.cookies.get('login');
    // const password = request.cookies.get('password');
    // const token = await fetch('', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         key1: login,
    //         key2: password,
    //     })
    // })
    //     .then(res => res.json())
    //
    // const token = 'jdnfsadv14adsvndsfv';
    // const response = NextResponse.next({
    //     headers:{
    //         authorization:token
    //     }
    // });
    // return response;
    //
    // if (loale === 'EN'){
    //     fetch // content
    // }
    //
    // return new NextResponse('dfvhsbkfv', {headers: {'xxx': 'yyyy'}});
if (request.url.startsWith('/api/')) {
    // some actions
} else if (request.url.startsWith('/swapi/users/')) {
//     інша дія
}
};


export const config = {
    matcher: '/auth' //  /about/sdnhabrvhabsdbvjsbd (що завгодно)
};