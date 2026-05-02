export type Testimonial = {
  name: string;
  designation: string;
  company: string;
  message: string;
  rating: number; // ⭐ supports 4, 4.5, 5 etc
};

export const testimonials: Testimonial[] = [
  {
    name: "Lakshana",
    designation: "Student, ECE",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "The training session was well structured and very useful. The team explained every concept clearly and provided us with helpful strategies for maintaining our mental well-being.",
    rating: 5,
  },
  {
    name: "Vaishnavi",
    designation: "Student, Food Tech",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "This team-building session was incredibly helpful in teaching me how to effectively network with others. The session was highly interactive and incredibly valuable.",
    rating: 5,
  },
  {
    name: "Divya",
    designation: "Student, Bio-Tech",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "The session was incredibly helpful in teaching me leadership qualities and how to handle critical situations effectively.",
    rating: 4,
  },
  {
    name: "Bharathi",
    designation: "Student, EEE",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "The session was fantastic; it was packed with fun and practical takeaways, moving beyond simple theory by using engaging, mentally challenging games.",
    rating: 4.5,
  },
  {
    name: "Sriram",
    designation: "Student, Bio-Tech",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "Unlike the purely theoretical sessions I have attended in the past, this experience stood out because it was entirely practical and truly encouraged us to think for ourselves.",
    rating: 5,
  },
  {
    name: "Hariharan",
    designation: "Student, Mech",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "I personally loved this session because it gave me a fresh perspective on leadership, specifically by observing and applying strategies from nature.",
    rating: 5,
  },
  {
    name: "Arunika",
    designation: "Student, CSE",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "The session was excellent and gave me the confidence to handle any challenge, whether it requires mental focus or physical resilience.",
    rating: 4,
  },
  {
    name: "Monica",
    designation: "Student, R & A",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "The trainers were absolutely amazing; they were so engaging that I couldn't look away. Their insights gave me a completely new perspective on life.",
    rating: 5,
  },
  {
    name: "Easwari",
    designation: "Student, EEE",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "This session was a total vibe! It was packed with fun networking, and the way the trainer explained problem-solving was a major lightbulb moment.",
    rating: 4,
  },
  {
    name: "Sanjay",
    designation: "Student, CSE",
    company: "Placement Training Camp | Rajalakshmi Engineering College",
    message:
      "As a CSE graduate accustomed to a screen-focused environment, this outdoor session was refreshing and highlighted the importance of physical activity.",
    rating: 4,
  },
];