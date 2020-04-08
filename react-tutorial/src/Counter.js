import React, { useReducer } from 'react';


/*
useReducer Hook 함수
reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수다.
reducer에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.
reducer는 인자로 state, action을 받는다.
action은 업데이트를 위한 정보를 가지고 있다. 주로 type값을 지닌 객체 형태를 사용하지만, 관습이다.

 */
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
