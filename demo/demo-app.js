import React from 'react';
import ReactDOM from 'react-dom';
import Code from './Code';
import {
    IfTrue,
    OrElse,
    Switch,
    Case,
    CaseDefault,
    ForEach
} from 'react-carrefour';


function TestComp(props)
{
    const className = props.className || '';
    const text = props.text || 'TestComp';
    return (<p className={className}>{text}</p>);
}


function TestSimpleIf()
{
    return (
        <React.Fragment>
        <div className="title">Simple IF</div>
        <div className="section flex-container">
            <div className="flex-item">
                <Code>{`
                    <strong>Test 1</strong>
                    <IfTrue st={54 === 54}>
                        <p className="success">54 === 54</p>
                    </IfTrue>

                    <strong>Test 2</strong>
                    <IfTrue st={54 !== 58}>
                        <p className="success">54 !== 58</p>
                    </IfTrue>

                    <strong>Test 3</strong>
                    <IfTrue st={[234, 54] === 'test'}>
                        <TestComp className="fail"/>
                    </IfTrue>
                    <p className="success">Text After IfTrue</p>

                    <strong>Test 4</strong>
                    <IfTrue st={true}>
                        {(() => (<p className="success">this is function</p>))()}
                    </IfTrue>

                    <strong>Test 5</strong>
                    <IfTrue st={true}>
                        <TestComp className="success"/>
                        {(() => (<p className="success">this is function</p>))()}
                        Simple Text Element
                        <IfTrue st={'test' === 'test'}>
                            <p className="success">Another IF inside</p>
                        </IfTrue>
                    </IfTrue>
                `}</Code>
            </div>
            <div className="flex-item">
                <strong>Test 1</strong>
                <IfTrue st={54 === 54} debug="test 1">
                    <p className="success">54 === 54</p>
                </IfTrue>

                <strong>Test 2</strong>
                <IfTrue st={54 !== 58} debug="test 2">
                    <p className="success">54 !== 58</p>
                </IfTrue>

                <strong>Test 3</strong>
                <IfTrue st={[234, 54] === 'test'} debug="test 3">
                    <TestComp className="fail"/>
                </IfTrue>
                <p className="success">Text After IfTrue</p>

                <strong>Test 4</strong>
                <IfTrue st={true} debug="test 4">
                    {(() => (<p className="success">this is function</p>))()}
                </IfTrue>

                <strong>Test 5</strong>
                <IfTrue st={true} debug="test 5.1">
                    <TestComp className="success"/>
                    {(() => (<p className="success">this is function</p>))()}
                    Simple Text Element
                    <IfTrue st={'test' === 'test'} debug="test 5.2">
                        <p className="success">Another IF inside</p>
                    </IfTrue>
                </IfTrue>
            </div>
        </div>
        </React.Fragment>
    )
}


function TestIfElse()
{
    return (
        <React.Fragment>
        <div className="title">IF - ELSE</div>
        <div className="section flex-container">
            <div className="flex-item">
                <Code>{`
                    <strong>Test 1</strong>
                    <IfTrue st={54 === 54}>
                        <p className="success">Element 1</p>
                        <p className="success">Element 2</p>
                        <p className="success">Element 3</p>
                    <OrElse/>
                        <p className="fail">Element 5</p>
                        <TestComp className="fail"/>
                        <p className="fail">Element 6</p>
                    </IfTrue>

                    <strong>Test 2 (nested if-else)</strong>
                    <IfTrue st={'test' === 'test'}>
                        <p className="success">Element 1</p>
                        <p className="success">Element 2</p>
                        <p className="success">Element 3</p>
                        <IfTrue st={true === false}>
                            <p className="fail">Sub Element 1</p>
                            <p className="fail">Sub Element 2</p>
                        <OrElse/>
                            <p className="success">Sub Element 3</p>
                            <p className="success">Sub Element 4</p>
                        </IfTrue>
                    <OrElse/>
                        <p className="fail">Element 5</p>
                        <TestComp className="fail"/>
                        <p className="fail">Element 6</p>
                    </IfTrue>
                `}</Code>
            </div>
            <div className="flex-item">
                <strong>Test 1</strong>
                <IfTrue st={54 === 54} debug="test 1">
                    <p className="success">Element 1</p>
                    <p className="success">Element 2</p>
                    <p className="success">Element 3</p>
                <OrElse/>
                    <p className="fail">Element 5</p>
                    <TestComp className="fail"/>
                    <p className="fail">Element 6</p>
                </IfTrue>

                <strong>Test 2 (nested if-else)</strong>
                <IfTrue st={'test' === 'test'} debug="test 2.1">
                    <p className="success">Element 1</p>
                    <p className="success">Element 2</p>
                    <p className="success">Element 3</p>
                    <IfTrue st={true === false} debug="test 2.2">
                        <p className="fail">Sub Element 1</p>
                        <p className="fail">Sub Element 2</p>
                    <OrElse/>
                        <p className="success">Sub Element 3</p>
                        <p className="success">Sub Element 4</p>
                    </IfTrue>
                <OrElse/>
                    <p className="fail">Element 5</p>
                    <TestComp className="fail"/>
                    <p className="fail">Element 6</p>
                </IfTrue>
            </div>
        </div>
        </React.Fragment>
    )
}


