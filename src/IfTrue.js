import React from 'react';
import PropTypes from 'prop-types';
import OrElse from './OrElse';

class IfTrue extends React.Component {

    render()
    {
        if (!this.props.children) {
            return null;
        }

        const childrenIf = [];
        const childrenElse = [];
        let swap = false;
        for (const child of this.props.children) {
            if (child.type.name === 'OrElse') {
                swap = true;
            } else {
                if (swap) {
                    childrenElse.push(child);
                } else {
                    childrenIf.push(child);
                }
            }
        }
        if (!this.props.condition) {
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
    condition: PropTypes.bool.isRequired
};

export default IfTrue;
