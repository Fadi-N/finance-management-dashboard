import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <div className="text-black-1 footer">
            <div className="flex-1">

                image
            </div>
            {/*<Image src={} alt={}/>*/}
            <div className="flex-1">
                <p>user</p>
                <p>useremail</p>
            </div>
            <div className="flex-1">
                button
            </div>
        </div>
    );
};

export default Footer;