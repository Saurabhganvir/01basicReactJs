import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  //setting the variables required
  const [length, setlength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [select , setSelect] = useState(false);

  const passwordGenerator = useCallback(()=>{
    let pass='';
    let str='ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed){
      str+='0123456789';
    }
    if(charAllowed){
      str+='!@#$%^&*()_+';
    }

    //loop for generating a string of size length
    for(let i=1; i<length; i++){
      //generating a random number of range str.length
      const char =Math.floor(Math.random()*str.length +1);
      //adding it to pass string
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length, charAllowed, numberAllowed ]);


useEffect(()=>{
  passwordGenerator();
}, [length, charAllowed, numberAllowed])

const copyPasswordToClipboard = ()=>{
  //we are not copyinng online
  // we already have password string so we copy that to our clipboard directly
  window.navigator.clipboard.writeText(password);
  if(select)passwordRef.current?.select();
    setSelect((prev)=>!prev);
  
  //high light the password usinng use ref
  
  // console.log(passwordRef.current)
}

//we want a reference to our password input field
const passwordRef = useRef(null);


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-52 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password}
          placeholder='Password'
          readOnly
          className='outline-none w-full py-1 px-3'
          ref={passwordRef}
        />
        <button
          className='outlin-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
          onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 justify-between'>
        <div className='flex items-center gap-x-1 pr-3'>
          <input 
            type="range" 
            min={6}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setlength(e.target.value)}
            name="" 
            id="length" />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            name="" 
            id="numbers" />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            name="" 
            id="characters" />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
