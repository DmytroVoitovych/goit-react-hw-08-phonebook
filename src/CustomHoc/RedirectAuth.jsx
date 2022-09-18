import { Navigate} from "react-router-dom";
import SecureLS from "secure-ls";
var ls = new SecureLS({ encodingType: 'rc4', });

export const RedirectAuth = ({ children, isSuccess, isE }) => {
 
    if (!isSuccess && !window.localStorage.getItem('token')) {
        return <Navigate to='/login' />;
    }
    
    else if (isSuccess || window.localStorage.getItem('token') || ls.get('token') || !isE ) { return children };

    return console.log('test');
};