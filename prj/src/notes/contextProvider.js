// Learning Objective:
// - Learn how to use the context provider to pass data to the component tree

// Q: How does the context API enable use with an alterinavtive mode to pass data around?
// - The context API enables use to pass around data in a new way by providing us with two very useful methods:
// - 1: Provider
// - 2: Consumer

// Q: What does the context API enable us to do?
// - The context api allows us to build what is knonw as the "Context Object"
// ie
import { createContext } from "react";

const ContextObject = createContext();
// It is very common to name the object based on the data that it will hold. ie UserContext, BikeContext

// Q: What are the two important components that the context api gives us to work with?
// - The two crucial methods the Context Object equips us with is the
// - 1: ContextObject.Provider
// - 2: ContextObject.Consumer

// Q: What does the Provide component accept?
// - The Provider method accepts only one prop called "value"
// - The value prop is used to used so we can pass data across our app
// - Its pattern looks as such:
<ContextObject.Provider value={dataToPassDown}>
  <NestedComponent />
  <OtherNestedComponent />
</ContextObject.Provider>;

// Q: What does the Consumer component do?
