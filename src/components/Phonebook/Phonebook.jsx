import PropTypes from 'prop-types';
import { Form, Button } from './Phonebook.styled';
import css from '../baseContact/base.module.css';

export const Phonebook = ({ input, val, btn, load }) => {
  
   return  <div>
        <h2 className={css['login100-form-title']}>Phonebook</h2>
        <Form action="" onSubmit={btn}  >
            <label htmlFor="" >Name</label>
          <input 
            type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={input}
              value={val.name}
              
          />  
          <label htmlFor="">Number</label>
          <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={input}
              value={val.tel}
              
       /> <div className={css['input_back']}></div>           
            <Button type="submit">{load?'Add contact':'Loading...'}</Button>
        </Form>
  </div>  
};

Phonebook.propTypes = {
    input: PropTypes.func.isRequired,
    val: PropTypes.objectOf(PropTypes.string).isRequired,
    btn: PropTypes.func.isRequired
};