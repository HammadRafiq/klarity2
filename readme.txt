*** FOLDER STRUCTURE ***
Pages: Contains all of the files against which a route exists. (logical management of components)
Components: Contains the child components of the route component. There doesn't exist a route against files in the Components folder (logical management of components)
Assets: Contains all of the media used in the app (e.g svgs, images)
Config: Contains the common configurations of the app
        Endpoints: All the API endpoints are included in this file
Constants: Contains the plain data (i.e Arrays and Objects that will be used in the files)
Context: Context API in React is used for state management. All the data that should be globally available is stored in the Context.
Helpers: Helpers contains all the common reusable code to avoid reinventing the wheel. For example, Requests helpers contains all the code that has to be written everytime you call an API. We extracted all that common code at one place so that you dont have to write that same code again and again each time an API is called.
        Base URL: Base URL of the APIs is used in the Requests helpers so that we dont have to provide the Base URL everytime API is called. Also, if we want to change Base URL in future, we will have to change it only from a single place and it will be reflected in the entire App.
        Header: Token in the header needs to be provided each time API is called. Request Helpers helps us to avoid providing token in the header each time an API is called.
Hooks: Hooks in React allow us to extract the reusable logic of a functional component into one place so that the same logic doesn't need to be repeated in all the files.
        useTableHook: This hook has been developed to handle the pagination of the table. Every time a table is used, we wont have to repeat the entire logic of pagination for that specific table.
Routes: React is a SPA (Single Page Application). Routing helps to navigate from one screen (or component) to another.
        AppRoutes: Consists of all the routing logic and all the routes of the app
        Protected Routes: All the routes that must only be available for a logged in user are handled here. A non logged-in user won't be able to access the protected routes
Theme: We have used MUI (Material UI) design framework in the app. It consists of all the colors and typography being used in the app. For example, subtitle1 (font-size, font-weight, line-height) has explicity been mentioned so that it can be reused throughout the project. Using theme makes the styling approach highly scalable, it will be easy to cater to different themes (light, dark) in the future.

