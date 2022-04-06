import { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  FormGroup,
  Checkbox,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import swal from "sweetalert";
import { storeUser } from "../../service/firestore";

const SignUp = () => {
  const [dateSelect, setDateSelect] = useState(null);

  const [validateInputsEmpty, setValidateInputsEmpty] = useState({
    name: false,
    last_name: false,
    email: false,
    phone_number: false,
    password: false,
    address: false,
    city: false,
    date_born: false,
    document_number: false,
    gender: false,
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validate = (values) => {
    const errors = {};
    Object.keys(values)
      .filter(
        (value) =>
          value !== "marital_status" ||
          value !== "date_born" ||
          values === "gender"
      )
      .forEach((value) => {
        errors[value] = values[value] === "" ? true : false;
      });
    setButtonDisabled(Object.values(errors).includes(true));
    setValidateInputsEmpty(errors);
  };

  // vamos a crear una funcion usando formik
  const formik = useFormik({

    initialValues: {
      name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      address: "",
      city: "",
      date_born: "",
      document_number: "",
      gender: "",
      marital_status: "",
      languages: [],
    },
    validate,
    onSubmit: async (values) => {
      if (values.languages.length === 0) {
        swal({
          icon: "error",
          title: "Error",
          text: "Debe completar al menos un lenguage",
        });
        return;
      }
      if (values.marital_status === "") {
        swal({
          icon: "error",
          title: "Error",
          text: "Debe completar su estado civil",
        });
        return;
      }
      storeUser(values.email, values.password);
      // aca ustedes deben llamar a la funcion que se
      // encarga de crear al usuario en firebase
      console.log(values);
    },
  });

  return (
    <Container maxWidth="lg">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <h2>Crear cuenta</h2>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Nombre"
              name="name"
              fullWidth
              error={validateInputsEmpty.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Apellido"
              name="last_name"
              fullWidth
              error={validateInputsEmpty.last_name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Correo"
              name="email"
              error={validateInputsEmpty.email}
              type="email"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Telefono"
              name="phone_number"
              error={validateInputsEmpty.phone_number}
              type="number"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Password"
              name="password"
              error={validateInputsEmpty.password}
              type="password"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Direccion"
              name="address"
              error={validateInputsEmpty.address}
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Ciudad"
              name="city"
              error={validateInputsEmpty.city}
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="Fecha de nacimiento"
                name="date_born"
                value={dateSelect}
                inputFormat="dd/MM/yyyy"
                onChange={(date) => {
                  // en este caso tenemos la funcion setDateSelect
                  setDateSelect(date);
                  // existe una propiedad llamada setFieldValue
                  //setFieldValue recibe 2 cosas
                  // 1 el nombre de campo (name)
                  // 2 el valor de campo (date)
                  formik.setFieldValue("date_born", date);
                }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    error={validateInputsEmpty.date_born}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="DNI/Pasaport/CE"
              name="document_number"
              type="number"
              error={validateInputsEmpty.document_number}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="genero">Genero</InputLabel>
              <Select
                labelId="genero"
                label="Genero"
                onChange={formik.handleChange}
                name="gender"
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            {/* Radio de estado civil */}
            <FormControl>
              <FormLabel id="label-radio">Estado civil</FormLabel>
              <RadioGroup
                aria-labelledby="label-radio"
                onChange={formik.handleChange}
                name="marital_status"
              >
                <FormControlLabel
                  value="soltero"
                  control={<Radio />}
                  label="Soltero"
                />
                <FormControlLabel
                  value="divorciado"
                  control={<Radio />}
                  label="Divorciado"
                />
                <FormControlLabel
                  value="viudo"
                  control={<Radio />}
                  label="Viudo"
                />
                <FormControlLabel
                  value="casodo"
                  control={<Radio />}
                  label="Casado"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value="ingles"
                    onChange={formik.handleChange}
                    name="languages"
                  />
                }
                label="Ingles"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="portugues"
                    onChange={formik.handleChange}
                    name="languages"
                  />
                }
                label="Portugues"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="espanol"
                    onChange={formik.handleChange}
                    name="languages"
                  />
                }
                label="Español"
              />
            </FormGroup>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button
              type="submit"
              disabled={buttonDisabled}
              variant="contained"
              fullWidth
              size="large"
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
