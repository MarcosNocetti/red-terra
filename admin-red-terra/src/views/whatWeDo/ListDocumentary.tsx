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
import { deleteDocumentaryRequest, getDocumentaryRequest } from "../../store/modules/whatWeDo/actions";
import { ChangeEvent, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IModalProps } from "../../interfaces/modalProps";
import Modal from "../../components/Modal";
import TablePagination from "@mui/material/TablePagination";

function ListDocumentary() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IModalProps>({
    title: "",
    content: "",
    closeModalCallback: setIsModalOpen,
  });
  const { documentary } = useSelector((state: any) => state.whatWeDo);

  useEffect(() => {
    dispatch(getDocumentaryRequest());
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
    dispatch(deleteDocumentaryRequest(id, documentary));
  }

  function handleChangePage(event: unknown, newPage: number): void {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement>): void {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          List documentaries
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell>availability</TableCell>
                <TableCell>sinopse</TableCell>
                <TableCell>language</TableCell>
                <TableCell align="right">
                  <Tooltip title="Create documentary">
                    <IconButton
                      color="primary"
                      onClick={() =>
                        navigate("/admin/whatWeDo/documentaries/create")
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documentary?.length &&
                documentary
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((documentary: any) => (
                <TableRow key={documentary.id}>
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
                    {documentary.name}
                  </TableCell>
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
                    {documentary.availability}
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
                    {documentary.sinopse}
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
                    {documentary.language === "en" ? "🇺🇲 EN" : "🇧🇷 BR"}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    <Tooltip title="Edit">
                      <IconButton
                        color="primary"
                        onClick={() =>
                          navigate(
                            "/admin/whatWeDo/documentaries/edit/" +
                              documentary.id
                          )
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        color="error"
                        onClick={() => handleConfirmDelete(documentary.id)}
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
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={documentary?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      {isModalOpen && <Modal {...modalData} />}
    </>
  );
}

export default ListDocumentary;
