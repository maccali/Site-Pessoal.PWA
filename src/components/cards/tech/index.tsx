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
            width={130}
            height={130}
            quality={80}
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
