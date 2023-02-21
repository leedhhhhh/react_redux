import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams().id;
  const toDos = useSelector((state) => state).find(
    (v) => v.id === parseInt(id)
  );
  return (
    <>
      <h1>{toDos.text}</h1>
      <h5>Create at : {toDos?.id}</h5>
    </>
  );
};

export default Detail;
