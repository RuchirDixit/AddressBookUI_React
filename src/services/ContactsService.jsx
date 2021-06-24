import axios from 'axios'

export const getContacts = async() => {
    const CONTACTS_URL = "http://localhost:8080/contact/contacts/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.kvFGkn9ffAbccDpD72wb7C3RoNcsbnYORN5Hvv1yTM0";
    const result = await axios.get(CONTACTS_URL);  
    return result.data;
  }

  export const addContact = async(contact) => {
   const ADD_CONTACT_URL = "http://localhost:8080/contact/addNewContact"
   const result = await axios.post(ADD_CONTACT_URL,contact)
   if(result){
     console.log("Added");
   }
  }

  export const deleteContact = async (id) => {
    //console.log("ID"+id);
  }