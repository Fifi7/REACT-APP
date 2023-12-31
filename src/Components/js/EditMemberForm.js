import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../css/MemberForm.css';
import '../css/EditMemberForm.css';
import '../css/MemberList.css';


const EditMemberForm = ({member, onUpdateMember }) => {

const [name, setName] = useState(member.name);
const [jobTitle, setJobTitle] = useState(member.jobTitle);

 
  useEffect(() => {
    if(member){
  setName(member.name);
  setJobTitle(member.jobTitle);
    }
  }, [member]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(member && onUpdateMember){
    const updatedMember = {
      ...member,
      name,
      jobTitle,
    };
  
    onUpdateMember(updatedMember);
  }
};

  return (
    <form className="edit-member-form" onSubmit={handleSubmit}>
      <div className="edit-back-arrow">
        <Link to="/member-list">
          <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" />
        </Link>
      </div>
      <div className="edit-image-input">
        <img src={member.image} alt={member.name} className="edit-preview-image" />
      </div>
      <input
        type="text"
        placeholder="Full Names"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="edit-input-field"
      />
      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        required
        className="edit-input-field"
      />
      <div className="edit-button-container">
      <button className="button" onClick={handleSubmit}>
          Edit Member
        </button>
      {/* <button type="submit" className="button">Edit Member</button> */}
      </div>
    </form>
  );
};


export default EditMemberForm;
