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
          <img src={imgUrl} alt={`Logo da tecnologia ${title}`} />
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </div>
    </>
  )
}

export default TechCard
