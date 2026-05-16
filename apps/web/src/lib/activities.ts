export type ActivitySectionType = {
  id: string;
  title: string;
  description: string;

  imagesFolder: string;
  imageCount: number;

  benefits: string[];
  cta?: string;
};

export type ActivityModuleType = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  sections: ActivitySectionType[];
};

export const activityModules: Record<string, ActivityModuleType> = {
  activities: {
    slug: "activities",

    title: "Activities",

    subtitle:
      "Interactive experiential activities designed to strengthen collaboration, communication, leadership, and engagement.",

    description:
      "Our activity programs are carefully designed to energize teams through immersive experiences, strategic challenges, trust-building games, and collaborative problem-solving exercises.",

    

    sections: [
      {
        id: "indoor-activities",
        title: "Indoor Activities",

        description:
          "Transform your team through elite indoor team-building experiences focused on collaboration, trust, communication, and performance. These activities encourage leadership, coordination, creativity, and engagement within a dynamic indoor environment.",

        imagesFolder: "indoor-activities",
        imageCount: 1,

        benefits: [
          "Team Collaboration",
          "Leadership",
          "Communication",
          "Problem Solving",
          "Employee Engagement",
        ],
      },

      {
        id: "blind-fold",
        title: "Blind Fold",

        description:
          "Blind Fold activities are designed to strengthen trust, listening ability, communication, and leadership. Participants learn to collaborate effectively under uncertainty through highly interactive exercises.",

        imagesFolder: "blind-fold",
        imageCount: 2,

        benefits: [
          "Trust Building",
          "Leadership",
          "Listening Skills",
          "Confidence",
          "Coordination",
        ],
      },

      {
        id: "ladder-games",
        title: "Ladder Games",

        description:
          "Fun and energetic ladder-based activities promoting coordination, engagement, creativity, movement, and team interaction through exciting collaborative challenges.",

        imagesFolder: "ladder-games",
        imageCount: 2,

        benefits: [
          "Fun Learning",
          "Creativity",
          "Participation",
          "Coordination",
          "Team Bonding",
        ],
      },

      {
        id: "hula-hoop-games",
        title: "Hula Hoop Games",

        description:
          "Dynamic physical activities designed to improve agility, teamwork, synchronization, and communication through engaging group coordination exercises.",

        imagesFolder: "hula-hoop-games",
        imageCount: 1,

        benefits: [
          "Agility",
          "Coordination",
          "Physical Activity",
          "Engagement",
          "Teamwork",
        ],
      },

      {
        id: "river-crossing",
        title: "River Crossing",

        description:
          "A strategic outdoor challenge where teams solve complex coordination problems while improving leadership, planning, communication, and decision-making under pressure.",

        imagesFolder: "river-crossing",
        imageCount: 1,

        benefits: [
          "Strategic Thinking",
          "Decision Making",
          "Leadership",
          "Problem Solving",
          "Coordination",
        ],
      },

      {
        id: "bridge-building",
        title: "Bridge Building",

        description:
          "Creative construction-based challenges focused on innovation, collaboration, planning, and resource management through team-driven execution activities.",

        imagesFolder: "bridge-building",
        imageCount: 2,

        benefits: [
          "Creativity",
          "Planning",
          "Innovation",
          "Resource Management",
          "Collaboration",
        ],
      },
    ],
  },

  "team-building": {
    slug: "team-building",

    title: "Team Building",

    subtitle:
      "High-energy team-building programs focused on collaboration, leadership, strategic thinking, and team synergy.",

    description:
      "Our Team Building experiences are crafted to strengthen relationships, improve communication, and develop leadership qualities through engaging group activities.",

    

    sections: [
      {
        id: "team-quiz-marathon",
        title: "Team Quiz Marathon",

        description:
          "Competitive and engaging quiz-based activities designed to improve collaboration, quick thinking, and communication through exciting group challenges.",

        imagesFolder: "team-quiz-marathon",
        imageCount: 1,

        benefits: [
          "Quick Thinking",
          "Collaboration",
          "Communication",
          "Competitive Spirit",
          "Engagement",
        ],
      },

      {
        id: "memory-recalls",
        title: "Memory Recalls",

        description:
          "Interactive activities that challenge memory, concentration, observation, and team coordination through strategic exercises.",

        imagesFolder: "memory-recalls",
        imageCount: 1,

        benefits: [
          "Memory Improvement",
          "Focus",
          "Observation Skills",
          "Teamwork",
          "Communication",
        ],
      },

      {
        id: "challenge-100",
        title: "Challenge 100",

        description:
          "High-energy team challenges focused on execution, adaptability, planning, and time management under pressure.",

        imagesFolder: "challenge-100",
        imageCount: 1,

        benefits: [
          "Execution Skills",
          "Planning",
          "Adaptability",
          "Time Management",
          "Collaboration",
        ],
      },

      {
        id: "tribal-survivor-event",
        title: "Tribal Survivor Event",

        description:
          "Adventure-style experiential event promoting resilience, trust, leadership, strategic thinking, and teamwork.",

        imagesFolder: "tribal-survivor-event",
        imageCount: 1,

        benefits: [
          "Leadership",
          "Trust Building",
          "Resilience",
          "Survival Thinking",
          "Problem Solving",
        ],
      },

      {
        id: "scavenger-event",
        title: "Scavenger Event",

        description:
          "Interactive treasure-hunt activities encouraging teamwork, observation, communication, and strategic execution.",

        imagesFolder: "scavenger-event",
        imageCount: 2,

        benefits: [
          "Observation",
          "Problem Solving",
          "Strategy",
          "Communication",
          "Teamwork",
        ],
      },
    ],
  },

  "corporate-training": {
    slug: "corporate-training",

    title: "Corporate Training",

    subtitle:
      "Professional development programs focused on leadership, workforce growth, communication, and organizational excellence.",

    description:
      "Our Corporate Training programs empower professionals and organizations through experiential learning, leadership development, communication enhancement, and strategic growth experiences.",


    sections: [
      {
        id: "outdoor-management-development",
        title: "Outdoor Management Development",

        description:
          "Experiential outdoor training focused on leadership, strategic thinking, collaboration, and adaptability through immersive management activities.",

        imagesFolder: "outdoor-management-development",
        imageCount: 1,

        benefits: [
          "Leadership",
          "Management Skills",
          "Adaptability",
          "Strategic Thinking",
          "Coordination",
        ],
      },

      {
        id: "workforce-development",
        title: "Workforce Development",

        description:
          "Professional development sessions designed to improve productivity, workplace collaboration, communication, and organizational effectiveness.",

        imagesFolder: "workforce-development",
        imageCount: 1,

        benefits: [
          "Professional Growth",
          "Productivity",
          "Communication",
          "Collaboration",
          "Workplace Skills",
        ],
      },

      {
        id: "personal-development",
        title: "Personal Development",

        description:
          "Programs focused on self-awareness, confidence building, leadership, emotional intelligence, and communication growth.",

        imagesFolder: "personal-development",
        imageCount: 2,

        benefits: [
          "Confidence Building",
          "Leadership",
          "Self Awareness",
          "Growth Mindset",
          "Communication",
        ],
      },

      {
        id: "manager-to-leader",
        title: "Manager to Leader",

        description:
          "Leadership transformation programs helping managers evolve into inspiring and strategic leaders.",

        imagesFolder: "manager-to-leader",
        imageCount: 1,

        benefits: [
          "Leadership Transformation",
          "Decision Making",
          "Strategic Thinking",
          "Team Leadership",
          "Communication",
        ],
      },

      {
        id: "corporate-summer-camp",
        title: "Corporate Summer Camp",

        description:
          "Interactive engagement programs combining experiential learning, leadership activities, collaboration exercises, and fun corporate experiences.",

        imagesFolder: "corporate-summer-camp",
        imageCount: 1,

        benefits: [
          "Corporate Bonding",
          "Leadership",
          "Interactive Learning",
          "Engagement",
          "Teamwork",
        ],
      },
    ],
  },
};