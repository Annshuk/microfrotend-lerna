import {Flex} from 'rebass'
import styled from "styled-components";

import { RemoteApp } from '../../RemoteApp'

const LeftSide = styled(Flex)`
&& {
    background-color: #f1f1f1;
    max-width:300px;
    width:30%;

    ul {list-style: none}
    ul li {padding: 5px;}
    ul li a { color: black; text-decoration: none; display: block}
    ul li a:hover { text-decoration: underline;}
    ul li:hover { background-color: #ccc; }
}`



export const Aside = () => <LeftSide flexDirection="column" as="aside">
     <RemoteApp name='app3' url='http://localhost:3003/remoteEntry.js' module="App"/>
</LeftSide>