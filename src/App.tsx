import {useState} from "react";

function App() {
  const [tank, setTank] = useState(0)
  const [mpg, setMpg] = useState(0)
  const [distance, setDistance] = useState(0)
  const [result, setResult] = useState('')
  const onTankChange = (event) => {
    setTank(event.target.value)
      onCalculate()
  }
  const onMpgChange = (event) => {
    setMpg(event.target.value)
      onCalculate()
  }
  const onDistanceChange = (event) => {
    setDistance(event.target.value)
      onCalculate()
  }
  const onCalculate = () => {
    const carDistance = tank * mpg
      if (carDistance > distance) {
          setResult('Enough fuel')
      } else {
          setResult('Not enough fuel')
      }
  }

  return (
    <div className="App">
        <div>
      <label form="tank">Tank, gallons</label>
      <input value={tank} onChange={onTankChange} name='tank' type='number'/>
        </div>
        <div>
      <label form="mpg">MPG, miles per gallon</label>
      <input value={mpg} onChange={onMpgChange} name='mpg' type='number'/>
        </div>
        <div>
      <label form="distance">Distance, miles</label>
      <input value={distance} onChange={onDistanceChange} name='distance' type='number'/>
        </div>
<button onClick={onCalculate}>Calculate</button>
        {result}
    </div>
  );
}

export default App;
