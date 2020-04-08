import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search.substr(1));
    const detail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
            {detail && <p>추가적인 정보 </p>}
        </div>
    );
};

export default About;
