import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack, Button } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function reactnative() {
    return (
        <>
            <div className='p-12 bg-neutral-900'>
                <Stack direction='row'>
                    <div>
                        <div className='shadow-2xl mb-20 shadow-white hover:shadow-amber-500 place-items-center rounded-2xl flex flex-row'>
                            <div className='pb-10'>
                                <Image src='https://i.ibb.co/7Wyyp11/screen1-1.png' height='520' width='400' />
                            </div>
                            <div>
                                <h4 className='text-4xl font-bold pr-32 text-amber-500'>Food App</h4>
                            </div>
                        </div>
                        <div className='shadow-2xl shadow-white hover:shadow-amber-500 place-items-center rounded-2xl flex flex-row'>
                            <div className='pb-3'>
                                <Image src='https://i.ibb.co/pQ8NGsP/screen1.png' height='520' width='400' />
                            </div>
                            <div>
                                <h4 className='text-4xl font-bold pr-32 text-amber-500'>Booking App</h4>
                            </div>
                        </div>
                        {/* <div>
                        <Image src='https://i.ibb.co/pQ8NGsP/screen1.png' height='720' width='600' />
                    </div> */}
                    </div>
                    <div style={{ marginTop: 145, marginRight: 50 }}>
                        <div className='opacity-30 fixed mt-16 ' style={{ marginLeft: 200 }}>
                            <Image src="https://img.icons8.com/wired/200/000000/react.png" width='200' height='200' className=' animate-spin-slow ' />
                        </div>
//                         <div>
//                             <Typography className='text-3xl p-4 ml-40 top-80 font-sans ui-sans-serif fixed'>React Native Projects</Typography>
//                         </div>
                    </div>
                </Stack>
            </div>

            <div className='p-10 ml-2 bg-neutral-900'>
                <Link href='/projects'>
                    <Button variant="outlined" startIcon={<ArrowBackIosIcon />} className='text-white'>
                        Back
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default reactnative
