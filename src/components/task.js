import Checkbox from "react-bootstrap/lib/Checkbox";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import PropTypes from "prop-types";
import React from "react";

class Task extends React.Component {
	static defaultProps() {
		return {
			task: {
				title: "",
				completed: false
			}
		};
	}

	handleToggle(task) {
		debugger;
	}

	render() {
		const { task } = this.props;
		return (
			<ListGroupItem>
				<Checkbox
					checked={task.completed}
					onChange={() => this.handleToggle.bind(this, task)()}
				>
					{task.title}
				</Checkbox>
			</ListGroupItem>
		);
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired
};

export default Task;
