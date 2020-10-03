import React,{useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar } from "@fortawesome/free-solid-svg-icons";
import {Sider} from "../../components"
import { fetchData } from "../../actions"
import { useDispatch, useSelector } from "react-redux";
import "./ProductContainer.css"

function ProductContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    },[])
    
    const data = useSelector(state => state.data);

    const tags = data.tags ? (
        data.tags.map(tag => {
            return <span  className="tags">{tag}</span>;
        })
      ) : (
        <span />
    );
    
    const icons = [
        <div id="overview-icon">
            <a href="#">
                <FontAwesomeIcon icon={faHome} />
                <span id="overview-icon-text">OVERVIEW</span>
            </a>
        </div>,
        <div id="sales-icon">
            <a href="#">
                <FontAwesomeIcon icon={faChartBar} />
                <span id="sales-icon-text">SALES</span>
            </a>
        </div>
    ];

    const alt = data.title
        ? data.title + " image"
        : "No image";

    return (
    
            <Sider
                src={data.image}
                title={data.title}
                subtitle={data.subtitle}
                tags={tags}
                icons={icons}
                alt={alt}
            />
    )
}

export default ProductContainer