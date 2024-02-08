import Counter from "./component/Counter"
import CheckOutFrom from "./component/checkoutFrom/CheckOutFrom"
import Tom from "./component/checkoutFrom/Tom"

function App() {


  return (
    <>
      <div>
      <h3 className="text-center text-3xl font-bold">Counter app using redux and react-redux Following anisul sir</h3>
        <Counter/>
        <CheckOutFrom/>
        <Tom/>
      </div>
      
    </>
  )
}

export default App
