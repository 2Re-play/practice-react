import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록 : </h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div>유저를 선택해주세요 </div>}/>
            <Route path = "/profiles/:username" component={Profile}/>
        </div>

    );
}

export default Profiles;
