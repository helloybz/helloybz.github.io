import { Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const MyPaper = styled(Paper)(() => ({
    backgroundColor: 'rgb(5,30,59)',
    elevation4: true,
    color: 'whitesmoke',
    ":hover": {
        backgroundColor: 'rgb(8,33,62)',
        cursor: "pointer",
    }
}));

export function ProjectItem({ project }) {

    function handleClick({ url }) {
        window.location.href = url
    }
    return (
        <Grid
            item xs={12}
            component={MyPaper}
            container
            alignItems='flex-start'
            sx={{
                margin: "1rem", padding: "1rem",
            }}
            onClick={() => handleClick({ url: project.homepage })}
        >
            <Grid item xs={12} component={Typography} sx={{ fontSize: 'h4.fontSize' }} >
                {project.name}
            </Grid>
            <Grid item xs={12} component={Typography} sx={{ fontSize: 'body1.fontSize' }}>
                {project.description}
            </Grid>
        </Grid >
    )
}