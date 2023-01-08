import type { NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Center from '../Components/Center'
import Sidebar from '../Components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex'>
        <Sidebar/>
        <Center/>
      </main>
      <div>
        {/*player*/}
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context:any){
  const session = await getSession(context);
  return{
    props:{
      session,
    }
  }
}