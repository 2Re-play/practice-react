import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
};

function reducer (state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT' :
            return {
                ...state,
                inputs: {
                    ...state.inputs, // 새로운 상태를 만들 때 불변성을 지켜줘야하기 때문에 spread 연산자를 사용하여 불변성을 지켜준다.
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            };
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                )
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default:
            return state;
    }
}
// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
    const nextId = useRef(4);

    // const onChange = useCallback(e=> {
    //     const { name, value } = e.target;
    //     dispatch({
    //         type: 'CHANGE_INPUT',
    //         name,
    //         value
    //     });
    // }, []);

    // const onCreate = useCallback(() => {
    //     dispatch({
    //         type : 'CREATE_USER',
    //         user: {
    //             id: nextId.current,
    //             username,
    //             email
    //         }
    //     });
    //     reset();
    //     nextId.current += 1;
    // }, [username, email, reset]);

    // const onToggle = useCallback((id) => {
    //     dispatch({
    //         type: 'TOGGLE_USER',
    //         id
    //     });
    // }, []);
    //
    // const onRemove = useCallback((id) => {
    //     dispatch({
    //         type: 'REMOVE_USER',
    //         id
    //     });
    // }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value ={dispatch}>
            <CreateUser/>
            <UserList users={users} />
            <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
    );
}

export default UseReducer;
