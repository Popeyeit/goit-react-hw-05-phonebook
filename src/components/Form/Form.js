import React, { Component } from 'react';

export default class Form extends Component {
  state = { name: '', number: '' };
  changeValue = ({ target }) => {
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const item = {
      id: Date.now(),
      name,
      number,
    };
    console.log(item);
    this.props.addContact(item);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={this.changeValue}
        />
        <input
          type="number"
          value={number}
          name="number"
          onChange={this.changeValue}
        />
        <button>Add contact</button>
      </form>
    );
  }
}
