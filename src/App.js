
// // import './App.css';
// // import React from "react";
// // // import Navbar from './components/Navbar';
// // // import Main from './components/Main';
// // // import Sidebar1 from './components/Sidebar1';
// // // import Sidebar2 from './components/Sidebar2';
// // // import Footer from './components/Footer';
// // // import CBCPropsEx from './components/props/CBCPropsEx';
// // import FBCPropEx from './components/props/FBCPropEx';

// // // function App() {
// // //   // let ele=React.createElement("div",{className:"App"},
// // //   //   React.createElement("h1",null,"Header")
// // //   // )
// // //   let username="sreeja";
// // //   return (
// // //     // ele
// // //     // <div className="App Name">
// // //     //   <h1>Header</h1>
// // //     //   <h2>ffdfd</h2>
// // //     //  </div>
// // //     // <div>
// // //     // <h1>{username}</h1>
// // //     // <p>{10+10}</p>
// // //     // </div>
    
// // //   );
// // // }
// // // class App extends React.Component{
// // //   render(){
// // //     return(
// // //       <h1>Class based object</h1>
// // //     )
// // //   }
// // // }
// // // function App(){
// // //   return(
// // //     <h1>Function Based object</h1>
// // //   )
// // // }

// // // export default App;
// // //rce,rafce,rfce


// // const App = () => {
// //   return (
// //     // <div className="app">
// //     // <Navbar/>
// //     // <Main/>
// //     // <div className="sidebar">
// //     // <Sidebar1/>
// //     // <Sidebar2/>
// //     // </div>
// //     // <Footer/>
// //     // </div>
// //     <div>
// //     {/* <CBCPropsEx
// //     username="sreeja"
// //     age={20}
// //     hobbies={["Reading books"," movies"]}
// //     address={{city:"adilabad",area:"adilabad"}}
// //     senFun={function(){alert("Hi i am sreeja")}}


// //     /> */}
// //     <FBCPropEx
// //     username="ABC"
// //     isMarried={true}
// //     hobbies={["Reading books"," movies"]}
// //     />
// //     </div>

// //   )

// // }

// // export default App




// // // export class App extends Component. {
// // //   render() {
// // //     return (
// // //       <div>
// // //         <CBCPropsEx/>
// // //       </div>
// // //     )
// // //   }
// // // }

// import React from 'react'
// import PropChildEx from './components/props/PropChildEx'
// import Subchild from './components/props/Subchild'
// import Child1 from './components/props/Child1'
// export const App = () => {
//   return (
//     <div>
//       <PropChildEx num={1000}>
//         <h1>This is data coming from props children</h1>
//       <Subchild/>
//       </PropChildEx>
//       <Child1 university="MRU"
//       />
//     </div>
//   )
// }

// export default App
import React from 'react'
// import CBCStateex from './stateEx/CBCStateex'
// import FBCStateex from './stateEx/FBCStateex'
// import FunctionalComponent from './components/FunctionalComponent'
// import "./components/dd/Styles.css"
// import styles from './myStyle.module.css'
// import Assignment from './Assignment'
// import MyForm from './MyForm'
import RefEx from './components/hooksEX/RefEx'
import UseEffectEx from './components/hooksEX/UseEffectEx'
const App = () => {
  return (
    <div>
      {/* <CBCStateex/>
       */}
       {/* <FBCStateex/> */}
       {/* <h1 class="heading">This is on styling class</h1>
       <h1 class={styles.error}>Error</h1>
       <FunctionalComponent clgName="MRU" apply={true}/> */}
       {/* <Assignment/>
        */}
        {/* <MyForm/> */}
        {/* <UseEffectEx/> */}
        <RefEx/>
    </div>
  )
}

export default App

