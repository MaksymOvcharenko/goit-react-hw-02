import s from "./Options.module.css";
// import handleClick from "../App";
const Options = ({ updateFeedback, deleteFeedback }) => {
  return (
    <div className={s.place}>
      <button className={s.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button className={s.button} onClick={() => deleteFeedback()}>
        Delete
      </button>
    </div>
  );
};

export default Options;
