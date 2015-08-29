'use strict';


var MainCheckBox = React.createClass({
    render: function () {
        return (<input className="multi-select" onChange={this.props.onChange} type="checkbox"/>)
    }
});

var ShowBtn = React.createClass({
    clickHandler: function () {
        var _arr = [];
        for (var i in this.props.data) {
            if (this.props.data[i].checked) {
                _arr.push(i);
            }
        }
        console.log(_arr);
    },
    render: function () {
        return (<button className="btn btn-default action-button" type="submit" onClick={this.clickHandler}>Show selected id's</button>)
    }
});

var TableRow = React.createClass({
    handleChange: function () {
        if (event.target.checked) {
            this.props.data.checked = true;
        }
        else {
            this.props.data.checked = false;
        }

        this.setState({});
    },
    render: function () {
        var i = this.props.value
        return (
            <tr>
                <th scope="row">
                    <input type="checkbox" value={i} checked={this.props.data.checked} onChange={this.handleChange} />
                </th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.userName}</td>
            </tr>
        )
    }
});

var TableList = React.createClass({
    render: function () {
        var rows = [];

        var data = this.props.data;

        for (var i in data) {
            rows.push(<TableRow
                data={data[i]}
                value={i} />);
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>&#35;</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
});

var MyContainer = React.createClass({
    getInitialState: function () {
        return {
            data: {
                1: {name: "Mark", lastName: "Otto", userName: "Otto", checked: false},
                2: {name: "Jacob", lastName: "Thornton", userName: "@fat", checked: false},
                3: {name: "Larry", lastName: "the Bird", userName: "@twitter", checked: false}
            }
        };
    },
    handleChangeMainCheckBox: function () {
        if (event.target.checked) {
            for (var i in this.state.data) {
                this.state.data[i].checked = true;
            }
        }
        else {
            for (var i in this.state.data) {
                this.state.data[i].checked = false;
            }
        }

        this.setState({});
    },
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <MainCheckBox onChange={this.handleChangeMainCheckBox} />
                    <ShowBtn data={this.state.data} />
                </div>
                <div className="panel-body">
                    <TableList data={this.state.data} />
                </div>
            </div>
        )
    }
});

React.render(
    <MyContainer />,
    document.getElementById('myContainer')
);