1. Formik: Formik library is being used to handle the forms and input fields. All the validations implemented on the input fields (e.g required input) is done using Formik.
    1.1. Formik onSubmit: onSubmit function runs once user clicks submit button. onSubmit will only run when all the input fields are valid. (For example if username is required and user leaves username field empty, onSubmit function wont be called.
    1.2. Formik initialValues: The initial values of the input fields once the page loads and user hasn't yet written anything to the input field(s)
    1.3. Formik validationSchema: validationSchema consists of all the validations applied on the input fields within a specific Formik form. For example username is required, email should contain "@" or password should contain a special character etc.
2. useEffect Hook: The useEffect is a built-in hook of React that allows you to perform side effects in your components.
