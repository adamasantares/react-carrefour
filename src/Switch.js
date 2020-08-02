import React from 'react';
import PropTypes from 'prop-types';
import Case from './Case';
import CaseDefault from './CaseDefault';

class Switch extends React.Component {

    render()
    {
        if (!this.props.children) {
            return null;
        }

        // all values for CaseDefault
        const allCases = [];
        for (const child of this.props.children) {
            allCases.push(child.props.val);
        }

        const children = this.props.children.map((child, i) => {
            if (child.type.name === 'CaseDefault') {
                return React.cloneElement(child, {
                    key: i,
                    values: allCases,
                    expression: this.props.expression
                });
            }
            return React.cloneElement(child, {
                key: i,
                val: child.props.val,
                expression: this.props.expression
            });
        }, this);

        return (
            <React.Fragment>
                { children }
            </React.Fragment>
        )
    }

}


Switch.propTypes = {
    expression: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};

export default Switch;
