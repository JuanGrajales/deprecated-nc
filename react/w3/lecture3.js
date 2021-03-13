// object destructuring

let obj = {
  fname: "John",
  age: 21,
  stack: "MERN",
};

let fname = obj.fname;
let age = obj.age;
let stack = obj.stack;

// let { fname } = obj;
// let { age } = obj;
// let { stack } = obj;
// let { fname, age, stack } = obj;
console.log(fname);

function func(objParam) {
  console.log("property 1: " + objParam.fname);
  console.log("property 2: " + objParam.age);
  console.log("property 3: " + objParam.stack);
}

func(obj);

// presentational vs container components
// presentational components often will be funtional components
// container components will often be class components since they need state for data

// function component syntax
// shortcut: rsc or rsf

// virtual DOM
// keys for mapping

// <React.Fragment> and <>
// both will not render in the DOM
// React.Fragment will allow you to use keys - https://reactjs.org/docs/fragments.html#keyed-fragments

// React Router
// this is necessary to have "multiple" pages in your SPA (Single Page Application)

// React Router Setup
// step 1: install react-router-dom by running the following command in the root of your app $ yarn add react-router-dom@version
// note: is step 1 is done correctly you should see react-router-dom in the list of dependencies in package.json
// step 2: in App.js import { BrowserRouter } from 'react-router-dom';
// step 3: in App.js wrap the outer most HTML element with <BrowserRouter></BrowserRouter>

// Switch && Route
// these two components will work together to determine which component to display depending on the URL

// Switch && Route && Redirect Syntax
// import { Switch, Route, Redirect } from 'react-router-dom';
// Switch normally goes inside App.js
{
  /* <Switch>
  <Route path="/url" component={ComponentYouWantToDisplayForSpecificURL} />
  <Route
    exact
    path="/url2"
    render={() => <ComponentName prop1="v1" />}
  />
  <Redirect to="/home" />
</Switch>; */
}

// Link vs NavLink
// they do the same thing the only difference is you can add styling to NavLink

// NavLink
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md

// Link
// import { Link } from 'react-router-dom';
// Link will allow users to navigate your application
// the url must match the path of the component you want to display
{
  /* <Link to='/url'>Whatever</Link> */
}

// React Router Parameters
// if we don't use params then we end up with a lot of routes
