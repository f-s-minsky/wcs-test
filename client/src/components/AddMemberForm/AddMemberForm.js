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
    // console.log(
    //   'memberToAdd in AddMemberForm',
    //   memberToAdd
    // );
    props.addNewMember(memberToAdd);
    setNameInput('');
  };

  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
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
        <button type='submit'>Envoyer</button>
      </form>
    </>
  );
};

export default AddMemberForm;
