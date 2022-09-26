import { TbLogout } from 'react-icons/tb';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { Loading } from 'notiflix';
import SecureLS from 'secure-ls';
import css from './logOut.module.css';

var ls = new SecureLS({ encodingType: 'rc4', });

export const LogOut = ({update,}) => {
    const logOut = async () => {
        try {
            Loading.dots();
            await signOut(auth);
            ls.removeAll();
            update();
            return Loading.remove();
        } catch (error) {
            console.log(error);
        }
       
    }

    return (<div className={css.flex}>
        <p>{ls.get('email')}</p> 
        <button className={css.btnL} type="button" onClick={logOut} >
        <TbLogout className={css.svg} />
    </button></div>);
};