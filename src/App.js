import './App.css'
import {useState, useMemo} from 'react'
import Home from './Components/Home'

function operacaolenta () {
  let c
  for(let i = 0; i < 100000000; i++){
    c = i + i / 10
  }
  return c

}
console.log(operacaolenta())

function App() {
  const [contar, setContar] = useState(0)

  const t1 = performance.now()
  const valor = useMemo(() => operacaolenta(), [])
  console.log(performance.now() - t1)

  return (
      <div className="App">
        <Home />
        <br/>
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
  );
}

export default App
