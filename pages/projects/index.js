import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function projects() {
    return (
        <>
            <div className='p-7 ml-2 fixed bg-neutral-900'>
                <Link href='/'>
                    <Button variant="outlined" startIcon={<ArrowBackIosIcon />} className='text-white'>
                        Back
                    </Button>
                </Link>
            </div>
            <div className='bg-neutral-900 flex flex-row font-sans place-items-center ui-sans-serif pt-32'>

                <h1 className='text-8xl ml-40 text-sky-300 font-sans pr-9'>Projects</h1>
                <div className='p-10 flex flex-row'>
                    <div>
                        <Link href='projects/react'>
                            <Card sx={{ maxWidth: 300, borderRadius: 4, }} className='hover:scale-105 hover:shadow-xl hover:shadow-cyan-900'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png"
                                        alt="React"
                                    />
                                    <CardContent className='bg-sky-900'>
                                        <Typography gutterBottom variant="h5" component="div" className='mt-3 text-white'>
                                            React
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                    <div>
                        <Link href='projects/reactnative'>
                            <Card sx={{ maxWidth: 300, borderRadius: 4, marginLeft: 5 }} className=' hover:scale-105 hover:shadow-xl hover:shadow-cyan-900'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://i.ibb.co/MRr5CwQ/React-Native-1.jpg"
                                        alt="React"
                                    />
                                    <CardContent className='bg-sky-900'>
                                        <Typography gutterBottom variant="h5" component="div" className='mt-3 text-white'>
                                            React Native
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}