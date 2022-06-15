import { useState } from 'react';
import './AddMemberForm.css';

const AddMemberForm = (props) => {
  const [nameInput, setNameInput] = useState('');

  const handleInputChange = (e) => {
    const name = e.target.value;

    setNameInput(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const memberToAdd = { name: nameInput };

    props.addNewMember(memberToAdd);
    setNameInput('');
  };

  return (
    <>
      <form
        className='add-member-form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Nom de l'Argonaute</label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Homère'
          value={nameInput}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='add-member-form-button'
        >
          Envoyer
        </button>
      </form>
    </>
  );
};

export default AddMemberForm;
