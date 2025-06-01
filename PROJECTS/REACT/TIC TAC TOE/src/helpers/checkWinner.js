// This function checks if there is a winner in the Tic Tac Toe Game.
function isWinner(board, symbol) {
  // ROWS
     if (board[0] == board[1] && board[1] == board[2] && board[2] == symbol) return symbol;
     if (board[3] == board[4] && board[4] == board[5] && board[5] == symbol ) return symbol;
     if (board[6] == board[7] && board[7] == board[8] && board[8] == symbol) return symbol;
  // COLUMNS
     if (board[0] == board[3] && board[3] == board[6] && board[6] == symbol) return symbol;
     if (board[1] == board[4] && board[4] == board[7] && board[7] == symbol) return symbol;
     if (board[2] == board[5] && board[5] == board[8] && board[8] == symbol) return symbol;
  // DIAGONALS
     if (board[0] == board[4]&& board[4] == board[8] && board[8] == symbol) return symbol;
     if (board[2] == board[4] && board[4] == board[6] && board[6] == symbol) return symbol;

   return null;
}

export default isWinner;
