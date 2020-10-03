import React from 'react'
import "./Home.css"
import {Header,Main} from "../../components"
import { ProductContainer } from "../../containers"

function Home() {
    return (
        <div className="page">
            <Header/>

            <div className="body">
                <ProductContainer/>
                <Main/>
            </div>
 
        </div>
    )
}

export default Home
