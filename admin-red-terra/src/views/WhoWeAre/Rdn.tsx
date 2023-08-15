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
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRdnRequest, getRdnRequest } from "../../store/modules/whoWeAre/actions";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { IModalProps } from "../../interfaces/modalProps";
import Modal from "../../components/Modal";

function ClientReviews() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IModalProps>({
    title: "",
    content: "",
    closeModalCallback: setIsModalOpen,
  });
  const { rdn } = useSelector((state: any) => state.whoWeAre);

  useEffect(() => {
    dispatch(getRdnRequest());
  }, [dispatch]);

  function handleConfirmDelete(id: string): void {
    setIsModalOpen(true);
    setModalData({
      title: `Delete`,
      content: `Are you sure you want to delete ?`,
      isOpen: true,
      confirm: true,
      callback: () => handleDelete(id),
      closeModalCallback: setIsModalOpen,
    });
  }
  
  function handleDelete(id: string): void {
    dispatch(deleteRdnRequest(id, rdn));
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          List rdn
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>personName</TableCell>
                <TableCell>text</TableCell>
                <TableCell>language</TableCell>
                <TableCell align="right">
                  <Tooltip title="Create rdn">
                    <IconButton
                      color="primary"
                      onClick={() => navigate("/admin/whoWeAre/rdn/create")}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rdn?.map((rdn: any) => (
                <TableRow key={rdn.id}>
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
                    {rdn.personName}
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
                    {rdn.text}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "20px",
                    }}
                  >
                    {rdn.language === "en" ? "🇺🇲 EN" : "🇧🇷 BR"}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    <Tooltip title="Edit">
                      <IconButton
                        color="primary"
                        onClick={() =>
                          navigate("/admin/whoWeAre/rdn/edit/" + rdn.id)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        color="error"
                        onClick={() => handleConfirmDelete(rdn.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {isModalOpen && <Modal {...modalData} />}
    </>
  );
}

export default ClientReviews;
