
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdBook } from 'react-icons/md';
import { FaInfoCircle, FaHome, FaUser } from 'react-icons/fa';

// Original Policy Data (unchanged)
const originalPolicy = {
  title: "Privacy Policy of Painters' Diary (Original)",
  content: [
    // ... (same as provided earlier, omitted for brevity)
    {
        section: "1. Introduction and General Provisions",
        text: `Welcome to Painters' Diary ("Company," "we," "our," or "us"). This Privacy Policy ("Policy") is meticulously crafted to provide an extensive, comprehensive, and exhaustive delineation of how we collect, use, retain, disclose, and otherwise process personal data (as defined below). This Policy applies to all users ("User," "you," or "your") accessing or utilizing any and all services, functionalities, or otherwise engaging in any interaction with our platform, website, or other related digital or physical assets (collectively referred to as "Services"). By accessing, using, or engaging with our Services in any manner, you unequivocally consent to the collection, use, disclosure, and processing of your information as delineated in this Policy. If you do not agree with any portion of this Policy, you are hereby advised to discontinue the use of our Services immediately and without delay.`,
      },
      {
        section: "2. Definitions and Interpretations",
        text: `2.1 "Personal Data" refers to any information that relates to an identified or identifiable natural person, including but not limited to, names, email addresses, device identifiers, IP addresses, behavioral data, preferences, and other associated metadata. 2.2 "Processing" shall mean any operation or set of operations performed on Personal Data, whether by automated means or otherwise, such as collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure by transmission, dissemination, alignment, restriction, erasure, or destruction. 2.3 "Third-Party Services" refers to any external entities, including but not limited to, advertising networks, analytics providers, technology partners, and service providers. 2.4 "Cookies and Tracking Technologies" encompasses any mechanism, including but not limited to, browser cookies, tracking pixels, web beacons, local storage objects, and similar technological means used to track, store, and collect user data.`,
      },
      {
        section: "3. Data Collection and Usage",
        text: `3.1 We may collect, use, store, and analyze the following categories of Personal Data: (a) Identification Information: Includes but is not limited to, name, email address, phone number, mailing address, and social media handles. (b) Behavioral and Usage Data: Includes but is not limited to, browsing history, engagement patterns, interaction data, preferences, and digital footprint analysis. (c) Device and Technical Data: Includes but is not limited to, IP addresses, browser types, device identifiers, system configurations, and network-related metadata. (d) Marketing and Advertising Data: Includes but is not limited to, advertisement interactions, preferences, engagement analytics, and campaign efficacy data. 3.2 We shall utilize Personal Data for the following lawful purposes: (a) Providing and Enhancing Services – To facilitate and optimize user experience. (b) Marketing and Advertising – To deliver targeted advertisements and promotional content. (c) Analytics and Research – To analyze trends, monitor engagement, and conduct platform improvements. (d) Compliance and Legal Obligations – To adhere to regulatory, legal, and contractual obligations.`,
      },
      {
        section: "4. Data Retention Policy",
        text: `4.1 Personal Data collected shall be retained for as long as necessary to fulfill the purposes outlined in this Policy unless a longer retention period is required or permitted by law. 4.2 Users may request the deletion of their data; however, some data may be retained for compliance and legitimate business interests.`,
      },
      {
        section: "5. Third-Party Services and Data Sharing",
        text: `5.1 We may share Personal Data with select Third-Party Services strictly for advertising, analytics, and platform optimization purposes. However, we do not and shall not sell Personal Data under any circumstances. 5.2 Third-Party Services may collect and process data in accordance with their own privacy policies, which users are encouraged to review independently.`,
      },
      {
        section: "6. Cookies and Tracking Mechanisms",
        text: `6.1 We employ Cookies and Tracking Technologies to enhance functionality, track engagement, and facilitate advertising efforts. 6.2 Users may opt out of certain cookies via browser settings, but functionality may be impacted.`,
      },
      {
        section: "7. User Rights and Opt-Out Mechanisms",
        text: `7.1 Users may have rights under applicable privacy laws, including but not limited to: (a) The right to access and review their Personal Data. (b) The right to request correction or deletion of inaccurate data. (c) The right to restrict or object to data processing in certain circumstances. (d) The right to opt out of certain data processing activities, including marketing communications.`,
      },
      {
        section: "8. Legal Compliance and Jurisdiction",
        text: `8.1 This Policy shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to conflict of law principles. 8.2 Any disputes arising out of this Policy shall be resolved through arbitration or the competent courts within the applicable jurisdiction.`,
      },
      {
        section: "9. Amendments and Policy Updates",
        text: `9.1 We reserve the right to update, modify, or amend this Policy at any time, without prior notice, to reflect changes in business practices, regulatory requirements, or other operational considerations. 9.2 Users shall be notified of any material changes via [email notification/website announcement], and continued use of the Services constitutes acceptance of the revised Policy.`,
      },
      {
        section: "10. Contact Information",
        text: `For any questions, concerns, or inquiries related to this Privacy Policy, users may contact us at: Email: [Insert Email] Mailing Address: [Insert Address] By continuing to use our Services, you acknowledge that you have read, understood, and agreed to the terms outlined in this Privacy Policy.`,
      },
  ],
};

