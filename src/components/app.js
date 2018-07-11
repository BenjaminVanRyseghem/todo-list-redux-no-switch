import Button from "react-bootstrap/lib/Button";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import PropTypes from "prop-types";
import React from "react";
import TaskList from "./taskList";

class App extends React.Component {
	static defaultProps() {
		return {
			tasks: []
		};
	}

	render() {
		const { onAddTask, onClear, tasks } = this.props;
		return (
			<div className="container">
				<Jumbotron>
					<h1>Learning Redux</h1>
					<p>
						Below is a list of tasks you can implement to better grasp the patterns behind Redux.<br/>
						Most features are left unimplemented with clues to guide you on the learning process.
					</p>
				</Jumbotron>

				<TaskList tasks={tasks}/>

				<Button onClick={onAddTask} bsStyle="primary">Add New</Button>
				<Button onClick={onClear} bsStyle="danger">Clear List</Button>
			</div>
		);
	}
}

App.propTypes = {
	tasks: PropTypes.array.isRequired,
	onAddTask: PropTypes.func.isRequired,
	onClear: PropTypes.func.isRequired
};

export default App;

