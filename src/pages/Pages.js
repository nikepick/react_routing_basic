import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import ExternalPage from './ExternalPage';
const Pages = () => {
    return (
        <div>
            
              <Route path="/l/page1" component={Page1} />
              <Route path="/l/page2" component={Page2} />
              <Route path="/l/external" component={ExternalPage} />
        </div>
    )
}

export default Pages
