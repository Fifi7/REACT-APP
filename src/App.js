import React, { useState, useEffect} from 'react';
import './App.css';
import MemberForm from './Components/js/MemberForm';
import MemberList from './Components/js/MemberList';
import EditMemberForm from './Components/js/EditMemberForm'; 
import { BrowserRouter, Routes, Route,} from 'react-router-dom';



const App = () => {
  const [members, setMembers] = useState([]);
  const [editedMember, setEditedMember] = useState(null);

  const addMember = (member) => {
    setMembers([...members, member]);
    const updatedMembers = [...members, member]
    setMembers(updatedMembers);
    localStorage.setItem('members', JSON.stringify(updatedMembers));
  };

  useEffect(() => {
    const storedMembers = localStorage.getItem('members');
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    }
  }, []);

  const editMember = (member) => {
    setEditedMember(member);
  };

  const updateMember = (updatedMember) => {
    const memberIndex = members.findIndex((member) => member.id === updatedMember.id);
    const updatedMembers = [...members];
    updatedMembers[memberIndex] = updatedMember;
    
    setMembers(updatedMembers);
    setEditedMember(null);
  };

  
  const deleteMember = (memberId) => {
    const updatedMembers = members.filter((member) => member.id !== memberId);
    setMembers(updatedMembers);
  };

  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
      <Route path="/" element={<MemberForm onAddMember={addMember} />} />
      <Route path="/member-list" element={<MemberList members={members}  editMember={editMember} deleteMember={deleteMember}/>} />
      <Route path = "/edit/:id" element={<EditMemberForm member={editedMember} onUpdateMember={updateMember} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
    
   

export default App;




































