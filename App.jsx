import './App.css'

import { useState } from 'react'



function App() {

 const [studentName,setStudentName]= useState('')
 const [students,setStudents] = useState([])
const [isEditable,setIsEditable] = useState(false)
const [editableStudent,setEditableStudent] = useState(null)

 
 const onChangeHandeler =(e) => {
  setStudentName(e.target.value)
 }

 const addStudent = (e,name) => {
  e.preventDefault()
  const newStudent = {
                     id:Date.now(),
                     name
                     }
 
  setStudents([...students,newStudent])
  setStudentName('')
 }

 const deleteHandeler = (StudentId) => {
         const newStudentList = students.filter((student) => student.id !== StudentId);
         setStudents(newStudentList)
 }

 const editHandeler = (studentId) => {
  setIsEditable(true);
   const student= students.find((item) => item.id === studentId);
   setEditableStudent(student);
   setStudentName(student.name)
 }

 const updateHandeler = (e,name) => {
   e.preventDefault();
   if(name){
    editableStudent.name = name ||  editableStudent.name ;
      setStudentName("");
      setIsEditable(false);
      setEditableStudent(null)
      
   }else{
    alert("this is not valid")
   }
 }
 

  return (
            <center>
       
              <div className='main-contenir'>

                <input type="text" onChange={onChangeHandeler} value={studentName} placeholder='Whats on your mind?' />

                <button onClick={(e) => isEditable ? updateHandeler(e,studentName) : addStudent(e,studentName)}>{ isEditable ? "Update" :"post" }</button>

                  <div className='sub'>
                    <div> 
                      <h3>All Student</h3>

                      <ul>
                        {students.map(student =>(
                          <li>
                            {student.name}
                            <button onClick={() =>editHandeler(student.id)}>Edit</button>
                            <button onClick={() => deleteHandeler(student.id)}>Delete</button>
                            <button>Present</button>
                            <button>Absent</button>
                          
                          </li>
                        )
                          
                        )}
                      </ul>
                      
                      </div>

                     <div>
                     <h3>Present Student</h3>
                     
                    </div>

                    <div>

                    <h3>Absent Student</h3>


                    </div>

                  </div>
              </div>
               
              
            
               

            </center>
    
    
  )
}

export default App
