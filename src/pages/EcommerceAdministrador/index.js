import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { getProductsClothes } from "../../service/firestore";

const EcommerceAdministrator = () => {
  const [productClothes, setProductClothes] = useState([]);

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6}>
          <h4>Lista Ropas</h4>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Foto</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Precio de Descuento</TableCell>
              <TableCell>Botones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productClothes.length > 0 &&
              productClothes.map((clothe) => (
                <TableRow>
                  <TableCell>{clothe.name}</TableCell>
                  <TableCell>{clothe.photo}</TableCell>
                  <TableCell>{clothe.price}</TableCell>
                  <TableCell> {clothe.price_sale} </TableCell>
                  <TableCell>
                    <Link>
                      <Button color="info">
                        <EditRoundedIcon />
                      </Button>
                    </Link>

                    <Button>
                      <DeleteForeverRoundedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default EcommerceAdministrator;
