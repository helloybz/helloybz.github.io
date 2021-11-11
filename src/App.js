import { Box } from "@mui/system";
import { Header, ProjectList } from "./components";


function App() {
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "6rem" }}>
        <ProjectList />
      </Box>
    </div>
  );
}

export default App;
