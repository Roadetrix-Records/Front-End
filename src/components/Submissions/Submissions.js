import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';

import { Body } from '../GlobalStyles';
import { Container, 
        Form, Label, 
        Field, Submit, 
        Top, SubTop, 
        Full, ErrorContainer, 
        Error, Title } from './SumbissionsStyles';

function Submissions(){
    const { handleSubmit, register, errors } = useForm();
    const isError = Object.keys(errors).length

    const onSubmit = (data) => {
        console.log(data);
        // POST Request
        // {
        //     first_name: '',
        //     last_name: '',
        //     email: '',
        //     link: ''
        // }
    }

    // useEffect(() => {
    //     console.log(errors);
    // }, [errors])

    return(
        <Body>
            <Header/>
            <Title>Demo Submissions</Title>

            {isError && (
                <ErrorContainer>
                    <Error title>There appear to be some errors...</Error>
                    {/* First Name Errors */}
                    {errors.first_name && errors.first_name.type==='required' && <Error>Please Input A First Name</Error>}
                    {errors.first_name && errors.first_name.type==='minLength' && <Error>First Name Must Be Longer Than 2 Characters</Error>}
                    {errors.first_name && errors.first_name.type==='maxLength' && <Error>First Name Must Be Shorter Than 10 Characters</Error>}
                    {/* Last Name Errors */}
                    {errors.last_name && errors.last_name.type==='required' && <Error>Please Input A Last Name</Error>}
                    {errors.last_name && errors.last_name.type==='minLength' && <Error>Last Name Must Be Longer Than 2 Characters</Error>}
                    {errors.last_name && errors.last_name.type==='maxLength' && <Error>Last Name Must Be Shorter Than 10 Characters</Error>}
                    {/* Email Errors */}
                    {errors.email && errors.email.type==='required' && <Error>Please Input An Email</Error>}
                    {errors.email && errors.email.type==='pattern' && <Error>Please Enter A Valid Email</Error>}
                    {/* Link Errors */}
                    {errors.link && errors.link.type==='required' && <Error>Please Enter A Demo Link</Error>}
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
                                    required: true,
                                    minLength: 2,
                                    maxLength: 10
                                })}
                            />
                        </SubTop>
                        <SubTop>
                            <Label>Last Name *</Label>
                            <Field
                                name='last_name'
                                ref={register({
                                    required: true,
                                    minLength: 2,
                                    maxLength: 10
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
                                required: true,
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                }
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