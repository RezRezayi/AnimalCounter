import React from 'react';
import "./Register.css";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';





const Register = () => {

    const initialValues = {


        name: "",
        email: "",
        age: 0,
        password: ""

    }


    const validationSchema = Yup.object({

        name: Yup.string()
            .min(3, "Must be atleast 3 characters")
            .max(15, "Must be less than 15 charecters")
            .required("Required")
        ,
        email: Yup.string()
            .email("Email Is Not Valid")
            .required("Required"),


        age: Yup.number()
            .min(10, "Your Animal is too young"),

        password: Yup.string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),



    })


    const onSubmit = values => {
        console.log(values);
    }











    return (


        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>




            {formik => {

                return <Form>

                    <FormikControl

                        control="input"
                        type='text'
                        label="Name"
                        name="name"

                    />


                    <FormikControl

                        control="input"
                        type='email'
                        label="Email"
                        name="email"

                    />


                    <FormikControl

                        control="input"
                        type='number'
                        label="Age"
                        name="age"

                    />




                    <FormikControl

                        control="input"
                        type='password'
                        label="Password"
                        name="password"

                    />

                    <button type="submit" disabled={!formik.isValid}>Join Us!</button>


                </Form>

            }}






        </Formik>


    );

}

export default Register;


