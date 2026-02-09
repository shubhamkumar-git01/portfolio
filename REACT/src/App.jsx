import { useState } from 'react'
import './App.css'

// import User from "./user";
import Todo from "./Todo";



function App() {
  // const [inputValue, setInputValue] = useState("");

  const [count, setCount] = useState(0)
  // let name = "Tom";

  return (
    <>
    <h1>Hello World</h1>
    <Todo />
    {/* <p>Hello {name}</p>
    <Message />
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1) }>Increase Count</button>
    <button onClick={() => setCount(count - 1) }>Decrease Count</button>
    <User name = "Jerry" city = "New York" />

    <input type="text" onChange={(e) => setInputValue(e.target.value)} />
    <p> Input value: {inputValue} </p> */}
    </>

      // <div>
      //   <p>React Counter</p>
      //   <div>
      //     <button onClick={() => setCount(count-1) }>-</button>
      //     {count}
      //     <button onClick={() => setCount(count+1) }>+</button>
      //   </div>

      // </div> 
      )
}
// function Message() {
//   return <p>Hello message from Message</p>
// }



 export default App

// import { useState } from 'react'
// import './App.css'
// import User from './User'   

// function App() {
//   const [count, setCount] = useState(0)
//   let name = "Tom";

//   return (
//     <>
//       <h1>Hello World</h1>
//       <p>Hello {name}</p>

//       <Message />

//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <button onClick={() => setCount(count - 1)}>Decrease Count</button>

//       <User name="Jerry" city="New York" />
//     </>
//   )
// }

// function Message() {
//   return <p>Hello message from Message</p>
// }

// export default App