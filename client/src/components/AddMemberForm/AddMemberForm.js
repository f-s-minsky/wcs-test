import { useState } from 'react';
import './AddMemberForm.css';

const AddMemberForm = (props) => {
  // const [nameInput, setNameInput] = useState('');

  const handleInputChange = (e) => {
    const name = e.target.value;

    props.setNameInput(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const memberToAdd = { name: props.nameInput };

    props.addNewMember(memberToAdd);
    props.setNameInput('');
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
          value={props.nameInput}
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
