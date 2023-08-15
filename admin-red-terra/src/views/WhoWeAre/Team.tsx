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
import { deleteTeamRequest, getTeamRequest } from "../../store/modules/whoWeAre/actions";
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
  const { team } = useSelector((state: any) => state.whoWeAre);

  useEffect(() => {
    dispatch(getTeamRequest());
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
    dispatch(deleteTeamRequest(id, team));
  }


  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          List team
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Resume</TableCell>
                <TableCell>Language</TableCell>
                <TableCell align="right">
                  <Tooltip title="Create rdn">
                    <IconButton
                      color="primary"
                      onClick={() => navigate("/admin/whoWeAre/team/create")}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {team?.map((team: any) => (
                <TableRow key={team.id}>
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
                    {team.name}
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
                    {team.position}
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
                    {team.resume}
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
                    {team.language === 'en' ? '🇺🇲 EN' : '🇧🇷 BR'}
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    <Tooltip title="Edit">
                      <IconButton
                        color="primary"
                        onClick={() =>
                          navigate("/admin/whoWeAre/team/edit/" + team.id)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="error" onClick={() => handleConfirmDelete(team.id)}>
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
