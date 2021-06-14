import React from "react";
import PropTypes from 'prop-types';
import styles from "./Contacts.module.css";

const ContactList = ({ contactList, onDeleteContact }) => (
  <>
    <ul className={styles.contactsBlock}>
      {contactList.map(({ name, number, id }) => (
        <li className={styles.contactItem}>
          {name}: {number}{" "}
          <button
            onClick={() => onDeleteContact(id)}
            className={styles.buttonDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
