import React from 'react'
import { sortBy } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components"


function TableContainer() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)

  const rows = data.sales ? (
    data.sales.map(row => {
      return (
        <tr key = {row.weekEnding.toLocaleString()}>
          <td>{row.weekEnding.toLocaleString()}</td>
          <td>{"$" + row.retailSales.toLocaleString()}</td>
          <td>{"$" + row.wholesaleSales.toLocaleString()}</td>
          <td>{row.unitsSold.toLocaleString()}</td>
          <td>{"$" + row.retailerMargin.toLocaleString()}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td rowSpan="5">No data to display</td>
    </tr>
  );
  
  const arrowIcon = <FontAwesomeIcon icon={faCaretDown} />;

    return <Footer rows={rows} sortBy={(key)=>dispatch(sortBy(key))} icon={arrowIcon} />;

}

export default TableContainer