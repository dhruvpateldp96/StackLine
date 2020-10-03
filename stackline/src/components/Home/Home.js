import React from 'react'
import "./Home.css"
import {Header,Sider,Main} from "../../components"

function Home() {
    return (
        <div className="page">
            <Header/>

            <div className="body">
                <Sider/>
                <Main/>  
            </div>
            

        </div>
    )
}

export default Home
