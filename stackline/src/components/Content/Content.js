import React from 'react'
import "./Content.css"
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function Content (props) {

  return (
        <div className="content">
            <div style={{position:"absolute",float:"left",padding:"2px 0px 0px 5px", color:"#777777",fontWeight:"500"}}>Retail Sales</div>
                {props ? <LineChart margin={{ top: 0, left: -62, right: 0, bottom: 0 }}  width={1480} height={470} data={props.props}>
                {/* <XAxis dataKey="Months" /> */}
                <XAxis label={{ value:'', angle: 0, position: 'bottom' }} dataKey="Months" tickLine={false} tick={{fontSize: 9, angle: 0}} />
                <YAxis tick={false} domain={[-1100000, 2100000]}/>
                <Tooltip />
                <Line type="monotone" dataKey="retailSales" dot={false} stroke="#40a8ef" strokeWidth={2}/>
                <Line type="monotone" dataKey="wholesaleSales" dot={false} stroke="#3c4858" strokeWidth={2}/>
                </LineChart> : <h1>loading</h1>}
            
        </div>
        
    )
}

export default Content