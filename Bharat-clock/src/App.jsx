import { useState, useEffect} from 'react'

function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [])
  const d = date.toLocaleDateString('en-gb');
  const time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' })

  return (
    <>
      <h1>Bharat Clock</h1>
      <p>This is the clock that shows the time in Bharat at all times </p>
      <p>This is the current time: {d} - {time}</p>
    </>
  )
}

export default App
