import React from "react";



export default function List({data,handleEdit, handleDelete}){
    return(
        <div className="list-group">
            {
                data.map((todo)=> {
                    return(
                        <div className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">{todo.namatodo}</h5>
                          <div className="btn">
                            <button onClick={() => handleEdit(todo.id)} className=" btn-edit">Edit</button>
                            <button onClick={() => handleDelete(todo.id)} className=" btn-delete ">Delete</button>
                          </div>
                        </div>
                      </div>
                    );
                })}
  
      </div>
    );
}