import React from 'react';
import EmployeCard from './EmployeCard';

const Employees = ({data, dispatch}) => {

  const {employees} = data  

  return (
    <div>
        <h1>Employees</h1>
        {employees.map((emp)=><EmployeCard dispatch={dispatch} isPartOfTeam={emp.isPartOfTeam} id={emp.id} name={emp.name} age={emp.age}/>)}
    </div>
  )
}

export default Employees