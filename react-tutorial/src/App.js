import React , { useRef, useState }from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import ErrorBoundary from './ErrorBoundary';
import InputSample from './InputSample';
import Counter from './Counter';
import UseReducer from './UseReducer';

const App =  () => {
    return (
        <ErrorBoundary>
            <div>
                <ul>
                    <li>
                        <Link to={"/"}> 홈 </Link>
                    </li>
                    <li>
                        <Link to={"/about"}> 소개 </Link>
                    </li>
                    <li>
                        <Link to={"/profiles"}> 유저 목록 </Link>
                    </li>
                    <li>
                        <Link to={"/history"}>예제</Link>
                    </li>
                    <li>
                        <Link to={"/user"}> 유저 리스트 테스트 </Link>
                    </li>
                    <li>
                        <Link to={"/counter"}> 유저 카운트 테스트 </Link>
                    </li>
                    <li>
                        <Link to={"/usereducer"}> useReducer를 사용하여 상태 관리 </Link>
                    </li>
                </ul>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route path="/user" component={InputSample} />
                <Route path="/counter" component={Counter} />
                <Route path="/usereducer" component={UseReducer} />
            </div>
        </ErrorBoundary>
    );
};

export default App;
