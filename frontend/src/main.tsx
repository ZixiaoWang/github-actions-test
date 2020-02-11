import { h, render } from 'preact';

const App = () => {
    return (
        <div className="page">
            <h1>Hello world</h1>
        </div>
    )
}

render(
    <App />,
    document.body
)