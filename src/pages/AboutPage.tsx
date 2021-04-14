import React from 'react'
import { useHistory } from 'react-router'

export const AboutPage: React.FC = () => {

    const history = useHistory()

    return (
        <>
            <h1>Hello from about</h1>
            <button className="btn" onClick={()=>history.push("/")}>go to todos</button>
        </>
    )
}