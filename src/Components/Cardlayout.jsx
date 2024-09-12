import React, { useCallback, useState } from 'react';

const EventCard = React.memo(({ event, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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

      {/* Event Rules */}
      {event.rules && (
        <div className="my-4 text-blue-200 text-left flex-grow">
          <h3 className="font-semibold text-violet-400">Rules:</h3>
          <ul className="list-disc list-inside">
            {event.rules.map((rule, ruleIndex) => (
              <li key={ruleIndex} className="text-white my-1">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Judging Criteria */}
      {event.judgingCriteria && (
        <div className="my-4 text-blue-200 text-left flex-grow">
          <h3 className="font-semibold text-violet-400">Judging Criteria:</h3>
          <ul className="list-disc list-inside">
            {event.judgingCriteria.map((criteria, criteriaIndex) => (
              <li key={criteriaIndex} className="text-white my-1">
                {criteria}
              </li>
            ))}
          </ul>
        </div>
      )}

{/* {event.name=='Techno Kallos'?<button  onClick={togglePopup} className="relative px-6 py-2.5 font-medium text-white group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-violet-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-2 bg-violet-800 group-hover:bg-violet-600"></span>
        <span className="relative text-white group-hover:text-white">View Qualified Team Details</span>
      </button>:<a href="https://rajalakshmi.org/design-summit-2k24/" target="_self" rel="noopener noreferrer">
      <button className="relative px-6 py-2.5 font-medium text-white group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-violet-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-2 bg-violet-800 group-hover:bg-violet-600"></span>
        <span className="relative text-white group-hover:text-white">Register</span>
      </button>
      </a>
}   */}

{isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-scroll">
         <div className="bg-white w-[95%] p-2 rounded-lg shadow-lg relative">
  <h2 className="text-xl font-semibold mb-4 ml-4 p-2 mx-auto">Qualified Team Details</h2>
  <ul className="list-decimal list-inside text-left grid grid-cols-2 ">
    {[
      "Tech Titans",
      "Tech Fury",
      "HackOverflow",
      "Binary Brains",
      "Design Sprinters",
      "Tech Titans",
      "DH",
      "Flash&Code",
      "Web Spartenz",
      "Task Master",
      "Code freaks",
      "Hell Divers",
      "Pixel Pirates",
      "Section 13",
      "Sparkoders",
      "Tech Titans",
      "Team DS",
      "Trex-Dino",
      "WEB WIZARDS",
      "Binary brains",
      "FrontEndTheriyathu",
      "Technoglitz",
      "NPC's",
      "Area 404",
      "DEAD&LOGAN",
      "Summit seeker",
      "Web Wave",
      "Data_Dynamos",
      "Echo",
      "Vivaia",
    ].map((team, index) => (
      <li key={index} className="p-1 text-black">
        {team}
      </li>
    ))}
  </ul>
  <button
    className="z-[1000] absolute cursor-pointer top-3 right-3 text-3xl text-gray-900 hover:text-gray-400"
    onClick={togglePopup}
  >
    &times;
  </button>
</div>

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
          about: "Students will be allowed to clarify their doubts on placements and higher studies from the presenters.",
          image: "/1.png",
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
            <EventCard key={`${catIndex}-${eventIndex}`} event={event} index={catIndex * category.events.length + eventIndex} />
          ))
        ))}
      </div>
    </div>
  );
};

export default Cardlayout;