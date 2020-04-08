import React, { useEffect, useContext } from 'react';
import { UserDispatch } from "./UseReducer"
/*
배열의 동적인 렌더링을 하기 위해서는 배열의 내장함수인 map함수를 사용한다.
map()함수는 배열안에 있는 각 원소를 변환하여 새로운 배열을 만들어준다.
리액트에서 동적인 배열을 렌더링 해야할 때 이 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 된다.

배열의 key
만약에 배열을 렌더링 할 때 key 설정을 하지 않게 된다면 기본적으로 배열의 index값을 key로 사용하게 되고
경고가 뜨게된다. 이렇게 경고 메시지가 뜨는 이유는, 각 고유 원소에 key가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링 될 수 있기 때문이다.

useEffect
useEffect 라는 Hook을 사용하여 컴포넌트가 마운트 됐을 때 (처음 나타났을 때)
언마운트 됐을 때 (사라질때) 그리고 업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리할 수 있다.
첫번째 인자로는 함수, 두번째 인자에는 의존값이 들어있는 배열을 넣는다.
만약 두번째 인자 배열을 비워둘 경우 컴포넌트가 처음 나타날 때만 useEffect에 등록한 함수가 호출된다.
useEffect에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부른다.
deps가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출된다.
 */

const User = React.memo(({user, onRemove, onToggle}) => {
    const dispatch = useContext(UserDispatch);

    useEffect(()=>{
        console.log('user 값이 설정됨');
        console.log(user)
        return () => {
            console.log('user가 바뀌기 전..');
            console.log(user);
        }
    } , [user])

    return(
        <div>
            <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black'}} onClick={() => dispatch({type: 'TOGGLE_USER', id: user.id})}> {user.username}  &nbsp; </b>
            <span>({user.email})</span>
            <button onClick={() => dispatch({type:'REMOVE_USER', id: user.id})}>삭제</button>
        </div>
    )
});

function UserList( { users }) {
    return (
        <div>
            <div>
                {users.map((user) => (
                    <User user={user} key = {user.id}/>
                ))}
            </div>
        </div>
    )
}

export default React.memo(UserList);
