import * as React from 'react';
import * as ReactDOM from 'react-dom';


const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

ReactDOM.render(<App/>, mainElement);