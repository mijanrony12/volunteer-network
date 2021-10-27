import {useState, useEffect } from 'react'

const useWork = () => {
    const [ work, setWork ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/work')
            .then(res => res.json())
            .then(data => {
            setWork(data)
        })
    }, [])
    return [work, setWork]
}

export default useWork;