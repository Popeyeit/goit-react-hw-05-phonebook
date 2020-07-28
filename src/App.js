import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import './App.css';
class App extends Component {
  state = {
    contacts: [],
    hasNameInContacts: false,
    search: '',
    isLoade: false,
  };
  hasContact = name => {
    const { contacts } = this.state;
    return contacts.some(cont => cont.name === name);
  };
  addContact = item => {
    const hasNameIn = this.hasContact(item.name);
    if (hasNameIn) {
      this.setState({ hasNameInContacts: true });
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, item],
      hasNameInContacts: false,
    }));
  };
  deleteContact = id => {
    console.log(id);
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };
  handleInputSearch = ({ target }) => {
    this.setState({ search: target.value });
  };
  findContact = () => {
    const { contacts, search } = this.state;
    if (search) {
      return contacts.filter(item => item.name.includes(search));
    }
    return contacts;
  };
  componentDidMount() {
    this.setState({ isLoade: true });
  }

  render() {
    const { contacts, hasNameInContacts, search, isLoade } = this.state;
    return (
      <div>
        <CSSTransition
          classNames="phonebook"
          timeout={1500}
          in={isLoade}
          mountOnEnter
        >
          <div>
            <h1>Phonebook</h1>
          </div>
        </CSSTransition>
        <CSSTransition
          in={hasNameInContacts}
          classNames="alert"
          unmountOnExit
          timeout={2500}
          onEntered={() => this.setState({ hasNameInContacts: false })}
        >
          <div className="alert-wrapper">
            <h1 className="alert-title">SPARTAAAAAAAAAAAA</h1>
          </div>
        </CSSTransition>
        <Form addContact={this.addContact} />
        <CSSTransition
          in={contacts.length > 1}
          unmountOnExit
          classNames="search"
          timeout={250}
        >
          <label>
            Find contacts by name
            <input
              type="text"
              name="search"
              value={search}
              onChange={this.handleInputSearch}
            />
          </label>
        </CSSTransition>

        <ContactList
          contacts={this.findContact()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
