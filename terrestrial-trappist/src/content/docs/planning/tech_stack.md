---
title: Tech Stack
description: Tools we used for the designing of the project
---

## Backend

### Supabase
Supabase is an alternative to Firebase, offering our team a new yet familiar technology to work with. Backend development can often be complex and time-consuming, so it is practical to use a tool that simplifies this process while maintaining scalability and security. According to NoCodeStartup (n.d.), Supabase streamlines backend development by providing an API that allows developers to focus on building frontend applications while leveraging powerful backend capabilities.
For our project, we are using Supabase primarily for authentication and storage, which reduces the need to juggle multiple services and tools. Supabase simplifies user authentication and supports multiple authentication methods, including email/password and social logins. As noted by NoCodeStartup (n.d.), it comes with a built-in PostgreSQL database that offers flexibility, scalability, and strong performance.
Importantly, PostgreSQL supports structured data and complex relationships, which is a critical requirement for our project given its multiple interconnected tables and relationships. Prins (n.d.) highlights that SQL makes it easier to run complex joins, filters, and aggregations without the need for complicated workarounds—something that aligns perfectly with our data requirements.

## Frontend

### React
The decision to use React for our project was influenced by the fact that the majority of the team previously used HTML and CSS for frontend development in the Software Design module. Since we are encouraged to explore a different technology this semester, we opted for a framework that is both easy to learn and widely adopted. As highlighted in Neguru et al.’s research, React is less complex compared to other frontend frameworks, requiring only a basic understanding of HTML and JavaScript to get started.
According to GeeksforGeeks, React allows developers to write HTML-like code within JavaScript using JSX (JavaScript XML). This improves the readability and structure of the code, making it easier to understand and maintain. Furthermore, React’s component-based architecture enables the creation of reusable components, which promotes consistency and efficiency across the application. This modularity ensures that making changes to a single component does not unintentionally affect other components, eliminating the need to modify multiple areas of the application when an update is required.

Libraries

## Testing

### Jest
During the Software Design project, many team members experienced challenges when using Jest. This semester, we decided to give Jest another try, leveraging its features more effectively. Jest is designed to work seamlessly with the React Testing Library for testing UI components. This allows us to evaluate how components render, respond to props, and handle state changes without requiring a browser environment (Jest, n.d.).
Jest includes built-in support for generating code coverage reports without requiring extra configuration. It can collect coverage information for the entire project, including files that have not been explicitly tested (Jest, n.d.)

## Continuous Integration

### GitHub Actions

## Documentation

### Astro JS
The documentation website was build 

## Project Management

### Clickup

## Languages

### JavaScript
JavaScript works seamlessly with React and Jest, making it a natural choice for both frontend and backend development. Since React is written in JavaScript, the UI components can be built directly with JavaScript logic, allowing for dynamic, interactive, and maintainable interfaces.
According to the Jest documentation, “Jest is a delightful JavaScript Testing Framework with a focus on simplicity” (Jest, n.d.), which makes it an excellent tool for testing both the frontend and backend code in the same language.
On the backend, JavaScript offers powerful frameworks such as Express.js, Node.js, and Koa.js, which provide built-in features for routing, middleware, and handling HTTP requests. This makes it easier to develop robust and scalable backend applications (GeeksforGeeks, n.d.).
By using JavaScript across the stack—frontend (React), backend (Supabase with Node.js), and testing (Jest)—we unify our development process in a single language. This not only boosts productivity and reduces context switching but also makes the codebase easier to maintain while leveraging the vast JavaScript ecosystem.

