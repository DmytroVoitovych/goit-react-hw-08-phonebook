import css from './reg.module.css';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { useSetUserMutation } from 'components/redux/register';
import { useState, useCallback } from 'react';
import {Notify,} from 'notiflix';
import { useNavigate } from "react-router-dom";
import { chekingReg } from './chekingReg';

export const Regs = () => {
    const [addUser] = useSetUserMutation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

     const funcBack = useCallback(() => {
    
          return  nav(-1);
        
    }, [nav]);

    const getValueInput = (e) => { // получение значений инпутов формы
    // https://ru.reactjs.org/docs/forms.html  по примеру с документации
    const target = e.target.type;
    const val = e.target.value;
     switch (target) {
      case 'text':
        setName(val);
        break;
       case 'email':
         setEmail(val);
             break;
         case 'password':
         setPassword(val);
         break;
      default:
        return;
    }
   }; 
      
    const setReg = (e) => {

     e.preventDefault();   
        
    if (name && name.length >= 4 && password && password.length >= 6 && email.length >=4 ) {
           
                      
        setName(''); setEmail(''); setPassword('');
        return chekingReg(addUser,name,email,password,css);
        
    }
     
    else if (!name || !password || !email) {
        
       return Notify.info('поля должны быть заполнены')
    }
        
         else if (!email) {
        
       return Notify.info('поля должны быть заполнены')
    }
            
    else {
        
      return  Notify.failure('Введите больше символов');
    }
       
    }; // проверка уникальности имени в контактах 
 



   return (<div className={css.sectio}>
        <span className={css.title}> Registration </span>
        <form className={css.form} data-registr onSubmit={setReg}>
            <div
                className="wrap-input100 validate-input"
                data-validate="Enter username"
            >
                <input
                    className={css.input}
                    type="text"
                    name="username"
                   placeholder="User name"
                   onChange={getValueInput}
                   value={name}
                />
                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>

            <div
                className="wrap-input100 validate-input"
                data-validate="Enter email"
            >
                <input
                    className={css.input}
                    type="email"
                    name="email"
                   placeholder="User email"
                   onChange={getValueInput}
                   value={email}
                />
                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>

            <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
            >
                <input
                   className={css.input}
                   type="password"
                   name="passReg"
                   placeholder="Password"
                   onChange={getValueInput}
                   value={password}
                />
                <span className="focus-input100" data-placeholder="&#xe80f;"></span>
            </div>

            <div className="container-login100-form-btn m-t-32">
                <button className={css.btn} type="submit">
                    Registration
                </button>
            </div>
            <button style={{display: 'contents',}} onClick={funcBack}  type="button">
              <BsArrowLeftCircleFill className={css.svg} />
            </button>
        </form>
    </div>)
} ;