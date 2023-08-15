import { ChangeEvent, useEffect, useState } from "react";
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
  Stack,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/Modal";
import { IModalProps } from "../../interfaces/modalProps";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAwardRequest, getAwardsRequest } from "../../store/modules/awards/actions";

function Awards() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IModalProps>({
    title: "",
    content: "",
    closeModalCallback: setIsModalOpen,
  });
  const { awards } = useSelector((state: any) => state.awards);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAwardsRequest());
  }, [dispatch]);

  function handleChangePage(event: unknown, newPage: number): void {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement>): void {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleDeleteAwards(id: string): void {
    dispatch(deleteAwardRequest(id, awards));
  }

  function handleConfirmDeleteAwards(id: string, name: string): void {
    setIsModalOpen(true);
    setModalData({
      title: `Deletar ${name}`,
      content: `Tem certeza que deseja deletar ${name}?`,
      isOpen: true,
      confirm: true,
      callback: () => handleDeleteAwards(id),
      closeModalCallback: setIsModalOpen,
    });
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Awards
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Language</TableCell>
                <TableCell align="center">
                  <Tooltip title="Create award">
                    <IconButton
                      color="primary"
                      onClick={() => navigate("/admin/awards/create")}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {awards?.length &&
                awards
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((award: any) => {
                    return (
                      <TableRow key={award.id}>
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
                          {award.name}
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
                          {award?.imageUrl && (
                            <img
                              src={award.imageUrl}
                              height="100"
                              style={{ maxWidth: "100%" }}
                              alt={award.name}
                            />
                          )}
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
                          {award.language}
                        </TableCell>
                        <TableCell
                          align="center"
                          component="th"
                          sx={{ width: 80 }}
                        >
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Tooltip title="Edit">
                              <IconButton
                                color="primary"
                                onClick={() =>
                                  navigate("/admin/awards/edit/" + award.id)
                                }
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton
                                color="error"
                                onClick={() =>
                                  handleConfirmDeleteAwards(
                                    award.id,
                                    award.name
                                  )
                                }
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={awards?.length}
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

export default Awards;
