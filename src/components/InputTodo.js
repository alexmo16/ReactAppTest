import React, { Component } from 'react';

class InputTodo extends Component {

    state = {
        title: ''
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Add Todo...'
                    name='title'
                    value={this.state.title}
                    onChange={this.onChange} />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default InputTodo;
