import React, {
  Component
} from 'react';
import './Form.css';
export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  changeValue = ({
    target
  }) => {
    const {
      value
    } = target;
    const {
      name
    } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      number
    } = this.state;

    const item = {
      id: Date.now(),
      name,
      number,
    };
    console.log(item);
    this.props.addContact(item);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const {
      name,
      number
    } = this.state;
    return ( <
      form onSubmit = {
        this.handleSubmit
      }
      className = "form" >
      <
      input className = "form-item"
      type = "text"
      value = {
        name
      }
      name = "name"
      placeholder = 'Your name'
      onChange = {
        this.changeValue
      }
      />{' '} <
      input className = "form-item"
      type = "phone"
      placeholder = '333-333-333'
      value = {
        number
      }
      name = "number"
      onChange = {
        this.changeValue
      }
      />{' '} <
      button className = "form-btn" > Add contact < /button>{' '} <
      /form>
    );
  }
}