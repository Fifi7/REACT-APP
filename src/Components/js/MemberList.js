
import React from 'react';
import '../css/MemberList.css';
import '../css/MemberForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




  const MemberList=({members, editMember, deleteMember})=>{
  const navigate = useNavigate();
  const handleEditClick = (member) => {
    editMember(member);
    navigate('/edit/${member.id}')
  };
  
  const handleDeleteClick = (member) => {
  deleteMember(member.id);
  };
  
  return (
    <div className="member-list">
       <Link to="/" className="back-button">
        Add Member
      </Link>
      {members.length === 0 ? (
        <div className="no-members-container">
        <p>No Members in the Database.</p>
        </div>
      ) : (
      members.map((member) => (
        <div key={member.id} className="member">
          <div className="left-content">
          <img src={member.image} alt={member.name} className="circular-image" />
          <div className="member-details">
          <h4>{member.name}</h4>
          <p>{member.jobTitle}</p>
          </div>
        </div>
        <div className="member-actions">
        <FontAwesomeIcon
              icon={faEdit}
              className="edit-icon"
              onClick={() => handleEditClick(member, editMember)}
            />
          <FontAwesomeIcon
              icon={faTrash}
              className="delete-icon"
              onClick={() => handleDeleteClick(member)}
            />
          </div>
          </div>
      ))
      )}
    </div>
  );
};

export default MemberList;















