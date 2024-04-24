# Money Guard application
[Live page](https://kpapura.github.io/money_guard_project/)

_Role: teamlead, developer_

_Team project_

This application is designed to help users manage their finances efficiently. With features like user authentication (register, login), transaction management, currency exchange rates, and insightful statistics visualization, application allows users to take control of their financial health. From registering a new account to securely logging out, the application ensures a seamless and intuitive user experience at every step.

Built with React.js and Redux, application provide the latest web technologies to deliver a fast, responsive, and feature-rich financial management solution. Whether you're a seasoned investor or just starting your financial journey, Money Guard is your trusted companion for achieving your financial goals.

---
### Functionality
This application has the following features:  
1. _User authentication_:
   - registration form: allows users to register. Includes input validation using Formik and Yup libraries.
   - login form: for log in with email and password. Also includes input validation using Formik and Yup libraries.
2. _Private and public routes_:
   - private routes are accessible only to authenticated users, such as the user's personal dashboard and transaction history.
   - public routes, like the registration and login pages, are accessible to all users.
3. _Navigation_:
   - navigation is facilitated through a list of NavLink components, directing users to different routes such as the home page, statistics page, and currency page.
4. _Currency exchange rates_:
   - the application fetches current currency exchange rates from the Monobank API. To optimize requests, data and timestamp of the last request are stored in localStorage, and subsequent requests are made only if more than an hour has passed since the last request.
5. _Transaction management_:
   - form for adding transaction: allows users to add transactions, including type, sum, date, category, and comment. Input validation is performed using Formik and Yup libraries.
   - form for editing transaction: enables users to edit existing transactions. 
6. _Transaction statistics_:
   - the application provides visual representation of transaction statistics, including charts and tables, for the current month. Users can view their spending habits and analyze their financial data.
7. _Loading indicator_:
   - a loader component is displayed while asynchronous data is being fetched. It also responds to changes in the Redux store.
8. _Logout functionality_:
   - users can log out of their accounts after confirming the action, clearing their session data from both the Redux store and localStorage.

---
### Technologies
This application has the following technologies:
- __HTML__ - a markup language for creating web pages
- __CSS__ - a stylesheet language for styling web pages
- __module-css__ - let to write styles in CSS files but consume them as JavaScript objects for additional processing and safety
- __React__ - a library for web and native user interfaces
- __Redux__ - a library that provides a structured and predictable way to manage the state of an application
- __React-DOM__ - a library for working with the DOM in React
- __Redux-Toolkit__ - a library for working with global state of app
- __Redux-Persist__ - a state management tool that allows the state in a Redux store to persist across browser and app sessions
- __axios__ - a library for making HTTP requests
- __React Router__ - a JavaScript framework that lets handle client and server-side routing in React applications
- __Formik__ - a library component that helps with building forms
- __Yup__ - a simple and elegant library for data schema validation
- __react-responsive__ - a library that makes it easy to apply different styles to your React components based on the screen size
- __react-loader-spinner__ - a library that provides a wide range of customizable spinners for React applications
- __react-datepicker__ - a library that allows to pick the dates in the form of months, days, and years
- __react-chartjs-2__ - a library for making HTML-based charts
- __react-toastify__ - a library for adding toast notifications to the React application

---
### Instalation
To run this project just follow these steps:
- clone the repository using the command _`git clone https://github.com/kpapura/money_guard_project`_
-  install the dependencies using the command _`npm install`_
-  start the project using the command _`npm run dev`_
- you will be redirected to the following address _`http://localhost:3000`_
