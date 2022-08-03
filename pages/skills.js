import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const skillset = [
    {
        id: 1,
        title: 'Next JS',
        subtitle: 'I am experienced with Next JS since 1 year which is the most popular framework of React',
        banner: 'https://pbs.twimg.com/media/EhfZvBdXYAEtU7b.jpg'
    },
    {
        id: 2,
        title: 'React Native',
        subtitle: 'I am experienced with React Native since 1.5 year which have been using as a best mobile apps development language',
        banner: 'https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png'
    },
    {
        id: 3,
        title: 'Redux',
        subtitle: 'I am experienced with Redux since 6 Months which have been using as a state management system',
        banner: 'https://redux.js.org/img/redux-logo-landscape.png'
    },
    {
        id: 4,
        title: 'Express JS',
        subtitle: 'I am experienced with Express JS since 8 Months which have been using as a back end web application framework for Node.js',
        banner: 'https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png'
    }
]

const skillsetTwo = [
    {
        id: 1,
        title: 'HTML',
        subtitle: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
        banner: 'https://p.kindpng.com/picc/s/23-237381_java-html-language-logo-png-transparent-png.png'
    },
    {
        id: 2,
        title: 'CSS',
        subtitle: 'I am experienced with Tailwind & Bootstrap since 1.5 year.',
        banner: 'https://encoresky.com/blog/wp-content/uploads/2020/03/1561458_7f3b.jpg'
    },
    {
        id: 3,
        title: 'GraphQl',
        subtitle: 'I am experienced with Redux since 6 Months which have been using as an open-source data query and manipulation language for APIs',
        banner: 'https://res.cloudinary.com/practicaldev/image/fetch/s--I8ICT2_H--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://cl.ly/2O2P3q0R1W3S/Image%25202018-06-17%2520at%252010.06.09%2520PM.png'
    },
    {
        id: 4,
        title: 'MongoDB',
        subtitle: 'I am experienced with Express JS since 1 year which have been using as a great database',
        banner: 'https://webimages.mongodb.com/_com_assets/cms/kuztefjfmcr54smwt-Meta_Blogs.png'
    }
]

function skills() {
    return (
        <>
            <Stack spacing={2} direction='row' sx={{
                padding: 10
            }} className='bg-neutral-900 justify-between'>
                <div>
                    <div>
                        {
                            skillset.map((skill, index) => (
                                <Container className='mt-10 drop-shadow-md' key={index}>
                                    <Card sx={{ maxWidth: 345, borderRadius: 2 }} className='shadow-white shadow-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:translate-x-6'>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            width='140'
                                            image={skill.banner}
                                            alt="next js"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {skill.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {skill.subtitle}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Container>
                            ))
                        }
                    </div>
                    <div>
                        {
                            skillsetTwo.map((skill, index) => (
                                <Container className='mt-10 drop-shadow-md' key={index}>
                                    <Card sx={{ maxWidth: 345, borderRadius: 2 }} className='shadow-white shadow-lg hover:shadow-lg hover:shadow-cyan-500/50'>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={skill.banner}
                                            alt="next js"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {skill.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {skill.subtitle}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Container>
                            ))
                        }
                    </div>
                </div>
                <div className='fixed h-96 w-96 top-32 right-64 bg-white rounded-full outline-white bg-transparent outline-dashed animate-spin-slow hover:animate-pulse outline-offset-2 outline-4 '></div>

                <div className='fixed top-44 right-80'>
                    <Image src='https://img.icons8.com/cotton/250/000000/brains.png' height='250' width='250' />
                </div>

                <div className='fixed' style={{ marginLeft: 760 }} >
                    <h1 style={{ marginTop: 320, fontWeight: 'bold', fontSize: 50, marginRight: 310 }} >Skills</h1>
                </div>
            </Stack>
            <div className='p-24 ml-2'>
                <Link href='/'>
                    <Button variant="outlined" startIcon={<ArrowBackIosIcon />} className='text-white'>
                        Back
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default skills