// Extended Policy Data (unchanged)
const extendedPolicy = {
  title: "Privacy Policy of Painters' Diary (Extended Version)",
  content: [
    // ... (same as provided earlier, omitted for brevity)
    {
        section: "1. Introduction and General Provisions",
        text: `Welcome to Painters' Diary ("Company," "we," "our," or "us"), a meticulously designed platform dedicated to providing an array of services that may or may not appeal to every individual who happens upon it. This Privacy Policy ("Policy") has been painstakingly and exhaustively crafted to serve as an extraordinarily comprehensive, excessively descriptive, and undeniably thorough explanation of every conceivable way in which we collect, use, retain, disclose, transfer, process, manipulate, or otherwise interact with personal data (as defined in exhaustive detail below). This Policy applies without exception to all individuals ("User," "you," or "your") who, whether intentionally or inadvertently, access, browse, utilize, engage with, or otherwise come into contact with any and all services, functionalities, features, tools, interfaces, or other related digital, virtual, or physical assets (collectively referred to as "Services") that we, in our sole discretion, choose to provide. By accessing, browsing, utilizing, interacting with, or engaging with our Services in any manner—whether through a single click, an extended session, or even a fleeting glance—you unequivocally, irrevocably, and without reservation consent to the collection, use, disclosure, retention, processing, and any other conceivable handling of your information as outlined in the voluminous text that follows. Should you find any portion, clause, sentence, phrase, or individual word of this Policy disagreeable, objectionable, or otherwise unpalatable, you are hereby formally and explicitly advised to cease all use of our Services immediately, without delay, hesitation, or further contemplation, and to refrain from any future interaction with said Services unless and until such disagreement is resolved to your satisfaction, which we are under no obligation to facilitate.`,
      },
      {
        section: "2. Definitions and Interpretations",
        text: `For the avoidance of doubt, confusion, or misinterpretation, the following terms, phrases, and expressions shall have the meanings ascribed to them herein, and these meanings shall be applied consistently throughout this Policy unless explicitly stated otherwise in a manner that is equally verbose and unambiguous: 2.1 "Personal Data" refers to any piece, fragment, or collection of information, whether digital, analog, or otherwise, that relates to, identifies, or could reasonably be used to identify a natural person, living or otherwise engaged in activities that produce data, including but not limited to full legal names, aliases, pseudonyms, email addresses, telephone numbers (mobile or landline), physical mailing addresses, device identifiers, IP addresses, behavioral data, browsing habits, personal preferences, dislikes, inclinations, tendencies, and any other associated metadata that might conceivably be linked to an individual through means either currently known or yet to be invented. 2.2 "Processing" shall encompass any operation, action, procedure, or set of operations—whether performed manually, automatically, semi-automatically, or through any other method yet to be devised—that is executed upon Personal Data, including but not limited to the collection, gathering, recording, logging, organization, categorization, structuring, formatting, storage, archiving, adaptation, modification, retrieval, extraction, consultation, review, use, application, disclosure by transmission, dissemination, sharing, alignment, combination, restriction, limitation, erasure, deletion, destruction, or any other conceivable manipulation of said data, whether temporary or permanent in nature. 2.3 "Third-Party Services" refers to any external entities, organizations, corporations, partnerships, individuals, or other third parties, including but not limited to advertising networks, marketing agencies, analytics providers, data processors, technology partners, software vendors, cloud service providers, and any other service providers with whom we may, at our discretion, choose to collaborate, contract, or otherwise engage for purposes related to the operation, enhancement, or promotion of our Services. 2.4 "Cookies and Tracking Technologies" encompasses any and all mechanisms, tools, scripts, codes, or technological contrivances, including but not limited to browser cookies, session cookies, persistent cookies, tracking pixels, web beacons, local storage objects, session storage objects, embedded scripts, fingerprinting techniques, and any similar or dissimilar technological means used to track, monitor, store, collect, or otherwise harvest user data for purposes that may or may not be immediately apparent to the user at the time of collection.`,
      },
      {
        section: "3. Data Collection and Usage",
        text: `3.1 We may, at our sole discretion and without prior notice, collect, harvest, compile, store, analyze, and otherwise process the following categories of Personal Data, each of which is described in excruciating detail for the sake of absolute clarity: (a) Identification Information: This includes, but is by no means limited to, your full legal name, preferred name, nickname, username, email address (personal, professional, or otherwise), telephone number (including area code and country code), physical mailing address (including street name, city, state, postal code, and country), social media handles, account IDs, and any other identifier that could conceivably be used to contact or locate you in the physical or digital realm. (b) Behavioral and Usage Data: This includes, but is not restricted to, your browsing history across our Services and potentially beyond, engagement patterns (such as time spent on specific pages), interaction data (such as clicks, scrolls, hovers, and keystrokes), preferences (explicitly stated or inferred), dislikes, tendencies, habits, digital footprint analysis, and any other metric that might indicate how you interact with our Services or similar platforms. (c) Device and Technical Data: This includes, but is not confined to, your IP address (static or dynamic), browser type and version, operating system type and version, device identifiers (such as UUIDs or MAC addresses), hardware specifications, system configurations, screen resolution, language settings, time zone settings, network-related metadata (such as ISP details), and any other technical characteristic that might be gleaned from your interaction with our Services. (d) Marketing and Advertising Data: This includes, but is not limited to, your interactions with advertisements (clicks, views, or dismissals), preferences for certain types of content or products, engagement analytics (such as conversion rates), campaign efficacy data, responses to surveys or polls, and any other information that might assist us in tailoring promotional efforts to your perceived interests. 3.2 We shall utilize, leverage, exploit, and otherwise process Personal Data for the following lawful, legitimate, and exhaustively enumerated purposes: (a) Providing and Enhancing Services – To facilitate the delivery of our Services in a manner that is functional, operational, and potentially enjoyable, while also optimizing, refining, and improving the user experience through iterative updates and enhancements that may or may not be noticeable to you. (b) Marketing and Advertising – To deliver, present, or otherwise impose upon you targeted advertisements, promotional content, newsletters, offers, or other marketing materials that we believe might, based on our analysis, align with your interests, habits, or demographic profile. (c) Analytics and Research – To analyze trends, patterns, and anomalies; monitor engagement metrics; assess user behavior; evaluate platform performance; and conduct research or development activities aimed at improving, expanding, or otherwise altering our Services in ways that may or may not benefit you directly. (d) Compliance and Legal Obligations – To adhere to, satisfy, or otherwise comply with any and all regulatory requirements, legal mandates, judicial orders, contractual commitments, or other obligations imposed upon us by authorities, partners, or circumstances beyond our immediate control.`,
      },
      {
        section: "4. Data Retention Policy",
        text: `4.1 Personal Data collected pursuant to this Policy shall be retained, stored, archived, or otherwise maintained for as long as we deem necessary to fulfill the purposes outlined herein, unless a longer retention period is explicitly required, implicitly suggested, or otherwise permitted by applicable laws, regulations, statutes, or judicial directives that may apply in any jurisdiction where our Services are accessed or our data is stored. 4.2 Users may, at their discretion, submit a formal request for the deletion, erasure, or removal of their Personal Data; however, we reserve the right to retain certain portions of said data for an indeterminate period if such retention is deemed necessary for compliance with legal obligations, resolution of disputes, enforcement of agreements, or pursuit of legitimate business interests as determined solely by us.`,
      },
      {
        section: "5. Third-Party Services and Data Sharing",
        text: `5.1 We may, from time to time and at our sole discretion, share, transfer, disclose, or otherwise provide access to Personal Data with select Third-Party Services for the express and limited purposes of facilitating advertising campaigns, conducting analytics, optimizing platform performance, or achieving other operational objectives that we deem appropriate. However, we solemnly declare and affirm that we do not and shall not sell, trade, barter, or otherwise exchange Personal Data for monetary gain or equivalent consideration under any circumstances whatsoever. 5.2 Third-Party Services with whom we share data may collect, process, store, or otherwise handle said data in accordance with their own privacy policies, terms of service, or operational guidelines, which may differ significantly from ours, and we strongly encourage—though do not require—you to review those policies independently and at your own expense of time and effort.`,
      },
      {
        section: "6. Cookies and Tracking Mechanisms",
        text: `6.1 We employ, deploy, and otherwise utilize Cookies and Tracking Technologies in a manner that is both pervasive and persistent to enhance functionality, track user engagement, monitor behavior, facilitate advertising efforts, and achieve other purposes that may or may not be explicitly disclosed herein. 6.2 Users may, if they so choose, opt out of certain cookies or tracking mechanisms by adjusting their browser settings, device preferences, or other technical configurations; however, such actions may result in diminished functionality, degraded performance, or complete inaccessibility of certain features of our Services, for which we accept no liability or responsibility.`,
      },
      {
        section: "7. User Rights and Opt-Out Mechanisms",
        text: `7.1 Depending on the jurisdiction in which you reside, access our Services, or otherwise generate Personal Data, you may be entitled to certain rights under applicable privacy laws, regulations, or directives, including but not limited to: (a) The right to access, review, inspect, or obtain a copy of your Personal Data in our possession, subject to verification of your identity and payment of any applicable fees. (b) The right to request correction, amendment, or updating of inaccurate, incomplete, or outdated Personal Data, provided such requests are reasonable and substantiated. (c) The right to restrict, limit, or object to certain types of data processing activities in specific circumstances, as permitted by law and subject to our discretion. (d) The right to opt out of certain data processing activities, such as receipt of marketing communications, by following the excessively detailed instructions provided in such communications or elsewhere on our platform.`,
      },
      {
        section: "8. Legal Compliance and Jurisdiction",
        text: `8.1 This Policy, in its entirety and without exception, shall be governed by, interpreted under, and construed in accordance with the laws of [Insert Jurisdiction], without regard to any conflict of law principles, precedents, or doctrines that might otherwise apply in a different jurisdiction. 8.2 Any disputes, disagreements, controversies, or claims arising out of or relating to this Policy shall be resolved exclusively through binding arbitration conducted by a neutral third party or, if arbitration is deemed inapplicable, through the competent courts located within the geographic boundaries of the aforementioned jurisdiction, at our sole election.`,
      },
      {
        section: "9. Amendments and Policy Updates",
        text: `9.1 We reserve the unilateral, unrestricted, and absolute right to update, modify, revise, amend, supplement, or otherwise alter this Policy at any time, with or without prior notice, to reflect changes in our business practices, operational procedures, technological capabilities, regulatory requirements, or any other considerations that we deem relevant in our unfettered discretion. 9.2 Users shall be notified of material changes to this Policy via [email notification/website announcement/other burdensome method], and continued use of our Services following such notification—or lack thereof—shall constitute your full, knowing, and irrevocable acceptance of the revised Policy in all its tedious glory.`,
      },
      {
        section: "10. Contact Information",
        text: `For any questions, concerns, complaints, inquiries, or other communications related to this Privacy Policy, users may contact us at: Email: [Insert Email] Mailing Address: [Insert Address] We make no guarantee of a timely response, though we shall endeavor to address your correspondence at our convenience. By continuing to use our Services in any capacity whatsoever, you acknowledge that you have read, comprehended, digested, and agreed to the excessively detailed terms outlined in this Privacy Policy, whether or not you have actually done so.`,
      },
  ],
};

