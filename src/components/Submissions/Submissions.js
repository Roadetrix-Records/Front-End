import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';

import { Body } from '../GlobalStyles';
import { Container, Form, Label, Field, Submit, Top, SubTop, Full, ErrorContainer, Error } from './SumbissionsStyles';

function Submissions(){
    const { handleSubmit, register, errors } = useForm();
    const isError = Object.keys(errors).length

    const onSubmit = (data) => {
        console.log(data);
    }

    // useEffect(() => {
    //     console.log(errors);
    // }, [errors])

    return(
        <Body>
            <Header/>
            {isError && (
                <ErrorContainer>
                    <Error title>There appears to be some errors...</Error>
                    {errors.first_name && errors.first_name.type==='required' && <Error>Please Input A First Name</Error>}
                </ErrorContainer>
            )}
            <Container error={isError}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Top>
                        <SubTop>
                            <Label>First Name *</Label>
                            <Field
                                name='first_name'
                                ref={register({
                                    required: true
                                })}
                            />
                        </SubTop>
                        <SubTop>
                            <Label>Last Name *</Label>
                            <Field
                                name='last_name'
                                ref={register({
                                    required: true
                                })}
                            />
                        </SubTop>
                    </Top>
                    <Full>
                        <Label>Email *</Label>
                        <Field
                            name='email'
                            type='email'
                            ref={register({
                                required: true
                            })}
                        />
                    </Full>
                    <Full>
                        <Label>Link *</Label>
                        <Field
                            name='link'
                            ref={register({
                                required: true
                            })}
                        />
                    </Full>
                    <Submit type='submit'>Submit Demo</Submit>
                </Form>
            </Container>
        </Body>
    );
}

export default Submissions;