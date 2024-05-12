'use client'

import React from 'react';
import CountUp from "react-countup";

const AnimatedCounter = ({amount}: { amount: number }) => {
    return (
        <CountUp
            decimals={2}
            end={amount}
            decimal=","
            prefix="$ "
        />
    );
};

export default AnimatedCounter;