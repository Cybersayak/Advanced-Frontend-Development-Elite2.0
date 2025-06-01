import './Grid.css';
import Card from '../card/Card';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isWinner from '../../helpers/checkWinner';


function Grid({numberofCards}) {
    
    const [turn,setTurn] = useState(true); // false -> X's turn, true -> O's turn
    const [board, setBoard] = useState(Array(numberofCards).fill(" "));
    const [winner, setWinner] = useState(null);
  
    function play(index){

       // Prevent playing if game is over or square is already filled
        if (winner || board[index] !== " ") {
            return;
        }

        console.log("move played", index);
        if (turn == true){
          board[index] = "Player A";
        }
        else {
          board[index] = "Player B";
        }
        const win = isWinner(board, turn ? "Player A" : "Player B")
        console.log("Winner is", win);
        
        if (win) {
          setWinner(win);
          toast.success(`🎉 Congratulations! ${win} wins the game! 🏆`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    const reset= () => {
      setBoard(Array(numberofCards).fill(" "));
      setWinner(null);
      setTurn(true);
    }
  return (
    <>
      <h1 className="title">Tic Tac Toe Game</h1>

      {winner && ( 
      <> 
           <h2 className="turn-highlight"> Winner is {winner} </h2>
           <button onClick={reset} className='button'>Reset</button>
      </>
      )}
       <h2 className="turn-highlight"> Current Turn : {(turn) ? "Player A" : "Player B"} </h2>

      <div className="grid">
        {board.map( (value, index) => {
               return <Card onPlay={play} player={value} key={index} index={index} />  
        })}
      </div>

      <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    </>
  )
};

export default Grid;
