define(['react', 'jsx!components/TableRow'], function(React, TableRow) {

    /**
     * <TableList />
     */
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

    return TableList;

});