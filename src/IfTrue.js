import React from 'react';
import PropTypes from 'prop-types';
import OrElse from './OrElse';

class IfTrue extends React.Component {

    render()
    {
        if (!this.props.children) {
            return null;
        }
        let children = this.props.children;
        if (!Array.isArray(children)) {
            children = [ children ];
        }
        const statement = typeof this.props.condition !== 'undefined' ? this.props.condition : this.props.statement || this.props.st;
        const childrenIf = [];
        const childrenElse = [];
        let swap = false;
        for (const child of children) {
            if (child.type && child.type.name === 'OrElse') {
                swap = true;
            } else {
                if (swap) {
                    childrenElse.push(child);
                } else {
                    childrenIf.push(child);
                }
            }
        }
        if (!statement) {
            if (childrenElse.length > 0) {
                return (
                    <React.Fragment>
                        { childrenElse }
                    </React.Fragment>
                )
            }
            return null;
        }
        return (
            <React.Fragment>
                { childrenIf }
            </React.Fragment>
        )
    }

}


IfTrue.propTypes = {
    statement: PropTypes.bool,
    st: PropTypes.bool
};

export default IfTrue;
