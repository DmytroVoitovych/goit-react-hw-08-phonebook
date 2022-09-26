import css from './login.module.css';
import { Link, useNavigate  } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { useState, useCallback  } from 'react';
import {Notify, Block, Loading } from 'notiflix';
import { reset } from './reset';
import { handleRefetchOne } from './refeth';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase';
import SecureLS from 'secure-ls';

var ls = new SecureLS({ encodingType: 'rc4', });

export const Login = ({ isSuccess, update }) => {
  
  const [email, setName] = useState('');
  const [password, setNumber] = useState('');
  const nav = useNavigate();
  
  const funcHome = useCallback(() => {
    
          return  nav('/contacts', {replace:true});
        
    }, [nav]);
   
    const getValueInput = (e) => { // получение значений инпутов формы
    // https://ru.reactjs.org/docs/forms.html  по примеру с документации
    const target = e.target.type;
    const val = e.target.value;
     switch (target) {
      case 'email':
        setName(val);
        break;
       case 'password':
         setNumber(val);
         break;
      default:
        return;
    }
  }; 
   
const chekingAuth = async () => {// проверка уникальности имени
      Block.dots(`.${css.sectio}`);
  try {
    
    const res = await signInWithEmailAndPassword(auth, email, password);
    Loading.dots();
    ls.set('token', res.user.accessToken);

    if (res.user) {
    handleRefetchOne(update);  
    reset(setName, setNumber);
    Notify.info('Aвторизация успешна');
    Block.remove(`.${css.sectio}`);
    funcHome();
    Loading.remove();
    }  
        }
  catch (data) {
    
    if (data !== null) {
      console.log(data.code);
      if (data.code === 'auth/too-many-requests') {
        Notify.failure('Зайдите позже слишком много попыток входа');
        Block.remove(`.${css.sectio}`);
      }

       else if (data.code === 'auth/user-not-found') {
        Notify.failure('Пользвателя с таким эмейлом нет');
        Block.remove(`.${css.sectio}`);
      }

      else if (data.code === 'auth/wrong-password') {
        Notify.failure('Вы ввели неверный пароль');
        Block.remove(`.${css.sectio}`);
      }
      return console.log(`что то пошло не так ${data.code} `);
      
    }
    }
    };
         
    const setAuth = (e) => {
     
     e.preventDefault();   
      if (!isSuccess) {
      
        if (email && email.length >= 4 && password && password.length >= 4) {
            
                  
          return chekingAuth();; // такен даем  на проверку
        }
     
        else if (!email || !password) {
          Notify.info('поля должны быть заполнены')
        }

        else {
          Notify.failure('Введите больше символов');
        }
      }

      else {
        Notify.failure('Вы уже авторизованы');
      }
       
    };
    
    return (<>
        <div className={css.sectio} >
      <span className={css.title}> Account Login </span>
          <form onSubmit={setAuth}  data-form>
            <div style={{marginBottom: '15px',}}
              className="wrap-input100 validate-input"
              data-validate="Enter username"
            >
                    <input
                        
                className={css.input}
                type="email"
                name="username"
                        placeholder="User email"
                         onChange={getValueInput}
                   value={email}
              />
              <span  data-placeholder="&#xe82a;"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                className={css.input}
                type="password"
                name="pass"
                        placeholder="Password"
                         onChange={getValueInput}
                   value={password}
              />
              <span  data-placeholder="&#xe80f;"></span>
            </div>

            <div className={css.boxBtn}>
              <button className={css.btn} type="submit">Login</button>
              <Link to='/register' className={css.btn} >
                Create account
              </Link>
              <Link to='/' className="homeBtnLink">
                {<HiHome  className={css.svg} />}
              </Link>
            </div>
            </form>
            </div>

</>
    );  
}
