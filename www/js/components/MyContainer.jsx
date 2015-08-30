define(['react', 'jsx!components/MainCheckBox', 'jsx!components/TableList', 'jsx!components/ShowBtn'], function (React, MainCheckBox, TableList, ShowBtn) {
    /**
     * <MyContainer />
     */
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
            for (var i in this.state.data) {
                this.state.data[i].checked = event.target.checked;
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
});