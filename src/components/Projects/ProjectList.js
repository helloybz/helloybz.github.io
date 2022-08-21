import { Box, Grid, Typography } from "@mui/material";

import { ProjectItem } from "./ProjectItem";

import { projects } from './projects'

export function ProjectList() {

    var content = projects.map((project, i) => (
        <ProjectItem key={i} project={project} />
    ))
    return (
        <Box>
            <Grid container justifyContent="center" alignItems='center'>
                <Grid item xs={8} component={Typography} sx={{
                    color: "rgb(243, 246, 249)",
                    fontSize: { "xs": '2rem', "md": "h3.fontSize" }
                }}>
                    Projects
                </Grid>
                <Grid
                    item
                    xs={8}>

                    {content}
                </Grid>
            </Grid>
        </Box>
    )
}