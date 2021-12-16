import { Grid } from "@mui/material";
import { Header, Bio, ProjectList } from "./components";


function App() {
  return (
    <div>
      <Header />
      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "6rem",
          padding: { "xs": "0 0.5rem", "lg": "0 24rem" }
        }}
      >
        <Grid item xs={12} >
          <Bio />
        </Grid>
        <Grid item xs={12} >
          <ProjectList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
