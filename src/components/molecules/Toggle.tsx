interface Props {
    isActive: boolean;
    handleClick: () => void;
}

const Toggle = ({isActive, handleClick}:Props) => {
  return (
    <button className= {`Toggle ${isActive ? "active" : ""}`} onClick={handleClick} aria-label="Abrir menu" aria-labelledby="Abrir menu">
      <span className="span span1"></span>
      <span className="span span2"></span>
      <span className="span span3"></span>
    </button>
  )
}

export default Toggle
