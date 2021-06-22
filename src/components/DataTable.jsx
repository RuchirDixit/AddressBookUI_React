import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

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
            <StyledTableCell align="center">REGISTERED DATE</StyledTableCell>
            <StyledTableCell align="center">UPDATED DATE</StyledTableCell>
            <StyledTableCell align="center">ZIP CODE</StyledTableCell>
            <StyledTableCell align="center">CITY</StyledTableCell>
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
              <StyledTableCell align="center">{row.registeredDate}</StyledTableCell>
              <StyledTableCell align="center">{row.updatedDate}</StyledTableCell>
              <StyledTableCell align="center">{row.zipcode}</StyledTableCell>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export default function DataTable({data}) {

//     const columns = data[0] && Object.keys(data[0])
//     return(
//         <table border={1} cellSpacing={4} cellPadding={4}>
//             <thead>
//                 <tr>
//                     {data[0] && columns.map((heading) => <th>{heading.toUpperCase()}</th>)}
//                 </tr> 
//             </thead>
//             <tbody>
//                     {data.map(row => <tr>
//                         {
//                             columns.map(column => <td>{row[column]}</td>)
//                         }
//                     </tr>)}
//             </tbody>
//         </table>
//     )
// }