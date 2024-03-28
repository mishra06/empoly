import {useReducer, useRef, useState} from 'react';
import Employees from "./components/Employees";
import Team from "./components/Team";
import { act } from 'react-dom/test-utils';

const reducer = (prevState, action)=>{

  console.log("hello")

  switch(action.type){

    case 'add_new_employee_to_employees_array':
      
      return {
        employees : [...prevState.employees, action.payload],
        team : prevState.team
      }

    case 'add_member_to_team':

      const employee = prevState.employees[action.payload-1]
      employee.isPartOfTeam = true

      const employeesData = prevState.employees;

      employeesData.splice(action.payload-1, 1, employee)

      return {
        employees : employeesData,
        team : [...prevState.team, prevState.employees[action.payload-1]]
      }
    
    case 'remove_member_from_team':
      return {
        employees : prevState.employees,
        team : prevState.team.filter((member)=>member.id!=action.payload)
      }

    default:
      return prevState

  }

}

const initialState = {
  employees: [
    {
      id: 1,
      name : "Ankit",
      age : 25,
      isPartOfTeam : false
    },
    {
      id : 2,
      name : "Abesh",
      age : 26,
      isPartOfTeam : false
    },
    {
      id : 3,
      name : "Jinu",
      age : 24,
      isPartOfTeam : false
    }
  ],
  team: []
}

function App() {

  const [data, dispatch] = useReducer(reducer, initialState)

  const nameInputRef = useRef(null);

  const ageInputRef = useState(null);

  return (
    <div>
      <div style={{display:'flex', flexDirection: 'row'}}>
        <Employees dispatch={dispatch} data={data}/>
        <Team dispatch={dispatch} data={data}/>
        {console.log(data)}
      </div>
      <div>
        <input ref={nameInputRef} placeholder='Enter Name' type='text'/>
        <input ref={ageInputRef} placeholder='Enter Age' type='number'/>
        <button 
          onClick={()=>{
            const name = nameInputRef.current.value;
            const age = ageInputRef.current.value;
            const newEmploye = {
              name : name,
              age : age,
              id : data.employees.length+1,
              isPartOfTeam : false
            }
            dispatch({type: 'add_new_employee_to_employees_array', payload : newEmploye})
          }}
        >ADD NEW</button>
      </div>
    </div>
  );
}

export default App;