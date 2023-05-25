import styles from '../helpers/index.styles.module.css'
import React from 'react'

export default function Home(props: any) {
  const [count, setCount] = React.useState(0)
  return <div className={styles.grid}>From next</div>
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  }
}
