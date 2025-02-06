
const App = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-3 border-2 border-amber-500">
        <h1>Side Bar</h1>
      </div>
      <div className="col-span-9 border-2 border-red-500">
        <h1>Main Content</h1>
      </div>
    </div>
  )
}

export default App
