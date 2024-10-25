import about from "@/assets/images/about.png"
import ContentAndImageSection from '../Common/ContentAndImageSection'

const About = () => {
    return (
        <ContentAndImageSection
            src={about}
            alt="about"
            heading="About"
            title='We Provide Reliable &  Professional Security'
            desc1='Zora Defence Security Ltd offer a range of services in the Security Sector. Working alongside some of the biggest artist in the music industry, including Carl Cox, and covering festivals such as The Lichfield Proms in the Park 2021.'
            desc2='Zora Defence provide services to a prestige clientele and endeavour to ensure each event  runs as seamlessly as possible whilst providing a high standard of professionalism and care.'
        />
    )
}

export default About