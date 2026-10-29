export interface ContactInfo {
  name: string;
  descriptor: string;
  profileStatement: string;
  phones: string[];
  emails: string[];
  linkedin: {
    display: string;
    url: string;
  };
  address: string;
  photoUrl: string;
  bannerUrl: string;
  pdfUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  type: 'academic' | 'leadership' | 'industry';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  status?: string;
  note?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  competencies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'leadership' | 'keynote' | 'academic' | 'industry';
  organization?: string;
  location?: string;
  year?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  awardingBody: string;
  year?: string;
  details?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  venueOrInstitution: string;
  year?: string;
  apaCitation: string;
  category: 'sustainable-craft' | 'machine-learning' | 'conference';
}

export const cvData = {
  contact: {
    name: "Rupal Joshi",
    descriptor: "Fashion Design Educator · Academic Leader · Sustainable Fashion Researcher · President, Handlooms Council MP (WICCI)",
    profileStatement: "To further the cause of education by implementing successful Teaching practices and research based designing principles for Creation and development of concepts and designs aimed at Optimizing the functions, value and appearance learned over the Past years of working in the fashion industry and academics with Artisans and students of different backgrounds and cultures.",
    phones: ["+91 98932 89961", "+91 97133 66556"],
    emails: ["jrupal002@gmail.com", "shivaayjoshi85@gmail.com"],
    linkedin: {
      display: "linkedin.com/in/rupaljoshi-175351194",
      url: "https://www.linkedin.com/in/rupaljoshi-175351194",
    },
    address: "59, Lokmanya Nagar, Indore (M.P.)",
    photoUrl: "/rupal_joshi_portrait.jpg",
    bannerUrl: "/indian_heritage_art_banner.jpg",
    pdfUrl: "/assets/aistudio/CV_RUPAL_JOSHI.pdf_20260409_163455_0000_653e133b.pdf",
  } as ContactInfo,

  experience: [
    {
      id: "exp-indus",
      role: "Head of Department (HOD) – Design Department",
      organization: "Indus Design School, Indus University, Ahmedabad, Gujarat",
      period: "June 2026 – Present",
      type: "academic",
      description: "Leading academic planning, departmental operations, and design programme implementation at Indus Design School.",
      highlights: [
        "Lead academic planning, curriculum development, and implementation of design programmes.",
        "Coordinate faculty activities, student projects, academic reviews, and departmental operations.",
        "Mentor students and faculty while promoting interdisciplinary collaboration, design innovation, and industry-oriented learning."
      ]
    },
    {
      id: "exp-1",
      role: "HOD Fashion Department",
      organization: "Renaissance University, Indore",
      period: "Joined from 1st March 2023 - 2025",
      type: "academic",
      description: "Departmental leadership, academic curriculum planning, faculty coordination, student research supervision, and promoting sustainable design practices.",
      highlights: [
        "Head of Department directing fashion education pedagogy and studio curriculums",
        "Pioneering research integrations in circular fashion and traditional textiles"
      ]
    },
    {
      id: "exp-2",
      role: "President, Handlooms Council Madhya Pradesh",
      organization: "Women's Indian Chamber of Commerce and Industry (WICCI)",
      period: "Launched 2023",
      type: "leadership",
      description: "State council leadership dedicated to empowering indigenous weavers, handloom preservation, artisan livelihood programs, and institutional collaborations across Madhya Pradesh.",
      highlights: [
        "State leadership advocating for handloom artisans and traditional textile heritage",
        "Fostering entrepreneurship and market linkages for indigenous weavers"
      ]
    },
    {
      id: "exp-3",
      role: "Assistant Professor, School of Design (Foundation Studies & Fashion) & Coordinator - Events and Activities",
      organization: "Avantika University",
      period: "April 2019 - 2023",
      type: "academic",
      description: "Faculty in Foundation Studies and Fashion Design; led university-wide student events, academic workshops, Young Designers League, NSS cell initiatives, and curriculum review.",
      highlights: [
        "Delivered core foundation and specialized fashion design instructional courses",
        "Appointed Coordinator for Events and Activities across the university"
      ]
    },
    {
      id: "exp-4",
      role: "Administrator, Assistant Professor",
      organization: "College of Design and Technology",
      period: "March 2012 - September 2015",
      type: "academic",
      description: "Dual administrative and academic role orchestrating campus operations, institutional policies, design studio management, and student assessments.",
      highlights: [
        "Academic administration alongside active studio design instruction",
        "Oversaw educational quality standards and curriculum delivery"
      ]
    },
    {
      id: "exp-5",
      role: "Assistant Professor",
      organization: "Virtual Voyage",
      period: "January 2009 - December 2011",
      type: "academic",
      description: "Instruction in fashion design fundamentals, garment construction, trend analysis, and mentoring undergraduate students through graduation collections.",
      highlights: [
        "Core fashion studio mentorship and portfolio development",
        "Student guidance in craft documentation and apparel prototyping"
      ]
    },
    {
      id: "exp-6",
      role: "Chief Designer",
      organization: "MAUU Ethnic Wear for Women",
      period: "January 2010 - March 2018",
      type: "industry",
      description: "Led creative direction, textile sourcing, artisan-driven embroidery, ethnic silhouette development, and commercial production for bespoke women's ethnic apparel collections.",
      highlights: [
        "Over eight years of commercial design leadership in women's ethnic wear",
        "Direct collaboration with regional craft artisans and master textile dyers"
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "edu-1",
      degree: "Ph.D. (Pursuing)",
      institution: "Renaissance University, Indore",
      status: "Pursuing",
      note: "Doctoral research focused on sustainable design, circular fashion systems, and indigenous craft narrative preservation."
    },
    {
      id: "edu-2",
      degree: "M.Sc. Fashion Technology",
      institution: "Tilak Maharashtra University, Pune",
      location: "Pune, Maharashtra",
      note: "Advanced technical studies in apparel production, textile science, and fashion technology."
    },
    {
      id: "edu-3",
      degree: "BFA (Fashion Design)",
      institution: "Tilak Maharashtra University, Pune",
      location: "Pune, Maharashtra",
      note: "Bachelor of Fine Arts with specialization in Fashion Design, studio aesthetics, and garment construction."
    },
    {
      id: "edu-4",
      degree: "Fashion Design Diploma",
      institution: "Lord's Academy, Nagpur",
      location: "Nagpur, Maharashtra",
      note: "Comprehensive diploma training in apparel drafting, illustration, and fashion design foundations."
    }
  ] as EducationItem[],

  skills: [
    {
      name: "Sustainable Designing",
      description: "Circular fashion models, zero-waste apparel thinking, indigenous natural dyeing, eco-fabrics, and artisanal heritage textile preservation."
    },
    {
      name: "Leadership Skills",
      description: "Departmental headship, council presidency, multi-stakeholder governance, event directorship, and committee leadership across state and national bodies."
    },
    {
      name: "Educationist Skills",
      description: "Curriculum architecture, studio pedagogy, foundation studies, academic assessment, ICSE examining, and academic board stewardship."
    },
    {
      name: "Communication Skills",
      description: "Keynote lecturing, international conference presentations, cross-cultural artisan dialogue, academic publications, and public advocacy."
    }
  ],

  languages: [
    { name: "Hindi", script: "हिन्दी", usage: "Academic instruction, state council governance, and national conferences" },
    { name: "English", script: "English", usage: "Scholarly publications, international forums, and higher education instruction" },
    { name: "Marathi", script: "मराठी", usage: "Regional cultural dialogue and institutional collaboration" },
    { name: "Gujarati", script: "ગુજરાતી", usage: "Craft community relations, textile trade dialogue, and artisan engagement" }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Elected as President of Handloom Council of Madhya Pradesh by Women's Indian Chamber of Commerce and Industry (WICCI)",
      category: "leadership",
      organization: "Women's Indian Chamber of Commerce and Industry"
    },
    {
      id: "ach-2",
      title: "Invited as a Speaker at the Women's Indian Chamber of Commerce and Industry (WICCI)",
      category: "keynote",
      organization: "WICCI"
    },
    {
      id: "ach-3",
      title: "Invited as a Speaker at World Women Forum at Delhi",
      category: "keynote",
      location: "Delhi",
      organization: "World Women Forum"
    },
    {
      id: "ach-4",
      title: "Member of the Board of Design Studies of Avantika University, (MIT Campus, Pune) Ujjain",
      category: "academic",
      organization: "Avantika University",
      location: "Ujjain"
    },
    {
      id: "ach-5",
      title: "Internal Complaints Committee Member",
      category: "governance",
      organization: "Avantika University"
    },
    {
      id: "ach-6",
      title: "Committee Head for (Social Entrepreneurship, Swacchhata and Rural Engagement Cell), Ministry of Education, Government of India",
      category: "leadership",
      organization: "Ministry of Education, Government of India"
    },
    {
      id: "ach-7",
      title: "Visiting Examiner for ICSE Board for practical examination of fashion design",
      category: "academic",
      organization: "ICSE Board"
    },
    {
      id: "ach-8",
      title: "Consultant Designer at The Eco Fab (eco clothing for healthy living)",
      category: "industry",
      organization: "The Eco Fab"
    },
    {
      id: "ach-9",
      title: "Events Coordinator for Avantika University",
      category: "academic",
      organization: "Avantika University"
    },
    {
      id: "ach-10",
      title: "NSS Coordinator, Avantika University",
      category: "academic",
      organization: "National Service Scheme (NSS), Avantika University"
    },
    {
      id: "ach-11",
      title: "Organizer for Young Designers League, Avantika University",
      category: "academic",
      organization: "Avantika University"
    },
    {
      id: "ach-12",
      title: "Invited as a speaker for Global Conference - “SANGAMAM”: ‘Revisiting the Art Of Handweaving & Natural Dyeing’",
      category: "keynote",
      organization: "Global Conference SANGAMAM"
    },
    {
      id: "ach-13",
      title: "Invited as a Judge for Fashion Show at Shri Aurobindo Institute of Technology, Indore",
      category: "industry",
      organization: "Shri Aurobindo Institute of Technology",
      location: "Indore"
    },
    {
      id: "ach-14",
      title: "Invited at Idyllic Institute of Management as a Jury",
      category: "academic",
      organization: "Idyllic Institute of Management"
    },
    {
      id: "ach-15",
      title: "Invited at Vaishnav Vidhyapith for Fashion",
      category: "academic",
      organization: "Shri Vaishnav Vidyapeeth Vishwavidyalaya"
    },
    {
      id: "ach-16",
      title: "Keynote Speaker for 'Heritage Meets Innovation' at KLE University, Hubli",
      category: "keynote",
      organization: "KLE University",
      location: "Hubli"
    }
  ],

  awards: [
    {
      id: "awd-1",
      title: "Iconic Women Creating a Better World 2022",
      awardingBody: "Women’s Indian Chamber of Commerce and Industry (WICCI)",
      year: "2022",
      details: "Conferred at Indo-Bangladesh Conference, Assam, recognizing outstanding leadership and impact in sustainable handlooms."
    },
    {
      id: "awd-2",
      title: "Appreciation Award for Receiving Iconic Women Creating a Better World 2022",
      awardingBody: "Avantika University",
      year: "2022",
      details: "Institutional commendation in recognition of prestigious national and international acclaim."
    },
    {
      id: "awd-3",
      title: "Best Speaker Award",
      awardingBody: "World Women Forum",
      details: "Awarded for exceptional delivery, scholarship, and advocacy on women in design leadership."
    },
    {
      id: "awd-4",
      title: "District Green Championship Award",
      awardingBody: "Mahatma Gandhi National Council of Rural Education / Avantika University",
      year: "2022",
      details: "District-level recognition for green campus sustainability and ecological initiatives."
    },
    {
      id: "awd-5",
      title: "District Green Championship Award",
      awardingBody: "Mahatma Gandhi National Council of Rural Education / Avantika University",
      year: "2021",
      details: "Awarded for pioneering institutional sustainability and environmental stewardship."
    },
    {
      id: "awd-6",
      title: "Mahatma Gandhi Swachhta Abhiyan Award for Sustainable Projects",
      awardingBody: "Swachhta Abhiyan Committee",
      year: "2021",
      details: "Commendation for sustainable community projects, waste reduction, and eco-initiatives."
    },
    {
      id: "awd-7",
      title: "Appreciation Award",
      awardingBody: "Rotary Club",
      details: "Civic commendation honoring social service and vocational contributions to craft and youth education."
    }
  ] as AwardItem[],

  research: [
    {
      id: "res-1",
      title: "Beyond the Trend Cycle: Preserving the Cultural Narrative of the Neela Lugda",
      venueOrInstitution: "Woxen University",
      year: "2025",
      category: "sustainable-craft",
      apaCitation: "Joshi, R. (2025). Beyond the trend cycle: Preserving the cultural narrative of the Neela Lugda. Woxen University."
    },
    {
      id: "res-2",
      title: "Circular fashion creating a sustainable clothing economy",
      venueOrInstitution: "National Conference on Disruptive Technologies in Fashion - NCDTF 26",
      year: "2026",
      category: "sustainable-craft",
      apaCitation: "Joshi, R. (2026). Circular fashion creating a sustainable clothing economy. In Proceedings of the National Conference on Disruptive Technologies in Fashion (NCDTF 26)."
    },
    {
      id: "res-3",
      title: "Wrapped in rap culture died by Nature the return of Bhairavgadh Batik",
      venueOrInstitution: "VIT Chennai",
      category: "sustainable-craft",
      apaCitation: "Joshi, R. Wrapped in rap culture died by Nature the return of Bhairavgadh Batik. VIT Chennai."
    },
    {
      id: "res-4",
      title: "Circular fashion creating a sustainable clothing economy",
      venueOrInstitution: "Renaissance University",
      category: "sustainable-craft",
      apaCitation: "Joshi, R. Circular fashion creating a sustainable clothing economy. Renaissance University."
    },
    {
      id: "res-5",
      title: "Revival of Bhairavgadh Batik Techniques",
      venueOrInstitution: "Vikramutsav 2025 (International History Conference)",
      year: "2025",
      category: "sustainable-craft",
      apaCitation: "Joshi, R. (2025). Revival of Bhairavgadh Batik techniques. Vikramutsav 2025: International History Conference."
    },
    {
      id: "res-6",
      title: "Paper presentation on Fashion product classifier and recommendation system using machine learning",
      venueOrInstitution: "Academic Paper Presentation & Conference",
      category: "machine-learning",
      apaCitation: "Joshi, R. Paper presentation on fashion product classifier and recommendation system using machine learning."
    },
    {
      id: "res-7",
      title: "Fashion forward ML model - predicting prints with machine learning",
      venueOrInstitution: "Predictive Analytics in Fashion Research",
      category: "machine-learning",
      apaCitation: "Joshi, R. Fashion forward ML model - predicting prints with machine learning."
    },
    {
      id: "res-8",
      title: "Fashion forward ML model - predicting prints with machine learning",
      venueOrInstitution: "Predictive Analytics in Fashion Research",
      category: "machine-learning",
      apaCitation: "Joshi, R. Fashion forward ML model - predicting prints with machine learning."
    },
    {
      id: "res-9",
      title: "Predicting Fashion Trends with Machine Learning :A data -driven approach for the future of Fashion",
      venueOrInstitution: "Machine Learning & Fashion Analytics Research",
      category: "machine-learning",
      apaCitation: "Joshi, R. Predicting fashion trends with machine learning: A data-driven approach for the future of fashion."
    },
    {
      id: "res-10",
      title: "Paper presentation on Fashion product classifier and recommendation system using machine learning",
      venueOrInstitution: "Academic Paper Presentation & Conference",
      category: "machine-learning",
      apaCitation: "Joshi, R. Paper presentation on fashion product classifier and recommendation system using machine learning."
    }
  ] as ResearchItem[]
};
