import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from "./UserList"
import CreateUser from './CreateUser';

/*
단순히 input의 갯수가 여러개 됐을 때 useState를 여러번 사용하고 onChange도 여러개 만들어서 구현 할 수 있지만
좋은 방법은 아니다.
더 좋은 방법은 inputdp name을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것이다.
그리고 userState에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야한다.

hook의 method인 userMemo 함수를 사용하여 users에 변화가 있을 때만 리렌딩된다.

useCallback을 사용하여 함수 재사용하기
함수들은 컴포넌트가 리렌더링 될 때 마다 새로 만들어진다.
함수를 선언하는 것 자체는 메모리와 cpu 리소스를 많이 차지하는 작업은 아니지만
컴포넌트에서 props가 바뀌지 않았으면 virtual DOM에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용하는 최적화 작업을 해 함수를 재사용하는것이 필수다.
userCallback을 사용하며 주의할 점은 함수 안에서 사용하는 상태 혹은 props가 있다면, 꼭 deps 배열안에 포함시켜야한다.
만약 deps배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조할 것이라고 보장 할 수 없다.
useCallback은 userMemo를 기반으로 만들어졌다. 다만, 함수를 위해서 사용할 때 더욱 편하게 해준 것 뿐이다.
예를 들어서, User 컴포넌트에 b 와 button 에 onClick 으로 설정해준 함수들은, 해당 함수들을 useCallback 으로 재사용한다고 해서 리렌더링을 막을 수 있는것은 아니므로, 굳이 그렇게 할 필요 없습니다.


 */
function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}


const InputSample = () => {
    const [users, setUsers] = useState([
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
    ]);

    const [inputs, setInputs] = useState({
        username : '',
        email : ''
    });

    const nameInput = useRef(); // useRef()를 사용하여 Ref객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 ref값으로 설정해주어야 한다.

    const nextId = useRef(4);

    const { username, email } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target; // e.target에서 name과 value를 추출
        setInputs({
            ...inputs, // spread문법을 통해 기존의 input 객체를 복사
            [name] : value // name 키를 가진 값을 value로 설정한다.
        });
    };

    const onReset = () => {
        setInputs({
            username : '',
            email : ''
        });
        nameInput.current.focus(); // Ref객체의 .current 값은 우리가 원하는 DOM을 가르키게 된다.
    };

    // const onCreate = () => {
    //     const user = {
    //         id : nextId.current,
    //         username,
    //         email
    //     };
    const onCreate = useCallback(()=>{
        const user = {
            id: nextId.current,
            username,
            email
        }
        setUsers( users => [...users, user]);

        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    }, [username, email]);


    // const onRemove = (id) => {
    //     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만든다.
    //     // = user.id가 id인 것을 제거한다.
    //     setUsers(users.filter(user => user.id !== id))
    // }

    const onRemove = useCallback(
        (id) => {
            setUsers( users => users.filter(user => user.id !== id))
        },
        []
    );

    // const onToggle = id => {
    //     setUsers(
    //         users.map(user =>
    //             user.id === id ? { ...user, active: !user.active } : user
    //         )
    //     );
    // };

    const onToggle = useCallback( (id) => {
            setUsers( users =>
                users.map(user =>
                    user.id === id ? {...user, active : !user.active } : user
                )
            );
        }, []);

    const count = useMemo(()=> countActiveUsers(users), [users]);

    return (
        <div>
            <CreateUser />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성사용자 수 : {count}</div>

        </div>
    )
}

export default InputSample;
