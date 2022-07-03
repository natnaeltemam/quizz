import React from 'react'
import Quesions from './Quproduce'
import data from './data'
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"
import { useNavigate } from 'react-router-dom'
function Quizzes(props) {
    const [data_quizzs, setQuizzes] = React.useState(data['results'])
    const [each_quizz, seteachQuizz] = React.useState({})
    const [final_Answer, setFinalAnswer] = React.useState({ count: 0, isfinshined: false })
    const [count, setCount] = React.useState(0)
    let navigate = useNavigate()
    function creat_url_api() {
        let url_api = "https://opentdb.com/api.php?"
        url_api += `amount=${props.value['number']}`
        if (props.value['catgory'] !== "") {
            url_api += `&category=${props.value['catgory']}`
        }
        if (props.value['diffculty'] !== "") {
            url_api += `&difficulty=${props.value['diffculty']}`
        }
        url_api += "&type=multiple"
        return url_api
    }
    const url_value = creat_url_api()
    React.useEffect(function () {
        fetch(url_value)
            .then(res => res.json())
            .then(data => setQuizzes(data.results))
    }, [count, url_value])

    function ChooseSelect(id) {
        seteachQuizz(prevQuiz => {
            const value = []
            for (let i = 0; i < prevQuiz.length; i++) {
                const value1 = []
                const quiesion = each_quizz[i]
                value1.push(quiesion[0])
                for (let j = 0; j < quiesion.length; j++) {
                    if (j === 0) {

                    }
                    else if (quiesion[j].id === id) {

                        value1.push({ ...quiesion[j], isHeld: !quiesion[j].isHeld })

                    }

                    else {
                        value1.push({ ...quiesion[j] })
                    }
                }
                const value2 = []
                let value3 = 0
                for (let k = 0; k < value1.length; k++) {
                    if (k === 0) {
                        value2.push(value1[k])
                    }
                    else if (value1[k].id === id) {
                        value2.push(value1[k])
                        value3++
                    }
                    else {
                        value2.push({ ...value1[k], isHeld: false })
                    }
                }


                value.push(value3 !== 0 ? value2 : value1)
            }

            return value
        })
    }
    function checkAnswer(e) {

        let numb = 0
        if (e.target.value === 'Check answers') {
            seteachQuizz(prevQuiz => {
                const value = []
                numb = 0
                for (let i = 0; i < prevQuiz.length; i++) {
                    const quizz = prevQuiz[i]
                    let temp = 0
                    const value1 = []
                    for (let j = 0; j < quizz.length; j++) {
                        if (j === 0) {

                        }
                        else {
                            value1.push(quizz[j])
                        }
                        if (quizz[j].isHeld && quizz[j].isCorrect) {
                            numb++
                            temp++

                        }
                    }
                    if (temp > 0) {
                        quizz[0].isAnswerCo = 'Correct'

                    }
                    else {
                        quizz[0].isAnswerCo = 'inCorrect'
                    }
                    value1.unshift(quizz[0])
                    value.push(value1)
                }
                setFinalAnswer({ count: numb, isfinshined: true })
                return value

            })



        }

        else {
            setCount(prevCount => prevCount + 1)
            setFinalAnswer({ count: 0, isfinshined: false })

        }

    }

    React.useEffect(() => {
        seteachQuizz(data_quizzs.map(data => {
            const data_qu = []
            data_qu.push({ question: data.question, isAnswerCo: 'notChecked' })
            const choose = [data.correct_answer, data.incorrect_answers[0]
                , data.incorrect_answers[1], data.incorrect_answers[2]]
            const shufflechose = choose.sort((a, b) => 0.5 - Math.random())
            const id = []
            for (let i = 0; i < 4; i++) {
                id.push(nanoid())
            }
            data_qu.push({ value: shufflechose[0], id: id[0], isHeld: false, isCorrect: (data.correct_answer === shufflechose[0]) })
            data_qu.push({ value: shufflechose[1], id: id[1], isHeld: false, isCorrect: (data.correct_answer === shufflechose[1]) })
            data_qu.push({ value: shufflechose[2], id: id[2], isHeld: false, isCorrect: (data.correct_answer === shufflechose[2]) })
            data_qu.push({ value: shufflechose[3], id: id[3], isHeld: false, isCorrect: (data.correct_answer === shufflechose[3]) })

            return data_qu
        }))
    }, [data_quizzs])
    const Quizz = []
    for (let i = 0; i < each_quizz.length; i++) {
        const quiesion = each_quizz[i]
        const t_id = nanoid()
        Quizz.push(<Quesions
            key={t_id}
            Q={quiesion[0]}
            C1={quiesion[1]}
            C2={quiesion[2]}
            C3={quiesion[3]}
            C4={quiesion[4]}
            Click={ChooseSelect} />)
    }




    return (
        <div className='Quis'>
            <div className='allQ'>
                {(final_Answer.count === props.value.number) && <Confetti />}
                {Quizz}

                <div className="chAnswer">
                    {final_Answer.isfinshined && <h3 className='count'>You answers {final_Answer.count}/{props.value.number} Correct answers</h3>}


                    <button onClick={checkAnswer}
                        value={final_Answer.isfinshined ? 'Play again' : 'Check answers'}>
                        {final_Answer.isfinshined ? 'Play again' : 'Check answers'}
                    </button>
                    <button
                        className='home'
                        onClick={() => {
                            navigate('/')
                        }}>Home page</button>
                </div>


            </div>
        </div>
    )
}

export default Quizzes;

