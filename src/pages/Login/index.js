import { Button, Grid, Card, TextField, CardContent } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import bgLogin from "../../assets/Saly-36.png";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import {storeUser as storeUserFirebase, loginUser} from "../../service/firestore";

const Login = () => {

  const { storeUser } = useContext(UserContext);
  
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickLogin = async () => {
    const { email, password } = values;
    let reponse = await loginUser(email, password);
    console.log(reponse);
    if (!reponse.ok) {
      const reponse = await storeUserFirebase(email, password);
      if (!reponse.ok) {
        swal({
          text: "Usuario no existe",
          icon: "error",
          title: "Error",
        });
        return;
      }
    }

    // recuerden que despues del login debemos guaradar el usuario

    storeUser(reponse.data.user);
    window.location.href = "/youtube/administrador";
    
  };

  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="space-around"
      sx={{ height: "100vh", backgroundColor: "#FFD885", padding: 20 }}
    >
      <Grid item md={6}>
        
        <img src={bgLogin} alt="" />
      </Grid>
      <Grid item md={6}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Welcome toc</h5>
            <h3>Tecsup - Codigo</h3>
            <p>
              Bienvenido a la comunidad de CodiGo, Junto aprenderemos a
              programas paginas web.
            </p>
            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <TextField label="Password" fullWidth name="password" onChange={handleChangeInput}/>
              </Grid>
              <Grid item md={12}>
                <Button
                  onClick={handleClickLogin}
                  sx={{ backgroundColor: "black" }}
                  variant="contained"
                  fullWidth
                  size="large"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
