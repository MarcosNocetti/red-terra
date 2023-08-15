import {
  Box,
  Divider,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableBody,
  TableCell,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHeadersRequest } from "../../store/modules/headers/actions";

function Links() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { links } = useSelector((state: any) => state.headers);

  useEffect(() => {
    dispatch(getHeadersRequest());
  }, [dispatch]);

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Links
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Header</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {links?.map((link: any) => (
                <TableRow key={link.id}>
                  <TableCell component="th" scope="row">
                    {link.label}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {link.language}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {link.headerId}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Links;
