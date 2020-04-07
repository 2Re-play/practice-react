import React, {Component} from "react"


class TOC extends Component {
    render() {
        const lists = [];
        const data = this.props.data
        let i = 0;
        while(i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                    href={"/content/"+data[i].id}
                    data-id = {data[i].id}
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id); // onChagePage를 호출할 때 해당 태그의 target에 있는 data를 넘겨준다.
                    }.bind(this)}>
                    {data[i].title}</a>
                </li>)
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;
