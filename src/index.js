import ReactDOM from "react-dom/client"
import App from "./components/app/app"
import "./style.css"
import { Provider } from "react-redux"
import { store } from "./store"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
   <Provider store={store}>
      <App />
    </Provider>
)