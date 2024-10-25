import React from 'react'
import about from "@/assets/images/about.png"
import ContentAndImageSection from '@/components/Common/ContentAndImageSection'
import HeroTemplate from '@/components/Common/HeroTemplate'
import ContactUs from '@/components/Homepage/ContactUs'

const page = () => {
    return (<>

        <HeroTemplate
            pageName='SERVICES'
            title="Your Safety, Our Expertise"
            description="Tailored Security Solutions for Every Threat and Environment" />

        <ContentAndImageSection
            src={about}
            alt="about"
            heading=""
            title='Close Protection Services'
            desc1="Zora's Close Protection Service ensures the safety and security of individuals exposed to elevated risks due to their status, profession, or personal circumstances. Whether for executives, celebrities, diplomats, or private individuals, our team provides:"
            desc2='With Zora, you can navigate life confidently, knowing that your safety is in expert hands.'
            list={[
                'Risk Assessments to identify potential threats.',
                'Travel Security for seamless and safe movement.',
                'Discreet Protection for personal and professional events.',
                '24/7 Surveillance & Response to handle emergencies.'
            ]}
        />
        <ContentAndImageSection
            src={about}
            alt="about"
            heading=""
            title='Static & Manned Guarding'
            desc1='Zora’s Static & Manned Guarding services provide a reliable, on-site presence to ensure continuous safety and protection. Whether at offices, retail spaces, residential complexes, or industrial sites, our security personnel are trained to manage access, monitor activities, and prevent unauthorized intrusions. They offer more than just vigilance—they act as a reassuring presence, maintaining order while blending professionalism with approachability'
            desc2='Our guards operate round the clock, ensuring seamless security through well-coordinated shifts and detailed site assessments. With the ability to respond swiftly to incidents, our team ensures prompt action and clear communication, giving you peace of mind.'
            isreversible={true}
        />
            <ContentAndImageSection
            src={about}
            alt="about"
            heading=""
            title='Venue Security'
            desc1="Zora’s Venue Security services are designed to ensure the smooth and safe operation of events of any scale, from private gatherings to large public functions. Our team works closely with organizers to develop comprehensive security plans tailored to the unique needs of each venue and event. With a focus on proactive threat detection and crowd management, we provide a discreet yet visible presence that fosters a secure environment for guests and staff."
            desc2='Our highly trained personnel manage access points, monitor crowd behavior, and ensure compliance with safety regulations, allowing events to proceed without disruption. In case of emergencies, our security team is prepared to respond swiftly, minimizing risks and ensuring the safety of everyone involved. With Zora overseeing security operations, event organizers can focus on delivering exceptional experiences while we handle every aspect of safety and protection.'
        />
       
   <ContentAndImageSection
            src={about}
            alt="about"
            heading=""
            title='Event Security'
            desc1='Zora’s Event Security services are designed to ensure the safety and success of any event, from private celebrations to large-scale public gatherings. Our experienced security personnel collaborate with organizers to develop a tailored security strategy, covering everything from entry control to emergency response.'
            desc2='We provide a visible yet discreet presence, managing access points to prevent unauthorized entry and ensuring smooth crowd movement throughout the venue. Our team is trained to identify and address potential risks proactively, maintaining a secure environment without disrupting the flow of the event.'
            isreversible={true}

        />
           <ContentAndImageSection
            src={about}
            alt="about"
            heading=""
            title='Private Investigations & Surveillance Services'
            desc1='Zora’s Private Investigations & Surveillance Services offer discreet and thorough investigative solutions for individuals, businesses, and legal entities. Whether uncovering fraud, conducting background checks, or gathering evidence for legal proceedings, our experienced investigators use advanced surveillance techniques to provide accurate and actionable insights.'
            desc2='We specialize in discreet monitoring and data collection to address personal, corporate, or legal concerns. Our services include tracking suspicious activities, identifying risks, and verifying facts, all while adhering to strict confidentiality and legal standards.'
        />
           <ContentAndImageSection
            src={about}
            alt="about"
            heading="About"
            title='We Provide Reliable &  Professional Security'
            desc1='Zora’s De-bugging & Sweeping Services ensure your privacy is protected from unwanted surveillance and unauthorized eavesdropping. Our experienced technicians conduct comprehensive electronic sweeps of homes, offices, and vehicles to detect and remove hidden devices, including covert cameras, audio bugs, and GPS trackers.'
            desc2='Using advanced detection equipment and thorough physical inspections, we identify vulnerabilities that could compromise your privacy or sensitive information. Whether it’s for personal security, corporate protection, or legal matters, we guarantee a discreet and efficient service that safeguards you from potential threats.'
            isreversible={true}

        />

        <ContactUs />
    </>
    )
}

export default page