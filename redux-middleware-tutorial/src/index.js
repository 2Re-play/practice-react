import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer,  { rootSaga } from './modules';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
    context: {
        history: customHistory
    }
}); // 사가 미들웨어를 만듭니다.

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory }), sagaMiddleware, logger))
); // 여러개의 미들웨어를 적용 할 수 있습니다.
// process.env.NODE_ENV가 production인지 development인지 구분
// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://api.velog.io/';


sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.

ReactDOM.render(
    <Router history={customHistory}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
