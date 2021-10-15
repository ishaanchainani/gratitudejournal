import Head from 'next/head'
import Greeting from '../components/Greeting'
import Input from "../components/Input";
import { useState } from "react";


export default function Home() {

  const [user, setUser] = useState({
        name: "Ishaan",
        email: "chainani@chapman.edu",
      });
    
      const [gratitudes, setGratitudes] = useState([]);
    
      const [hasSubmittedToday, setHasSubmittedToday] = useState(false);
    
      const addGratitude = (entry) => {
        let newGratitude = [...gratitudes, entry];
        setGratitudes(newGratitude);
        setHasSubmittedToday(true);
      };

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
