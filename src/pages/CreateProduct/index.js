import { useState } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { storeProductClothe } from "../../service/firestore";
import swal from "sweetalert";

const CreateProduct = () => {
  const [values, setValues] = useState({
    name: "",
    photo: "",
    price: "",
    price_sale: "",
  });

  const handleChange = (e) => {
    const {value, name} = e.target;
    setValues({
      ...values,
      [name]: value,
    })
    
  };
  
  const handleClickStore = async () => {
    await storeProductClothe(values);
    swal({
      text: "Se creo correctamente",
      icon: "success",
      title:"Success",
    })
  }

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={12}>
          <h4>Crear Producto</h4>
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Nombre del producto"
            name="name"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Link del producto"
            name="photo"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Precio del producto"
            name="price"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Precio oferta del producto"
            name="price_sale"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={12}>
          <Button variant="contained" onClick={handleClickStore}>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProduct;
