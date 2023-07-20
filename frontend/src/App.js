import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list"
import EditExercises from "./components/edit-exercises"
import CreateExercise from "./components/create-exercise"
import CreateUser from "./components/create-user"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route path="/" element={<ExercisesList/>} /> 
        <Route path="/edit/:id" element={<EditExercises/>} /> 
        <Route path="/create" element={<CreateExercise/>} /> 
        <Route path="/user" element={<CreateUser />} />
      </Routes> 
    </Router>
  );
}

export default App;
