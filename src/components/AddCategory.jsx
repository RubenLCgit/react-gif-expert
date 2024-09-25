import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (event) => {
    setInputValue(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onAddCategory(inputValue.toUpperCase());
    setInputValue("");
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={ changeInputValue }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory : PropTypes.func.isRequired
}

export default AddCategory
