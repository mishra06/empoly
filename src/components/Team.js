import React from 'react';
import TeamMember from './TeamMember';

const Team = ({data, dispatch}) => {

  const {team} = data;  

  return (
    <div>
        <h1>Team</h1>
        {team.map((member)=><TeamMember dispatch={dispatch} id={member.id} name={member.name} age={member.age}/>)}
        <h2>Average Age : {data.team.reduce((acc, current)=> acc+=current.age, 0)/data.team.length}</h2>
    </div>
  )
}

export default Team