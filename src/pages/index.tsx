import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChalengeBox } from "../components/ChalengeBox";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>


       <ExperienceBar />

       <section>
         <div>
           <Profile />
           <CompletedChallenges />
           <Countdown />
         </div>
         <div>
          <ChalengeBox/>
         </div>
       </section>
    </div>
  )
}