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
var ls = new SecureLS({ encodingType: 'rc4', });

export const App = () => {
 
  const { data, isSuccess, isError, refetch, } = useGetContactsQuery(ls.get('token'));
     
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout isSuccess={isSuccess} update={refetch} />}>
          <Route index element={ <Home />} />
          <Route path="/contacts" element={<RedirectAuth isE={isError} isSuccess={isSuccess}><BaseContact data={data} isSuccess={isSuccess} /></RedirectAuth>} />
          <Route path="/login" element={<Login isSuccess={isSuccess} update={refetch} />} />
          <Route path="/register" element={<Regs />} />
          <Route path="*" element= {<Notfound />}></Route>
        </Route>
              </Routes>
    </>
  );
  
};
