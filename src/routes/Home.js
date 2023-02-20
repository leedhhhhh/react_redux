import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        <ul>{JSON.stringify(todo)}</ul>
      </ul>
    </>
  );
};

// store로부터 state를 전달 -> Home에다가
// const mapStateToProps = (state) => {
//   return { toDos: state };
// };

// export default connect(mapStateToProps)(Home);
export default Home;
