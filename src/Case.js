import React from 'react';
import PropTypes from 'prop-types';


class Case extends React.Component {

    render()
    {
        if (!this.props.children || !this.props.expression) {
            return null;
        }
        if (Array.isArray(this.props.val)) {
            if (this.props.val.includes(this.props.expression)) {
                return (<React.Fragment>{ this.props.children }</React.Fragment>);
            }
        } else {
            if (this.props.expression === this.props.val) {
                return (<React.Fragment>{ this.props.children }</React.Fragment>);
            }
        }
        return null;
    }

}


Case.propTypes = {
    val: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.string,
            PropTypes.number
        ),
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    expression: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default Case;
