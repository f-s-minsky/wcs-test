import { v4 as uuidv4 } from 'uuid';
import './MembersList.css';

const MembersList = ({ members }) => {
  return (
    <div>
      <h2>Membres de l'équipage</h2>

      {members.length === 0 ? (
        <h1 className='member-list-message'>
          No Members Yet !!
        </h1>
      ) : (
        <ul className='member-list'>
          {members.map((member) => (
            <li key={uuidv4()}>{member.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MembersList;
