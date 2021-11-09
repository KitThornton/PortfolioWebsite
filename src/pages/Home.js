import './Home.css'
import {SectionButtonGroup} from '../components/SectionButtonGroup/SectionButtonGroup'

export const Home = () => {
    return (
        <div className="content-box">
            {/*<h1 className="pt-3">HOME</h1>*/}
            <div className="content-body">
                Hi, I'm Kit
                <br/>
                <br/>
                I'm a junior full stack software engineer from the UK.
                <br />
                <br />
                I've spent the last two and a half years working as a professional web developer and I am
                currently working remotely out of Warwickshire. I love all things web development and am
                always working on new projects.
                {/*I also love everything outdoors from climbing to hiking.*/}
                {/*<br />*/}
                {/*<br />*/}
                {/*I enjoy working on the front-end, back-end, database and DevOps.*/}
                <br />
                <br />
                Check out my tech stack, experience and projects below:
                <SectionButtonGroup />
            </div>
        </div>
    )
}