define(['react'], function(React) {
    /**
     * <MainCheckBox />
     */
    var MainCheckBox = React.createClass({
        render: function () {
            return (<input className="multi-select" onChange={this.props.onChange} type="checkbox"/>)
        }
    });

    return MainCheckBox;
});
