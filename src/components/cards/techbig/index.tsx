import Image from 'next/image'
import styles from './techbig.module.css'

type TechBigCardFace = {
  title: string
  imgUrl: string
}

function TechBigCard({ title, imgUrl }: TechBigCardFace) {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.imgcont}>
          <Image
            src={imgUrl}
            alt={`Logo da tecnologia ${title}`}
            layout="responsive"
            width={300}
            height={300}
            quality={100}
          />
          {/* <img src={imgUrl} alt={`Logo da tecnologia ${title}`} /> */}
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </div>
    </>
  )
}

export default TechBigCard
