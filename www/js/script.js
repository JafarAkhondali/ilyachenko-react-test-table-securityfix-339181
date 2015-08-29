'use strict';

var data = {
    1: {name: "Mark", lastName: "Otto", userName: "Otto"},
    2: {name: "Jacob", lastName: "Thornton", userName: "@fat"},
    3: {name: "Larry", lastName: "the Bird", userName: "@twitter"}
};

var MainCheckBox = React.createClass({
    handleChange: function () {
        if (event.target.checked) {

        }
    },
    render: function () {
        return (<input className="multi-select" onChange={this.handleChange} type="checkbox"/>)
    }
});

React.render(
    <MainCheckBox />,
    document.getElementById('mainCheckBox')
);


var ShowBtn = React.createClass({
    clickHandler: function () {
        debugger
    },
    render: function () {
        return (<button className="btn btn-default action-button" type="submit" onClick={this.clickHandler}>Show selected id's</button>)
    }
});

React.render(
    <ShowBtn />,
    document.getElementById('showBtn')
);

var TableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <th scope="row">
                    <input type="checkbox" value={this.props.value} />
                </th>
                <td>{this.props.name}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.userName}</td>
            </tr>
        )
    }
});

var TableList = React.createClass({
    handleChange: function () {
        console.log(this);
    },
    render: function () {
        var rows = [];

        for (var i in data) {
            var _valObj = data[i];
            rows.push(<TableRow name={_valObj.name}  lastName={_valObj.lastName}  userName={_valObj.userName} value={i} />);
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

React.render(
    <TableList />
    ,
    document.getElementById('tableList')
);