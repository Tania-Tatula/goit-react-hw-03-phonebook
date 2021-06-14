import React from "react";
import PropTypes from "prop-types";

import styles from "./Contacts.module.css";

const Filter = ({ value, onChange }) => (
  <div className={styles.contactsBlock}>
    <label>
      Find contact by name
      <input
        className={styles.input}
        type='text'
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
