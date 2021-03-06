import { useState, useEffect } from 'react';
import axios from 'axios';
import AddMemberForm from '../AddMemberForm/AddMemberForm';
import MembersList from '../MembersList/MembersList';
import './CrewDashboard.css';

const CrewDashboard = () => {
  const [members, setMembers] = useState([]);
  const [nameInput, setNameInput] = useState('');

  // Execute GET request and load in members state
  useEffect(() => {
    getMembersList();
  }, []);

  const getMembersList = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/members'
      );

      const responseData = response.data.members;

      setMembers([...responseData]);
    } catch (error) {
      console.error(error);
    }
  };

  //Post request add new member
  const addNewMember = async (memberToAdd) => {
    try {
      await axios.post(
        'http://localhost:5000/api/members',
        memberToAdd
      );
      getMembersList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='crew-dashboard'>
      <h2 className='crew-dashboad-title'>
        Ajouter un(e) Argonaute
      </h2>
      <AddMemberForm
        addNewMember={addNewMember}
        nameInput={nameInput}
        setNameInput={setNameInput}
      />
      <MembersList members={members} />
    </div>
  );
};

export default CrewDashboard;
