import { useState, useCallback, useReducer } from 'react';

/*
커스텀 Hooks를 만들 때에는 보통 이렇게 use라는 키워드로 시작하는 파일을 만들고 그안에 함수를 작성한다.
커스터 Hooks를 만드는 방법은 안에서 useState, useEffect, useReducer useCallback 등 Hooks를 사용하여 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값들을 반환새주면 된다.
 */

function reducer (state, action) {
    switch (action.type) {
        case 'CHANGE' :
            return {
                ...state,
                [action.name] : action.value
            };
        case 'RESET' :
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default:
            return state;
    }
}

function useInputs(initialForm) {
    // const [form, setForm] = useState(initialForm);
    const [form, dispatch] =useReducer(reducer, initialForm);

    // change
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        // setForm(form => ({...form, [name]: value}));
        dispatch({type:'CHANGE', name, value});
    }, []);
    const reset = useCallback(() => dispatch({type: 'RESET'}), []);
    return [form, onChange, reset];
}

export default useInputs;
