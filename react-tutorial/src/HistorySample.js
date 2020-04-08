import React, { Component } from 'react';

class HistorySample extends Component {
    // back
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // home
    handelGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        this.unblock = this.props.history.block("정말로 떠나실건가요?");
    }

    componentWillUnmount() {
        if(this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handelGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;
