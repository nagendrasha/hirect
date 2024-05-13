import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import chat from '../assets/chat.png';
import Header from './Header';

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
          <Grid item lg={3} sx={{ mt: 5,mb:3, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'center',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
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
          <Typography sx={{ mt: 5, textAlign: 'center', fontWeight: 'bold' }} variant='h2'>Get the <span style={{ color: '#2ce2a2' }}>Hirect</span> App </Typography>
          <Typography sx={{ mt: 4, ml: 10 }}>We will send you a link via SMS. To download the app, simply open it.</Typography>

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
              <Box width={250} my={3} sx={{ p: 5, borderRadius: '30px', boxShadow: 1,'&:hover':{scale:1}}}>
                <Typography variant='h6'>{item.title}</Typography>
                <Typography sx={{ mt: 1 }}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Home
