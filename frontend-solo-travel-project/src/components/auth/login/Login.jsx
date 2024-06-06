import { React, useRef } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import FullButton from '../../buttons/FullButton';

function Login({updateToken}) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(emailRef.current)
        // console.log(passwordRef.current.value)

        let body = JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })

        const url='http://localhost:4000/user/login';

        try {
            
            const res = await fetch(url, {
                method: 'POST',
                body: body,
                headers: new Headers({
                    "Content-Type": 'application/json'
                })
            })

            const data = await res.json();
            console.log(data);
            if(data.message === 'Successful!') {
                updateToken(data.token);
                navigate('/movie');
            } else {
                alert(data.message)
            }
            updateToken(data.token)

        } catch (err) {
            console.error(err.message);
            
        }
    }

    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                    innerRef={emailRef}
                        type='email'
                        placeholder='email'
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    innerRef={passwordRef}
                        type='password'
                        placeholder='password'
                    />
                </FormGroup>
                <FullButton>
                    <Button type='submit'>Login</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default Login