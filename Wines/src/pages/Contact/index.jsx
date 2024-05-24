import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   description: Yup.string()
     .min(10, 'Too Short!')
     .max(200, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 const Contact = () => (
   <div>
     <h1>Add your name and your email to share your thoughts!!!</h1>
     <Formik
       initialValues={{
         firstName: 'Your name',
         description: 'Add your wishes,ideas,any complaint about us',
         email: 'Your email',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}

           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
                 
           <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null} 
           <button type="submit">Submit</button>    
         </Form>
       )}
     </Formik>
   </div>
 );
 export default Contact