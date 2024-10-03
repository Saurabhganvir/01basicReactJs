// h1>lorem
import React from "react";

function customRender(reactElement, container){
    /*
    // step 1: create element
    const domElement = document.createElement(reactElement.type);
    //step 2: setting inner html
    domElement.innerHTML = reactElement.children;
    //step 3: setting attributes
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    //now appending the element to the container
    container.appendChild(domElement);
    */


    // method 2
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === "children")continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

}


//this is an actual react element
const areactElement = React.createElement(
    'a',
    {href:"https://google.com", target:'_blank'},
    'Click me to visit Google from here'
);


const reactElement =  {
    type: 'a',
    props: {
        href: "https://google.com",
        target:  '_blank'
    },
    children: 'Click me to visit Google'
}

//creting a referenceto inject the element to root
const mainContainer = document.getElementById('root');

//custom rendering method just like react has
customRender(reactElement, mainContainer);