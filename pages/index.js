import Head from 'next/head'
import SchoolIcon from '@mui/icons-material/School';
import { Stack, Button, Typography } from '@mui/material'
import { Container } from '@mui/system';
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mehmet Faahem</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/V9n56LS/Covdffer.png" />
      </Head>
      <div className="absolute bg-neutral-900 overflow-hidden pl-16 pb-28">
        <Stack direction='row'>
          <div className="max-w-7xl mx-auto flex-1">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-indigo-600 xl:inline">Mehmet Faahem</span>{' '}

                  </h1>
                  <p className="mt-3 text-2xl text-gray-300 font-bold sm:mt-5 sm:text-xl2 sm:max-w-xl2 sm:mx-auto md:mt-5 md:text-xl2 lg:mx-0">
                    React JS & React Native Developer
                  </p>

                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Hey, I'am 17. I am an professional React Native Developer. I am continuously enlarging my depth of experience in React JS and React Native. I am familier with REST API.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center  lg:justify-start">
                    <div className="rounded-md shadow hover:translate-y-5">
                      <a
                        href="/projects"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        My Projects
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 hover:translate-y-5 hover:scale-100">
                      <a
                        href="/contact"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                  <Link href='/skills'>
                    <Button variant="outlined" startIcon={<SchoolIcon />} sx={{marginTop: 5, padding: 3}} className='p-4 bg-zinc-900 text-orange-100 hover:bg-indigo-900'>
                      Skills
                    </Button>
                  </Link>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/3 mt-10 mr-32 sm:invisible">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://i.ibb.co/2hVHJFt/Covdffer.png"
              alt="Faahem Vaai"
            />
          </div>
        </Stack>
      </div>
      <div className='pt-64 pl-60 absolute opacity-10'>
        <Image src='https://img.icons8.com/dotty/480/000000/react.png' width='480' height='480' className=' animate-spin-slow ' />
      </div>
      <div className='opacity-10 fixed'>
        <Image src="https://img.icons8.com/wired/300/000000/react.png" width='300' height='300' className=' animate-spin-slow ' />
      </div>
      <div className='opacity-10 left-96 fixed'>
        <Image src="https://img.icons8.com/wired/250/000000/react.png" width='220' height='220' className=' animate-spin-slow ' />
      </div>
    </div>
  )
}
