// Learning Objective:
// - Learn how to use the Consume component to comsume state from Provider from a nested component

// Now that I have succesfully equipped my application tree with the Provider component, I will need to learn how to consume that state from within nested components

// - Q: What is the last step of using the Context API and how does its pattern look like in development?
// - The last step when using the Context API is using the Consumer to consume data passed down via Provider
// - In order to do this I will use a context hook, but I can also use a render hook

import { useContext } from "react";
import { ContextObject } from "../context";

// ...from within the component
const myData = useContext(ContextObject);

// ... I can also destructure the object as such
const { someData, moreData } = useContext(ContextObject);

// ** Remember to set the useContext from within the actually component or else the application will break
