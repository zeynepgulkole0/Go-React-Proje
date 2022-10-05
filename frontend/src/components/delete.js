import { useState } from "react";
import axios from "axios";

export default function Delete(props) {
  const { row, list } = props;

  const onClickDelete = async (e) => {
    e.preventDefault();
    await axios.delete("http://127.0.0.1:3001/api/user/delete/{id}" + row.id);

    list(true);
  };
  return (
    <button className="btn btn-danger" onClick={onClickDelete}>
      Delete
    </button>
  );
}
