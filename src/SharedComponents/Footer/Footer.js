import React from 'react';
import "./Footer.css"

function Footer() {
    const  currentYear = new Date().getFullYear();
    return (
        <div className="footer">
                  Copyright &copy;
                  {currentYear} 
                  Ice Queen Pvt.
        </div>
    )
}
export default  Footer