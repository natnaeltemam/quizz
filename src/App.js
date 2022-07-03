import React from 'react'
import './App.css'
import Quizzes from './compontes/Quizzes';
//import StartQuizzes from './compontes/StartQuizz';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

const value = {
  "number": "5",
  "catgory": "",
  "diffculty": ""

}
function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/about" element={<Quizzes value={value} />} />
          <Route path="/" element={<StartQuizz />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;

function StartQuizz() {
  let navigate = useNavigate()
  function handleChange(e) {
    if (e.target.name === "difficulty") {
      value['diffculty'] = e.target.value
    }
    else if (e.target.name === 'number_of_q') {

      const numb = parseInt(e.target.value)
      if (numb > 0 && numb <= 50) {
        const str = String(numb);
        value['number'] = str
      }
      else {
        value['number'] = "5"
      }
      console.log(typeof numb)
    }
    else {
      value['catgory'] = e.target.value
    }
    console.log(value)
  }
  return (
    <div className='Start'>
      <h1 className='ka'> Quizzical</h1>
      <p className='in'>Challnge your self</p>
      <form >
        <label htmlFor="number_of_q">Number of Questions(min-1 and max-50): <br /> </label>
        <input
          type="number"
          //="Enter the number of question"
          onChange={handleChange}
          name="number_of_q"
          min={1}
          max={50}

        />
        <label htmlFor="Catgory"><br /> Select Catgory: <br /> </label>
        <select
          id="Catgory"
          name="catagory"
          onChange={handleChange}
        >
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals and  Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science and Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime and Manga</option>
          <option value="32">Entertainment: Cartoon and Animations</option>

        </select>
        <br></br>
        <label htmlFor="Difficulty">Select Difficulty: <br /> </label>
        <select
          id="Difficulty"
          name="difficulty"
          onChange={handleChange}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </form>
      <button
        onClick={() => {
          navigate('/about')
        }}>Start quiz</button>
    </div>
  )
}