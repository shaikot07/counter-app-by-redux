import Counter from "./component/Counter"
import CheckOutFrom from "./component/checkoutFrom/CheckOutFrom"
import CountDown from "./component/checkoutFrom/CountDown"
import Tom from "./component/checkoutFrom/Tom"

function App() {


  return (
    <>
      <div>
      <h3 className="text-center text-3xl font-bold">Counter app using redux and react-redux Following anisul sir</h3>
        <Counter/>
        <CheckOutFrom/>
        <Tom/>
        <CountDown/>
      </div>
      
    </>
  )
}

export default App
