import React from 'react'

const EmployeCard = ({name, age, id, isPartOfTeam, dispatch}) => {
  return (
    <div style={{backgroundColor: 'pink', margin: "10px 0px"}}>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <div>
            {
                isPartOfTeam==false && (<button
                    onClick={()=>{
                        dispatch({type: 'add_member_to_team', payload: id})
                    }}
                >Add</button>)
            }
            <span>ADDED IN Team : {isPartOfTeam ? "YES" : "NO"}</span>
        </div>
    </div>
  )
}

export default EmployeCard