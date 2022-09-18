import video from './vid.mp4';
import css from './home.module.css';
import {Loading } from 'notiflix';


export const Home = () => {
    Loading.dots();

    return (<>
        <div style={{ overflow: 'hidden' }}>
            <h1 className={css.title} >Contacts Book</h1>
            {<video itemType='video/mp4' style={{ objectFit: 'cover', width: '100vw', height: '100vh', display: 'block' }} autoPlay loop muted src={video} />}
        </div >  
       {Loading.remove()}</>
    );   

};