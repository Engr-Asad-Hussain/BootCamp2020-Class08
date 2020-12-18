/*
    [x] By default method="GET" is used.
    [x] "GET" is used to get some data from server.
    [x] fetch() returns a promise.
    [x] We have discussed that there are two states of promise resolve() and reject().
        there is also third state known as "pending" which means that it is in the 
        transition phase. 
        1. This transition phase comes when we haven't use then() or catch()
        2. This transition phase comes when we haven't use await for async()
*/
async function getAPI() {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(api);
    const jsonFormat = await api.json();
    /* To Get the data in json format we use .json() */
    console.log(jsonFormat);
}
/* getAPI(); */


/*
    [x] To use different method="POST" we have to provide parameters.
    [x] "POST" is used to send some data on server
*/
async function postAPI() {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Facebook',
            body: 'JavaScript',
            userID: 1
            /* 
                [x] What data to send will be in key value pair in json format
                [x] Not necessary to use title, body, userID. The data which we 
                    want to send will be placed here.
            */
        }),
        headers: {
            /* 
                [x] Header means which type of data to send
                [x] Plus we can send sensitive data in headers
            */
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

//    console.log(api);
    const json = await api.json();
    console.log(json);
}
postAPI();

/*
Jo bhi main isse object dunga JSON.stringify usse string main convert krdega
JSON.stringify({
    title: 'Facebook',
    body: 'JavaScript',
    userID: 1
}),
*/

/*
[x] What is JSON?
[x] JavaScript Object Notation, is used when our application wants to talk to the server.
[x] This json format friendly for the developers and when someone fetch this so 
    in that machine, it is also easy to read by the users.
*/