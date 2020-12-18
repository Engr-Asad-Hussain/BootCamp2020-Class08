## Conclusion

### Fetch API
- There are certain situations when you want data from external web or server. For example, you want data from data base, So you frontend request to backend and backend request to data base through API(Application Programming Interface)
- So, we request to outsider server through API with some parameters like username, age, gender etc
- In response to this request, that database will send data to you.
- There are different libraries for fetching data from server.
 1. Axiox
 2. Fetch API

- **Fetch()** is the part of react native. We don't have to import from third party.

### method: 'GET' & 'POST':
- **Vew** details in [index.js](https://github.com/Engr-Asad-Hussain/BootCamp2020-Class08/blob/pre-requisite-01/index.js)
- By default method="GET" is used.
- "GET" is used to get some data from server.
- fetch() returns a promise.
- We have discussed that there are two states of promise resolve() and reject(). there is also third state known as "pending" which means that it is in the  transition phase. 
    1. This transition phase comes when we haven't use then() or catch()
    2. This transition phase comes when we haven't use await for async()

- To use different method="POST" we have to provide parameters.
- "POST" is used to send some data on server.

### What is JSON?
- JavaScript Object Notation, is used when our application wants to talk to the server.
- This json format is like an standard; friendly for the developers and when someone fetch this so in that machine, it is also easy to read by the users.

### JSON.stringify( { } )
- Whatever is the object of JSON.stringify will be converted in string
```
JSON.stringify({
    title: 'Facebook',
    body: 'JavaScript',
    userID: 1
})
```