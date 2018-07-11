import App from "../components/app";
import { connect } from "react-redux";
import { createTodo } from "../actions/tasks";
import { getAll } from "../actions/api/tasks";
import PropTypes from "prop-types";
import React from "react";

class AppContainer extends React.Component {
	componentDidMount() {
		this.props.getAll();
	}

	addTask() {
		this.props.createTodo();
	}

	render() {
		return (
			<App
				tasks={this.props.tasks}
				onAddTask={this.addTask.bind(this)}
				onClear={() => { debugger; }}
			/>
		);
	}
}

AppContainer.propTypes = {
	tasks: PropTypes.array.isRequired,
	getAll: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired
};

const mapStateToProps = ({ tasks: { tasks } }) => ({ tasks });

const mapDispatchToProps = (dispatch) => ({
	createTodo: (payload) => dispatch(createTodo(payload)),
	getAll: (payload) => getAll(payload)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);
