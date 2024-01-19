import React, { useState, useEffect } from 'react';
import './Team.css';
import Footer from '../../Components/Footer/Footer';
import MemberCard from './MemberCard/MemberCard';

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {

    //REPLACE API ENDPOINT WITH WHATEVER IS NEEDED
    fetch('API_ENDPOINT')
      .then(response => response.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='team-container'>
      <div className='team-title'>
        Meet The Team
      </div>
      <div className='team-member-container'>
        {teamMembers.map(member => (
          <MemberCard     
          //replace identifiers as needed
            key={member.id} 
            img={member.imageUrl} 
            name={member.name} 
            title={member.title} 
            link={member.link} 
          />
        ))}
      </div>
      <div className='join-team-container'>
        <div className='join-team-title'>
          Want to join our team? 
        </div>
        <div className='join-team-info'>
          We offer a variety of roles across multiple teams. Whether you come from a business, engineering, humanities, or any other background, there is a position for you! 
        </div>
        <div className='join-team-btn'>
          <a href="/Join">Join Now!</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