function TestSwitchCase()
{
    return (
        <React.Fragment>
        <div className="title">SWITCH CASE</div>
        <div className="section flex-container">
            <div className="flex-item">
                <Code>{`
                    <strong>Test 1</strong>
                    <Switch exp={'orange'}>
                        <Case val={'test'}>
                            <p className="fail">Case 1</p>
                        </Case>
                        <Case val={'orange'}>
                            <p className="success">Case 2</p>
                        </Case>
                        <Case val={[234, 54]}>
                            <p className="fail">Case 3</p>
                        </Case>
                        <Case val={['magenta', 'red', 'blue', 'orange', 'purple']}>
                            <p className="success">Case 4</p>
                        </Case>
                        <CaseDefault>
                            <p className="fail">Case Default</p>
                        </CaseDefault>
                    </Switch>
                    <strong>Test 2</strong>
                    <Switch exp={'nothing of that'}>
                        <Case val={'test'}>
                            <p className="fail">Case 1</p>
                        </Case>
                        <Case val={'orange'}>
                            <p className="fail">Case 2</p>
                        </Case>
                        <Case val={[234, 54]}>
                            <p className="fail">Case 3</p>
                        </Case>
                        <Case val={['magenta', 'red', 'blue', 'orange', 'purple']}>
                            <p className="fail">Case 4</p>
                        </Case>
                        <CaseDefault>
                            <p className="success">Case Default</p>
                        </CaseDefault>
                    </Switch>
                `}</Code>
            </div>
            <div className="flex-item">
                <strong>Test 1</strong>
                <Switch exp={'orange'} debug="test 1">
                    <Case val={'test'}>
                        <p className="fail">Case 1</p>
                    </Case>
                    <Case val={'orange'}>
                        <p className="success">Case 2</p>
                    </Case>
                    <Case val={[234, 54]}>
                        <p className="fail">Case 3</p>
                    </Case>
                    <Case val={['magenta', 'red', 'blue', 'orange', 'purple']}>
                        <p className="success">Case 4</p>
                    </Case>
                    <CaseDefault>
                        <p className="fail">Case Default</p>
                    </CaseDefault>
                </Switch>
                <strong>Test 2</strong>
                <Switch exp={'nothing of that'} debug="test 2">
                    <Case val={'test'}>
                        <p className="fail">Case 1</p>
                    </Case>
                    <Case val={'orange'}>
                        <p className="fail">Case 2</p>
                    </Case>
                    <Case val={[234, 54]}>
                        <p className="fail">Case 3</p>
                    </Case>
                    <Case val={['magenta', 'red', 'blue', 'orange', 'purple']}>
                        <p className="fail">Case 4</p>
                    </Case>
                    <CaseDefault>
                        <p className="success">Case Default</p>
                    </CaseDefault>
                </Switch>
            </div>
        </div>
        </React.Fragment>
    )
}

function Person(props) {
    return (
        <p className="success">
            Name: { props.name }
        </p>
    )
}

function TestForEach()
{
    return (
        <React.Fragment>
        <div className="title">FOR EACH</div>
        <div className="section flex-container">
            <div className="flex-item">
                <Code>{`
                    function Person(props) {
                        return (<p className="success">Name: { props.name }</p>)
                    }

                    ...

                    <strong>Test 1</strong>
                    {/* As a child component. Note: "as" value must be in lower case. */}
                    <ForEach of={['John', 'Lucy', 'Andrea', 'Melisa']} as="name">
                        <Person/>
                    </ForEach>
                    <strong>Test 2</strong>
                    {/* As a function */}
                    <ForEach of={ [{name:'John', age:34}, {name:'Lucy', age:25}, {name:'Melisa', age:23}]} as="person">
                    {person => (
                        <p className="success">Name: { person.name } / Age { person.age }</p>
                    )}
                    </ForEach>
                `}</Code>
            </div>
            <div className="flex-item">
                <strong>Test 1</strong>
                {/* As a child component. Note: "as" value must be in lower case. */}
                <ForEach of={['John', 'Lucy', 'Andrea', 'Melisa']} as="name" debug="test 1">
                    <Person/>
                </ForEach>
                <strong>Test 2</strong>
                {/* As a function */}
                <ForEach of={ [{name:'John', age:34}, {name:'Lucy', age:25}, {name:'Melisa', age:23}]} as="person" debug="test 2">
                {person => (
                    <p className="success">Name: { person.name } / Age { person.age }</p>
                )}
                </ForEach>
            </div>
        </div>
        </React.Fragment>
    )
}


export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Demo of "react-carrefour"</h1>
                <TestSimpleIf />
                <TestIfElse />
                <TestSwitchCase />
                <TestForEach />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
