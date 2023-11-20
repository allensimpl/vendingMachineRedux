import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import configureAppStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupInterceptors } from "./middleware/network";
import { Router } from "./router";
import "antd/dist/antd.min.css";
import "./index.scss";
const store = configureAppStore();
setupInterceptors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>
); 	
reportWebVitals();
