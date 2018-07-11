import abstractRequestAction from "../abstractRequestAction";
import abstractRsaaAction from "../abstractRsaaAction";

/**
 * GetAllSuccess is performed when all organisation had been requested from the server with success.
 * @constructor GetAllSuccess
 *
 * @extends AbstractRequestAction
 *
 * @param {Object} spec - Unused parameter
 * @param {Object} [my] - Protected properties holder
 */
function GetAllSuccess(spec, my = {}) {
	/** @lends GetAllSuccess.prototype */
	let that = abstractRsaaAction(spec, my);

	that.type = "Tasks/GetAll/Success";

	that.performTodoReducer = (state) => Object.assign({}, state, { tasks: that.payload().data });

	return that;
}

/**
 * @constructor GetAll
 *
 * @extends AbstractRequestAction
 * @param {*} spec - Unused parameter
 * @param {Object} [my] - Protected properties holder
 */
export default function GetAll(spec, my = {}) {
	/** @lends GetAll.prototype */
	let that = abstractRequestAction(spec, my);

	my.endpoint = "/posts";

	my.actions = Object.assign({}, my.actions, {
		success: GetAllSuccess
	});

	return that;
}
