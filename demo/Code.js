import React from 'react';

function Code(props)
{
    let output = React.Children.toArray(props.children).join("\n");
    let offcet = null;
    output = output.split("\n").map(line => {
        if (line.trim() === '')  return '';
        if (offcet === null) {
            const before = line.length;
            line = line.trimStart();
            offcet = before - line.length;
        } else {
            line = line.substring(offcet);
        }
        return line;
    }).join("\n");
    return (<pre className="code"> {output} </pre>);
}

export default Code;
