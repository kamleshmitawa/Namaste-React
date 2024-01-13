const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM has to create a element and added to the dom.
const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello React !!!!" // this is also in props object as a children.
);
console.log(heading); //object
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "this is heading 1"),
        React.createElement("h2", {}, "this is heading 2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "this is heading 1"),
        React.createElement("h2", {}, "this is heading 2")
    ])
]) // Use array, if we have more then once child
;
root.render(parent);

//# sourceMappingURL=index.c36f364e.js.map
