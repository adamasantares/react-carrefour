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
        const expression = this.props.expression || this.props.exp;

        // all values for CaseDefault
        const allCases = [];
        for (const child of this.props.children) {
            allCases.push(child.props.val);
        }

        const children = this.props.children.map((child, i) => {
            if (child.type && child.type.name === 'CaseDefault') {
                return React.cloneElement(child, {
                    key: i,
                    values: allCases,
                    expression
                });
            }
            return React.cloneElement(child, {
                key: i,
                val: child.props.val,
                expression
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
    ]),
    exp: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default Switch;
