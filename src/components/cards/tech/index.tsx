import Image from 'next/image'
import styles from './tech.module.css'

type TechCardFace = {
  title: string
  imgUrl: string
}

function TechCard({ title, imgUrl }: TechCardFace) {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.imgcont}>
          <Image
            src={imgUrl}
            alt={`Logo da tecnologia ${title}`}
            layout="responsive"
            width={200}
            height={200}
            quality={100}
          />
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </div>
    </>
  )
}

export default TechCard
