import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {getContacts} from './services/ContactsService'
import DataTable from './components/DataTable'
import './App.css';
function App() {

  const [data,setData] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const response = getContacts()
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
        <input 
          type="text"
          placeholder="Search page"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div> <br/>
      <Button variant="contained" color="primary">
        Add Contact
      </Button>    <br/>
      <div className="container"> 
        <DataTable
          data = {search(data)}
        />
      </div>
    </div>
  );
}

export default App;
