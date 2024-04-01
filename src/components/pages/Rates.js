import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Rates = () => {
  const createRows = (rate, time) => {
    return { rate, time };
  };
  const musicRows = [
    createRows("$10", "<= 30s"),
    createRows("$17", "<= 1m"),
    createRows("$24", "<= 1m30s"),
    createRows("$30", "<= 2m"),
    createRows("+$6", "every 30s after 2m"),
  ];
  const visualizerRows = [
    createRows("$20", "<= 2m"),
    createRows("+$5", "every 30s after 2m"),
  ];
  return (
    <>
      <div className="music-rates">
        <h1 className="section-heading">
          <span>Commission Rates</span>
        </h1>
        <div className="comm-tables">
          <TableContainer component={Paper}>
            <Table aria-label="rates table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} align="center">Songs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>Length</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {musicRows.map((row) => (
                  <TableRow
                    key={row.rate}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="rate">
                      {row.rate}
                    </TableCell>
                    <TableCell>{row.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper}>
            <Table aria-label="rates table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} align="center">Visualizers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>Length</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visualizerRows.map((row) => (
                  <TableRow
                    key={row.rate}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="rate">
                      {row.rate}
                    </TableCell>
                    <TableCell>{row.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Rates;
