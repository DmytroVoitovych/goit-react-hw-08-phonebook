import { Notify, Block } from 'notiflix';

export const chekingReg = async (addUser,name,email,password,css) => {// проверка уникальности имени
      Block.dots(`.${css.form}`);
        try {
            const reg = await addUser({ name, email, password }).unwrap();
            Notify.info('Регистрация успешна');
             Block.remove(`.${css.form}`);
            return console.log(reg);
        }
        catch ({data}) {
            
            if (data.error.message === 'EMAIL_EXISTS') {
                Block.remove(`.${css.form}`);
                Notify.failure('вы уже зарегистрированы');
            } else {
                Notify.info('Регистрация успешна');
            }
        }
    };