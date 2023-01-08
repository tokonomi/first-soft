import { createRoot } from "react-dom/client";
import LivecycleSdk from '@livecycle/sdk'
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
    {LivecycleSdk.init()}
        <App/>
    </BrowserRouter>
)