import React from 'react';
import PropTypes from 'prop-types';


class Case extends React.Component {

    static displayName = 'Case';

    render()
    {
        if (!this.props.children || !this.props.expression) {
            return null;
        }
        const debug = this.props.debug || false;
        if (Array.isArray(this.props.val)) {
            if (this.props.val.includes(this.props.expression)) {
                if (debug) console.log(`Case "${this.props.val.join(',')}": match case`);
                return (<React.Fragment>{ this.props.children }</React.Fragment>);
            }
            if (debug) console.log(`Case "${this.props.val.join(',')}": no match`);
        } else {
            if (this.props.expression === this.props.val) {
                if (debug) console.log(`Case "${this.props.val}": match case`);
                return (<React.Fragment>{ this.props.children }</React.Fragment>);
            }
            if (debug) console.log(`Case "${this.props.val}": no match`);
        }
        return null;
    }

}


Case.propTypes = {
    val: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    expression: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    debug: PropTypes.string
};

export default Case;
