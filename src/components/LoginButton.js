import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components'
import Button from './ButtonElements'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button onClick={() => loginWithRedirect()}>
            Sign In
        </button>
    )
}

export default LoginButton
