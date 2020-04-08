import React, { useContext, useRef } from 'react';
import { UserDispatch} from "./UseReducer"
import useInputs from "./hooks/useInputs"

/*
React.memo를 통해 감싸면 꼭 필요한 경우에만 리렌더링 하도록 최적화 할 수 있다.
 */
function CreateUser() {
    const [ { username, email}, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
    const nextId = useRef(4);
    const dispatch = useContext(UserDispatch);

    const onCreate = () => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        reset();
        nextId.current += 1;
    }
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);
