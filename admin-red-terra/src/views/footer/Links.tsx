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
import { useDispatch, useSelector } from "react-redux";
import { getFooterLinksRequest } from "../../store/modules/footer/actions";
import { useEffect } from "react";

function FooterLinks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { footerLinks } = useSelector((state: any) => state.footer);

  useEffect(() => {
    dispatch(getFooterLinksRequest());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h4" component="h1">
        Links
      </Typography>
      <Divider sx={{ marginBottom: "2rem" }} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell>Tooltip</TableCell>
              <TableCell>Redirect</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {footerLinks?.map((links: any) => (
              <TableRow key={links.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "80px",
                  }}
                >
                  {links.label}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "160px",
                  }}
                >
                  {links.link}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Tooltip title="Edit">
                    <IconButton
                      color="primary"
                      onClick={() =>
                        navigate("/admin/footers/edit/" + links.id)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default FooterLinks;
