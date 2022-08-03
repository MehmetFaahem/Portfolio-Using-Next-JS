import React from 'react'
import { TextField, Input, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function contact() {
    return (
        <div className='p-20 flex flex-row place-items-center justify-between'>
            <div>
                <div className=''>
                    <h1 className='mb-6 text-sky-600 text-2xl font-extrabold'>Your Email</h1>
                    <div className='border-l-8 rounded-xl border-sky-800'>
                        <Input placeholder='faahem@gmail.com' className='text-white text-xl'
                            type='email'
                            required
        sx={{color: 'white', padding: 7, paddingLeft: 6}}
                        />
                    </div>
                </div>

                <div className='mt-16'>

                    <h1 className='mb-6 text-sky-600 text-2xl font-extrabold'>Your Opinion</h1>
                    <div className='border-l-8 rounded-xl border-sky-800'>
                        <Input placeholder='Your Opinion' className='text-white p-4 pl-7 text-xl'
                            multiline
                            maxRows='10'
                            minRows='3'
                            defaultValue='Just Awesome, but you should improve a lot of things !'
        sx={{color: 'white', padding: 7, paddingLeft: 6}}
                        />
                    </div>
                </div>
                <Button variant="contained" endIcon={<SendIcon />} className='text-md' sx={{marginTop: 10, padding: 5}}>
                    Send
                </Button>
            </div>
            <div>
                <h1 className='text-8xl font-sans ui:sans-serif text-end mb-1'>Through</h1>
                <h1 className='text-8xl font-sans text-sky-500 ui:sans-serif text-end mb-1'>Your Opinion</h1>
                <h1 className='text-8xl font-sans ui:sans-serif text-end'>About Me</h1>
            </div>
        </div>
    )
}

export default contact
