const initialState = {
	tasks: []
};

/**
 * Reducer managing accounts.
 *
 * @name TodoReducer
 *
 * @param {Object} state - Current application state
 * @param {AbstractAction} action - Action to dispatch
 * @return {Object} new state
 */
export default (state = initialState, action) => {
	if (!action.isAction) { // TODO: remove when we use new style action everywhere
		return state;
	}

	return action.performTodoReducer(state);
};
