import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'

export default function MemeGenerator() {
  const [field, setField] = useState('')
  const [meme, setMeme] = useState<{id: number, name: string, url: string }>({ id:0, name: '', url: ''})
  const [memes, setMemes] = useState<{id: number, name: string, url: string }[]>([])
  const [loading, setLoading] = useState(true)

  const handleChange = (e: any) => {
    setField(e.target.value)
  }

  const handleClick = () => {
    const rand = Math.floor(Math.random() * memes.length)
    setMeme(memes[rand])
  }
  useEffect(()=> {
    axios.get('https://api.imgflip.com/get_memes')
    .then((res) => {
      const rand = Math.floor(Math.random() * res.data.data.memes.length)
      setMeme(res.data.data.memes[rand])
      setMemes(res.data.data.memes)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
    })
 }, [])
  return (
    <div className="meme">
      <input name="meme" value={field} onChange={handleChange} />
      <Button onClick={handleClick}>Generate Meme</Button>
      { !loading && <img className="pic" src={meme.url} alt="image" /> } 
      <label>{meme.name}.  {field }</label>
    </div>
  )
}
