import Image from 'next/image'
import styles from './artwork.module.css'

// Basic Component
export default function Artwork(props: any) {
  return (
    <div className="art">

      <h1>{props.flamingo}</h1>
      <p>{props.paragraph}</p>
      <Image width={100} placeholder="blur" alt="artimagesbroken"  src={props.artwork}/>
    </div>
  )
}
