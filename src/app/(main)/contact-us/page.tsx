import HeroTemplate from '@/components/Common/HeroTemplate';
import Contact from '@/components/ContactUs/Contact';
import ContactForm from '@/components/ContactUs/ContactForm';

const page = () => {
    return (
        <>
            <HeroTemplate
                pageName='CONTACT US'
                title="Get In Touch With Us"
                description="Tailored Security Solutions for Every Threat and Environment" />
                <Contact />
                <ContactForm />
           

        </>
    )
}

export default page