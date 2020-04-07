import React, { Component } from 'react';
import './App.css'; // APP 컴포넌트의 디자인 css
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { // state 초기화
            mode: "read",
            selected_content_id: 2,
            subject : {title: 'WEB', sub: "World Wide Web!"},
            welcome: {title: "welcome", desc : "Hello, React!!"},
            contents : [
                {id:1, title: 'HTML', desc: 'Html is for information '},
                {id:2, title: 'CSS', desc: 'CSS is for information '},
            ]
        }
    }
    // state의 값이 바뀌면 render()함수가 다시 호출되며 하위에 컴포넌트도 다시 호출된다.
    render() {
        let _title, _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if(this.state.mode === 'read'){
            let i = 0;
            while(i < this.state.contents.length){
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i += 1;
            }
        }
        console.log('render', this);
      return (
          <div className="App">
              {/*state를 바꾸는 방법 setState(), bind로 this를 묶어준다.*/}
              <Subject
                  title = {this.state.subject.title}
                  sub = {this.state.subject.sub}
                  onChangePage = {function(){
                      this.setState({mode : 'welcome'})
                  }.bind(this)}
              />
              <TOC
              onChangePage = {function (id) {
                  this.setState({
                      mode: 'read',
                      selected_content_id: Number(id)
                  })
              }.bind(this)}
              data={this.state.contents}
              />
              <Content
                  title = {_title}
                  desc = {_desc}/>
          </div>
      );
    }
}

export default App;
