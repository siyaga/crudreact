import "./App.css";
import List from "./List";
import {useState} from "react";
import {uid} from "uid";

function App() {
  const [todos, setTodos] = useState([
    {
    id: 1,
    namatodo: "Gerak jalan"
  },
  {
    id: 2,
    namatodo: "Melamun jalan"
  }
]);
const [isUpdate, setIsUpdate] = useState({id: null, status:false});

const [fromData, setFromData ]= useState({
    namatodo: "",
});

function handleChange(e){
  let data = {...fromData};
  data[e.target.name] = e.target.value;
  setFromData(data);
}

function handleSubmit(e){
  e.preventDefault();
  alert("successfully added data");
  let data = [...todos];
  if(fromData.namatodo ===""){
    return false;
  }
  if(isUpdate.status){
    data.forEach((todo) => {
      if(todo.id === isUpdate.id){
        todo.namatodo = fromData.namatodo;

      }
    });
  } else {

    data.push({id: uid(), namatodo: fromData.namatodo});

  }
    
  setTodos(data);
  setFromData({namatodo: ""});

}

function handleEdit(id){
  let data =[...todos];
let foundData = data.find((todo) => todo.id === id);

setIsUpdate({id:null, status: false});
setFromData({namatodo : foundData.namatodo});
setIsUpdate({id: id, status:true});

}
function handleDelete(id){
  let data = [...todos];
  let filterData = data.filter(todo=> todo.id !== id);

  setTodos(filterData);
}

  return (  
    <div className="App">
      

      <form onSubmit={handleSubmit} className="px-3 py-4">
        <div className="form-group">
        <div id="todo-header" className="header">
        <h1 className="px-3 py-3">To do List</h1>
          <h2 htmlFor="">Create Todo</h2></div>
          
          <input type="text" className="form-control" onChange={handleChange} value={fromData.namatodo} name="namatodo" />
        </div>
        <div>
          <button type="submit" className="add-button btn btn-primary w-100 mt-3">
            Add
          </button>
        </div>
      </form>

      <List handleDelete={handleDelete} handleEdit={handleEdit} data={todos}/>
    </div>
  );
}

export default App;