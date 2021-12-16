import { useState, useEffect } from "react";
import { Box, Grid, CircularProgress, Typography } from "@mui/material";

import { ProjectItem } from "./ProjectItem";

import { getRepositories } from "../../api";

export function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMyRepos() {
            try {
                setLoading(null);
                setError(null);
                setLoading(true);
                const response = await getRepositories()
                setProjects(response)
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchMyRepos();
    }, [])

    var content = null;

    if (loading) {
        content = <CircularProgress />
    }
    else if (error) {
        content = error.e
    }
    else if (!projects) {
        content = 'No projects'
    } else {
        content = projects.map((project, i) => (
            <ProjectItem key={i} project={project} />
        ))

    }
    return (
        <Box>
            <Grid container justifyContent="center" alignItems='center'>
                <Grid item xs={12} component={Typography} sx={{
                    color: "rgb(243, 246, 249)",
                    fontSize: { "xs": '2rem', "md": "h3.fontSize" }
                }}>
                    Projects
                </Grid>
                {content}
            </Grid>
        </Box>
    )
}