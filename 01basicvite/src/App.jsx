import Youtube from "./Youtube"


function App() {
  const username = "Saurabh";
  return (
    <>
      <h1>Vite React Basic App {2+2}</h1>
      {/* if(username=="Saurabh"?"yes":"no") 
      this will not work because jsx wants things that can be evaluated or it already is*/}
      <h2>Vite REeact Basic App {username}</h2>
      <Youtube/>
    </>
  )
}

export default App
