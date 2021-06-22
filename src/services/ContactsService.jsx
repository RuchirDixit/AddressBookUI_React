import axios from 'axios'

export const getContacts = async() => {
    const CONTACTS_URL = "http://localhost:8080/contact/contacts/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNX0.1_8Yms0rNnzeCmyZZH45iiWZmu1A_p-kig-uvD2NbwE";
    const result = await axios.get(CONTACTS_URL);  
    return result.data;
  }