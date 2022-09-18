import PropTypes from 'prop-types';
import { Filters , Label} from './Filter.styled';


export const Filter = ({ changes, filter }) => 
  
    
    <>
    <Label htmlFor="find">Find contacts be name and number</Label> 
    <Filters
            type="text"
             name="find"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={changes}
              value={filter}
              
          />
    </>;

Filter.propTypes = {
    changes: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
   };