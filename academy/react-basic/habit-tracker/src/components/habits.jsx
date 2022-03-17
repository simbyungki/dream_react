import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
	state = {
		habits: [
			{id: 1, name: 'Reading', count: 0},
			{id: 2, name: 'Running', count: 0},
			{id: 3, name: 'Coding', count: 0},
		]
	}

	handleIncrement = (habit) => {
		const habitId = habit.id - 1;
		console.log(this.state.habits[habitId])
		this.state.habits[habitId].count = this.state.habits[habitId].count + 1;
	}

	handleDecrement = (habit) => {
		const habitId = habit.id - 1;
		const resultCount = this.state.habits[habitId].count -= 1;
		console.log(this.state.habits[habitId])
		// this.state.habits[habitId].count = resultCount < 0 ? 0 : resultCount;
	}

	handleDelete = (habit) => {
		const habitId = habit.id - 1;
		this.state.habits.remove(habitId);
	}

	render() {
		return (
			<ul>
				{this.state.habits.map(habit => (
					<Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
				))}
			</ul>
		);
	}
}

export default Habits;