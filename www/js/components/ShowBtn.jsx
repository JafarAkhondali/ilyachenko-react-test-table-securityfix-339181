define(['react'], function (React) {
    /**
     * <ShowBtn />
     */
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
            return (<button
                className="btn btn-default action-button" type="submit"
                onClick={this.clickHandler}>
                Show selected id's
            </button>)
        }
    });

    return ShowBtn;
});