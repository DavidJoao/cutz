'use client'
import Image from "next/image";
import axios from 'axios'

export default function Home() {
  return (
    <main>
      <button onClick={async (e) => {
        e.preventDefault()
        await axios.post('/api/signup')
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }}>Push</button>
    </main>
  );
}
