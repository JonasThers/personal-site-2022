import React, { useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../context/LoadingContext';

const Loading = () => {

    const [ dots, setDots] = useState('');

    const { setLoading } = useContext(LoadingContext);

    useEffect(() => {
        setTimeout(() => {
            setDots(dots + '.');
        }, 500);
    }, [dots]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            Loading{dots}
        </>
    )
}

export default Loading;