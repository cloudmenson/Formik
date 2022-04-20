import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import formSchema from "./validation/formSchema";

export default function validateForm() {
  const initValue = {
    name: "",
    email: "",
    phone: "",
  };
  function onMySubmit(values, handleReset) {
    handleReset.resetForm();
    console.log(values);
  }
  return (
    <div className="App__form row">
      <Formik
        initialValues={initValue}
        onSubmit={onMySubmit}
        validationSchema={formSchema}
      >
        <Form className="col s12 m6 l4">
          <div>
            <div className="input-field">
              <Field name="name" id="name" type="text" />
              <label for="name">Your name</label>
              <ErrorMessage
                name="name"
                component="div"
                className="errorMessage"
              />
            </div>
          </div>
          <div>
            <div className="input-field">
              <Field name="email" id="email" type="text" />
              <label for="email">Your email</label>
              <ErrorMessage
                name="email"
                component="div"
                className="errorMessage"
              />
            </div>
          </div>
          <div>
            <div className="input-field">
              <Field name="phone" id="phone" type="text" />
              <label for="phone">Your phone</label>
              <ErrorMessage
                name="phone"
                component="div"
                className="errorMessage"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
}
