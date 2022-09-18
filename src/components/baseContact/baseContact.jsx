import { useState, useMemo } from "react";
import css from './base.module.css';
import { Phonebook } from "components/Phonebook/Phonebook";
import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useAddContactsMutation, useDellContactsMutation } from "components/redux/rtq";
import { chekingContacts } from "./checkingContacts";
  
export const BaseContact = ({data, isSuccess}) => {
  
const [addContact,] = useAddContactsMutation();
const [dellContact] = useDellContactsMutation();
      
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const [filter, setFilter] = useState('');

  const deleteContact = (id) => { // удаление контакта
    if (isSuccess) {
      Notify.success('The contact has been successfully deleted.');
        return dellContact(id).unwrap();
    }
    return Notify.failure('The contact has Error');
      };
 
  const getValueInput = (e) => { // получение значений инпутов формы
    // https://ru.reactjs.org/docs/forms.html  по примеру с документации
    const target = e.target.type;
    const val = e.target.value;
     switch (target) {
      case 'text':
        setName(val);
        break;
       case 'tel':
         setNumber(val);
         break;
      default:
        return;
    }
   }; 
    
  const setContactsName = (e) => { e.preventDefault(); setName(''); setNumber(''); chekingContacts(data, name, number, addContact);}; // проверка уникальности имени в контактах 
 
  const  changeFilter = (e) => { setFilter( e.currentTarget.value) }; // значение фильтра
   
  const contactFiltering =  useMemo(() => { // фильтрация контактов // мемо чисто что бы не было перерендера когда изменяется велью
    const normalizeFilter = filter.toLowerCase();
    
      if (data) {
            const convert = Object.assign([], Object.values(data));
          return convert.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)
              || contact.number.toLowerCase().includes(normalizeFilter));
    } return [];
    
  }, [data, filter]); //добавил еще фильтер и по номеру
    
    return (
    <div  className={css['wrap-login100']}
      style={{
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
          padding: '0 15px',
          paddingTop: '30px', 
        paddingBottom: '50px', 
      }}
    >
      < section className={css['login100-form']}>
            {<Phonebook input={getValueInput} val={{ name: name, tel: number }} btn={setContactsName} load={isSuccess} />}
           <div> <h3 className={css.title}>Contacts</h3>
            {<Filter changes={changeFilter}  filter={filter}/> }
          {isSuccess?<Contacts contacts={contactFiltering} away={deleteContact} data={data} />: <h2>Loading...</h2>}
                </div>
        </section >
    </div>
  );
};