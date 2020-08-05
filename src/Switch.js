import React from 'react';
import PropTypes from 'prop-types';
import Case from './Case';
import CaseDefault from './CaseDefault';
import { childName } from './utils';

class Switch extends React.Component {

    render()
    {
        if (!this.props.children) {
            return null;
        }
        const debug = this.props.debug || false;
        let children = this.props.children;
        if (!Array.isArray(children)) {
            children = [ children ];
        }
        const expression = this.props.expression || this.props.exp;
        if (debug) console.log(`Switch (${debug}): expression is`, expression);
        if (debug) console.log(`Switch (${debug}): total children number is ${children.length}`);

        // all values for CaseDefault
        const allCases = [];
        for (const child of children) {
            const name = childName(child);
            if (debug) console.log(`Switch (${debug}): child ${name}`, child);
            if (name === 'Case') {
                allCases.push(child.props.val);
            }
        }
        if (debug) console.log(`Switch (${debug}): cases number is ${allCases.length}`);

        children = children.map((child, i) => {
            const name = childName(child);
            if (name === 'CaseDefault') {
                return React.cloneElement(child, {
                    key: i,
                    values: allCases,
                    expression,
                    debug
                });
            }
            return React.cloneElement(child, {
                key: i,
                val: child.props.val,
                expression,
                debug
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
    debug: PropTypes.string
};

export default Switch;
