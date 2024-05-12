import React from 'react';

const HeaderBox = ({type = "title", title, subtitle, user} : HeaderBoxProps) => {
    return (
        <div>
            <h1 className="header-box-title">
                {title}
                {type === "greeting" && (
                    <span className="text-blue-500"> {user}</span>
                ) }
            </h1>
            <p className="header-box-subtitle">{subtitle}</p>
        </div>
    );
};

export default HeaderBox;