import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Input = ({ field: { onChange, value } }) => {
    // console.log(onChange, value);
    return <input onChange={onChange} value={value} />;
};

const App = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
        },
    });
    const onSubmit = (data) => console.log(data);
    const aaa = register('example');
    console.log(aaa);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...aaa} />
            <Controller name="firstName" control={control} render={({ field }) => <Input field={field} />} />
            <input type="submit" />
        </form>
    );
};

export default App;
