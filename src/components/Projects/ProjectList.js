import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

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

    if (loading) {
        return (
            <Box>
                <Grid container justifyContent="center" alignItems='center'>
                    Loading
                </Grid>
            </Box>
        )
    }
    if (error) {
        return (
            <Box>
                <Grid container justifyContent="center" alignItems='center'>
                    {error.e}
                </Grid>
            </Box>
        )
    }
    if (!projects) {
        return (
            <Box>
                <Grid container justifyContent="center" alignItems='center'>
                    No projects
                </Grid>
            </Box>
        )
    }

    return (
        <Box>
            <Grid container justifyContent="center" alignItems='center'>
                {projects.map((project, i) => (
                    <ProjectItem key={i} project={project} />
                ))
                }
            </Grid>
        </Box>
    )
}