## Conclusion

- useEffect() is not accepting async function so we have written inside an arrow function.
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