import Alert from "react-bootstrap/lib/Alert";
import ListGroup from "react-bootstrap/lib/ListGroup";
import PropTypes from "prop-types";
import React from "react";
import Task from "./task";

class TaskList extends React.Component {
	static defaultProps() {
		return {
			tasks: []
		};
	}

	render() {
		const { tasks } = this.props;

		if (tasks.length === 0) {
			return (
				<Alert bsStyle="warning">
					<strong>You have no tasks</strong> Create some using the Add New button below.
				</Alert>
			);
		}

		return (
			<form>
				<ListGroup>
					{tasks.map((task) =>
						<Task task={task} key={task.title}/>)}
				</ListGroup>
			</form>
		);
	}
}

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired
};

export default TaskList;
