import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import formSchema from "./validation/formSchema";
import SendIcon from "@mui/icons-material/Send";
import Item from "@mui/material/ListItem";
import {
  Box,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";

export default function validateForm() {
  const initValue = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  function onMySubmit(values, handleReset) {
    handleReset.resetForm();
  }
  return (
    <div className="App__form">
      <Formik
        initialValues={initValue}
        onSubmit={onMySubmit}
        validationSchema={formSchema}
      >
        <Box
          className="App__form-container"
          sx={{ boxShadow: 2, p: 3, pt: 4, width: 400 }}
        >
          <h2 className="App__form-title">Create account</h2>
          <Form>
            <Item>
              <Grid>
                <Field
                  className="App__form-input-field"
                  name="name"
                  type="text"
                  placeholder="Name*"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="errorMessage"
                />
              </Grid>
            </Item>
            <Item>
              <Grid>
                <Field
                  className="App__form-input-field"
                  name="email"
                  type="text"
                  placeholder="Email*"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="errorMessage"
                />
              </Grid>
            </Item>
            <Item>
              <Grid>
                <Field
                  className="App__form-input-field"
                  name="phone"
                  type="text"
                  placeholder="Phone number*"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="errorMessage"
                />
              </Grid>
            </Item>
            <Item>
              <Grid>
                <Field
                  className="App__form-input-field"
                  name="password"
                  type="password"
                  placeholder="Password*"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="errorMessage"
                />
              </Grid>
            </Item>
            <Item>
              <FormControlLabel
                control={<Checkbox required defaultChecked />}
                label="I agree all statements in Terms of service"
              />
            </Item>
            <Item>
              <Button
                fullWidth
                variant="outlined"
                type="submit"
                endIcon={<SendIcon />}
              >
                Register
              </Button>
            </Item>
            <Item sx={{ mx: 6 }}>
              <p>
                Have already an account?
                <Link sx={{ m: 0.5 }} href="#">
                  {"Click here"}
                </Link>
              </p>
            </Item>
          </Form>
        </Box>
      </Formik>
    </div>
  );
}
