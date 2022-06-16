interface ModalProps {
  isCorrect: boolean;
  solution: string;
  turn: number;
}

function Modal({ isCorrect, solution, turn }: ModalProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    window.location.reload();
  }

  if (isCorrect) {
    return (
      <div id="modal-backdrop">
        <div id="modal">
          <h2>Congratulation !</h2>
          <p>
            You found the word: <text id="modal-solution-text">{solution}</text>
            <br />
            in {turn} turn
          </p>
          <button onClick={handleClick} id="modal-button">
            Retry
          </button>
          <h2> </h2>
        </div>
      </div>
    );
  }
  return (
    <div id="modal-backdrop">
      <div id="modal">
        <h2>better luck next time</h2>
        <p>
          the word was: <text id="modal-solution-text">{solution}</text>
        </p>
        <button onClick={handleClick} id="modal-button">
          Retry
        </button>
        <h2> </h2>
      </div>
    </div>
  );
}

export default Modal;
