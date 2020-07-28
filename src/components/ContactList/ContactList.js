import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ContactList.css';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className="list">
      {contacts.map(({ name, number, id }) => {
        return (
          <CSSTransition key={id} classNames="change" timeout={250}>
            <li className="item">
              <p>{name}</p>
              <p>{number}</p>
              <button onClick={() => deleteContact(id)}>close</button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default ContactList;
