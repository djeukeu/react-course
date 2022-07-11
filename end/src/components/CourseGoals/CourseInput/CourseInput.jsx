import React, { Component } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

class CourseInput extends Component {
	
	constructor() {
		super();
		this.state = {
			enteredValue: '',
		};
	}

	goalInputChangeHandler(event) {
		this.setState((prevState) => {
			console.log(prevState);
			return {
				enteredValue: event.target.value,
			};
		});
	}

	formSubmitHandler(event) {
		event.preventDefault();
		this.props.onAddGoal(this.state.enteredValue);
	}

	render() {
		return (
			<form onSubmit={this.formSubmitHandler.bind(this)}>
				<div className='form-control'>
					<label>Course Goal</label>
					<input
						type='text'
						onChange={this.goalInputChangeHandler.bind(this)}
					/>
				</div>
				<Button type='submit'>Add Goal</Button>
			</form>
		);
	}
}

export default CourseInput;
