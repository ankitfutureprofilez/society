import React from "react";
function HeadingBlock({shortTitle, title, description}) {
    return (  
        <div className="heading_block">
            <span>{shortTitle}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default HeadingBlock;