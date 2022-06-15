import { v4 as uuidv4 } from 'uuid';
import './MembersList.css';

const MembersList = ({ members }) => {
  return (
    <>
      <h2>Membres de l'équipage</h2>

      <ul className='member-list'>
        {members.map((member) => (
          <li key={uuidv4()}>{member.name}</li>
        ))}
      </ul>
    </>
  );
};

export default MembersList;
