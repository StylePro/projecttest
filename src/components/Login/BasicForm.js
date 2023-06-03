import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    email: yup.string().email('Введите верный e-mail').required('Обязательное поле'),
    password: yup.string().min(5).required('Обязательное поле'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле')
});
