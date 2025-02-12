// localhost:3000/hello/api [GET]

export const GET = async(request: Request, response: Response) => {
    console.log('GET request route handler');
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    console.log(request);
    console.log(response);

    response.headers.set('Accept', 'application/json');
    return Response.json(users);
    // return Response.json({message: request.url, status: 200});
};

// localhost:3000/hello/api [POST]
export const POST = async() => {

    console.log('POST request route handler');
    return Response.json({message: 'Request route handler POST'});
}



// export async function GET(request: Request, response: Response){
//     console.log('GET request route handler');
//
//     const users = await fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json());
//     console.log(request);
//     console.log(response);
//     return Response.json(users);
//     // return Response.json({message: request.url, status: 200});
// }



// export async function GET(){
//     console.log('GET request route handler');
//
//     const users=[
//         {name: 'vasya', age: 31, status: false},
//         {name: 'vika', age: 41, status: true},
//         {name: 'misha', age: 35, status: false},
//         {name: 'roman', age: 25, status: true},
//         {name: 'andriy', age: 34, status: false},
//         {name: 'vika', age: 18, status: true},
//         {name: 'misha', age: 12, status: false},
//         {name: 'vasya', age: 42, status: true},
//         {name: 'roman', age: 21, status: false},
//         {name: 'andriy', age: 29, status: true},
//     ]
//     return Response.json(users);
// }