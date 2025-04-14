import { Link } from 'gatsby'
import React from 'react'

const Button = ({ children, className = "btn_global", link, ...props }) => {
    return (
        <button className={className} {...props}>
            {link ? <Link to={link}>{children}</Link> : <a>{children}</a>}
        </button>
    )
}

export default Button