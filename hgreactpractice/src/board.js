import Button from "./Button";
import Paragraph from "./Paragraph";

function Board({ value, onBoardClick}) {
    return(
        <div className="board">
            <div>
                This is the Game
            </div>
            <br/>
            <Button
                value = 'Back to main menu'
            />
        </div>
    );
}

export default Board;