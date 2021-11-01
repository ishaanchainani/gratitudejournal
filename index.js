import Head from 'next/head'
import Greeting from '../components/Greeting'
import History from '../components/History'
import Input from "../components/Input";
import { useState } from "react";
import { Auth } from '@supabase/ui'


import { supabase } from "../utils/supabaseClient"
import GratitudeApp from '../components/GratitudeApp';

export default function Home() {
  const {user} = Auth.useUser()

    return (
          <div className="bg-gray-700 min-h-screen min-w-screen">
            <Head>
              <title>GratitudeApp</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
      
            <main className="container mx-auto max-w-prose px-4 pt-12">
          
              {

                user ? (
                  <GratitudeApp user={user} />
                )   : (


                  <div className="bg-white">
                  <Auth supabaseClient = {supabase} socialLayout = "horizontal" socialButtonSize ="xlarge"/>
                  </div>
                )
                  
                          

              }


              

            </main>

         
           </div>
        )

      
     
    }
