import * as yup from 'yup';
export interface FormLoginProps {
    email: string;
    password: string;
}

export type FormLoginPropsSchemaKeys = {
    [type in keyof FormLoginProps]: yup.AnySchema;
};

export type FormLoginKeys = keyof FormLoginProps;