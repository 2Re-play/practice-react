import React from 'react';
import { Route } from 'react-router-dom';
import SubTest from "./SubTest"

function TestContainer() {
    return (
        <div>
            <Route path="/super/test" component={SubTest}>sub</Route>
        </div>
    );
}

export default TestContainer;
