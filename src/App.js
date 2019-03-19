import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		newTodo: '',
		todos: []
	}

	handleChange = e => {
		this.setState({
			newTodo: e.target.value
		})
	}

	addTodo = e => {
		e.preventDefault();
		if(this.state.newTodo.trim() === '') {
			this.setState({
				todos: [...this.state.todos]
			});
		} else {
			this.setState({
			todos: [{id: this.state.todos.length + 1, title: this.state.newTodo}, ...this.state.todos],
			newTodo: ''
			});
		}
	}

	delete = (id) => {
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		});
	}


  render() {
    return (
      <div>
        <div className="header">Do-List</div>
        <div className="container">
        	<form onSubmit={this.addTodo}>
        		<input type="text" onChange={this.handleChange} value={this.state.newTodo} placeholder="Enter item here..." />
        		<input type="submit" value="New Item"/>
        	</form>
        	<ul>
        		{this.state.todos.map(todo => <li className="item" key={todo.id}>{todo.title} <span onClick={() => this.delete(todo.id)}><i class="fas fa-trash-alt"></i></span></li>)}
        	</ul>
        </div>
      </div>
    );
  }
}

export default App;
