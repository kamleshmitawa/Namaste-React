const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM has to create a element and added to the dom.


{/* <h1>Hello React</h1> */ }
const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" }, // this is props object
    "Hello React !!!!" // this is also in props object as a children.
);
console.log(heading); //object
// root.render(heading); 
// ------------------


// If we want to create h1 inside div, basically nested html
{/* <div>
    <h1>this is heading</h1>
</div> */}

// const parent = React.createElement('div', {}, React.createElement('h1', {}, 'this is heading'))

// root.render(parent);
// --------------------


// Lets build something like , if we have one or more children like html structure
{/* <div id='parent'>
    <div id='child'>
        <h1>this is heading 1</h1>
        <h2>this is heading 2</h2>
    </div>
</div> */}

// const parent = React.createElement('div', { id: 'parent' },
//     React.createElement('div', { id: 'child' },
//         [React.createElement('h1', {}, 'this is heading 1'), React.createElement('h2', {}, 'this is heading 2')])) // Use array, if we have more then once child


// root.render(parent)
// ---------------


// If we have more complex html structured like below:
{/* <div id='parent'>
    <div id='child1'>
        <h1>this is heading 1</h1>
        <h2>this is heading 2</h2>
    </div>
    <div id='child2'>
        <h1>this is heading 1</h1>
        <h2>this is heading 2</h2>
    </div>
</div>  */}


const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child1' },
        [React.createElement('h1', {}, 'this is heading 1'), React.createElement('h2', {}, 'this is heading 2')]),
    React.createElement('div', { id: 'child2' },
        [React.createElement('h1', {}, 'this is heading 1'), React.createElement('h2', {}, 'this is heading 2')])]) // Use array, if we have more then once child


root.render(parent)