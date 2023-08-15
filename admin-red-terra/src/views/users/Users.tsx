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
import { IModalProps } from "../../interfaces/modalProps";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteUserRequest,
  getUsersRequest,
} from "../../store/modules/users/actions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

function Users() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IModalProps>({
    title: "",
    content: "",
    closeModalCallback: setIsModalOpen,
  });
  const { users, loading } = useSelector((state: any) => state.users);
  const { userData } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  function handleChangePage(event: unknown, newPage: number): void {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement>): void {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleDeleteUser(id: string): void {
    dispatch(deleteUserRequest(id, users));
  }

  function handleConfirmDeleteUser(id: string, name: string): void {
    setIsModalOpen(true);
    setModalData({
      title: `Deletar ${name}`,
      content: `Tem certeza que deseja deletar ${name}?`,
      isOpen: true,
      confirm: true,
      callback: () => handleDeleteUser(id),
      closeModalCallback: setIsModalOpen,
    });
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Users
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />
        {loading ? (
          <Loader />
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Create user">
                        <IconButton
                          color="primary"
                          onClick={() => navigate("/admin/users/create")}
                        >
                          <AddIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users?.length &&
                    users
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((user: any) => {
                        return (
                          <TableRow key={user.id}>
                            <TableCell component="th" scope="row">
                              {user.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {user.email}
                            </TableCell>
                            <TableCell
                              align="center"
                              component="th"
                              sx={{ width: 80 }}
                            >
                              <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Tooltip title="Edit">
                                  <IconButton
                                    color="primary"
                                    onClick={() =>
                                      navigate("/admin/users/edit/" + user.id)
                                    }
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                {userData.id !== user.id && (
                                  <Tooltip title="Delete">
                                    <IconButton
                                      color="error"
                                      onClick={() =>
                                        handleConfirmDeleteUser(
                                          user.id,
                                          user.name
                                        )
                                      }
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Tooltip>
                                )}
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
              count={users?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </Box>
      {isModalOpen && <Modal {...modalData} />}
    </>
  );
}

export default Users;
