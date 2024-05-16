import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import { Box, Button, Card, CardContent, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import chat from '../assets/chat.png';
import chat2 from '../assets/chat-2.png';
import Header from './Header';
import chat3 from '../assets/chat-3.png';
import delhi from '../assets/Delhi.png';
import bengalure from '../assets/Bengaluru.png';
import mumbai from '../assets/Mumbai.png';
import hyderabad from '../assets/Hyderabad.png';
import pune from '../assets/pune.png';

const Home = () => {


  const features = [{
    title: '190K+',
    icon: PlagiarismOutlinedIcon,
    text: 'Verified Recruiters'
  }, {
    title: '500K+',
    icon: BusinessCenterIcon,
    text: 'Jobs Posted'
  },
  {
    title: '25M+',
    icon: QuestionAnswerIcon,
    text: 'Chat Conversations'
  },
  {
    title: '3.8M+',
    icon: ScreenSearchDesktopOutlinedIcon,
    text: 'Job Seekers'
  }
  ];

  const trendingCat = [{
    title: 'IT Engineering',
    desc: '685K+ Candidates'
  },
  {
    title: 'Operations',
    desc: '490K+ Candidates'
  },
  {
    title: 'BPO & KPO',
    desc: '360K+ Candidates'
  },
  {
    title: 'Sales & BD',
    desc: '350K+ Candidates'
  },
  {
    title: 'Finance',
    desc: '320K+ Candidates'
  },
  {
    title: 'Marketing',
    desc: '255K+ Candidates'
  },
  {
    title: 'Personnel',
    desc: '215K+ Candidates'
  },
  {
    title: '>',
    desc: 'view More'
  }
  ];


  return (
    <>
      <Header />
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ mt: 5, textAlign: 'center', fontWeight: 'bold' }} variant='h2'>Direct <span style={{ color: '#2ce2a2' }}>Hiring</span> App for Founders,<br />
          Team Leaders and Hiring Managers</Typography>
        <Typography sx={{ mt: 4, textAlign: 'center' }} variant='p'>Hirect simplifies the hiring process. Directly chatting with verified candidates matched by the AI algorithm ensures a simple, <br /> quick and effective hiring experience.
        </Typography>
      </Grid>

      <Grid container>
        {features.map((item) => (
          <Grid item lg={3} sx={{ mt: 5, mb: 3, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '70px', backgroundColor: '#f2f4f8', borderRadius: '150px' }}>
                <item.icon sx={{ fontSize: '50px' }} />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                <Typography>{item.text}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* download app section  */}

      <Grid container sx={{ backgroundColor: '#f4fafd', p: 5 }}>
        <Grid item lg={6} sx={{ alignItems: 'center' }}>
          <Typography sx={{ mt: 10, textAlign: 'center', fontWeight: 'bold' }} variant='h2'>Get the <span style={{ color: '#2ce2a2' }}>Hirect</span> App </Typography>
          <Typography sx={{ mt: 4, ml: 10 }}>We will send you a link via SMS. To download the app, simply open it.</Typography>

          <Box sx={{ ml: 10, mt: 5 }} >
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: '350px' }}
              placeholder='Enter Mobile No'
              InputProps={{
                style: {
                  borderRadius: "30px",
                  height: '40px',
                  backgroundColor: 'white'
                },
                startAdornment: <InputAdornment position="start">+91 | </InputAdornment>,
              }}
            />
            <Button sx={{ backgroundColor: 'green', mt: 1, borderRadius: '30px' }} variant='contained'>Get App</Button>
          </Box>
        </Grid>
        <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={chat} width="100%" />
        </Grid>

      </Grid>

      <Grid container sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
        <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 'bold' }}>Trending Job Categories</Typography><br />
        <Grid container >
          {trendingCat.map((item) => (
            <Grid item lg={3} md={6} sm={12} xs={12} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
              <Box width={250} my={3} sx={{ p: 5, borderRadius: '30px', boxShadow: 1, '&:hover': { scale: 1 } }}>
                <Typography variant='h6'>{item.title}</Typography>
                <Typography sx={{ mt: 1 }}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container sx={{ p: 5 }}>
        <Grid item lg={6} sx={{ alignItems: 'center', pl: 10 }}>
          <Typography sx={{ mt: 10, fontWeight: 'bold' }} variant='h3'>Chat directly with <br />
            Decision-Makers</Typography>
          <Typography sx={{ mt: 4 }}>Hirect encourages direct and quick responses between job-seekers and recruiters. Through the bi-directional direct chat feature, candidates can chat directly with relevant and verified recruiters on this job search app.
          </Typography>
          <Button sx={{ backgroundColor: 'green', mt: 3, borderRadius: '30px' }} variant='contained'>Get Hired</Button>
        </Grid>
        <Grid item lg={6}>
          <Image src={chat2} width={600} />
        </Grid>
      </Grid>

      <Grid container sx={{ pt: 3, backgroundColor: 'rgb(44, 226, 162)' }}>
        <Grid item lg={6}>
          <Image src={chat3} width={600} />
        </Grid>
        <Grid item lg={6} sx={{ alignItems: 'center', pl: 10 }}>
          <Typography sx={{ mt: 10, fontWeight: 'bold' }} variant='h3'>Hire Directly with Hirect</Typography>
          <Typography sx={{ mt: 4 }}>3.8M+ candidates chat directly with 190K+ recruiters on Hirect.</Typography>
          <Button sx={{ backgroundColor: 'white', color: 'black', mt: 3, borderRadius: '30px' }} variant='contained'>Instant Hiring</Button>
        </Grid>
      </Grid>

      <Grid container sx={{ my:10, display:'flex',justifyContent:'center' }}>
        <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontWeight: 'bold', }} variant='h3'>Find Candidates in your City</Typography>
        </Grid>
        <Grid item lg={12} sx={{ mx:40,mt:5, display: 'flex', justifyContent: 'space-between' }}>
          <Image src={delhi} />
          <Image src={bengalure} />
          <Image src={pune} />
          <Image src={mumbai} />
          <Image src={hyderabad} />
        </Grid>
        <Button sx={{ backgroundColor: 'white', color: 'black', mt: 3, borderRadius: '30px' }} variant='outlined'>View More</Button>
      </Grid>
    </>
  )
}

export default Home
