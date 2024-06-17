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
import lenskart from '../assets/lenskart.png';
import ajio from '../assets/Ajio.png';
import flipkart from '../assets/Flipkart.png';
import udaan from '../assets/Udaan.png';
import byju from '../assets/Byju.png';
import squareyard from '../assets/squareyards.png';
import Footer from './Footer';

const Home = () => {

  const city = [{
    id: 1,
    image: delhi
  },
  {
    id: 2,
    image: bengalure
  }
    ,
  {
    id: 3,
    image: mumbai
  }
    ,
  {
    id: 4,
    image: pune
  }
    ,
  {
    id: 5,
    image: hyderabad
  }
  ];

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

  const recruiters = [{
    id: 1,
    img: lenskart
  }, {
    id: 2,
    img: ajio
  }, {
    id: 3,
    img: flipkart
  },{
    id:4,
    img:udaan
  },{
    id:5,
    img:byju
  },{
    id:6,
    img:squareyard
  }];


  return (
    <>
      <Header />
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ mt: { lg: 5, xs: 0, sm: 0 }, textAlign: 'center', fontWeight: 'bold', fontSize: { lg: '50px', sm: '45px', xs: '45px' } }}>Direct <span style={{ color: '#2ce2a2' }}>Hiring</span> App for Founders,<br />
          Team Leaders <br /> and Hiring Managers</Typography>
        <Typography sx={{ mt: 4, textAlign: 'center', fontSize: '18px' }} variant='p'>Hirect simplifies the hiring process. Directly chatting with verified candidates matched by the AI algorithm ensures a simple, <br /> quick and effective hiring experience.
        </Typography>
      </Grid>

      <Grid container>
        {features.map((item) => (
          <Grid item lg={3} sm={6} xs={6} sx={{ mt: 5, mb: 3, display: 'flex', justifyContent: 'center' }}>
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

      <Grid container sx={{ backgroundColor: '#f4fafd', p: { lg: 5, sm: 0, md: 0 }, display: 'flex', justifyContent: 'center' }}>
        <Grid item lg={6} sx={{ alignItems: 'center' }}>
          <Typography sx={{ mt: 10, textAlign: 'center', fontWeight: 'bold', fontSize: { lg: '50px', xs: '45px', sm: '30px' } }} variant='h2'>Get the <span style={{ color: '#2ce2a2' }}>Hirect</span> <br /> App </Typography>
          <Typography sx={{ mt: 4, textAlign: 'center', ml: { lg: 10, sm: 0, xs: 0 } }}>We will send you a link via SMS. To download the <br /> app, simply open it.</Typography>
          <Box sx={{ ml: 10, mt: 5, display: { lg: 'block', sm: 'none', xs: 'none' } }} >
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
          <Button sx={{ backgroundColor: 'green', margin: 'auto', mt: 1, mb: 4, borderRadius: '30px', display: { lg: 'none', sm: 'block', xs: 'block' } }} variant='contained'>Get App</Button>
        </Grid>
        <Grid item lg={6} sx={{ display: { lg: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'center' }}>
          <Image src={chat} width="100%" />
        </Grid>

      </Grid>

      <Grid container sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
        <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 'bold' }}>Trending Job Categories</Typography><br />
        <Grid container >
          {trendingCat.map((item) => (
            <Grid item lg={3} md={6} sm={6} xs={6} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
              <Box width={200} my={3} sx={{ p: 5, borderRadius: '30px', boxShadow: 1, '&:hover': { scale: 1 } }}>
                <Typography sx={{ fontSize: { lg: '25px', sm: '20', xs: '20' } }}>{item.title}</Typography>
                <Typography sx={{ mt: 1, fontSize: { lg: '18px', sm: '14px', xs: '14px' } }}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container sx={{ p: 2 }}>
        <Grid item lg={6} sx={{ alignItems: 'center', pl: { lg: 10, sm: 0, xs: 0 } }}>
          <Typography sx={{ mt: 5, fontWeight: 'bold', fontSize: { lg: '50px', sm: '45px', xs: '45px' } }} variant='h3'>Chat directly with <br />
            Decision-Makers</Typography>
          <Typography sx={{ mt: 4 }}>Hirect encourages direct and quick responses between job-seekers and recruiters. Through the bi-directional direct chat feature, candidates can chat directly with relevant and verified recruiters on this job search app.
          </Typography>
          <Button sx={{ backgroundColor: 'green', mt: 3, borderRadius: '30px' }} variant='contained'>Get Hired</Button>
        </Grid>
        <Grid item lg={6}>
          <Image src={chat2} width={430} />
        </Grid>
      </Grid>

      <Grid container sx={{ pt: 3, backgroundColor: 'rgb(44, 226, 162)' }}>
        <Grid item lg={6}>
          <Image src={chat3} width={400} />
        </Grid>
        <Grid item lg={6} sx={{ alignItems: 'center', pl: 10 }}>
          <Typography sx={{ mt: 10, fontWeight: 'bold' }} variant='h3'>Hire Directly with Hirect</Typography>
          <Typography sx={{ mt: 4 }}>3.8M+ candidates chat directly with 190K+ recruiters on Hirect.</Typography>
          <Button sx={{ backgroundColor: 'white', color: 'black', mt: 3, mb: 3, borderRadius: '30px' }} variant='contained'>Instant Hiring</Button>
        </Grid>
      </Grid>

      <Grid container sx={{ my: 10, display: 'flex', justifyContent: 'center' }}>
        <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '45px' }}>Find Candidates in your City</Typography>
        </Grid>


        <Grid lg={12} sm={12} xs={12} sx={{ mx: { lg: 40, sm: 0, xs: 0 }, mt: 5, display: 'flex', justifyContent: 'space-between', flexDirection: { lg: 'row', sm: 'column', xs: 'column' } }}>
          {
            city.map((e) => (
              <Image src={e.image} />
            ))
          }
        </Grid>

        <Button sx={{ backgroundColor: 'white', color: 'black', mt: 3, borderRadius: '30px' }} variant='outlined'>View More</Button>
      </Grid>

      <Grid container sx={{ my: 10, display: 'flex', justifyContent: 'center' }}>
        <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '45px' }}>More than <span style={{ color: '#2ce2a2' }}>190K</span>  Recruiters trust  <span style={{ color: '#2ce2a2' }}>Hirect</span>
          </Typography>
        </Grid>

        
          <Grid item sx={{ mx: { lg: 40, sm: 0, xs: 0 }, mt: 5,display: 'flex', justifyContent: 'space-between', flexDirection: { lg: 'row', sm: 'column', xs: 'column' } }} >
            {
          recruiters.map((e) => (
              <Box
                sx={{ boxShadow: 4, borderRadius: '10px', mx: 2 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={150}
                height={50}
              >
                <Image src={e.img} />

              </Box>
                ))
              }
            </Grid>
        
      </Grid>
      <Footer/>
    </>
  )
}

export default Home
