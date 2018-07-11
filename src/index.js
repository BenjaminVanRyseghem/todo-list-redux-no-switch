import AppContainer from "./containers/appContainer";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";

/**
 * Entry point
 * @param {string} selectorId - Where to render shit
 * @return {Object} api
 */
function Todo({ selectorId }) {
	let api = {};

	api.render = () => {
		ReactDOM.render(
			(
				<Provider store={store}>
					<AppContainer/>
				</Provider>
			),
			document.getElementById(selectorId));
	};

	return api;
}

export default Todo;
module.exports = Todo;
