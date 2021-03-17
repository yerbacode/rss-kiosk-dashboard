import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledClock = styled.div `
color: black;
font-size: 60px;
`;


const Clock = () => {

    const [time, setTime] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <StyledClock>{time}</StyledClock>
    )
}

export default Clock;