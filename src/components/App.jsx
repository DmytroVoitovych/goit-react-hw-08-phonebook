import { BaseContact } from "./baseContact/baseContact";
import { RedirectAuth } from "CustomHoc/RedirectAuth";
import { Login } from "./Login/Login";
import { Regs } from "./Register/Register";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import { useGetContactsQuery } from "./redux/rtq";
import { Home } from "./home/Home";
import { Notfound } from "./404/404";
import SecureLS from 'secure-ls';
import { useEffect, useCallback } from "react";
import { auth } from "../firebase";
import { getIdToken, onIdTokenChanged } from "firebase/auth";

var ls = new SecureLS({ encodingType: 'rc4', });

export const App = () => {
  
  const { data, isSuccess, isError, refetch, } = useGetContactsQuery(ls.get('token'));
  const update = useCallback(() =>  refetch(), [refetch]);

    
  useEffect(() =>  onIdTokenChanged(auth, (user) => {  // обновление токена
     
    if (user) {
        
              ls.set('email', user.email);
        getIdToken(user, true).then(r => {
                    
          return  ls.set('token', r);
        }).then(() => update()).catch((e) => console.log(`Что то пошло не так ${e}`));
      
      }

      else if (user && isError) {
       return window.location.reload();
        }
        
      return;
  
    }),[update, isError]);

  
   
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout isSuccess={isSuccess} update={refetch} />}>
          <Route index element={ <Home />} />
          <Route path="/contacts" element={<RedirectAuth isE={isError} isSuccess={isSuccess}><BaseContact data={data} isSuccess={isSuccess} /></RedirectAuth>} />
          <Route path="/login" element={<Login isSuccess={isSuccess} update={refetch}  />} />
          <Route path="/register" element={<Regs />} />
          <Route path="*" element= {<Notfound />}></Route>
        </Route>
              </Routes>
    </>
  );
  
};
