import React, { useRef, useState } from 'react';
import './Tictactoe.css';
import X from '../Assets/cross.png'
import Y from '../Assets/circle.png'

let data = ["","","","","","","","",""];

const Tictactoe = () => {
    
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    
    let boxes1 = useRef(null)
    let boxes2 = useRef(null)
    let boxes3 = useRef(null)
    let boxes4 = useRef(null)
    let boxes5 = useRef(null)
    let boxes6 = useRef(null)
    let boxes7 = useRef(null)
    let boxes8 = useRef(null)
    let boxes9 = useRef(null)

    let boxArray = [boxes1,boxes2,boxes3,boxes4,boxes5,boxes6,boxes7,boxes8,boxes9];

    function handleClick(event,num){
        if (lock) {
            return 0;
        }
        if (count%2===0) {
            event.target.innerHTML = `<img src='${X}' >`;
            data[num] = "X";
            setCount(count + 1);
        }else {
            event.target.innerHTML = `<img src='${Y}' />`;
            data[num] = "Y";
            setCount(count + 1);
        }
    winnerDesicion();
    }


    function winnerDesicion() {
        if(data[0] === data[1] && data[1]===data[2] && data[2] !== "") {
            winner(data[2]);
        } 
        else if (data[3] === data[4] && data[4]===data[5] && data[5] !== "") {
            winner(data[5]);
        }
        else if(data[6] === data[7] && data[7]===data[8] && data[8] !== "") {
            winner(data[8]);
        }
        else if(data[0] === data[3] && data[3]===data[6] && data[6] !== ""){
            winner(data[6]);
        }
        else if(data[1] === data[4] && data[4]===data[7] && data[7] !== ""){
            winner(data[7]);
        }
        else if(data[2] === data[5] && data[5]===data[8] && data[8] !== ""){
            winner(data[8]);
        }
        else if(data[0] === data[4] && data[4]===data[8] && data[8] !== ""){
            winner(data[8]);
        }
        else if(data[2] === data[4] && data[4]===data[6] && data[6] !== ""){
            winner(data[6]);
        }

    /* Match Draw logic */
        // else if(
        // data[0] !== data[1] && data[1]!==data[2] && data[2] !== "" && 
        // data[3] !== data[4] && data[4]!==data[5] && data[5] !== "" && 
        // data[6] !== data[7] && data[7]!==data[8] && data[8] !== "" && 
        // data[0] !== data[3] && data[3]!==data[6] && data[6] !== "" && 
        // data[1] !== data[4] && data[4]!==data[7] && data[7] !== "" && 
        // data[2] !== data[5] && data[5]!==data[8] && data[8] !== "" && 
        // data[0] !== data[4] && data[4]!==data[8] && data[8] !== "" && 
        // data[2] !== data[4] && data[4]!==data[6] && data[6] !== ""
        // ) {
            
        //     titleRef.current.innerHTML = `Match Draw! Click the Reset Button`;
        // } 
        // else if () {
        //     titleRef.current.innerHTML = `Match Draw! Click the Reset Button`;
        // }
        // else if() {
        //     titleRef.current.innerHTML = `Match Draw! Click the Reset Button`;
        // }
        // else if(){
        //     titleRef.current.innerHTML = `Match Draw! Click the Reset Button`;
        // }
        // else if(){
        //     titleRef.current.innerHTML = `Match Draw! Click the Reset Button`;
        // }
        // else if(){
        //     titleRef.current.innerHTML = `Match Draw! Click the Reset Button`;
        // }
        // else if(){
        //     titleRef.current.innerHTML = `Match Draw! Click the Reset Button`;
        // }
        // else if(){
        //     titleRef.current.innerHTML = `Match Draw! Click the Reset Button`;
        // }
    }

    function winner(date) {
        setLock(true);
        if(date === "X") {
            titleRef.current.innerHTML = `Congratulations: Player <img src='${X}' /> Wins`
        }
        else if(date === "Y"){
            titleRef.current.innerHTML = `Congratulations: Player <img src='${Y}' /> Wins`
        }
    }

    function reset() {
        setLock(false);
        data = ['','','','','','','','','',''];
        titleRef.current.innerHTML = `Tic Tac Toe Game in <span className="react">React</span>`;

        boxArray.map((box) => {
            box.current.innerHTML = "";
        })
    }

  return (
    <div className='container'>
        <h2 className="title" ref={titleRef}>Tic Tac Toe Game in <span className="react">React</span></h2>
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={boxes1} onClick={(e) => {handleClick(e,0)}}></div>
                <div className="boxes" ref={boxes2} onClick={(e) => {handleClick(e,1)}}></div>
                <div className="boxes" ref={boxes3} onClick={(e) => {handleClick(e,2)}}></div>
            </div>
            <div className="row1">
                <div className="boxes" ref={boxes4} onClick={(e) => {handleClick(e,3)}}></div>
                <div className="boxes" ref={boxes5} onClick={(e) => {handleClick(e,4)}}></div>
                <div className="boxes" ref={boxes6} onClick={(e) => {handleClick(e,5)}}></div>
            </div>
            <div className="row1">
                <div className="boxes" ref={boxes7} onClick={(e) => {handleClick(e,6)}}></div>
                <div className="boxes" ref={boxes8} onClick={(e) => {handleClick(e,7)}}></div>
                <div className="boxes" ref={boxes9} onClick={(e) => {handleClick(e,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={() => {reset()}}>Reset</button>
    </div>
  )
}

export default Tictactoe