import React from 'react'
import HeroSection from './HeroSection'
import Community from './Community'
import Process from './Process'
import Contact from '../../components/Contact/Contact'

const stepsdata = [
    {
        title:'Initial Consultation:',
        subtitle:"Assess your company's staffing needs and specific role requirements. Define the qualifications, skills, and experience necessary for the positions.",
    },
    {
        title:'Talent Pool Selection:',
        subtitle:'Access our extensive pool of pre-screened and qualified candidates. Match candidates to your specific needs, ensuring a perfect fit.',
    },
    {
        title:'Interview and Selection:',
        subtitle:'Arrange interviews between your team and selected candidates.Provide detailed feedback and support throughout the selection process.',
    },
    {
        title:'Deployment and Management:',
        subtitle:'Handle the onboarding process for contract employees. Manage payroll, compliance, and other administrative tasks to ensure seamless integration.',
    }
]
function Contract() {
  return (
    <div>
        <HeroSection title='Contract Staffing Services' subtitle='Building an agile and flexible workforce requires quick and easy access to expert talent available on short notice. Be Practical offers a pool of pre-screened talent, hired on our rolls, for middle and senior-level positions. Our Contract Staffing Services provide organizations the flexibility to scale their workforce based on demand and onboard niche skills for short-term projects at competitive costs.'/>

        <Community community="We understand the need for flexibility and expertise in today's dynamic business environment. Our contract staffing solutions are designed to help you quickly adapt to changing demands, ensuring that you have the right talent when you need it." />
        <Process data={stepsdata}/>
        <Contact/>
    </div>
  )
}

export default Contract