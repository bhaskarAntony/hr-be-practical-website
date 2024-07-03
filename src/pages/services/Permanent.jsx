import React from 'react'
import HeroSection from './HeroSection'
import Community from './Community'
import Process from './Process'
import Contact from '../../components/Contact/Contact'

const stepsdata = [
    {
        title:'Initial Consultation:',
        subtitle:"Understand your company's needs and the specific roles you are looking to fill Define the qualifications and experience required for the positions.",
    },
    {
        title:'Candidate Sourcing:',
        subtitle:'Utilize our extensive network and resources to find potential candidates.Screen and pre-qualify candidates to ensure they meet your criteria.',
    },
    {
        title:'Interview and Selection:',
        subtitle:'Coordinate interviews between your team and the candidates.Provide detailed feedback and facilitate the selection process.',
    },
    {
        title:'Offer and Onboarding:',
        subtitle:'Assist with extending offers and negotiating terms.Support the onboarding process to ensure a smooth transition for the new hires.',
    }
]
function Permanent() {
  return (
    <div>
        <HeroSection title='Permanent Staffing Services' subtitle='We provide access to fully screened and qualified candidates in any industry. Our team of passionate recruiters is dedicated to helping your company achieve its business objectives. Our rigorous process ensures that we offer the best candidates at any level, with a quick turnaround time.'/>

        <Community community='Hiring the right talent is a serious commitment. We are here to help you make this commitment to the right people. Our services guarantee that you will find candidates who meet your requirements and fit seamlessly into your organization.' />
        <Process data={stepsdata}/>
        <Contact/>
    </div>
  )
}

export default Permanent