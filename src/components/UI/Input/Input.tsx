import styles from './Input.module.scss'

interface IProps {
  className: string
}

function Input({ className }: IProps) {
  return <input className={styles.input + " " + className} />
}

export default Input
