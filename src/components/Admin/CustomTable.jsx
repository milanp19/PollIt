import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const initialTableData = Array(10).fill(Array(4).fill(""));

const headerText = ["Sl N.O", "TAG", "ACTIONS", ""];

const tableCellStyle = {
  border: "none",
  padding: "8px",
  textAlign: "center",
  fontFamily: "Roboto, sans-serif",
  };

const greyRowStyle = {
  backgroundColor: "#f2f2f2",
  border: "none",
};

function CustomTable() {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("tableData")) || initialTableData
  );

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [tableData]);

  const handleInputChange = (rowIndex, columnIndex, event) => {
    const newData = tableData.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === columnIndex ? event.target.value : cell))
        : row
    );
    setTableData(newData);
  };

  const addRow = () => {
    const newRow = Array(4).fill("");
    setTableData([...tableData, newRow]);
  };

  const resetTable = () => {
    setTableData(initialTableData);
  };

  const handleEdit = (rowIndex) => {
    const newData = tableData.map((row, i) =>
      i === rowIndex ? row.map((cell) => cell) : row
    );
    setTableData(newData);
  };
  

  const handleDelete = (rowIndex) => {
    const newData = tableData.map((row, i) =>
      i === rowIndex ? row.map(() => "") : row
    );
    setTableData(newData);
  };
  
  return (
    <div style={{ textAlign: "center", marginTop: "70px" }}>
      <div style={{ margin: "20px auto", maxWidth: "600px" }}>
        <TableContainer
          component={Paper}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            borderTopRightRadius: "0",  
            backgroundColor: "#f2f2f2", 
          }}
        >
          <Table size="small" style={{ border: "none",fontFamily: "Roboto, sans-serif"  }}>
            <TableHead>
              <TableRow>
                {headerText.map((header, index) => (
                  <TableCell
                    key={index}
                    style={{
                      ...tableCellStyle,
                      backgroundColor: "#f2f2f2",
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow key={rowIndex} style={greyRowStyle}>
                  {row.map((cell, columnIndex) => (
                    <TableCell
                      key={`${rowIndex}-${columnIndex}`}
                      style={{ ...tableCellStyle }}
                    >
                      {columnIndex < 2 ? (
                        rowIndex >= 0 ? (
                          <input
                            type="text"
                            value={cell}
                            onChange={(e) =>
                              handleInputChange(rowIndex, columnIndex, e)
                            }
                            style={{
                              ...tableCellStyle,
                              width: "100%",
                              outline: "none",
                            }}
                            autoComplete="off"
                            spellCheck="false"
                          />
                        ) : null
                      ) : (
                        <>
                          {columnIndex === 2 && rowIndex >= 0 ? (
                            <Button
                              variant="text"
                              onClick={() => handleEdit(rowIndex)}
                              style={{ marginRight: "5px" }}
                            >
                              Edit
                            </Button>
                          ) : columnIndex === 3 && rowIndex >= 0 ? (
                            <Button
                              variant="text"
                              onClick={() => handleDelete(rowIndex)}
                            >
                              Delete
                            </Button>
                          ) : null}
                        </>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          onClick={addRow}
          style={{ marginRight: "5px" }}
        >
          Add Row
        </Button>
        <Button variant="contained" onClick={resetTable}>
          Reset Table
        </Button>
      </div>
    </div>
  );
}

export default CustomTable;
