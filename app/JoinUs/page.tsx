"use client";
import TitlePhoto from "@/app/_components/TitlePhoto";
import Button from "../_components/Button";
import { Accordion } from 'flowbite-react';


const titlePhoto = "/TitlePhotos/JoinUs.JPG";
const titleText = "Join Us";
export default function Home() {
    return (
        <>
            <TitlePhoto image={titlePhoto} title={titleText}/>
            <div className={"w-full lg:px-40 md:px-20 px-10 md:py-10 py-5 "}>
                <h1 className={"lg:text-4xl md:text-2xl text-xl font-bold text-wrap"}>
                    Join the University of Michigan Electric Boat Team!
                </h1>
                <div className={"lg:text-xl md:text-lg leading-loose space-y-8 pt-5"}>
                    <p>
                        We are so excited you are interested in learning more about UMEB!!!
                    </p>
                    <p>
                        On this page, you can see our recruiting timeline for this year, along with all of the dates, times, and locations of our upcoming events. We have also included some FAQs and other relevant information to guide you through the process.
                    </p>
                    <p>
                        Our weekly general team meeting times are on Sundays at 3pm EST in the Wilson Center. The Business sub team also has additional meetings on Tuesday in the Ross School of Business from 7:00pm - 8:00pm EST.
                    </p>
                    <p>
                        We would love for you to join us on our journey. If you have any questions or concerns, please feel free to contact our leadership team at electricboat@umich.edu, and we will get back to you within 24hrs. We would also encourage you to fill out our interest form (listed below) to join our team’s mailing list.
                    </p>
                    <p>
                        We look forward to meeting you throughout all the recruiting events this year.
                    </p>
                    <p>
                        Welcome aboard!
                    </p>
                    <p>
                        - UMEB Leadership Team
                    </p>
                </div>
            </div>
            <div className={"flex flex-col md:flex-row lg:px-40 md:px-20 px-10 justify-center md:justify-start md:space-x-5 md:space-y-0 space-y-5"}>
                <Button width={64} text={"UMEB Interest Form"} href={"https://docs.google.com/forms/d/e/1FAIpQLSdlYc0uE3t4VL1oN0bOLTmU50hYsu0Wrx2NwrZoxQoO5XSXlA/viewform?usp=sf_link"}></Button>
                <Button width={64} text={"Google Calendar"} href={"https://calendar.google.com/calendar/u/1?cid=Y185NWVxamJvazYybmlrbGN0YzNiNmowcnRmc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t "}></Button>
            </div>
            <div className={"py-20 lg:px-40 md:px-20 px-10"}>
                <h1 className={"md:text-4xl text-2xl font-bold py-5"}>
                    FAQs
                </h1>
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title> Do I need to be an Engineer to Join?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                No! We welcome students from any and all majors.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>How much time am I expected to dedicate to my project each semester?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                UMEB provides a large amount of flexibility on a weekly basis. We ask that you at least attend our weekly one hour general meetings as well as a subteam meeting during the week, but you can contribute as little or as much as you want beyond that.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Do I have to attend all UMEB meetings</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                While you are not required to attend every meeting, it is important to not miss them frequently. Meetings are a chance to be updated on what different sub teams are working on as well as catch up with club members.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Can I be on more than one Sub team and can I join another project team?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Of course! As a student organization, we prioritize member education and growth first. You may work with as many sub teams as you choose. We also have no qualms about members joining other project teams.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>
    )
}