function Privacy_Policy() {
  const [showExtended, setShowExtended] = useState(false);
  const policy = showExtended ? extendedPolicy : originalPolicy;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 overflow-x-hidden">
      {/* Header */}
             <header className=' h-[80px] w-full bg-black/20 backdrop-blur-md flex items-center justify-between px-4 fixed z-50'>
            <h1 className='lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-Eagle text-[#190909]'>Painters' Diary</h1>
             {/* Navigation */}
             <div className='flex items-center justify-center gap-x-2'>
                     <Link to={"/"}>
                         <button className='lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                             <FaHome className="text-xl sm:hidden" />
                             <span className="hidden sm:inline">Home</span>
                         </button>
                     </Link>
                     <Link to={"/About"}>
                         <button className='lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                             <FaInfoCircle className="text-xl sm:hidden" />
                             <span className="hidden sm:inline">About</span>
                         </button>
                     </Link>
                     <Link to={"/Account"}>
                         <button className='lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                             <FaUser className="text-xl sm:hidden"/>
                             <span className="hidden sm:inline">Account</span>
                         </button>
                     </Link>
                     <Link to={"/Journal"}>
                         <button className='lg:px-4 px-2 py-1 bg-[#a6565d] hover:bg-[#c68a9a] hover:text-[#2d1f23] rounded-md font-Playfair text-white border border-gray-400 text-[18px]'>
                             <MdBook className="text-xl sm:hidden" />
                             <span className="hidden sm:inline">Diary</span>
                         </button>
                     </Link>
                 </div>
            </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center text-rose-800 mb-6">
            {policy.title}
          </h1>
          <button
            onClick={() => setShowExtended(!showExtended)}
            className="block mx-auto mb-8 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium text-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Switch to {showExtended ? "Original" : "Extended"} Version
          </button>
          {policy.content.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold font-Playfair text-gray-700 border-b-2 border-rose-200 pb-2 mb-4">
                {section.section}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-GreatVibes">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </main>

      {/* Footer (Optional) */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Painters' Diary. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Privacy_Policy;