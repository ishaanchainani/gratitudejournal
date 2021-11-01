import Head from 'next/head'
import Greeting from '../components/Greeting'
import History from '../components/History'
import { useEffect, useState } from 'react'
import Input from "../components/Input";
import { supabase } from "../utils/supabaseClient"


export default function GratitudeApp({user}) {

  
      
      const [gratitudes, setGratitudes] = useState([]);
      const [hasSubmittedToday, setHasSubmittedToday] = useState(false);




    useEffect ( ()  => {
        fetchGratitudes()
    }, [])


    //write fetch function

    const fetchGratitudes = async() => {

        let {data: gratitudes, error } = await supabase
        .from ('gratitudes')
        .select('entry, date_insert_ts')

        if (!error) {
            setGratitudes(gratitudes)
        }else{
            console.log(error)
        }
    }


    const addGratitude = async (entry) => {
        const { data, error } = await supabase
        .from('gratitudes')
        .insert([
            { id: user.id, entry: entry },
        ])

    
    if (error) { console.log(error)}
    else{
        setGratitudes([...gratitudes, {'entry': entry, 'date_insert_ts': null }])
    }

    
    }
    return (
          <div className="bg-gray-700 min-h-screen min-w-screen">
            <Head>
              <title>Hello</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
      
            <main className="flex flex-col p-1 items-center">
              <Greeting
                color="text-pink-800"
                user={user}
                gratitudes={gratitudes}
                hasSubmittedToday={hasSubmittedToday}
              ></Greeting>
              {!hasSubmittedToday && <Input handleSubmit={addGratitude}></Input>}
      
              {gratitudes.length > 0 && (
                <History
                  className="p-3"
                  gratitudes={gratitudes}
                 
                ></History>
              )}
            </main>
          </div>
        );
}
