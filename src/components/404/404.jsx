import { Link } from 'react-router-dom';
import css from './404.module.css';

export const Notfound = ({ style }) => {

	return (
	     <><Link className={css.active}  to='/'>Вернутся домой</Link>
		<div className={css.notfound} style={style}>
			<div className={css["notfound-404"]}>
				<h3>Oops! Page not found</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
		<h2>we are sorry, but the page you requested was not found</h2>
		
	</div>
	</>  
	)
};
