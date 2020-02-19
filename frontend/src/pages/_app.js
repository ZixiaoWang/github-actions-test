import 'bulma/css/bulma.css';

export default function AppContainer ({ Component, props }) {
    return <Component { ...props }/>
}