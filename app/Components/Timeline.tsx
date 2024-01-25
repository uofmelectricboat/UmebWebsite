'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

const CustomTimeline: React.FC = () => {
    return (
        <div className={"w-full py-20 md:px-40 px-10"}>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>September 2019</Timeline.Time>
                        <Timeline.Title>Founding</Timeline.Title>
                        <Timeline.Body>
                            The team is founded as Michigan Solar Sea by the first Captain, Deven Parmar.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>September 2019</Timeline.Time>
                        <Timeline.Title>Proteus</Timeline.Title>
                        <Timeline.Body>
                            Proteus was the team’s first craft designed and made to compete at Promoting Electric Propulsion. The repurposed Nacra 17 sailing hull was powered by a singular 8 kWh battery and a DHX Hawk 40.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>Spring 2019</Timeline.Time>
                        <Timeline.Title>COVID-19</Timeline.Title>
                        <Timeline.Body>
                            COVID restrictions begin at the University and severely slows progress and pace of development
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>Febuary 2021</Timeline.Time>
                        <Timeline.Body>
                            The team receives a Nacra 17 sailing catamaran hull, which becomes the foundation of the team for years to come.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>May 2021</Timeline.Time>
                        <Timeline.Title>First on water test</Timeline.Title>
                        <Timeline.Body>
                            First on-water tests are conducted at Ford Lake in Ypsilanti, Michigan.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>July 2021</Timeline.Time>
                        <Timeline.Title>Promoting Electric Propulsion Competition</Timeline.Title>
                        <Timeline.Body>
                            Proteus places 2nd at the team’s first ever race in the Promoting Electric Propulsion competition.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>Fall 2021</Timeline.Time>
                        <Timeline.Title>Snowfinkle</Timeline.Title>
                        <Timeline.Body>
                            Per the goals of the team’s founding, Snowfinkle was a next generation racing craft utilizing hydrofoil technology to achieve flight on the water. She was powered by two 6 kWh battery packs and two DHX Peregrine 60 motors.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>August 2021</Timeline.Time>
                        <Timeline.Body>
                            Early stage design for Snowfinkle begins immediately after Proteus’ successful race in Baltimore.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>September 2021</Timeline.Time>
                        <Timeline.Body>
                            The team officially becomes University of Michigan Electric Boat.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>October 2021</Timeline.Time>
                        <Timeline.Body>
                            The team moves into the newly allocated workspace in the Wilson Center, marking the first footprint indoors for the team to work in.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>December 2021</Timeline.Time>
                        <Timeline.Body>
                            Design slows as manufacturing efforts begin.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>March 2022</Timeline.Time>
                        <Timeline.Body>
                            Aluminum extruded hydrofoils arrive at our workspace in the Wilson Center.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>April 2022</Timeline.Time>
                        <Timeline.Body>
                            Thanks to PALM Industries, the team is able to manufacture and assemble transmission components and hydrofoil mounting assemblies.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>May 2022</Timeline.Time>
                        <Timeline.Body>
                            As our top sponsor, PALM Industries names our 2022 craft “Snowfinkle”.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>May 2022</Timeline.Time>
                        <Timeline.Body>
                            UM Electric Boat attends Promoting Electric Propulsion in Pohick Bay, Virginia to showcase Snowfinkle with her hydrofoiling technology.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>October 2022</Timeline.Time>
                        <Timeline.Body>
                            Cadence Design Systems highlights the work UM Electric Boat has done with the help of Cadence’s simulation software in a Designed with Cadence short film.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>January 2023</Timeline.Time>
                        <Timeline.Body>
                            The mechanical team begins fabrication of a new trailer with extension capabilities to aid the launch and retrieval of the foiling craft.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>Febuary 2023</Timeline.Time>
                        <Timeline.Body>
                            The team showcases Snowfinkle at the Lansing Boat Show, networking with the local marine industry.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>March 2023</Timeline.Time>
                        <Timeline.Body>
                            The trailer manufacturing is completed and testing is successfully conducted at Ford Lake.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>May 2023</Timeline.Time>
                        <Timeline.Body>
                            UM Electric Boat continues to invest in our team’s infrastructure by outfitting an enclosed box trailer to help with storage and equipment transportation.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>June 2023</Timeline.Time>
                        <Timeline.Body>
                            As the Promoting Electric Propulsion competition neared, issues arose with the electrical system, and Snowfinkle unfortunately was not set to be seaworthy in time for the competition.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>June 2023</Timeline.Time>
                        <Timeline.Body>
                            The team pivots and creates The Parmar, named after the team’s founder. While it does not showcase our intended design, it does demonstrate the innovation and dedication our engineering team had.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>June 2023</Timeline.Time>
                        <Timeline.Body>
                            UM Electric Boat attends the third consecutive year of Promoting Electric Propulsion, showcasing Snowfinkle and racing The Parmar, which traveled over 3.5
                            miles, a mile for every day we spent manufacturing the craft.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>Fall 2023</Timeline.Time>
                        <Timeline.Title>TiDe</Timeline.Title>
                        <Timeline.Body>
                            The team drives to Crowley, Texas to meet one of our top sponsors, Liberator Powerboats of Texas, to take our first look at our newest vessel: a 22-foot tunnel hull made for speed. During that week, admin team members trailered the hull nearly 1200 miles back to Ann Arbor.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>January 2024</Timeline.Time>
                        <Timeline.Body>
                            Mechanical team members meet with Skater Powerboats to start our composite layups in Douglas, MI. Over the course of a month, the team will spend over 100 hours at Skater with some of the industry’s best in order to complete the cockpit.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content>
                        <Timeline.Time>Febuary 2024</Timeline.Time>
                        <Timeline.Body>
                            The electrical team begins assembly of the battery pack. The finished pack will have an energy capacity of 55+ kWh, extending a huge range of travel for TiDE.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    );
};

export default CustomTimeline;
