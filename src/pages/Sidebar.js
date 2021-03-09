import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="boxGreen">
            Sidebar
            <div>
            <Link to="/l/page1">Page1</Link>
            </div>
            <div>
            <Link to="/l/page2">Page2</Link>
            </div>
            <div>
            <Link to="/external">External</Link>
            </div>
        </div>
    )
}

export default Sidebar
