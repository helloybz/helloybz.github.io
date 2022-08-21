import { Grid, Typography } from "@mui/material";
import Article from "@mui/icons-material/Article"
import GitHub from "@mui/icons-material/GitHub"
import Email from "@mui/icons-material/Email"

function Message({ msg }) {
    return (
        <Grid item xs={12} textAlign='left'>
            <Typography sx={{ fontSize: { "xs": "1rem", "md": '1.5rem' } }}>{msg}</Typography>
        </Grid>
    )
}


export function Bio() {
    return (
        <Grid
            item xs={12}
            justifyContent='center'
            container
            sx={{
                color: "rgb(243, 246, 249)",
                fontSize: { "xs": '2rem', "md": "h3.fontSize" },
            }}
        >
            <Grid item xs={8}
                sx={{
                    marginBottom: { "xs": "1.5rem" },
                    textAlign: 'left'
                }}
            >
                Youngbeom Choi
            </Grid>

            <Grid
                item
                xs={8}
                justifyContent='left'
                continer
            >
                <Message msg="ML Engineer." />
                <Message msg="Love PyTorch (Lightning)." />
                <Message msg="Interested in GNN." />
                <Message msg="Interested in Recommender." />
                <Message msg="Interested in Transformer." />
                <Message msg="Interested in ML Pipeline." />
            </Grid>

            <Grid
                item
                xs={8}
                container
                justifyContent="left"
                sx={{
                    fontSize: {
                        "xs": '1rem',
                        "md": "h5.fontSize"
                    },
                    margin: '1rem 0',
                }}
            >
                <Grid item xs={12} lg={12} container
                    justifyContent="left"
                    onClick={() => (window.location.href = '/resume')}
                    sx={{
                        marginBottom: {
                            "xs": "0.5rem",
                        },
                        ":hover": {
                            "cursor": 'pointer',
                            "color": 'rgb(116,178, 251)'
                        },
                    }}>
                    <Grid item xs={1} component={Article} sx={{ marginRight: "0.5rem" }} />
                    <Grid item xs={'auto'}>
                        <Typography>
                            Resume
                        </Typography>
                    </Grid>
                </Grid>


                <Grid item xs={12} lg={12} container
                    justifyContent="left"
                    onClick={() => (window.location.href = 'https://github.com/helloybz')}
                    sx={{
                        marginBottom: {
                            "xs": "0.5rem",
                        },
                        ":hover": {
                            "cursor": 'pointer',
                            "color": 'rgb(116,178, 251)'
                        }
                    }}>
                    <Grid item xs={1} component={GitHub} sx={{ marginRight: "0.5rem" }} />
                    <Grid item xs={'auto'}>
                        <Typography>
                            GitHub
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} lg={12} container
                    justifyContent="left"
                    sx={{
                        marginBottom: {
                            "xs": "0.5rem",
                        }
                    }}
                >
                    <Grid item xs={1} component={Email} sx={{ marginRight: "0.5rem" }} />
                    <Grid item xs={'auto'}>
                        <Typography>
                            helloybz@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}