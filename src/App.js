import React, { useEffect, useState } from 'react';

function App() {
  const [repos, setRepos] = useState([]); /* [] because we'll use useState in fetch() and fetch returns promise in array format. Because this API returns array [{}, {}, {}, ...]*/

  useEffect( ()=>{
    async function getRepositories() {
      const response = await fetch('https://api.github.com/users/Engr-Asad-Hussain/repos'); 
        /*
          [x] fetch() returns a promise therefore we have to assign some variable to it.
        */
      const data = await response.json();
      setRepos(data);
      console.log(data);
    }
    getRepositories();
  }, []);

  return (
    <div>
      <h1>Names of Github Repositories</h1>
      <ul>
        {repos.map( (reposObject, index)=>{
          return(
            <li key={reposObject.id}>{reposObject.name}</li>
            /* 
              [x] Here we don't use index because repos returns [{}, {}, {}, ...]
              [x] And each object {} has the id attribute which is unique
              [x] So we can use id to keep unique <li>
              [x] We can use index as well.
            */
          );
        })}
      </ul>
    </div>
  );
}
export default App;

/*
  [x] In React whatever we want to render on web will be a Hook.
  [x] Whenever we want to update the DOM, we must use Hook.
  [x] So, to fetch data React provides another Hook as useEffect()
*/