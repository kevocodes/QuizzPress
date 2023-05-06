import { button } from "./ControlButton.module.css";

const ControlButton = ({ text, action }) => {
  const handleClick = () => {
    action();
  };

  return (
    <button className={button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ControlButton;
