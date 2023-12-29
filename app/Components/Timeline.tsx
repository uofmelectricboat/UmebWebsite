import React from "react";
import BoatCard from "../Components/BoatCard";
import timeline from "@material-tailwind"

interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    boat: any;
}

// Modified to accept a single TimelineItemProps object
const BoatTimeline: React.FC<TimelineItemProps> = ({ date, title, description, boat }) => {
    return (
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
                <Timeline.Time>{date}</Timeline.Time>
                <Timeline.Title>{title}</Timeline.Title>
                <Timeline.Body>
                    {description}
                    {/* Render your BoatCard here */}
                    <BoatCard
                        text={boat.text}
                        name={boat.name}
                        speed={boat.speed}
                        image={boat.image}
                        performance={boat.performance}
                        index={0}
                    />
                </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
    );
};

export default BoatTimeline;
