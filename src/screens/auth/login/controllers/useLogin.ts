import * as Yup from 'yup';
import { FormLoginKeys, FormLoginProps, FormLoginPropsSchemaKeys } from '../types';
import { emailSchema, stringRequiredSchema } from '../../../../common/constants/validators';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFirebaseAuth from '../../../../common/controllers/firebase/useFirebaseAuth';
import { useState } from 'react';

function useLogin() {
    const loginSchema = Yup.object().shape<FormLoginPropsSchemaKeys>({
        email: emailSchema,
        password: stringRequiredSchema,
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormLoginProps>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: 'miguel@hotmail.com',
            password: '123456',
        },
        reValidateMode: 'onChange',
    });

    // Hooks
    const [loading, setLoading] = useState(false);

    // Controllers
    const { handleLogin } = useFirebaseAuth();

    function hasErrorsInput(inputName: FormLoginKeys) {
        return errors[inputName] !== undefined;
    }

    function assignInputName(inputName: FormLoginKeys) {
        return inputName.toString();
    }

    function getMessageErrorInput(inputName: FormLoginKeys) {
        return errors[inputName]?.message || 'Este campo es requerido';
    }

    async function onSubmitLogin(formData: FormLoginProps) {
        setLoading(true);
        try {
            await handleLogin(formData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log('error', error);
        }
    }
    return {
        register,
        hasErrorsInput,
        assignInputName,
        getMessageErrorInput,
        onSubmitLogin: handleSubmit(onSubmitLogin),
        loading,
        isValid
    };
}

export default useLogin;