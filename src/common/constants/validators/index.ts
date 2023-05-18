import * as Yup from 'yup';
import { hasValidEmail } from '../regExp';

export const stringRequiredSchema: Yup.StringSchema = Yup.string()
    .trim()
    .required('No te olvides de completar este campo');


export const emailSchema: Yup.StringSchema = Yup.string()
    .trim()
    .matches(hasValidEmail, 'El email ingresado no es válido');