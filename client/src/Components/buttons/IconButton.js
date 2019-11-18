import React from "react";

const IconButton = ({app})=> {
    const { img, href, alt, color, txt, name } = app;

    return (
        <a href={href}
        className="btn login-btn"
        style={{ backgroundColor: color, margin: 5, diplay: "block" }}
        title={txt}
    >
        <img scr={img} alt={alt} className="btn-icon" />
        <span className="btn-text">{name.toUpperCase()}Login</span>
    </a>
    );
};

export default IconButton;