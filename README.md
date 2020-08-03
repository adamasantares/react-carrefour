# react-carrefour

Conditional tags for ReactJs

``` npm i react-carrefour ```

For those who don't like such constructions:

```
render () {
    if (a === 10) {
        return (<div>lalala</div>)
    }
    return (<span>lololo</span>)
}

OR

render () {
    return (
        <div>
            <h1>title</h1>
            {a === 10 ? (<div>text1</div>) : (<div>text 2</div>)}
        </div>
    )
}
```

So I created some helpers which make my life easier:

 - IfTrue + OrElse
 - Switch + Case + CaseDefault
 - ForEach


## Usage

There are few examples.

**Simple IF**

```
import { IfTrue } from 'react-carrefour';

...

function MyComponent()
{
    return (
        <div>
            <h1>title</h1>
            <IfTrue condition={a === 11}>
                <div className="lalala">TEST 1</div>
            </IfTrue>
        </div>
    )
}
```

**IF - Else**

```
import { IfTrue, OrElse } from 'react-carrefour';

...

function MyComponent()
{
    return (
        <div>
            <h1>title</h1>
            <IfTrue condition={a === 11}>
                <div className="lalala">TEST 1</div>
            <OrElse/>
                <div className="lalala">TEST 2</div>
            </IfTrue>
        </div>
    )
}
```

**Switch Case**

```
import { Switch, Case, CaseDefault } from 'react-carrefour';

...

function MyComponent()
{
    return (
        <div>
            <h1>title</h1>

            <Switch expression={'lololo'}>
                <Case val={['123', 'lololo']}>
                    <div>lololo</div>
                </Case>
                <Case val={569}>
                    <div>Number</div>
                </Case>
                <Case val={'lalala'}>
                    <div>lalala</div>
                </Case>
                <Case val='ping-pong'>
                    <div>ping pong</div>
                </Case>
                <CaseDefault>
                    <div>default value</div>
                </CaseDefault>
            </Switch>

        </div>
    )
}
```



**ForEach**

```
import { ForEach } from 'react-carrefour';

function Person(props) {
    return (
        <div className="person">
            Name: { props.name }
        </div>
    )
}

...

function MyComponent()
{
    return (
        <div>
            <h1>Persons</h1>
            {/* As a child component */}
            <ForEach of={['John', 'Lucy', 'Andrea', 'Melisa']} as="name">
                <Person/>
            </ForEach>
            {/* As a function */}
            <ForEach of={['John', 'Lucy', 'Andrea', 'Melisa']} as="name">
                { name => (<div className="person">Name: { name }</div>) }
            </ForEach>

        </div>
    )
}
```

That's it for now.

Any ideas are welcome as a Pull Request :)
