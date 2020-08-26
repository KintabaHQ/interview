
// https://developer.mozilla.org/en/docs/Web/API/Fetch_API
async function exampleFetch() {
    const result = await fetch('/api');
    return result.text();
}

const App = () => {
    // React is in the `React` global, e.g.
    const [foo, setFoo] = React.useState("foo");
    return <strong>Your app goes here! {foo}</strong>;
};

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);
