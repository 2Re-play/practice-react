import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleSlider from './SimpleSlider'
import queryString from 'query-string';

function App({ history, form, ua }) {

    function handleSubmit(e) {
        e.preventDefault();

        /* 가맹점 식별코드 */
        const userCode = 'imp10391932';
        /* 결제 데이터 */

        const data = {
            merchant_uid : 'test123123123123',
        };

        // 주문번호 제외하고 전부 필수 값 아님.
        // if (name) {
        //     data.name = name;
        // }
        // if (phone) {
        //     data.phone = phone;
        // }
        // if (min_age) {
        //     data.min_age = min_age;
        // }
        /* 웹 환경일때 */
        const { IMP } = window;
        console.log(IMP)
        IMP.init(userCode);
        IMP.certification(data, callback);
        // if (isReactNative()) {
        //     /* 리액트 네이티브 환경일때 */
        //     const params = {
        //         userCode,
        //         data,
        //         type: 'certification', // 결제와 본인인증을 구분하기 위한 필드
        //     };
        //     const paramsToString = JSON.stringify(params);
        //     window.ReactNativeWebView.postMessage(paramsToString);
        // } else {
        //     /* 웹 환경일때 */
        //     const { IMP } = window;
        //     IMP.init(userCode);
        //     IMP.certification(data, callback);
        // }
    }

    /* 본인인증 후 콜백함수 */
    function callback(response) {
        const query = queryString.stringify(response);
        console.log(response.imp_uid)
        history.push(`/certification/result?${query}`);
    }

    function isReactNative() {
        /*
          리액트 네이티브 환경인지 여부를 판단해
          리액트 네이티브의 경우 IMP.certification()을 호출하는 대신
          iamport-react-native 모듈로 post message를 보낸다

          아래 예시는 모든 모바일 환경을 리액트 네이티브로 인식한 것으로
          실제로는 user agent에 값을 추가해 정확히 판단해야 한다
        */
        if (ua.mobile) return true;
        return false;
    }
  return (
    <div className="App">
          <button onClick={handleSubmit}> 본인인증 하기</button>
    </div>
  );
}

export default App;
