// components/PrintButton.js

import React from 'react';
import Image from "next/image";


type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const PrintButton = ({ type, title, icon, variant, full }: ButtonProps) => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <button className={`flexCenter rounded-md border border-gray-20 bg-black-300 px-5 py-2 text-black`}
            type={type} onClick={handlePrint}>
                {icon && <Image src={icon} alt={title} width={20} height={24}  />}
            <label className="bold-16 whitespace-nowrap cursor-pointer pl-3">{title}</label>
        </button>
    );
};

export default PrintButton;
