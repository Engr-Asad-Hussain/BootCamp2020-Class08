## Fetch Data in React:

### useEffect( {}, [] )
- In React whatever we want to render on web will be a Hook. Whenever we want to update the DOM, we must use Hook. So, to fetch data React provides another Hook as useEffect()
- useEffect is a hook in react.
- To use API we use useEffect in React
- It takes 2 arguments
    1. Callback function
    2. Array [] (option)
- All the asynchronous work is done inside this useEffect()
- API call is always asynchronous.
- To use API we use useEffect in React
- useEffect is used to fetch data in react from the servers.

### useEffect() in Depth:
- **Drawback:**
  - Now, if you observe that, it prints 'Data Loading' then it prints "title". It means that useEffect() is called after the component renders.
  - So, whenever the DOM re-render any component useEffect() calls automatically. This degrades the performance of our application because there are many things on the page that need to be updated, so we don't want on each render our useEffect() will be called automatically.
  > React call's useEffect() later, after performing the DOM updates. In this effect, we could perform data fetching or call some other imperative API.
- **Solution**:
  > If you want to run an effect and clean it up only once, you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```
  - In the example above, we pass [count] as the second argument. What does this mean? If the count is 5, and then our component re-renders with count still equal to 5, React will compare [5] from the previous render and [5] from the next render. Because all items in the array are the same (5 === 5), React would skip the effect. That’s our optimization.
  - When we render with count updated to 6, React will compare the items in the [5] array from the previous render to items in the [6] array from the next render. This time, React will re-apply the effect because 5 !== 6. If there are multiple items in the array, React will re-run the effect even if just one of them is different.


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
- useEffect() is not accepting async function so we have written inside an arrow function.
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