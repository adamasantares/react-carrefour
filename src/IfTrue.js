import React from 'react';
import PropTypes from 'prop-types';
import OrElse from './OrElse';

class IfTrue extends React.Component {

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
        if (debug) console.log(`IfTrue (${debug}): total children number is ${children.length}`);
        const statement = typeof this.props.condition !== 'undefined' ?
            this.props.condition : (this.props.statement || this.props.st);
        const allowedChildren = [];
        let orElse = false;
        // TODO REDO React.Children.map(children, (child, i) ?
        if (!statement) {
            if (debug) console.log(`IfTrue (${debug}): statement = false`);
            for (const child of children) {
                if (child.type && child.type.name === 'OrElse') {
                    if (debug) console.log(`IfTrue (${debug}): OrElse detected. Start output children.`);
                    orElse = true;
                } else {
                    if (orElse) {
                        allowedChildren.push(child);
                    }
                }
            }
        } else {
            if (debug) console.log(`IfTrue (${debug}): statement = true`);
            for (const child of children) {
                if (child.type && child.type.name === 'OrElse') {
                    if (debug) console.log(`IfTrue (${debug}): OrElse detected. Break output children.`);
                    break;
                }
                allowedChildren.push(child);
            }
        }
        if (debug) console.log(`IfTrue (${debug}): result number of children is ${allowedChildren.length}`);
        return allowedChildren.length > 0 ?
            (<React.Fragment>{ allowedChildren }</React.Fragment>) : null;
    }

}


IfTrue.propTypes = {
    statement: PropTypes.bool,
    st: PropTypes.bool,
    debug: PropTypes.string
};

export default IfTrue;
