import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#33333' : '#67C8CA')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: white;
//color: ${({dark}) => (dark ? '#333' : 'fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-tems: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#67C8CA' : '#FFF')};
    color: #333;
`