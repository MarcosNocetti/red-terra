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
import {
  getNewsRequest,
  deleteNewsRequest,
} from "../../store/modules/whatsHappening/actions";

function News() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IModalProps>({
    title: "",
    content: "",
    closeModalCallback: setIsModalOpen,
  });
  const { news } = useSelector((state: any) => state.whatsHappening);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [dispatch]);

  function handleDelete(id: string): void {
    dispatch(deleteNewsRequest(id, news));
  }

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
          News
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Text</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Is RedCarta</TableCell>
                <TableCell align="center">
                  <Tooltip title="Create news">
                    <IconButton
                      color="primary"
                      onClick={() =>
                        navigate("/admin/whatsHappening/news/create")
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {news?.length &&
                news
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((news: any) => {
                    return (
                      <TableRow key={news.id}>
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
                          {news.title}
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
                          {news.text}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            maxWidth: "20px",
                          }}
                        >
                          {news.language === "en" ? "🇺🇲 EN" : "🇧🇷 BR"}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            maxWidth: "20px",
                          }}
                        >
                          {news.isRedCarta ? "Yes" : "No"}
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
                                  navigate(
                                    "/admin/whatsHappening/news/edit/" + news.id
                                  )
                                }
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton
                                color="error"
                                onClick={() => handleConfirmDelete(news.id)}
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
          count={news?.length}
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

export default News;
