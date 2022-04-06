import { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import {
  updateUserProfile,auth,
} from "../../service/firestore";
import './index.css';

import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState(null);
  const update = async () => {
    const profile = {
      displayName: "Linder Hassinger",
      photoURL: "https://avatars.githubusercontent.com/u/20673011?v=4",
    };
    await updateUserProfile(profile);
    getUser();
  };

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("no user found");
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid md={12}>
          <h1>Profile de Usuario</h1>
        </Grid>
        <Grid item md={4}>
          <img className="img-circle" src={user?.photoURL} alt="" />
        </Grid>
        <Grid item md={4}>
          <h4>{user?.displayName}</h4>
          <p>{user?.email}</p>
          <Button onClick={update} variant="contained">
            Actualizar perfil
          </Button>
          <Button color="secondary" variant="contained">
            CONFIRMAR CUENTA
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
