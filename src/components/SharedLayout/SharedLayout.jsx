import { Outlet, NavLink  } from "react-router-dom";
import {LogOut} from "components/LogOut/LogOut";
import { List } from "./Layout.styled";
import css from './main.module.css'

export const SharedLayout = ({isSuccess, update, token}) => {
    return (
      <>
    <header>
       <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid rgba(0, 0, 0, 0.095)'}}>
            <List>
          <li><NavLink to="/">Home</NavLink></li>    
          <li><NavLink to="/contacts">Contacts</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
            </List>
            {isSuccess && <LogOut update={update} token={token} />}
         </nav>
            </header>
            <main className={css.limiter +' '+ css['container-login100'] }>
                <Outlet />
                </main>
             {/* /* отвечает за все дочернее содержимое */ }
            </>
  );
};