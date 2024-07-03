import React from 'react'
import HeroSection from './HeroSection'
import Community from './Community'
import Process from './Process'
import Contact from '../../components/Contact/Contact'

const stepsdata = [
    {
        title:'Initial Consultation:',
        subtitle:"Understand your company's specific hiring needs and role requirements. Define the qualifications, skills, and experience necessary for the positions.",
    },
    {
        title:'Talent Pool Selection:',
        subtitle:'Utilize our extensive network to source potential candidates. Conduct thorough screenings to ensure candidates meet your criteria.',
    },
    {
        title:'Interview and Selection:',
        subtitle:'Develop training programs tailored to your industry and specific roles. Provide hands-on training and practical experience to candidates.',
    },
    {
        title:'Deployment and Management:',
        subtitle:'Manage the onboarding process for new hires. Ensure candidates are well-integrated into your organization and ready to perform.',
    }
]
function Deploy() {
  return (
    <div>
        <HeroSection title='Hire, Train, and Deploy Services' subtitle='Building an agile and flexible workforce requires quick and easy access to expert talent available on short notice. Be Practical offers a pool of pre-screened talent, hired on our rolls, for middle and senior-level positions. Our Contract Staffing Services provide organizations the flexibility to scale their workforce based on demand and onboard niche skills for short-term projects at competitive costs.'/>

        <Community community="For businesses seeking comprehensive HR solutions, Be Practical is your trusted partner. Our Hire, Train, and Deploy services ensure you get the best talent, equipped with the right skills, ready to contribute from day one. From recruitment to training to deployment, we provide end-to-end solutions tailored to your specific needs. Discover how Be Practical can help you build a skilled and dynamic workforce." />
        <Process data={stepsdata}/>
        <Contact/>
    </div>
  )
}

export default Deploy;