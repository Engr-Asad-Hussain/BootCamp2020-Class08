## Fetch Data in React:

### useEffect( {}, [] )
- In React whatever we want to render on web will be a Hook. Whenever we want to update the DOM, we must use Hook. So, to fetch data React provides another Hook as useEffect()
- useEffect is a hook in react.
- To use API we use useEffect in React
- It takes 2 arguments
    1. Callback function
    2. Array []
- All the asynchronous work is done inside this useEffect()
- API call is always asynchronous.
- useEffect is used to fetch data in react from the servers.


### Example #01
```
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1') 
                /* This returns a promise therefore we use .then()*/
    .then( (response)=> response.json())                    
                /* response.json() returns another promise therefore we use another then */
    .then( (json)=> {
        setData(json);
        console.log(json);
})
}, []);
```
- If we don't use the empty[] then our DOM will re-render millions of time without change in any variable. To stop this re-rendering we use empty[]. For more information console it after removing [].

### Example # 02
- fetch() returns a promise therefore we have to assign some variable to it.
- we are adding "await" keyword then we have to use async as function.
```
useEffect( async()=>{
    const response = await fetch('https://api.github.com/users/Engr-Asad-Hussain/repos'); 
    const data = await response.json();
    setRepos(data)
    console.log(data);
}, []);
```

### Example # 03
- If we are using async in function so it's better practice to make another function in arrow function and there make async function.
```
useEffect( ()=>{
    async function getRepositories() {
      const response = await fetch('https://api.github.com/users/Engr-Asad-Hussain/repos'); 
      const data = await response.json();
      setRepos(data)
      console.log(data);
    }
  }, []);
```