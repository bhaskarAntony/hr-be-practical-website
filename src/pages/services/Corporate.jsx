import React from 'react'
import HeroSection from './HeroSection'
import Community from './Community'
import Process from './Process'
import Contact from '../../components/Contact/Contact'

const stepsdata = [
    {
        title:'Needs Assessment:',
        subtitle:"Conduct a thorough assessment of your organization's training needs. Identify skill gaps and areas for improvement.",
    },
    {
        title:'Program Design:',
        subtitle:'Develop customized training programs based on your specific requirements.Incorporate industry best practices and the latest trends.',
    },
    {
        title:'Training Delivery:',
        subtitle:'Provide engaging and interactive training sessions.Utilize a mix of instructional methods to suit different learning styles.',
    },
    {
        title:'Evaluation and Follow-up:',
        subtitle:'Assess the effectiveness of the training programs. Provide ongoing support and follow-up sessions to reinforce learning.',
    }
]
function Corporate() {
  return (
    <div>
        <HeroSection title='Corporate Training Services' subtitle="In today's fast-paced business environment, continuous learning and development are essential for maintaining a competitive edge. Be Practical offers comprehensive Corporate Training Services designed to enhance your team's skills and drive organizational success. Our tailored training programs address the unique needs of your business, ensuring your employees are equipped with the latest knowledge and best practices."/>

        <Community community="For businesses seeking comprehensive HR solutions, Be Practical is your trusted partner. Our Hire, Train, and Deploy services ensure you get the best talent, equipped with the right skills, ready to contribute from day one. From recruitment to training to deployment, we provide end-to-end solutions tailored to your specific needs. Discover how Be Practical can help you build a skilled and dynamic workforce." />
        <Process data={stepsdata}/>
        <Contact/>
    </div>
  )
}

export default Corporate;