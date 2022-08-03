import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ReactProjects() {
    return (
        <>
            <div className='p-8 ml-2 bg-neutral-900 pb-20'>
                <Link href='/projects'>
                    <Button variant="outlined" startIcon={<ArrowBackIosIcon />} className='text-white'>
                        Back
                    </Button>
                </Link>
            </div>
            <div className='p-12 flex bg-neutral-900'>
                <div className='flex flex-row place-items-center'>
                    <Card sx={{ maxWidth: 600, borderRadius: 4, }} className='mt-3 hover:scale-105 hover:shadow-amber-500 shadow-white shadow-xl'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://i.ibb.co/2FJTrrz/demo1.jpg"
                                alt="React"
                            />
                            <CardContent className='bg-amber-500 text-black'>
                                <Typography gutterBottom variant="h5" component="div"  sx={{fontWeight: 'bold'}} className='mt-3 text-black font-bold'>
                                    Food Delivery App
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <div className='opacity-30 fixed' style={{ left: 868 }}>
                        <Image src="https://img.icons8.com/wired/300/000000/react.png" width='300' height='300' className=' animate-spin-slow ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactProjects
