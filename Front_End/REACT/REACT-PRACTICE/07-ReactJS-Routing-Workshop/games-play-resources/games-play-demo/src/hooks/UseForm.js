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

    const changeValues=(newValues) => {
        // tr porverka dali novite otg na starite st-sti
        // validate new values
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues
    };
};
