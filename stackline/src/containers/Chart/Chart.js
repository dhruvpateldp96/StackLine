import React from 'react'
import { Content } from "../../components"
import { useSelector } from "react-redux"
import moment from "moment"

function Chart() {
    
    const sales = useSelector(state => state.data.sales);
    // console.log(sales)
    const date = sales ? sales.map(elem => {
        return{ ...elem,
                "Months" : moment(elem.weekEnding).format('MMMM').substring(0, 3).toLocaleUpperCase()
        }
    }) : {}
    // console.log(date)

    return (
        <Content props={date}/>
    )
}

export default Chart;