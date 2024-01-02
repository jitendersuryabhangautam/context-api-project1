import React from 'react';

const UserContext = React.createContext()

export default UserContext;




// there is another way of making context.first make a file and then in there make a context like this 

// import {createContext, useContext} from 'react';
// export const ThemeContext = createContext({
//     themeMode: 'light',
//     darkTheme: ()=>{},
//     lightTheme: ()=>{},
// });

// export const ThemeProvider = ThemeContext.Provider;

// export default function useTheme(){
//     return useContext(ThemeContext);
// }


// for this you need only one file and also not need to import two two files in a components. also for using the context in a component you can use a code like this. reference is below

// import { useState } from 'react'
// import { useEffect } from "react";
// import "./App.css";
// import { ThemeProvider } from "./context/Theme";

// function App() {
//   const [themeMode, setThemeMode] = useState("light");
//   const lightTheme = ()=>{
//     setThemeMode("light");
//   }
//   const darkTheme = ()=>{
//     setThemeMode("dark");
//   }

//   useEffect(()=>{
//     document.querySelector('html').classList.remove("light", 'dark')
//     document.querySelector('html').classList.add(themeMode)
//   }, [themeMode])

//   return (
//     <ThemeProvider value={themeMode, lightTheme, darkTheme}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             {/* theme buton*/}
//           </div>
//           <div className="w-full max-w-sm mx-auto"></div>
//           {/* card button*/}
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// when you dont know whats inside the method you are inporting from a context then do one thing make a function in the component with same name as you defined in the contexxt and there define its functioning

