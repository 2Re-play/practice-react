import React, {Component, Fragment} from 'react';
import Popup from "reactjs-popup"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


class App extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })

    render() {

        return (
        <Fragment>
            <Popup trigger={<button className="button"> Open Modal </button>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    <div className="header"> Modal Title </div>
                    <div className="content">
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                </div>
            )}
    </Popup>
    </Fragment>
    );
    }
}

export default App;
