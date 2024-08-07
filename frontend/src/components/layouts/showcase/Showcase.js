import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Timeless<span className="text-primary"> Tales</span>  for Children</h1>
                <p>A book is a gift you can open again and again</p>
                
                <SearchInputForm darkTheme={ true }/>
            </div>
        </section>
    )
}

export default Showcase;