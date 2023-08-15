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
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCreditRequest, getCreditRequest } from "../../store/modules/whatWeDo/actions";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IModalProps } from "../../interfaces/modalProps";
import Modal from "../../components/Modal";

function ListCredits() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IModalProps>({
    title: "",
    content: "",
    closeModalCallback: setIsModalOpen,
  });
  const { credit } = useSelector((state: any) => state.whatWeDo);

  useEffect(() => {
    dispatch(getCreditRequest());
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
    dispatch(deleteCreditRequest(id, credit));
  }


  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          List credits
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>language</TableCell>
                <TableCell align="right">
                  <Tooltip title="Create credit">
                    <IconButton
                      color="primary"
                      onClick={() => navigate("/admin/whatWeDo/credits/create")}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {credit?.map((credit: any) => (
                <TableRow key={credit.id}>
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
                    {credit.subtitle}
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
                    {credit.text}
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
                    {credit.language === "en" ? "🇺🇲 EN" : "🇧🇷 BR"}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    <Tooltip title="Edit">
                      <IconButton
                        color="primary"
                        onClick={() =>
                          navigate("/admin/whatWeDo/credits/edit/" + credit.id)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        color="error"
                        onClick={() => handleConfirmDelete(credit.id)}
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

export default ListCredits;
