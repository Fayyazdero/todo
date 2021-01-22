import React, { useState } from "react";
import "./App.css";
export const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false)
  const [isChecked , setIsChecked] = useState(false)
  const [itemIndex, setItemIndex] = useState()
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setText("");
    setList([text, ...list]);
    console.log(list);
  };

  const handleDelete = (deleteIndex) => {
    const filter = list.filter((item, index) => index !== deleteIndex)
    setList(filter)
  }

  const handleEdit = (item, index) => {
    setEdit(true)
    setText(item)
    setItemIndex(index)
  }
  const handleUpdate= () => {
     let array = [...list]    
        array[itemIndex] = text
     setList(array)
     setEdit(false)
     setText("")
  }

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }
  
  return (
    <div className="container mt-3 p-3">
      <div className="todo-body">
        <h2 className="heading text-center">React Todo-List</h2>
        <input
          className="form-control w-80 mt-3"
          onChange={handleChange}
          value={text}
        />
        <button className="btn btn-outline-dark ml-3" onClick= {edit ? handleUpdate : handleSubmit}>
          {edit ? "Update" : "Create"}
        </button>
        <div className="details mt-2">        
          <span className="tasks-detail ml-1 text-light">Total Tasks: {list.length}</span>
        </div>
        {list.map((item, index) => {
          return (
          <div className={`mt-2 row ${isChecked ? "checked" : ""}`}  key={index}>
              <p className="list-item col-8">{item}</p>
            <div className="buttons">
              <button className="btn btn-outline-danger btn-sm float-right" onClick={()=>handleDelete(index)}>Delete</button>
              <button className="btn btn-sm btn-outline-success" onClick={() => handleEdit(item, index)} >Edit</button>
              <button className="btn btn-outline-dark btn-sm mx-1" onClick={handleCheck}>{isChecked ?  "Checked" : "check"}</button>
            </div>
          </div>
          );
        })}

      </div>
    </div>
  );
};
