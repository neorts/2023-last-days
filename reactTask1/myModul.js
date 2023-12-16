import axios from "axios";

const getUser = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const {data: user} = await axios(
            "https://jsonplaceholder.typicode.com/users/"+user_id
        );
        const {data: post} = await axios(
            "https://jsonplaceholder.typicode.com/posts?userId="+user_id
        );

        console.log(user);
        console.log(post[0]);

        resolve(user,post);
    });
};

export default getUser;