// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((data) => data.json())
//     .then((users) => {

import axios from "axios";

//         console.log('Users written on the console',users)
//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then((data) => data.json())
//         .then((post) => {

//             console.log('Post1 written on the console',post)
//             fetch('https://jsonplaceholder.typicode.com/posts/2')
//             .then((data) => data.json())
//             .then((post) => console.log('Post2 written on the console',post))
//         });
// });

// async function getData() {
//     const data = await (
//        await fetch('https://jsonplaceholder.typicode.com/users')
//     ).json();
//     console.log(data);
// }

// getData();


// async function getData() {
//     const data = await (
//         await fetch('https://jsonplaceholder.typicode.com/users/1')
//     ).json();

//     console.log(data);
// }
// getData();






// (async () =>{
//     const data1 = await (
//         await fetch('https://jsonplaceholder.typicode.com/users/1')
//     ).json();
    
//     const data2 = await (
//         await fetch('https://jsonplaceholder.typicode.com/users/2')
//     ).json();

//     const data3 = await (
//         await fetch('https://jsonplaceholder.typicode.com/users/3')
//     ).json();

//     console.log(data1);
//     console.log(data2);
//     console.log(data3);
    
// })();


// (async function getData() {
//     const data1 = await(
//         await fetch('https://jsonplaceholder.typicode.com/users/1')
//     ).json();

//     const data2 = await(
//         await fetch('https://jsonplaceholder.typicode.com/users/2')
//     ).json();

//     const data3 = await(
//         await fetch('https://jsonplaceholder.typicode.com/users/3')
//     ).json();

//     console.log(data1);
//     console.log(data2);
//     console.log(data3);

// } )();




// (async () => {
//     const { data: users } = await axios(
//         "https://jsonplaceholder.typicode.com/users/3"
//     );
//     const { data: users2 } = await axios(
//         "https://jsonplaceholder.typicode.com/users/3"
//     );
//     const { data: users3 } = await axios(
//         "https://jsonplaceholder.typicode.com/users/3"
//     );

//     console.log("users",users);
//     console.log("users2",users2);
//     console.log("users3",users3);

// })();

// (async () => {
//     const {data: post1} = await axios ('https://jsonplaceholder.typicode.com/users/1');
//     const {data: post2} = await axios ('https://jsonplaceholder.typicode.com/users/2');
//     const {data: post3} = await axios ('https://jsonplaceholder.typicode.com/users/3');

//     console.log("user1",post1);
//     console.log("user2",post2);
//     console.log("user3",post3);

// })();

(async () => {
    const {data: user1} = await axios ('https://jsonplaceholder.typicode.com/users/1');
    const {data: user2} = await axios ('https://jsonplaceholder.typicode.com/users/2');
    const {data: user3} = await axios ('https://jsonplaceholder.typicode.com/users/3');

    console.log('****** First user ****** \n',user1);
    console.log('****** Second user ****** \n',user2);
    console.log('****** Thirth user ****** \n',user3);
})();

























