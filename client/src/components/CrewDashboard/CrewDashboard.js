import { useState, useEffect } from 'react';
import axios from 'axios';
import AddMemberForm from '../AddMemberForm/AddMemberForm';
import MembersList from '../MembersList/MembersList';
import './CrewDashboard.css';

const CrewDashboard = () => {
  // const [nameInput, setNameInput] = useState('');
  const [members, setMembers] = useState([]);

  // useEffect(() => {
  //   const addMember = async () => {
  //     try {
  //       await axios.post(
  //         'http://localhost:5000/api/members',
  //         { name: nameInput }
  //       );
  //       // setMembers((prevState) =>
  //       //   prevState.concat(nameInput)
  //       // );

  //       // console.log('members ', members);
  //     } catch (error) {}
  //   };
  //   addMember();
  // }, [nameInput]);

  // GET request data from database

  const getMembersList = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/members'
      );

      const responseData = response.data.members;

      console.log('[...responseData] in getMemberList', [
        ...responseData,
      ]);

      setMembers([...responseData]);
    } catch (error) {
      console.error(error);
    }
  };

  // Execute Get request and load in members state
  useEffect(() => {
    getMembersList();
  }, []);

  // const addNewMember = (memberToAdd) => {
  //   // setMembers([...members, nameInput]);
  //   // setNameInput(nameInput);
  //   setMembers([...members, memberToAdd]);
  //   console.log(
  //     'addNewMemberHandler nameInput param CrewDash',
  //     nameInput
  //   );
  // };

  // console.log(
  //   'nameInput in CrewDash after useeffect+',
  //   nameInput
  // );

  // console.log(
  //   'members in CrewDash after useeffect:',
  //   members
  // );

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
    <>
      <AddMemberForm addNewMember={addNewMember} />
      <MembersList members={members} />
    </>
  );
};

export default CrewDashboard;
