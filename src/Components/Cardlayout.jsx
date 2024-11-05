/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState } from 'react';

const EventCard = React.memo(({ event, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Toggle popup state for viewing rules
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div
      key={index}
      className="event-card w-full sm:w-[46%] lg:w-[30%] bg-white/10 rounded-lg shadow-md overflow-hidden p-4 flex flex-col transition-transform"
    >
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-auto object-cover rounded-md mb-4"
      />

      {/* Event Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-violet-500 text-center">
        {event.name}
      </h2>

      {/* Event Description */}
      {event.about && (
        <div className="my-4 text-center flex-grow">
          <h3 className="font-semibold overflow-y-hidden inline-block h-[20px] text-violet-400">
            About the Event:
          </h3>
          <p className="overflow-y-hidden inline-block text-white">{event.about}</p>
        </div>
      )}

      {/* Rules Button */}
      {event.rulesImage && (
        <button
          onClick={togglePopup}
          className="mt-4 relative px-6 py-2.5 font-medium text-white group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-violet-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-2 bg-violet-800 group-hover:bg-violet-600"></span>
          <span className="relative text-white group-hover:text-white">View Rules</span>
        </button>
      )}

      {/* Rules Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[60%] p-6 rounded-lg shadow-lg relative">
            <img src={event.rulesImage} alt="Rules" className="w-full h-auto rounded-md" />
            <button
              className="z-[1000] absolute top-3 right-3 text-3xl text-gray-900 hover:text-gray-400"
              onClick={togglePopup}
            >
              &times;
            </button>
          </div>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black opacity-20"
            onClick={togglePopup}
          ></div>
        </div>
      )}
    </div>
  );
});


const Cardlayout = () => {

  const eventGuidelines = [
    {
      category: "Technical",
      events: [
        {
          name: "Career Craft",
          day: "Day 1",
          time: "10:00 AM - 12:00 PM",
          // about: "Students will be allowed to clarify their doubts on placements and higher studies from the presenters.",
          image: "/1.png",
          rulesImage:'/r1.png'
        },
        {
          name: "Techno Kallos",
          day: "Day 1",
          time: "12:00 PM – 3:00 PM",
          teamComposition: "Duo",
          rules: [
            "The selected candidates from contest 1 will proceed with further development of new projects using HTML, CSS, and JavaScript.",
            "The required code will be provided on the day of the contest.",
            "The contest will be held in offline mode within the stimulated time, and the dates will be fixed according to the final decision.",
          ],
          judgingCriteria: ["Creativity and Innovation", "Visual Appeal", "Functionality and Feasibility"],
          image: "/2.png",
          rulesImage:'/r2.png'
        },
        {
          name: "Design Arena",
          day: "Day 1",
          time: "12:00 PM - 3:00 PM",
          platform: "Figma",
          teamComposition: "Solo or Duo",
          slotDuration: "1.2 hours per slot",
          resourceUsage: "20 minutes for resource gathering and problem-solving",
          rules: [
            "On-the-Spot Problem Statement: Each team will receive a unique problem statement at the beginning of their time slot.",
            "Design Requirements: Teams must design a UI/UX solution using Figma based on the problem statement provided.",
            "Submission: All designs must be submitted by the end of the time slot. Late submissions will not be accepted.",
          ],
          judgingCriteria: ["Creativity and Innovation", "User Experience (UX) Design Principles", "Visual Appeal", "Functionality and Feasibility"],
          judges: "A panel of experienced UI/UX designers will evaluate submissions.",
          image: "/7.png",
          rulesImage:'/r3.png'
        },
        {
          name: "Vision Vault",
          day: "Day 2",
          time: "9:00 AM – 11:30 AM",
          platform: "Of participant’s choice",
          teamComposition: "Duo",
          slotDuration: "7 - 10 minutes per team",
          rules: [
            "Slide Constraints: Maximum 5 slides.",
            "Budget your time to take a minute or two less than maximum allotment.",
            "PPT should not include AI-generated content.",
          ],
          judgingCriteria: ["Presentation should be clear, compelling and crafted.", "Feasibility and scalability of the project.", "Presentation and communication skills."],
          image: "/3.png",
          rulesImage:'/r4.png'
        },
        {
          name: "Discussion Den",
          day: "Day 2",
          time: "9:00 AM - 10:30 AM",
          teamComposition: "Solo",
          rules: [
            "Team Formation: Participants will be randomly assigned to teams.",
            "Topic Assignment: Each team will receive a specific topic for discussion.",
            "Discussion Time: Teams will have 15 minutes to discuss their topic.",
            "Preparation Time: Each team will have 5 minutes to prepare their final thoughts.",
            "Total Duration: 20 minutes per team.",
            "Presentation: At the end of the preparation time, each team will present their discussion points.",
          ],
          judgingCriteria: ["Clarity of Thought", "Team Collaboration and Dynamics", "Relevance and Depth of Discussion", "Presentation Skills"],
          image: "/4.png",
          rulesImage:'/r5.png'
        },
        {
          name: "Code Crack",
          day: "Day 2",
          time: "10:30 AM – 12:30 PM",
          teamComposition: "Duo",
          rules: [
            "A set of 6 questions will be provided.",
            "Participants must find the correct output for each question within the allotted time.",
            "Participants should mention their known programming language(s).",
            "No plagiarism.",
          ],
          image: "/5.png",
          rulesImage:'/r6.png'
        },
      ],
    },
    {
      category: "Non-Technical",
      events: [
        {
          name: "Code Your Way Out",
          day: "Day 1",
          time: "10:00 AM - 12:30 PM",
          teamComposition: "Duo",
          rounds: 1,
          rules: [
            "Problem Solving: Each team will face 5 different coding problems, each corresponding to a unique imaginary room.",
            "Escape Mechanism: Teams must solve each problem to 'escape' to the next room.",
            "Timer: A countdown timer will be displayed throughout the event to track the time remaining.",
            "Winning Criteria: The first team to escape from all 5 rooms by solving all problems will be declared the winner.",
          ],
          materialsProvided: ["Chairs and tables", "A black or whiteboard for brainstorming", "Pens and papers for notes"],
          image: "/6.png",
          rulesImage:'/r7.png'
        }
      ]
    },
  ]; 
  return (
    <div className='z-10 max-h-fit w-full bg-black flex flex-col items-center'>
      <div className='text-4xl md:text-6xl w-full text-center text-white font-bold py-8'>
        EVENTS
      </div>
      <div className="w-full max-w-fit mx-auto flex flex-wrap justify-center gap-12 p-10">
        {eventGuidelines.map((category, catIndex) => (
          category.events.map((event, eventIndex) => (
            <EventCard
              key={`${catIndex}-${eventIndex}`}
              event={event}
              index={catIndex * category.events.length + eventIndex}
            />
          ))
        ))}
      </div>
    </div>
  );
};

export default Cardlayout;