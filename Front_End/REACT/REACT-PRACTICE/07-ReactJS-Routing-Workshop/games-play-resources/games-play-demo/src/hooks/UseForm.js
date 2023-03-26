import { useState } from 'react';

export const useForm = (initValues, onSubmitHandler) => {
    const [values, setValues] = useState(initValues);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setValues((state) => ({ ...state, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
    };

    return {
        values,
        changeHandler,
        onSubmit,
    };
};
