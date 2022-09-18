import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const chekingContacts = (data, name, number, addContact) => {// проверка уникальности имени
        
        const chek = () => {
            if (data) {
                const convert = Object.assign([], Object.values(data));
                const chek = convert.find((contact) => contact.name === name); //ищем одинаковое 
                return chek;
            }
            
        };
            if (chek()) { // если есть уже
                Report.failure('Error', 'This name is already in your contact list, enter another name, and try again.', 'OK');
            }
                       
            else { // если нет
                Notify.success('Contact has been successfully added.')
                return addContact({ id: nanoid(), name: name, number: number }).unwrap();
            }
       
    };