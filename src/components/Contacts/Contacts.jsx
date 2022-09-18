import PropTypes from 'prop-types';
import { ListCon } from './Contacts.styled';
import {BsPhone } from 'react-icons/bs';

export const Contacts = ({ contacts, away, data }) => {
    
    return ( data ? <ListCon>
        {contacts.map((contact, index) => <li key={contact.id}>
         <div style={{textAlign: 'center', display:'flex'}}> <BsPhone style={{marginRight: '8px'}} /> {contact.name}: {contact.number}</div> <button type="button" onClick={()=> away(Object.keys(data)[index]) } >delete</button>
        </li>)}
    </ListCon>: <p>У вас еще нет контактов </p>)
};


Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    away: PropTypes.func.isRequired
};