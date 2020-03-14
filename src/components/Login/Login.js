import React from 'react';
import { useForm } from 'react-hook-form';

// Style imports
import { Container, Title, Form, Label, Input, Submit, Error } from './LoginStyles';

function Login(){
    const { handleSubmit, register, errors } = useForm();

    const submitForm = (data, e) => {
        e.target.reset();
        console.log(data)

        // Axios get request here
    }

    return(
        <Container>
            <Title>Admin Login</Title>
            <Form onSubmit={handleSubmit(submitForm)}>
                <Label>Username</Label>
                <Input
                    name='username'
                    type='text'
                    ref={register({
                        required: true
                    })}
                />
                {errors.username && <Error>Username required</Error>}
                <Label>Password</Label>
                <Input
                    name='password'
                    type='password'
                    ref={register({
                        required: true
                    })}
                />
                {errors.password && <Error>Password required</Error>}
                <Submit type='submit' name='login'>Login</Submit>
            </Form>
        </Container>
    );
}

export default Login;