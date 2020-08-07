import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} /> {/* render the page just when the url is equal to the path */} 
            <Route path="/study" component={TeacherList} />
            <Route path="/give-class" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;