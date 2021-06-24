import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import {deleteContact} from '../services/ContactsService';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const removeContact = (id) => {
    deleteContact(id)
}
export default function DataTable({data}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">FIRST NAME</StyledTableCell>
            <StyledTableCell align="center">LAST NAME</StyledTableCell>
            <StyledTableCell align="center">EMAIL ID</StyledTableCell>
            <StyledTableCell align="center">MOBILE NUMBER</StyledTableCell>
            <StyledTableCell align="center">ADDRESS</StyledTableCell>
            <StyledTableCell align="center">REGISTERED DATE</StyledTableCell>
            <StyledTableCell align="center">UPDATED DATE</StyledTableCell>
            <StyledTableCell align="center">ZIP CODE</StyledTableCell>
            <StyledTableCell align="center">CITY</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.firstName}</StyledTableCell>
              <StyledTableCell align="center">{row.lastName}</StyledTableCell>
              <StyledTableCell align="center">{row.emailId}</StyledTableCell>
              <StyledTableCell align="center">{row.mobileNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              <StyledTableCell align="center">{row.registeredDate}</StyledTableCell>
              <StyledTableCell align="center">{row.updatedDate}</StyledTableCell>
              <StyledTableCell align="center">{row.zipcode}</StyledTableCell>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
              <StyledTableCell align="right">
                  <IconButton onClick={removeContact(row.id)}>
                        <DeleteIcon />
                  </IconButton>
                  <IconButton>
                        <EditIcon />
                  </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}