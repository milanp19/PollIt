import {
  Button,
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CreateAdmin from "./CreateAdmin";
import { useState } from "react";

const CustomTable = () => {
  const [tags, setTags] = useState([
    "Tag 1",
    "Tag 2",
    "Tag 3",
    "Tag 4",
    "Tag 5",
    "Tag 6",
  ]);
  const [addTag, setAddTag] = useState(false);
  return addTag ? (
    <CreateAdmin setAddTag={setAddTag} setTags={setTags} />
  ) : (
    <Container sx={{ p: "50px 20px", width: "800px", textAlign: "center" }}>
      <Card
        sx={{
          borderRadius: "10px",
          padding: "20px 0px 20px 0px",
          background: "var(--secondary)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            pl: "16px",
          }}
        >
          Created Tags
        </Typography>
        <br />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Sl No</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Tags</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tags.map((tag, index) => (
                <TableRow key={index} style={{ textAlign: "center" }}>
                  <TableCell sx={{ textAlign: "center" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{tag}</TableCell>

                  <TableCell sx={{ textAlign: "center" }}>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <br />
      <br />
      <Button variant="contained" onClick={() => setAddTag(true)}>
        Create a new tag
      </Button>
    </Container>
  );
};

export default CustomTable;
