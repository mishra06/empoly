import React from 'react'

const TeamMember = ({name, age, id, dispatch}) => {
  return (
    <div style={{backgroundColor: 'slategray', margin: "10px 0px"}}>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <button
         onClick={()=>{
            dispatch({
                type : 'remove_member_from_team',
                payload : id
            })
         }}
        >REMOVE</button>
    </div>
  )
}

export default TeamMember