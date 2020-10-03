import React from 'react'
import "./Footer.css"

function Footer(props) {
    return (

        <div className="footer">
            <table>
                <thead >
                    <tr>
                        <th scope="col" onClick={() => props.sortBy("weekEnding")}>
                        <div>
                            <div className="tableHeader">WEEK ENDING
                                <span className="arrowIcon"> {props.icon}</span>
                            </div>
                        </div>
                        </th>
                        <th scope="col" onClick={() => props.sortBy("retailSales")}>
                        <div>
                            <div className="tableHeader">RETAIL SALES
                                <span className="arrowIcon"> {props.icon}</span>
                            </div>
                        </div>
                        </th>
                        <th scope="col" onClick={() => props.sortBy("wholesaleSales")}>
                        <div>
                            <div className="tableHeader">WHOLESALE SALES
                                <span className="arrowIcon"> {props.icon}</span>
                            </div>
                        </div>
                        </th>
                        <th scope="col" onClick={() => props.sortBy("unitsSold")}>
                        <div>
                            <div className="tableHeader">UNITS SOLD
                                <span className="arrowIcon"> {props.icon}</span>
                            </div>
                        </div>
                        </th>
                        <th scope="col" onClick={() => props.sortBy("retailerMargin")}>
                        <div>
                            <div className="tableHeader">RETAILER MARGIN
                                <span className="arrowIcon"> {props.icon}</span>
                            </div>  
                        </div>
                        </th>
                    </tr>
                    </thead>
                <tbody>{props.rows}</tbody>
            </table>
        </div>

                
    )
}

export default Footer
