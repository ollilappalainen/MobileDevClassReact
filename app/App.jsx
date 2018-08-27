import React from 'react';
import './App.less';

export default class App extends React.Component {
    constructor () {
        super();

        this.state = {
            todos: [],
            description: '',
            date: '',
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    addTodo = (e) => {
        e.preventDefault();
        this.setState({
            date: '',
            description: '',
            todos: [...this.state.todos, {date: this.state.date, description: this.state.description}],
        });
    }

    deleteTodo = (item) => {
        const todos = this.state.todos.filter(todo => item !== todo);
        this.setState({todos: todos});
    }

    render() {
        let todos;
        if (this.state.todos.length > 0) {
            todos = this.state.todos.map((todo, index) =>
                <tr key={index} className="todo-output__tbody-row">
                    <td>{todo.date}</td>
                    <td>{todo.description}</td>
                    <td><button onClick={this.deleteTodo.bind(this, todo)}>DELETE</button></td>
                </tr>
            );
        } else {
            todos = <tr><td colSpan="2">No todos. Pls make one.</td></tr>;
        }

        return (
            <div className="app">
                <div className="header__wrapper">
                    <h1 className="header__title">TODO</h1>
                </div>
                <div className="todo-form__wrapper">
                    <form className="todo-form">
                        <h2 className="todo-form__label">Add ticket:</h2>
                        <div className="todo-form__inputs-wrapper">
                            <p>Date</p>
                            <input className="todo-form__date-input js-todo-input" type="date" name="date" value={this.state.date} onChange={this.handleInputChange} />
                            <p>Description</p>
                            <input className="todo-form__description-input js-todo-input" type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                            <button className="todo-form__button" onClick={this.addTodo} type="submit">Add</button>
                        </div>
                    </form>
                </div>
                <div className="todo-output__wrapper">
                    <table className="todo-output__table">
                        <thead className="todo-output__thead">
                            <tr className="todo-output__thead-row">
                                <th className="todo-output__thead-text">Date</th>
                                <th className="todo-output__thead-text">Description</th>
                            </tr>
                        </thead>
                        <tbody className="todo-output__tbody">
                            {todos}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}