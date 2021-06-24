import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getContacts} from './services/ContactsService'
import DataTable from './components/DataTable'
import Register from './components/Register';
import Dialog from './components/Dialog';
import './App.css';
function App() {

  const [data,setData] = useState([])
  const [query, setQuery] = useState("")

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const loadSpots = async () => {
  //     const response= await dispatch(getContacts());
  //     response.then((contacts) => setData(contacts))
  //   };
  //   loadSpots();
  // },[dispatch])

  React.useEffect(() => {
    const response= getContacts()
    response.then((contacts) => setData(contacts))
  })

  function search(rows){
    return rows.filter(row => 
      row.firstName.toLowerCase().indexOf(query) > -1 ||
      row.lastName.toLowerCase().indexOf(query) > -1 || 
      row.mobileNumber.indexOf(query) > -1 ||
      row.emailId.toLowerCase().indexOf(query) > -1 || 
      row.city.toLowerCase().indexOf(query) > -1
      )
  }
  return (
    <div className="App">
      <div>
        <TextField 
          id="standard-basic" 
          type="text"
          placeholder="Search page"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
         />        
      </div>
     
       <br/>
      <Dialog />
      <div><br /><br /></div>
      <div className="container"> 
        <DataTable
          data = {search(data)}
        />
      </div>
    </div>
  );
}

export default App;
