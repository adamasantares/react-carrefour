import React from 'react';
import PropTypes from 'prop-types';
import { childName } from './utils';


class ForEach extends React.Component {

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
        const argument = this.props.as;
        const elements = [];
        let key = 0;
        if (debug) console.log(`ForEach (${debug}): total children number is ${children.length}`);
        for (const value of this.props.of) {
            const _items = children.map(child => {
                const name = childName(child);
                if (debug) console.log(`ForEach (${debug}): item ${name}`);
                if (typeof(child) === 'function') {
                    child = child(value);
                    const props = { key };
                    key++;
                    return React.cloneElement(child, props);
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
    as: PropTypes.string.isRequired,
    debug: PropTypes.string
};

export default ForEach;
