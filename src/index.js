import { createRoot } from "react-dom/client";
import LivecycleSdk from '@livecycle/sdk'
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

LivecycleSdk.init()
createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)