import styles from './btn.module.css'

function Btn({ children, action }) {
  return (
    <>
      <button className={styles.btn} onClick={action}>
        {children}
      </button>
    </>
  )
}

export default Btn
