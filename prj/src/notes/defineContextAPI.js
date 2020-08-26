// Learning Objective
// - Define the problem the context API solves and how it solves it

// Q: Why is the context api a great tool to solve state managament?
// - The context API helps me manage state in a much easier way as my application scales in size

// Q: How is data passed in a typical react application?
// - In a typical react app data is often passed down top down, parent to child via props
// - ALthough this downward data flow can get rather complicated espicially for certain types of props such as UI themes, and locale preference that are required by many components from within an application.
// - Context is an alterinative to passing data to components without having to pass it as prop through every level of the prop tree

// Q: When do we use the Context API?
//  - I can use the context API whenever I have global data that lots of components share (things like user or theme), or when I have data through intermidate components. The Context API helps you keep state clean.
// - What is one issue with Context API is that it can make components harder to reuse
// - This is why it may be useful to look into "component compostion" which is an architectual pattern
