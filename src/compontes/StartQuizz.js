import React from 'react'
import { useNavigate } from 'react-router-dom'
function Shope(props) {
    let navigate = useNavigate()
    return (
        <div className='Start'>
            <h1 className='ka'> Quizzical</h1>
            <p className='in'>{props.value}</p>
            <form action="">
                <label htmlFor="Catgory">Select Catgory: <br /> </label>
                <select
                    id="Catgory"
                    name="favColor"
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
                    name="favColor"
                >
                    <option value="">Any Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </form>
            <button
                onClick={() => {
                    navigate('/about')
                }}>Start quiz</button>
        </div>
    )
}

export default Shope;