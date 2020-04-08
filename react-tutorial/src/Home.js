import React from 'react';

const Home = () => {

    const user = [
        {
            hello : 1,
        }
    ]

    return (
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
            {/*<div>{user[0].id}</div>*/}
        </div>
    );
};

export default Home;

