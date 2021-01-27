import React, { Component } from 'react';

export default class ExpenseForm extends Component {
	state = {
		description: '',
		amount: '',
		note: ''
	};

	onDescriptionChange = (e) => {
		this.setState(() => {
			return { description: e.target.value };
		});
	};

	onAmountChange = (e) => {
		console.log(!!e.target.value.match(/[\d]*/)[0]);
		if (!!e.target.value.match(/[\d]*/)[0]) {
			this.setState(() => {
				return { amount: e.target.value };
			});
		}
	};

	onNoteChange = (e) => {
		this.setState(() => {
			return { note: e.target.value };
		});
	};

	render() {
		return (
			<div>
				<form action="">
					<input
						type="text"
						placeholder="description"
						autoFocus={true}
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<textarea
						placeholder="Add your notes in here (option)"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}
