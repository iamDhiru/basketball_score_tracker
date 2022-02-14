import React, {useEffect,} from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getAllMatches}  from '../redux'


const Matchlist = props => {
    
    useEffect(()=>{
        props.getAllMatches();
    },[])

    console.log("test data", props.matches)
    if(props.matches.length < 0){
        return 'loading...'
    }
    else return (
        <div className='container border d-flex justify-content-center' style={{ height:"100vh"}}>
            <Link to='/match' className='btn btn-primary ' style={{textDecoration:"none", height:"40px"}}>Start Match</Link>
            <div className='mt-5 border' style={{width:"400px", overflowY:"auto", overflowX:"hidden"}}>
            <h4 className='text-center'> Match List</h4>
            {
                props.matches.map((match, index)=>{
                    return (
                        <div key={index} className='card shadow my-2 py-2' style={{width:"100%",}}>
                        <div className='row px-2'>
                            <div className='col-6'>
                                <div>Team1 : <span className='team-name'>{match.team1Name}</span></div>
                                <div>Score : {match.team1Score}</div>
                            </div>
                            <div className='col-6'>
                                <div>Team2 : <span className='team-name'>{match.team2Name}</span></div>
                                <div>Score : {match.team2Score}</div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center  mt-2'>
                           <div> Winner :  <span className='text-success'> {match.winner}</span></div>
                        </div>
                    </div>
                    )
                })
            }
            
            
            
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        matches: state.match.match
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllMatches: () => dispatch(getAllMatches())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Matchlist);
