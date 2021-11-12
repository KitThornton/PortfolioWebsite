import {SectionButtonGroup} from '../components/SectionButtonGroup/SectionButtonGroup'
import './Home.css'

export const Home = () => {
    return (
        <div className="content-body">
            <h1>
                Hi, I'm Kit.
            </h1>
            <br/>
            I'm a junior full stack software engineer from the UK.
            <br/>
            <br/>
            I've spent the last two and a half years working as a professional web developer and I am
            currently working remotely out of Warwickshire. I love all things web development and am
            always working on new projects. I absolutely love learning new things and taking on new
            challenges.
            <br/>
            <br/>
            Check out my tech stack, experience and projects below:
            <SectionButtonGroup/>
            <br/>
            <h2>
                About Me:
            </h2>
            <div>
                I love everything outdoors and I often spend my time away from software development
                hiking, climbing or running in the mountains across Europe. I've recently relocated
                from Brno, Czech Republic where I worked full-time as full-stack developer and have been
                working as a freelance developer since June. I'm currently open to full-time positions.
            </div>
        </div>
    )
}