import React from 'react';
import PropTypes from 'prop-types';


class CaseDefault extends React.Component {

    static displayName = 'CaseDefault';

    render()
    {
        if (!this.props.children || !this.props.expression || !this.props.values) {
            return null;
        }
        const debug = this.props.debug || false;
        let hasMatch = false;
        for (const val of this.props.values) {
            if (Array.isArray(val)) {
                if (val.includes(this.props.expression)) {
                    hasMatch = true; break;
                }
            } else {
                if (this.props.expression === val) {
                    hasMatch = true; break;
                }
            }
        }
        if (debug && !hasMatch) console.log(`CaseDefault: no any other matches`);
        return hasMatch ?
            null : (<React.Fragment>{ this.props.children }</React.Fragment>);
    }

}


CaseDefault.propTypes = {
    values: PropTypes.array,
    expression: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    debug: PropTypes.string
};

export default CaseDefault;
