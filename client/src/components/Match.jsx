import React, {useState} from 'react'
import {connect} from 'react-redux';
import {addMatchDetails}  from '../redux'
import { bindActionCreators } from 'redux';
import {Redirect, Link} from 'react-router-dom'


const Match = props => {
    
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState({
        team1Name:"",
        team2Name:"",
    })

    const handleClick = (val, team) => e => {
        e.preventDefault();
        if(team==="teamA"){
            if(val==="+1") setScore1(score1=> score1 + 1)
            else setScore1(score1 => score1 + 3)
        }
        else{
            if(val==="+1") setScore2(score2=> score2 + 1)
            else setScore2(score2 => score2 + 3)
        }
    }
    const addNameHandler = val => e => {
        
        e.preventDefault();
        if(val==="teamA"){
            setName({
                team1Name: inputValue1,
                team2Name: name.team2Name
            })
            setInputValue1('')
        }
        else{
            setName({
                team1Name: name.team1Name,
                team2Name: inputValue2
            })
            setInputValue2('')
        }
    }
    const handleChange = e => {
        const {value, name} = e.target;
        if(name==="teamA"){
            setInputValue1(value);
        }else{
            setInputValue2(value)
        }
    }
   
    const winnerHandler = e => {
        const dataObj = {
            team1Name: name.team1Name,
            team2Name: name.team2Name,
            team1Score: parseInt(score1),
            team2Score: parseInt(score2),
            winner: score1 === score2 ? 'Match Tie': score1 > score2 ? name.team1Name : name.team2Name
        }
        const validated = isValidated(dataObj);
        if(validated){
            props.actions.addMatchDetails(dataObj).then(res=>{
                if(res){
                    alert("successfully added");
                    setRedirect(true);
                }
            })
        }
        else{
            alert("Add correct data");
        }
    }
    const isValidated = dataObj => {
        if(dataObj.team1Name && dataObj.team2Name && dataObj.winner)
        {
            return true;
        }
        return false;
    }
  
    if(redirect) return <Redirect to='/matches'/>

    // 
    
    return (
        <div className='container  d-flex justify-content-center' style={{ height:"100vh"}}>
          <Link to='/matches' className='btn btn-primary ' style={{textDecoration:"none", height:"40px"}}>Match Results</Link>
           <div className='row mt-5 '>
               <div className='col-md-6 '>
                    <div className='card shadow p-2' style={{height:"400px"}}>
                        <span className='my-3'>
                            <input
                            name='teamA'
                            value={inputValue1}
                            onChange={handleChange} 
                            type="text" className='name-input'  placeholder="Enter team name"/>
                            <button
                            disabled={inputValue1?false:true}
                            onClick={addNameHandler("teamA")} 
                            className='btn btn-secondary px-2 py-1'>Add</button>
                        </span>
                        <h3>Team A: {name.team1Name}</h3>
                        <h5 className='text-center mt-3'>Score: {score1}</h5>
                        <div className='row mt-5'>
                            <div className='col-6'>
                                <button
                                    onClick={handleClick("+1", "teamA")} 
                                    className='btn btn-primary px-5'>+1</button>
                            </div>
                            <div className='col-6'>
                                <button 
                                onClick={handleClick("+3", "teamA")} 
                                className='btn btn-primary px-5'>+3</button>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <button onClick={winnerHandler}  className='btn btn-primary px-3'>Team A Won</button>
                        </div>
                    </div>
               </div>
               <div className='col-md-6 '>
                    <div className='card shadow p-2' style={{height:"400px"}}>
                    <span className='my-3'>
                            <input
                            name='teamB'
                            value={inputValue2}
                            onChange={handleChange} 
                            type="text" className='name-input'  placeholder="Enter team name"/>
                            <button
                            disabled={inputValue2?false:true}
                            onClick={addNameHandler("teamB")} 
                            className='btn btn-secondary px-2 py-1'>Add</button>
                        </span>
                        <h3>Team B: {name.team2Name}</h3>
                        <h5 className='text-center mt-3'>Score: {score2}</h5>
                        <div className='row mt-5'>
                            <div className='col-6'>
                                <button
                                 onClick={handleClick("+1", "teamB")}  
                                 className='btn btn-primary px-5'>+1</button>
                            </div>
                            <div className='col-6'>
                                <button 
                                onClick={handleClick("+3", "teamB")} 
                                className='btn btn-primary px-5'>+3</button>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <button
                            onClick={winnerHandler} 
                            className='btn btn-primary px-3'>Team B Won</button>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         matches: state.match.match
//     }
// }
const mapDispatchToProps = dispatch => {
    return {
        // addMatchDetails: () => dispatch(addMatchDetails())
        actions: bindActionCreators(
            {
                addMatchDetails: addMatchDetails
            },
            dispatch
        ),
    }
}

export default connect(null, mapDispatchToProps) (Match);
