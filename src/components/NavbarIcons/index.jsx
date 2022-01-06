import React from 'react';

function NavbarIcons(props) {
    return (
        <div className="text-center d-inline m-1">
             {props.icon}
            <br/>
            <span>{props.text}</span>
        </div>
    )
}

export default NavbarIcons
