import React from 'react';
import PropTypes from 'prop-types';


class ForEach extends React.Component {

    render()
    {
        if (!this.props.children) {
            return null;
        }
        let children = this.props.children;
        if (!Array.isArray(children)) {
            children = [ children ];
        }
        const argument = this.props.as;
        const elements = [];
        let key = 0;

        for (const value of this.props.of) {
            const _items = children.map(child => {
                if (typeof(child) === 'function') {
                    child = child(value);
                }
                if (child.type && child.props) {
                    const props = { key };
                    props[argument] = value;
                    key++;
                    return React.cloneElement(child, props);
                }
                return null;
            }, this);
            elements.push(_items);
        }
        return (
            <React.Fragment>
                { elements }
            </React.Fragment>
        )
    }

}


ForEach.propTypes = {
    of: PropTypes.array.isRequired,
    as: PropTypes.string.isRequired
};

export default ForEach;
