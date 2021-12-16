import { Grid, Typography } from "@mui/material";
import { Email, GitHub, Article } from "@mui/icons-material"

function Message({ msg }) {
    return (
        <Grid item xs={12} textAlign='center'>
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
            <Grid item xs={12}
                sx={{
                    marginBottom: { "xs": "1.5rem" }
                }}
            >
                Youngbeom Choi
            </Grid>

            <Message msg="ML Developer." />
            <Message msg="Good at using PyTorch." />
            <Message msg="Interested in GNN, MIR, GAN." />

            <Grid item xs={11} container
                justifyContent="center"
                sx={{
                    padding: '0 1rem',
                    fontSize: {
                        "xs": '1rem',
                        "md": "h5.fontSize"
                    },
                    margin: '1rem 0',
                }}
            >
                <Grid item xs={12} lg={3} container
                    justifyContent={"center"}
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
                    <Grid item xs={1} component={Article} />
                    <Grid item xs={'auto'}>
                        <Typography>
                            Resume
                        </Typography>
                    </Grid>
                </Grid>


                <Grid item xs={12} lg={3} container
                    justifyContent={"center"}
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
                    <Grid item xs={1} component={GitHub} />
                    <Grid item xs={'auto'}>
                        <Typography>
                            GitHub
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} lg={3} container
                    justifyContent={"center"}

                    sx={{
                        marginBottom: {
                            "xs": "0.5rem",
                        }
                    }}
                >
                    <Grid item xs={1} component={Email} />
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