import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../assets/hirect-logo-footer.png';

const Footer = () => {

    const links = [{
        id: 1,
        name: 'Home',
        link: ''
    }, {
        id: 2,
        name: 'About Us',
        link: ''
    },
    {
        id: 3,
        name: 'Recruiters',
        link: ''
    },
    {
        id: 4,
        name: 'Job Seeking',
        link: ''
    },
    {
        id: 5,
        name: 'Enterprise Hiring',
        link: ''
    },
    {
        id: 1,
        name: 'Media',
        link: ''
    },
    {
        id: 1,
        name: 'Influencers',
        link: ''
    }];

    return (
        <>
            <Grid container sx={{ backgroundColor: 'black', p: 10, color: 'white' }}>
                <Grid item lg={4} >
                    <Image src={logo} />
                    <Typography>
                        Chat Directly. Hire Instantly. <br />
                        Trusted by 3.8M+ verified job seekers and <br />
                        190K+ verified recruiters.
                    </Typography>
                </Grid>
                <Grid item lg={3} >
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Hirect</Typography>
                    {
                        links.map((e, key) => (
                            <Typography sx={{ mt: 2 }}>{e.name}{e.key}</Typography>
                        ))
                    }

                </Grid>
                <Grid item lg={3} >
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Support</Typography>
                    <Typography sx={{ mt: 2 }}>
                        Support@hirect.in
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        For Recruiters
                        Schedule a Call
                    </Typography>
                </Grid>
                <Grid item lg={2} >
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Leagal</Typography>
                    <Typography sx={{ mt: 2 }}>
                        Privacy Policy
                    </Typography>
                    <Typography sx={{mt:2}}>Terms & Conditions</Typography>
                    <Typography sx={{mt:2}}>Return Policy</Typography>
                </Grid>
                <Grid lg={12} sx={{borderTop:'3px solid #2ce2a2',my:2}}>
                    <Typography>© PHILOCALIST JOBS PRIVATE LIMITED. All Rights Reserved.</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
