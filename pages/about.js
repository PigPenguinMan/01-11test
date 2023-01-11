import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const About = ()=>{
    const [input,setInput] = useState();
    return(
        <div className={styles.main }>
            <h1>about페이지 입니다</h1>
            아래 input에 값을 넣으면 값이 바뀝니다 <br/>
            :{input}
            <input type="text" onChange={(e)=>setInput(e.target.value)}></input>
            <Link href="/">Main으로 이동</Link>
        </div>
        
    )
}
export default About;