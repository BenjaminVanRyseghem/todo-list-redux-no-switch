import abstractAction from "./abstractAction";

/**
 * @constructor TodoCreated
 *
 * @extends AbstractAction
 * @param {*} payload - Action payload
 * @param {Object} [my] - Protected properties holder
 */
function TodoCreated(payload, my = {}) {
	let that = abstractAction(payload, my);

	that.performTodoReducer = (state) => Object.assign({}, state, my.payload);

	return that;
}

export function createTodo(payload) { return new TodoCreated(payload) }
