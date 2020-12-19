import React, { useEffect, useState } from 'react';

function App() {
  let data = {title: "Data Loading....."};
  let [todo, setTodo] = useState(data);
  let [isFetching, setFetching] = useState();
  let count = 0;

  useEffect( ()=>{
    async function getAPI() {
      setFetching(true);
      const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const jsonFormat = await api.json();
      console.log(jsonFormat);
      setTodo(jsonFormat);
      setFetching(false);
    }
    getAPI();
  }, [count]); /* Only re-renders when the count value will change.*/

  /*
    [x] We have made this if statement to show that data is still fetching, as soon as 
        data is fetched, it renders on the web.  
  */
  if (isFetching) {
    return (
      <div>Data Fetching ...</div>
    );
  }
  /*
    [x] We know that App() is a function and if there are multiple returns, so
        after 1st return it will not return another returns 
  */

  return (
    <div>
      <h1>Json Placeholder</h1>
      <ul>
        <li>Data: {todo.title}</li>
      </ul>
    </div>
  );
}
export default App;
