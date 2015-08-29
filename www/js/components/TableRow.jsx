define(['react'], function(React) {
    /**
     * <TableRow value={1} checked={false} />
     */
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

    return TableRow;
});