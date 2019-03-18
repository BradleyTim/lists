import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		newTodo: '',
		todos: [
			{
				id: 1,
				title: 'one'
			},
			{
				id: 2,
				title: 'two'
			}
		]
	}

	handleChange = e => {
		this.setState({
			newTodo: e.target.value
		})
	}

	addTodo = e => {
		e.preventDefault();
		this.setState({
			todos: [{id: this.state.todos.length + 1, title: this.state.newTodo}, ...this.state.todos],
			newTodo: ''
		});
	}


  render() {
    return (
      <div>
        <div className="header">List</div>
        <div className="container">
        	<form onSubmit={this.addTodo}>
        		<input type="text" onChange={this.handleChange} value={this.state.newTodo} placeholder="Enter item here..." />
        		<input type="submit" value="New Item"/>
        	</form>
        	<ul>
        		{this.state.todos.map(todo => <li className="item" key={todo.id}>{todo.title}</li>)}
        	</ul>
        </div>
      </div>
    );
  }
}

export default App;
