import './App.css'
function Button() {
  return(
    <button className="square">X</button>
  )
}
function Square() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  )
}
function App() {
  return (
    <>
      <Square />
      <Square />
      <Square />
    </>
  )
}

export default App
