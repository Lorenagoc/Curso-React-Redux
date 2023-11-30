import React, { cloneElement } from "react";

export default function Familia(props) {

    return (
        /*<div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Ana" {...props}/>
            <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
        </div> */

        <div>
            {
                props.children.map((child, index) => {
                    return cloneElement(child, { ...props, key: index })
                })
            }
        </div>
    )
}