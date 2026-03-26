import type { CourseData } from "../types";

export const courses: CourseData[] = [
  {
    slug: "cell-biology",
    title: "Cell Biology.",
    description:
      "Understanding the Structures of Basic Components of Prokaryotic & Eukaryotic Cells and How These Components are used to Generate and Utilize Energy",
    lecturers: [
      {
        title: "Dr.",
        name: "Mona Wadi",
      },
    ],
    stats: {
      videosCount: 0,
      chaptersCount: 0,
    },
    lectures: [],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Final Exam of 2010 - Dr. Mona Wadi",
          url: "../../../documents/level-1/semester-1/cell-biology/exams/dr-mona-wadi-final-2010.pdf",
        },
        {
          title: "Final Exam of 2012 - Dr. Mona Wadi",
          url: "../../../documents/level-1/semester-1/cell-biology/exams/dr-mona-wadi-final-2012.pdf",
        },
        {
          title: "Final Exam of 2013 - Dr. Mona Wadi",
          url: "../../../documents/level-1/semester-1/cell-biology/exams/dr-mona-wadi-final-2013.pdf",
        },
        {
          title: "Final Exam of 2018 - Dr. Mona Wadi",
          url: "../../../documents/level-1/semester-1/cell-biology/exams/dr-mona-wadi-final-2018.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Cell Biology",
        "Course Code:": "PHPT1301",
        "Faculty:": "Faculty of Pharmacy",
        "Department:": "Departemnt of Pharmacology & Medical Sciences (PHPT)",
        "Course Classification:": "College Need",
        "Course Level:": "1st Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "computer-science-1-omar",
    title: "Computer Science.",
    description: "Basics in the World of Computer Science",
    lecturers: [
      {
        title: "Eng.",
        name: "Omar Al-nahal",
      },
      {
        title: "Eng.",
        name: "Mohammed Abu-shaban",
        altLink: "computer-science-1",
      },
    ],
    stats: {
      videosCount: 21,
      chaptersCount: 10,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Computers",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter01.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-1-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/Gm2HddWCLa0",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/dSMCJWWAeeE",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/tyDRZt3UcNo",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : The Internet & World Wide Web",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter02.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-2-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/3GM7CmxEnzo",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/HR9LdWBE0zI",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/px31vXpWVA0",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Application Software",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter03.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-3-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/T2bFwFnl3jA",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/HL3CKQgu2iE",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/FW6EKyD8060",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://youtu.be/L4k1QqyFI6E",
          },
          {
            title: "Lecture (5)",
            description: "Part E",
            url: "https://youtu.be/KgQV-8V2IHU",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : The Components of the System Unit",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter04.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-4-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/PpaQS9Ymuxc",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/UJJdahd9VQY",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/sOiGhAe0L6c",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://youtu.be/1P4QUccQKb4",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Input Devices",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter05.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-5-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/cf4CHAa5O18",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/4qsCeHSMKcc",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Output Devices",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter06.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-6-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://www.youtube.com/watch?v=xx1qNZro2nY",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://www.youtube.com/watch?v=WybTHrPatCc",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Storage Devices",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter07.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-7-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/iR8vdl4Wm08",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/7ZI9avOVESc",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Operating Systems & Utility Programs",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter08.pdf",
            type: "slides",
          },
        ],
        videos: [],
      },
      {
        chapterTitle: "Chapter IX : Communications & Networks",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter09.pdf",
            type: "slides",
          },
        ],
        videos: [],
      },
      {
        chapterTitle: "Chapter X : Programming Languages & Program Development",
        documents: [],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "CS - Living in a Digital Wrold",
          url: "../../../documents/level-1/semester-1/computer-science/computer-science-book.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Final Exam of 2014",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/final-2014.pdf",
        },
        {
          title: "Final Exam of 2015",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/final-2015.pdf",
        },
        {
          title: "Final Exam of 2017",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/final-2017.pdf",
        },
        {
          title: "Midterm Exam of 2013",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/mids2013.pdf",
        },
        {
          title: "Midterm Exam of 2015",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/mid-2015.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Computer Science I",
        "Course Code:": "ITCS1301",
        "Faculty:": "Faculty of Engineering & IT",
        "Department:": "Departemnt of Information Technology (IT)",
        "Course Classification:": "College Need",
        "Course Level:": "1st Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "computer-science-1",
    title: "Computer Science.",
    description: "Basics in the World of Computer Science",
    lecturers: [
      {
        title: "Eng.",
        name: "Mohammed Abu-shaban",
      },
      {
        title: "Eng.",
        name: "Omar Al-naha",
        altLink: "computer-science-1-omar",
      },
    ],
    stats: {
      videosCount: 19,
      chaptersCount: 10,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Computers",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter01.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-1-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://www.youtube.com/watch?v=wtqeAPHJbaU&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=3",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://www.youtube.com/watch?v=6tyfvZdpxbw&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=1",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://www.youtube.com/watch?v=IyoYjoI-Wag&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=4",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://www.youtube.com/watch?v=iCrgF63KC3s&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=5",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : The Internet & World Wide Web",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter02.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-2-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://www.youtube.com/watch?v=Mqlz0woXIIU&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=6",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://www.youtube.com/watch?v=mRtkexnyMyc&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=2",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://www.youtube.com/watch?v=puJ6pkRm44o&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=7",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Application Software",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter03.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-3-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://www.youtube.com/watch?v=y5cHg4zJOPw&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=9",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://www.youtube.com/watch?v=x1VA62-phHo&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=8",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : The Components of the System Unit",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter04.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-4-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://www.youtube.com/watch?v=_78ZBQLmIJo&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=12",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://www.youtube.com/watch?v=L1G706NB1Fw&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=10",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://www.youtube.com/watch?v=G0rYNQ_iNWU&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=11",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Input Devices",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter05.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-5-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://www.youtube.com/watch?v=ZTwtceWOLi4&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=15",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://www.youtube.com/watch?v=m27ekpnqxZE&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=14",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://www.youtube.com/watch?v=0BEVdNFd7uQ&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=13",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Output Devices",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter06.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-6-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://www.youtube.com/watch?v=tPla-q5BsQM&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=16",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://www.youtube.com/watch?v=f5KEDEUbvR0&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=18",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://www.youtube.com/watch?v=4Pr0Q1glI58&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=17",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Storage Devices",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter07.pdf",
            type: "slides",
          },
          {
            title: "Chapter Answers",
            url: "../../../documents/level-1/semester-1/computer-science/cs-solutions/chapter-7-sol.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://www.youtube.com/watch?v=U7JssGCA3Mg&list=PLHCj7wGEX2VrBnyCcyVHRXxL-tEbr22a8&index=19",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Operating Systems & Utility Programs",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter08.pdf",
            type: "slides",
          },
        ],
        videos: [],
      },
      {
        chapterTitle: "Chapter IX : Communications & Networks",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/computer-science/cs-slides/chapter09.pdf",
            type: "slides",
          },
        ],
        videos: [],
      },
      {
        chapterTitle: "Chapter X : Programming Languages & Program Development",
        documents: [],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "CS - Living in a Digital Wrold",
          url: "../../../documents/level-1/semester-1/computer-science/computer-science-book.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Final Exam of 2014",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/final-2014.pdf",
        },
        {
          title: "Final Exam of 2015",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/final-2015.pdf",
        },
        {
          title: "Final Exam of 2017",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/final-2017.pdf",
        },
        {
          title: "Midterm Exam of 2013",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/mids2013.pdf",
        },
        {
          title: "Midterm Exam of 2015",
          url: "../../../documents/level-1/semester-1/computer-science/cs-exams/mid-2015.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Computer Science I",
        "Course Code:": "ITCS1301",
        "Faculty:": "Faculty of Engineering & IT",
        "Department:": "Departemnt of Information Technology (IT)",
        "Course Classification:": "College Need",
        "Course Level:": "1st Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "general-chemistry",
    title: "General Chemistry.",
    description:
      "Learning the Principles of (Atomic & Molecular Theory), Stoichiometry & Thermodynamics",
    lecturers: [
      {
        name: "Maha Al-khateeb",
      },
    ],
    stats: {
      videosCount: 23,
      chaptersCount: 10,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/general-chemistry/chapter-1-introduction.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/es6iEZbggfc",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Atoms, Molecules, Ions & Chemical Formuals",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/general-chemistry/chapter-2-atoms-molecules-ions.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/NRkypPGc-xE",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Stoichiometry",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/general-chemistry/chapter-3-stoichiometry.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/pWb-CTcbHf4",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/JOhupbGF-_k",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/IR1UuXKLT18",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://youtu.be/gNtoAc78eew",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : The Electronic Structure of Atoms",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/general-chemistry/chapter-4-the-electronic-structure-of-atoms.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/VLjCzeTekRo",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/4rGh8Ha_MSQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Periodic Table",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/general-chemistry/chapter-5-periodic-table.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/Q__gp9XlicY",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/eQ6uwyk2wfw",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Chemical Bonding",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/general-chemistry/chapter-6-chemical-bonding.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Ionic Bond",
            url: "https://youtu.be/Uihzowc8MZ0",
          },
          {
            title: "Lecture (2)",
            description: "Covalent Bond",
            url: "https://youtu.be/vc8i-YaTk-o",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/pg7VRQGs3UQ",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter VII : Molecular Geometry & Hybridization of Atomic   Orbitals",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/general-chemistry/chapter-7-molecular-geometry.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/PhtZS6dGPcc",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/GS-LQr0d7OI",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/QxiuukzCqdQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Polarity & Intermolecular Forces",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-1/general-chemistry/chapter-8-polarity-and-intramolecular-forces.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Polarity & Intermolecular Forces",
            url: "https://youtu.be/aAmeUcMgOR8",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter IX + X : Physical Properties of Solutions &   Electrolytes",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/C5YNBcWv62c",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/pi7VqFybDMg",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/dn9B3f8SzOg",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://youtu.be/Gdj86dO3Aro",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI + XII : Chemical Equilibrium",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/mHZMUTR2Z0M",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/N-SlKCTN1bs",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "General Chemistry - The Essential Concepts 5th Edition",
          url: "../../../documents/level-1/semester-1/general-chemistry/book/General-Chemistry-The-Essential-Concepts-5th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Final Exam of 2019 - Dr. Maha El-Khateeb",
          url: "../../../documents/level-1/semester-1/general-chemistry/exams/dr-maha-final-2019.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "General Chemistry",
        "Course Code:": "PHCH1301",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "College Need",
        "Course Level:": "1st Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "mathematics-matar",
    title: "Mathematics for Health Sciences.",
    description:
      "Understanding Concepts and Develop Skills to Calculate, Analyze & Interpret Results",
    lecturers: [
      {
        title: "Prof.",
        name: "Mohammed Matar",
      },
      {
        title: "Dr.",
        name: "Mohammed Iqelan",
        altLink: "mathematics",
      },
    ],
    stats: {
      videosCount: 24,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Preview & Review",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1SyPRZOoOecV7lwuJYfvo2zpcxJPjMlFw/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/1gkjIL57mueN3TqRiS-Y7t1mEVg_ic9Ft/view?usp=drivesdk",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://drive.google.com/file/d/1vsvkuDmMstdWwrNwt3osCUp-3BVB-Wv3/view?usp=drivesdk",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://drive.google.com/file/d/145pfkNKc8o88QGr3MaycjKNCUoOkHEUF/view?usp=drivesdk",
          },
          {
            title: "Lecture (5)",
            description: "Part E",
            url: "https://drive.google.com/file/d/1gLjba-21sqMeegkmyfD70qX5xNQ2Atfb/view?usp=drivesdk",
          },
          {
            title: "Lecture (6)",
            description: "Part F",
            url: "https://drive.google.com/file/d/1U2JP1J8IZtek_0-R_9cpDyTHVxWLdayv/view?usp=drivesdk",
          },
          {
            title: "Lecture (7)",
            description: "Part G",
            url: "https://drive.google.com/file/d/10huTFDts27vGy_NRfEwwDXl-VLygtfpM/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter II : Discrete Time Model Sequence & Difference   Equation",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1JSnJ6sv9ajjQjf-PJHHnB46v1ovyFpCY/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/1glKBwrm9F0oHVpvmpP_2GOCGl8y2Y1mT/view?usp=drivesdk",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://drive.google.com/file/d/1xGgMwF_RQqHrfWV049M7x-u4D-hte2sk/view?usp=drivesdk",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://drive.google.com/file/d/1SMcKSP6_kePHaOQ1dF8iRVOgqZXBPKv3/view?usp=drivesdk",
          },
          {
            title: "Lecture (5)",
            description: "Part E",
            url: "https://drive.google.com/file/d/1WhWBKNHg04JmvEv0nuKEQXd0kX3BImMY/view?usp=drivesdk",
          },
          {
            title: "Lecture (6)",
            description: "Part F",
            url: "https://drive.google.com/file/d/1DKL_hBDbG4_2e9XUllB9UG9P2FPu6c-r/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Limits & Continuity",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1PlKzyQrcjUf_tATi82F5zx1n5XIm0gJn/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/1g4NC--0NKZFUZbxUJUcT1jhik0pryTbc/view?usp=drivesdk",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://drive.google.com/file/d/1hLN4hr1SpgyBE11SAI5z7wfvRue5NFGl/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Differentiation",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1S15B9WS51Miy8s238IQxsGYX4Rhml8XO/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/1RwKsizYh5osoVeRI1TccymXPhiEO_Eti/view?usp=drivesdk",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://drive.google.com/file/d/1ToutCbw5gAscrA4xcb9jLRPVpQ3edTwd/view?usp=drivesdk",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://drive.google.com/file/d/1uyRUV3mTPSaZyzgjN2zG0Jt_n4q0EeU3/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Application of Differentiation",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1XKEpNq_mABDvUTOLQhaK9BiLfpcaAQJ6/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/1Gc3O13b_dO5Sv-8DOL48-qnIQxtVwW33/view?usp=drivesdk",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://drive.google.com/file/d/1qxmN9vZyDnofPhSmq3k0nDPDvfqTi_Rh/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Integrationl",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1vlkWHo-lBnz-JQgvEMDNx6lrvsVKigOU/view?usp=drivesdk",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Calculus - Thomas Calculus",
          url: "../../../documents/level-1/semester-1/mathematics/thomas-calculus-11-book.pdf",
        },
      ],
      extraResources: [
        {
          title: "Book Answers",
          url: "../../../documents/level-1/semester-1/mathematics/thomas-calculus-11-book.pdf",
          note: "Answers",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "404 - Not Found !",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Mathematics fo Health Sciences",
        "Course Code:": "MATH1303",
        "Faculty:": "Faculty of Science",
        "Department:": "Mathematics Departmen (MATH)",
        "Course Classification:": "College Need",
        "Course Level:": "1stst Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "mathematics",
    title: "Mathematics for Health Sciences.",
    description:
      "Understanding Concepts and Develop Skills to Calculate, Analyze & Interpret Results",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Iqelan",
      },
      {
        title: "Prof.",
        name: "Mohammed Matar",
        altLink: "mathematics-matar",
      },
    ],
    stats: {
      videosCount: 20,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Pre Calculus Review",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1AFI-zP-B7XBv7UvCOA1QfYrXERWTx2HE/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/1DdPGVqdUfv7d8KBhiazyiBWrfPQRiVIz/view?usp=drivesdk",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://drive.google.com/file/d/1u-bGx1lfbMhONxAXHM_M4FiruCvDaYz4/view?usp=drivesdk",
          },
          {
            title: "Lecture (4)",
            description: "Part D",
            url: "https://drive.google.com/file/d/1xOqsDvtsJw8qpvrKBoQPQFsUj-YV-wmW/view?usp=drivesdk",
          },
          {
            title: "Lecture (5)",
            description: "Part E",
            url: "https://drive.google.com/file/d/1uc04r8E73LfRO-qT-U-FRYH6jr3JY7mG/view?usp=drivesdk",
          },
          {
            title: "Lecture (6)",
            description: "Part F",
            url: "https://drive.google.com/file/d/1tAPJx0RJEw3I1PQKxs5sFxt3FBAY_u2M/view?usp=drivesdk",
          },
          {
            title: "Lecture (7)",
            description: "Part G",
            url: "https://drive.google.com/file/d/1QWmsPuQbacQPphHM6pPs6lAVAyxW7wDE/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Limits of Functions",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1yWq6QrrvGPfnfeWDxGK5873_Z8akS5BO/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/16N8BCWZZsmYl4D3X3nAhK-ea7hHDV-B2/view?usp=drivesdk",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://drive.google.com/file/d/1qMv9EC_5PbPbBjta9KeCk2AxhTe73RUq/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : The Derivative",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1Vg4MYZ5OnIPokvZKBb7pO-TQpBaLlOWW/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/1XxNOGfYK_8V8smIm-07xFBMLbptQRgwz/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Applications of Derivatives",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://drive.google.com/file/d/1r-GNcMZTH1duQAMYrtvJI6Oej3V5a3l0/view?usp=drivesdk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://drive.google.com/file/d/1CvsQ3AlMmUhzH2kyGTz95i-xhiL9v_zs/view?usp=drivesdk",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Integrals",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/94MECfFrVlk",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/u86zHSSv5SU",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/QQZjBd6K7go",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Application of Definite Integral",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Part A",
            url: "https://youtu.be/tLHVZTdHuIM",
          },
          {
            title: "Lecture (2)",
            description: "Part B",
            url: "https://youtu.be/Fi3XfjnGz8s",
          },
          {
            title: "Lecture (3)",
            description: "Part C",
            url: "https://youtu.be/ZUwtWeFZ2fA",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Calculus - Thomas Calculus",
          url: "../../../documents/level-1/semester-1/mathematics/thomas-calculus-11-book.pdf",
        },
      ],
      extraResources: [
        {
          title: "Book Answers",
          url: "../../../documents/level-1/semester-1/mathematics/thomas-calculus-11-book.pdf",
          note: "Answers",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "404 - Not Found !",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Mathematics fo Health Sciences",
        "Course Code:": "MATH1303",
        "Faculty:": "Faculty of Science",
        "Department:": "Mathematics Departmen (MATH)",
        "Course Classification:": "College Need",
        "Course Level:": "1stst Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "terminology",
    title: "Medical & Pharmaceutical Terminology.",
    description:
      "Basics in Scientific English and Latin Origin of Medical & Pharmaceutical Terms",
    lecturers: [
      {
        name: "Jamil Mohanna",
      },
    ],
    stats: {
      videosCount: 10,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/Jyzxo9mJ6fU",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : The Prefix",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "The Prefix",
            url: "https://youtu.be/Lzv_k6uXuPk",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : The Suffix",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "The Suffix pt.A",
            url: "https://youtu.be/UizrjSx1C58",
          },
          {
            title: "Lecture (2)",
            description: "The Suffix pt.B",
            url: "https://youtu.be/OQAz0MOMQ9c",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : The Root",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "The Root",
            url: "https://youtu.be/erKyM9F97vY",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Pronunciation",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pronunciation",
            url: "https://youtu.be/g-A50RaU1e8",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Commonly used Terms",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Commonly used Terms",
            url: "https://youtu.be/jBKz81mZsxA",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Directional Terms",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Directional Terms",
            url: "https://youtu.be/88A_9HyKgkA",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter VIII => X : Medical & Pharmaceutical Abbreviations",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pharmaceutical Abbreviations",
            url: "https://youtu.be/MEnq9pBqbFY",
          },
          {
            title: "Lecture (2)",
            description: "Medical Abbreviations & Patient Profile",
            url: "https://youtu.be/u_qvnbBx_Bo",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Medical Terminology - A Body Systems Approach 8th Edition",
          url: "../../../documents/level-1/semester-1/terminology/Medical-Terminology-Systems-A-Body-Systems-Approach.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Final Exam of 2013 - Dr. Jamil Mohanna",
          url: "../../../documents/level-1/semester-1/terminology/exams/dr-jamil-final-2013.pdf",
        },
        {
          title: "Final Exam of 2014 - Dr. Jamil Mohanna",
          url: "../../../documents/level-1/semester-1/terminology/exams/dr-jamil-final-2014.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Medical & Pharmaceutical Terminology",
        "Course Code:": "PHPT1105",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Collage Need",
        "Course Level:": "1st Level",
        "Total Credits:": "1 Credit Hour",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "analytical-chemistry-1-maha",
    title: "Analytical Chemistry One.",
    description:
      "Qualitative Inorganic Analysis of Chemicals (Pharmaceutical Drugs)",
    lecturers: [
      {
        name: "Maha Al-khateeb",
      },
      {
        title: "Dr.",
        name: "Mai Ramadan",
        altLink: "analytical-chemistry-1",
      },
    ],
    stats: {
      videosCount: 22,
      chaptersCount: 3,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Complex & Nomenclature",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/analytical-chemistry-1/chapter-1-complex-and-nomenclature.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Complex & Nomenclature pt.A",
            url: "https://youtu.be/DkyqnDt_c7k",
          },
          {
            title: "Lecture (2)",
            description: "Complex & Nomenclature pt.B",
            url: "https://youtu.be/ESZB0gQZIL8",
          },
          {
            title: "Lecture (3)",
            description: "Complex & Nomenclature pt.C + Course outline",
            url: "https://youtu.be/9vSL5nIeOmg",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Anions−",
        chapterTitleNote: "(Direct & Indirect)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/analytical-chemistry-1/chapter-2-anions.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Classification of Anions",
            url: "https://youtu.be/Se2GVGBevac",
          },
          {
            title: "Lecture (2)",
            description: "Acetate Ion       (CH3COO-)",
            url: "https://youtu.be/lxqygL9_KCg",
          },
          {
            title: "Lecture (3)",
            description: "Carbonate Ion (CO3-2)",
            url: "https://youtu.be/hCjvvaVuyJE",
          },
          {
            title: "Lecture (4)",
            description:
              "Borate (Boric Acid), Flouride       (F-), Silicate Ion       (SiO3-2)",
            url: "https://youtu.be/L0Z68Cjbh48",
          },
          {
            title: "Lecture (5)",
            description: "unknown       couldn't find the Lecture",
            url: "404",
          },
          {
            title: "Lecture (6)",
            description: "Bromide (Br-) & Iodide       (I-)",
            url: "https://youtu.be/YO4F7f8JdhE",
          },
          {
            title: "Lecture (7)",
            description: "Iodide (I-) Cont. & Nitrate       (NO3-)",
            url: "https://youtu.be/6X97ZxAUwDk",
          },
          {
            title: "Lecture (8)",
            description: "Nitrite (NO2-) &       Cyanide (CN-)",
            url: "https://youtu.be/TdZhuQclNLc",
          },
          {
            title: "Lecture (9)",
            description:
              "Sulfate (SO4-2),       Sulfite (SO3-2)       & Thiosulfate (S2O3-2)",
            url: "https://youtu.be/rgjiM3drkVI",
          },
          {
            title: "Lecture (10)",
            description: "Sulfide (S-2) &       Thiocyanate(NCS-)",
            url: "https://youtu.be/lS2TvaZrQ0w",
          },
          {
            title: "Lecture (11)",
            description: "Chromate (CrO4-2)       & Phosphate (PO4-3)",
            url: "https://youtu.be/G1mFSFSS7fU",
          },
          {
            title: "Lecture (12)",
            description: "Review & Explanation",
            url: "https://youtu.be/t3vd1bVk4fE",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Cation+",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/analytical-chemistry-1/chapter-3-cations.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Classification of Cations",
            url: "https://youtu.be/cookrOvcR_M",
          },
          {
            title: "Lecture (2)",
            description: "HCL Group",
            url: "https://youtu.be/rmfRrikQDdc",
          },
          {
            title: "Lecture (3)",
            description: "Acidic H2S Group pt.A",
            url: "https://youtu.be/qfwpQnkfuVw",
          },
          {
            title: "Lecture (4)",
            description: "Acidic H2S Group pt.B",
            url: "https://youtu.be/Syv3fq4y0h4",
          },
          {
            title: "Lecture (5)",
            description: "Acidic H2S Group pt.C",
            url: "https://youtu.be/mxOh-agpz30",
          },
          {
            title: "Lecture (6)",
            description: "Acidic H2S Group pt.D + Basic       H2S Group",
            url: "https://youtu.be/-8FWnfZuTbM",
          },
          {
            title: "Lecture (7)",
            description: "Basic H2S Group Cont.",
            url: "https://youtu.be/ytYaCX9CMuE",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title:
            "Analytical Chemistry - Vogel's Qualitative Inorganic Analysis",
          url: "../../../documents/level-1/semester-2/analytical-chemistry-1/book/G_Svehla_Vogel's_Qualitative_Inorganic_Analysis_Prentice_Hall_1996.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mai Ramadan, Final Exam of 2016",
          url: "../../../documents/level-1/semester-2/analytical-chemistry-1/exams/dr-mai-ramadan-final-2016.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Analytical Chemistry I",
        "Course Code:": "PHCH1201",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "1st Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH1301", title: "General Chemistry 1", required: true },
      ],
    },
  },
  {
    slug: "analytical-chemistry-1",
    title: "Analytical Chemistry One.",
    description:
      "Qualitative Inorganic Analysis of Chemicals (Pharmaceutical Drugs)",
    lecturers: [
      {
        title: "Dr.",
        name: "Mai Ramadan",
      },
      {
        name: "Maha Al-khateeb",
        altLink: "analytical-chemistry-1-maha",
      },
    ],
    stats: {
      videosCount: 26,
      chaptersCount: 3,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Complex & Nomenclature",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/analytical-chemistry-1/chapter-1-complex-and-nomenclature.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Complex Nomenclature pt.A",
            url: "https://youtu.be/kE7swHya6dk",
          },
          {
            title: "Lecture (2)",
            description: "Complex Nomenclature pt.B",
            url: "https://youtu.be/nzMmv6SCIfw",
          },
          {
            title: "Lecture (3)",
            description: "Complex Nomenclature pt.C",
            url: "https://youtu.be/9Ly3FKlbUCA",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Anions−",
        chapterTitleNote: "(Direct & Indirect)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/analytical-chemistry-1/chapter-2-anions.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Week 1 Lecture 1",
            url: "https://m.youtube.com/watch?v=EfKIGw8ZlO4#",
          },
          {
            title: "Lecture (2)",
            description: "Week 1 Lecture 2",
            url: "https://m.youtube.com/watch?v=3W9wYzlVj0U#",
          },
          {
            title: "Lecture (3)",
            description: "Week 1 Lecture 3",
            url: "https://m.youtube.com/watch?v=dqgNDK2RIQE#",
          },
          {
            title: "Lecture (4)",
            description: "Week 1 Lecture 3 Cont.",
            url: "https://m.youtube.com/watch?v=pxZPhdI3xtI#",
          },
          {
            title: "Lecture (5)",
            description: "Week 2 Lecture 1",
            url: "https://m.youtube.com/watch?v=8WaQ8FRGAi8#",
          },
          {
            title: "Lecture (6)",
            description: "Week 2 Lecture 2",
            url: "https://m.youtube.com/watch?v=7NdAweyhsBg#",
          },
          {
            title: "Lecture (7)",
            description: "Week 2 Lecture 2 Cont.",
            url: "https://m.youtube.com/watch?v=5wrsqJ1-KrU#",
          },
          {
            title: "Lecture (8)",
            description: "Week 3 Lecture 1",
            url: "https://m.youtube.com/watch?v=DQmXXx1q7qM#",
          },
          {
            title: "Lecture (9)",
            description: "Week 3 Lecture 2",
            url: "https://m.youtube.com/watch?v=0XyI9skp5bM#",
          },
          {
            title: "Lecture (10)",
            description: "Week 4 Lecture 1",
            url: "https://m.youtube.com/watch?v=wcvdYu2RrUw#",
          },
          {
            title: "Lecture (11)",
            description: "Week 4 Lecture 2",
            url: "https://m.youtube.com/watch?v=C-hJ5-1pRrI#",
          },
          {
            title: "Lecture (12)",
            description: "Week 4 Discussion 1",
            url: "https://m.youtube.com/watch?v=aLJ02tlyP50#",
          },
          {
            title: "Lecture (13)",
            description: "Week 4 Discussion 2",
            url: "https://m.youtube.com/watch?v=6PkpZadmF3Y#",
          },
          {
            title: "Lecture (14)",
            description: "Week 5 Discussion 1",
            url: "https://m.youtube.com/watch?v=vGgS83V5erA#",
          },
          {
            title: "Lecture (15)",
            description: "Week 5 Discussion 2",
            url: "https://m.youtube.com/watch?v=gGW2W1oStPg#",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Cation+",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/analytical-chemistry-1/chapter-3-cations.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cations pt.A",
            url: "https://m.youtube.com/watch?v=YQTE22cIepE#",
          },
          {
            title: "Lecture (2)",
            description: "Cations pt.B",
            url: "https://m.youtube.com/watch?v=YPveu1i6JTk#",
          },
          {
            title: "Lecture (3)",
            description: "Cations pt.C",
            url: "https://m.youtube.com/watch?v=fpDgCKZcvNE#",
          },
          {
            title: "Lecture (4)",
            description: "Cations pt.D",
            url: "https://m.youtube.com/watch?v=ruYzVpiM1Jk#",
          },
          {
            title: "Lecture (5)",
            description: "Reviwe H2S Group",
            url: "https://m.youtube.com/watch?v=HOTVOyT5Ino#",
          },
          {
            title: "Lecture (6)",
            description: "Copper Subgroup pt.A",
            url: "https://m.youtube.com/watch?v=NTocc8O-JHI#",
          },
          {
            title: "Lecture (7)",
            description: "Copper Subgroup pt.B",
            url: "https://m.youtube.com/watch?v=1Kj3JWDTcc8#",
          },
          {
            title: "Lecture (8)",
            description: "Copper Subgroup Review",
            url: "https://m.youtube.com/watch?v=X_jTBPaHdro#",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title:
            "Analytical Chemistry - Vogel's Qualitative Inorganic Analysis",
          url: "../../../documents/level-1/semester-2/analytical-chemistry-1/book/G_Svehla_Vogel's_Qualitative_Inorganic_Analysis_Prentice_Hall_1996.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mai Ramadan, Final Exam of 2016",
          url: "../../../documents/level-1/semester-2/analytical-chemistry-1/exams/dr-mai-ramadan-final-2016.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Analytical Chemistry I",
        "Course Code:": "PHCH1201",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "1st Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH1301", title: "General Chemistry 1", required: true },
      ],
    },
  },
  {
    slug: "anatomy",
    title: "Human Anatomy & Histology.",
    description: "Basic General Anatomy & Histology for Pharmacy Students",
    lecturers: [
      {
        title: "Dr.",
        name: "Waheed Qudaih",
      },
    ],
    stats: {
      videosCount: 15,
      chaptersCount: 12,
    },
    lectures: [
      {
        chapterTitle:
          "Chapter I => III : Introduction to Human Anatomy & Histology",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter IV : Integumentary System",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter V : Skeletal System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Skeletal System pt.A",
            url: "https://youtu.be/fcwj-pI44fI",
          },
          {
            title: "Lecture (2)",
            description: "Skeletal System pt.B",
            url: "https://youtu.be/XG4-xy6VYhI",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Muscular System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Muscular System pt.A",
            url: "https://youtu.be/leGVlvb8eKk",
          },
          {
            title: "Lecture (2)",
            description: "Muscular System pt.B",
            url: "https://youtu.be/wu8B1NdBJac",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Nervous System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Nervous System pt.A",
            url: "https://youtu.be/ArfaXEO-GwQ",
          },
          {
            title: "Lecture (2)",
            description: "Nervous System pt.B",
            url: "https://youtu.be/5Gvt8yeNNy0",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Cardiovascular System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cardiovascular System pt.A",
            url: "https://youtu.be/sbqz3masi70",
          },
          {
            title: "Lecture (2)",
            description: "Cardiovascular System pt.B",
            url: "https://youtu.be/pFqzLCil2DA",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Lymphatic System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Lymphatic System",
            url: "https://youtu.be/6JuZ0MkLy7A",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Respiratory System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Respiratory System",
            url: "https://youtu.be/at240p6qRXQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI : Digestive System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Digestive System",
            url: "https://youtu.be/hlSJPrjXScs",
          },
        ],
      },
      {
        chapterTitle: "Chapter XII : Urinary System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Urinary System",
            url: "https://youtu.be/nVFCfEFmJzE",
          },
        ],
      },
      {
        chapterTitle: "Chapter XIII : Endocrine System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Endocrine System",
            url: "https://youtu.be/HQyQe4kPd7w",
          },
        ],
      },
      {
        chapterTitle: "Chapter XIV : Reproductive System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Reproductive System pt.A",
            url: "https://youtu.be/6g4yBQM3u0s",
          },
          {
            title: "Lecture (1)",
            description: "Reproductive System pt.B",
            url: "https://youtu.be/qNfaZkOEvf0",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Luay Nasser + Dr. Amal, Final Exam of 2016",
          url: "../../../documents/level-1/semester-2/anatomy/exams/dr-luay-final-2016.pdf",
        },
        {
          title: "Dr. Luay Nasser, Final Exam of 2017",
          url: "../../../documents/level-1/semester-2/anatomy/exams/dr-luay-and-dr-amal-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Human Anatomy & Histology",
        "Course Code:": "PHPT1203",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "1st Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT1301", title: "Cell Biology", required: true },
      ],
    },
  },
  {
    slug: "organic-chemistry-1",
    title: "Organic Chemistry One.",
    description:
      "Introduction to Organic Chemistry, Stereochemistry & Functional Groups (Alkanes, Alkenes, Alkynes, Alkyl Halides, Alcohols & Eather)",
    lecturers: [
      {
        title: "Prof.",
        name: "Usama Abu-mohsen",
      },
    ],
    stats: {
      videosCount: 27,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Organic Chemistry",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Acidity & Basicity pt.A",
            url: "https://youtu.be/gIubxYyoaTs",
          },
          {
            title: "Lecture (2)",
            description: "Acidity & Basicity pt.B",
            url: "https://youtu.be/sC-sLz4vi3A",
          },
          {
            title: "Lecture (3)",
            description: "Representation of Chemical Structure",
            url: "https://youtu.be/LvcTYTUUzhY",
          },
          {
            title: "Lecture (4)",
            description: "Functional Groups",
            url: "https://youtu.be/7sZ17QCDZAs",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Alkanes",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Alkanes pt.A",
            url: "https://youtu.be/emvIlaJmO_U",
          },
          {
            title: "Lecture (2)",
            description: "Alkanes pt.B",
            url: "https://youtu.be/ZG8b-MVbz1U",
          },
          {
            title: "Lecture (3)",
            description: "Alkanes pt.C",
            url: "https://youtu.be/s77oRKC9Zng",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Alkenes",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Alkenes pt.A",
            url: "https://youtu.be/LfEOORVOHGI",
          },
          {
            title: "Lecture (2)",
            description: "Alkenes pt.B",
            url: "https://youtu.be/mPDzu1F-59w",
          },
          {
            title: "Lecture (3)",
            description: "Alkenes pt.C",
            url: "https://youtu.be/SYwdr65cSmU",
          },
          {
            title: "Lecture (4)",
            description: "Alkenes pt.D",
            url: "https://youtu.be/IkWmCWEeWIk",
          },
          {
            title: "Lecture (5)",
            description: "Alkenes pt.E",
            url: "https://youtu.be/YDeSJykZKpo",
          },
          {
            title: "Lecture (6)",
            description: "Alkenes pt.F",
            url: "https://youtu.be/_NO0dC5w6so",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Alkynes",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Alkynes pt.A",
            url: "https://youtu.be/6PVZ4P1RxMU",
          },
          {
            title: "Lecture (2)",
            description: "Alkynes pt.B",
            url: "https://youtu.be/crJ7XDFYnNA",
          },
          {
            title: "Lecture (3)",
            description: "Alkynes pt.C",
            url: "https://youtu.be/b5Tskl2D0Jg",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Stereochemistry",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Stereochemistry pt.A",
            url: "https://youtu.be/9w8mrOLFu1o",
          },
          {
            title: "Lecture (2)",
            description: "Stereochemistry pt.B",
            url: "https://youtu.be/5gn8CxBY7JM",
          },
          {
            title: "Lecture (3)",
            description: "Stereochemistry pt.C",
            url: "https://youtu.be/uNl6lrM-Z6k",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Alkyl Halides",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Alkyl Halides pt.A",
            url: "https://youtu.be/p_YHOh86vxE",
          },
          {
            title: "Lecture (2)",
            description: "Alkyl Halides pt.B",
            url: "https://youtu.be/kEJ0J_3xrr8",
          },
          {
            title: "Lecture (3)",
            description: "Alkyl Halides pt.C",
            url: "https://youtu.be/d8lAMpX7UWI",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Alcohols",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Alcohols pt.A",
            url: "https://youtu.be/thfQQvMUzl4",
          },
          {
            title: "Lecture (2)",
            description: "Alcohols pt.B",
            url: "https://youtu.be/DwEsjGtzqU0",
          },
          {
            title: "Lecture (3)",
            description: "Alcohols pt.C",
            url: "https://youtu.be/TxsYb_mDn8Q",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Eather",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Eather pt.A",
            url: "https://youtu.be/StL9fZRx_1g",
          },
          {
            title: "Lecture (2)",
            description: "Eather pt.B",
            url: "https://youtu.be/1XWyMlsKNo4",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Organic Chemistry - John Mcmurry 9th Edition",
          url: "../../../documents/level-1/semester-2/organic-chemistry-1/Organic-Chemistry-John-McMurry-9th.pdf",
        },
      ],
      summaries: [
        {
          title: "Marah Isam Falit",
          url: "../../../documents/level-1/semester-2/organic-chemistry-1/summary/organic-chem-1-summary.pdf",
        },
      ],
      exams: [
        {
          title: "Dr. Kanan & Dr. Osama, Final Exam of 2016",
          url: "../../../documents/level-1/semester-2/organic-chemistry-1/exams/dr-kanaan-and-osama-final-2016.pdf",
        },
        {
          title: "Dr. Kanan Wahedy, Final Exam of 2017",
          url: "../../../documents/level-1/semester-2/organic-chemistry-1/exams/dr-kanan-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Organic Chemistry I",
        "Course Code:": "PHCH1303",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "1st Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "CHEM1301", title: "General Chemistry 1", required: true },
      ],
    },
  },
  {
    slug: "physical-pharamcy-1",
    title: "Physical Pharamcy One.",
    description:
      "Basics to the Department of Pharmaceutics & Industrial Pharmacy (Part I)",
    lecturers: [
      {
        name: "Manal Zourab",
      },
    ],
    stats: {
      videosCount: 21,
      chaptersCount: 7,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Physical Pharmacy",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/physical-pharmacy-1/chapter-1-introduction.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/iIwZLJm0Dl0",
          },
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/nU52AgG_XoA",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/invjtxI7Wlc",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : States of Matter",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/physical-pharmacy-1/chapter-2-states-of-matter.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (2)",
            description: "Gaseous State",
            url: "https://youtu.be/4JTUkmwsAdo",
          },
          {
            title: "Lecture (3)",
            description: "Molecular kinetic Energy",
            url: "https://youtu.be/suvtgQ45rI8",
          },
          {
            title: "Lecture (4)",
            description: "Liquid State",
            url: "https://youtu.be/__DX1uK-_Ys",
          },
          {
            title: "Lecture (5)",
            description: "Vapor Pressure of Liquid",
            url: "https://youtu.be/lYlt6NxS5SQ",
          },
          {
            title: "Lecture (6)",
            description: "Solid & Crystalline State",
            url: "https://youtu.be/jZfs6qcYdK4",
          },
          {
            title: "Lecture (7)",
            description: "Melting Point & Intermolecular Forces",
            url: "https://youtu.be/OlJ8jxB5-7w",
          },
          {
            title: "Lecture (8)",
            description: "Unknown       (couldn't find the lecture)",
            url: "404",
          },
          {
            title: "Lecture (9)",
            description: "Amorphous Solid",
            url: "https://youtu.be/k0T_WfEUzok",
          },
          {
            title: "Lecture (11)",
            description: "Two Component System Containing Liquid Phases",
            url: "https://youtu.be/vfNwfynf4hY",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Physical Properties of Drug Molecules",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/physical-pharmacy-1/chapter-3-physical-properties-of-drug-molecules.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Physical Properties of Drug Molecules",
            url: "https://youtu.be/zuyeeP-yvIk",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Solutions of Nonelectrolytes",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/physical-pharmacy-1/chapter-4-solutions-of-nonelectrolytes.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Nonelectrolytes",
            url: "https://youtu.be/FuCdUrnr77Y",
          },
          {
            title: "Lecture (2)",
            description: "Colligative Properties pt.A",
            url: "https://youtu.be/VzsiqBnxV24",
          },
          {
            title: "Lecture (3)",
            description: "Colligative Properties pt.B",
            url: "https://youtu.be/bbbFLKv4A34",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Solutions of Electrolytes",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/physical-pharmacy-1/chapter-5-solutions-of-electrolytes.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Solutions of Electrolytes",
            url: "https://youtu.be/BPQbjl3KTSY",
          },
          {
            title: "Lecture (2)",
            description: "Theory of Strong Electrolytes",
            url: "https://youtu.be/KhoyFunMQZA",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Buffered & Isotonic Solutions",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/physical-pharmacy-1/chapter-6-buffered-and-isotonic-solutions.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (2)",
            description: "Methods of Adjusting Tonicity",
            url: "https://youtu.be/JYQTiv7u1V8",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Solubility & Distribution Phenomenon",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-1/semester-2/physical-pharmacy-1/chapter-7-solubility-and-distribution-phenomena.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Solubility & Distribution Phenomenon",
            url: "https://youtu.be/hdr71Xx6Twk",
          },
          {
            title: "Lecture (2)",
            description: "Solubility of Liquid in Liquid",
            url: "https://youtu.be/xu2VR8qxGEo",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Physical Pharmacy - Alfred Martin 4th Edition",
          url: "../../../documents/level-1/semester-2/physical-pharmacy-1/book/Physical-Pharmacy-referance.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Hend Abu-amara, Final Exam of 2013",
          url: "../../../documents/level-1/semester-2/physical-pharmacy-1/exams/dr-hend-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Physical Pharmacy I",
        "Course Code:": "PHTC1201",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "College Need",
        "Course Level:": "1st Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "CHEM1301", title: "General Chemistry", required: true },
      ],
    },
  },
  {
    slug: "analytical-chemistry-2",
    title: "Analytical Chemistry Two.",
    description:
      "Quantitative Inorganic Analysis of Chemicals (Pharmaceutical Drugs)",
    lecturers: [
      {
        title: "Dr.",
        name: "Mai Ramadan",
      },
    ],
    stats: {
      videosCount: 32,
      chaptersCount: 7,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Gravimetry",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/chapter-1-gravimetry.pdf",
            type: "slides",
          },
          {
            title: "Test Yourself",
            url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/chapter-1-exercise.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Gravimetry pt.A",
            url: "https://youtu.be/2sMMcC0ng9M",
          },
          {
            title: "Lecture (2)",
            description: "Gravimetry pt.B",
            url: "https://youtu.be/RjPiX6D3o3I",
          },
          {
            title: "Lecture (3)",
            description: "Gravimetry pt.C",
            url: "https://youtu.be/efKm9BOHPak",
          },
          {
            title: "Lecture (4)",
            description: "Gravimetry pt.D",
            url: "https://youtu.be/j1qh0B7jPK4",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Volumetry",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/chapter-2-volumetry.pdf",
            type: "slides",
          },
          {
            title: "Test Yourself",
            url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/chapter-2-exercise.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Volumetry pt.A",
            url: "https://youtu.be/r1AKNwQ3_dg",
          },
          {
            title: "Lecture (2)",
            description: "Volumetry pt.B",
            url: "https://youtu.be/2nICGlDZYOQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Acid-Base Titration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/chapter-3-acid–base-titration.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Acid-Base Titration pt.A",
            url: "https://youtu.be/_er1mnlMLGc",
          },
          {
            title: "Lecture (2)",
            description: "Acid-Base Titration pt.B",
            url: "https://youtu.be/_1ZJRI6feFI",
          },
          {
            title: "Lecture (3)",
            description: "Acid-Base Titration pt.C",
            url: "https://youtu.be/F23ZgOd1O5o",
          },
          {
            title: "Lecture (4)",
            description: "Acid-Base Titration pt.D",
            url: "https://youtu.be/492J-PDFiHw",
          },
          {
            title: "Lecture (5)",
            description: "Acid-Base Titration pt.E",
            url: "https://youtu.be/81zDYBA2Fgo",
          },
          {
            title: "Lecture (6)",
            description: "Acid-Base Titration pt.F I",
            url: "https://youtu.be/dWIq-8YZ0yA",
          },
          {
            title: "Lecture (7)",
            description: "Acid-Base Titration pt.F II",
            url: "https://youtu.be/R3upoc3GKM0",
          },
          {
            title: "Lecture (8)",
            description: "Acid-Base Titration pt.G I",
            url: "https://youtu.be/Z_Y5jQRPFfk",
          },
          {
            title: "Lecture (9)",
            description: "Acid-Base Titration pt.G II",
            url: "https://youtu.be/rWIr-j3bkQE",
          },
          {
            title: "Lecture (10)",
            description: "Acid-Base Titration pt.H I",
            url: "https://youtu.be/b8ybLcNq1sI",
          },
          {
            title: "Lecture (11)",
            description: "Acid-Base Titration pt.H II",
            url: "https://youtu.be/vpOVN4GjMPU",
          },
          {
            title: "Lecture (12)",
            description: "Acid-Base Titration Problems",
            url: "https://youtu.be/AuJKYSupQUQ",
          },
          {
            title: "Lecture (14)",
            description: "Acid-Base Titration pt.J",
            url: "https://youtu.be/YOdEmKfRu1A",
          },
          {
            title: "Lecture (15)",
            description: "Acid-Base Titration Problems Cont.",
            url: "https://youtu.be/dYfgyWrvxo4",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Redox Titration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/chapter-4-redox-titration.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Redox pt.A",
            url: "https://youtu.be/5_oLi6gGGBY",
          },
          {
            title: "Lecture (2)",
            description: "Redox Problems",
            url: "https://youtu.be/ZD9IB1R4Sfw",
          },
          {
            title: "Lecture (3)",
            description: "Redox pt.B",
            url: "https://youtu.be/qCAen-RKE5o",
          },
          {
            title: "Lecture (4)",
            description: "Redox pt.C",
            url: "https://youtu.be/0sO-amk1DNY",
          },
          {
            title: "Lecture (5)",
            description: "Redox pt.D",
            url: "https://youtu.be/NX4a6uWz2hg",
          },
          {
            title: "Lecture (6)",
            description: "Redox pt.E",
            url: "https://youtu.be/Ny1evi1iTrw",
          },
          {
            title: "Lecture (7)",
            description: "Redox pt.F",
            url: "https://youtu.be/v_ijD3zKLcA",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Precipitation Titration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/chapter-5-precipitation-titration.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (3)",
            description: "Argenometry pt.C",
            url: "https://youtu.be/kJsNeOlzte0",
          },
          {
            title: "Lecture (4)",
            description: "Argenometry pt.D",
            url: "https://youtu.be/0bMPypx7d-U",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Complexometric Titration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/chapter-6-complexometric-titration.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "EDTA pt.A",
            url: "https://youtu.be/6WRLQxC6FkM",
          },
          {
            title: "Lecture (2)",
            description: "EDTA pt.B",
            url: "https://youtu.be/-JfFmf9MGZE",
          },
          {
            title: "Lecture (3)",
            description: "EDTA pt.C",
            url: "https://youtu.be/VdpaT5oxbpE",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Potentiometric Titration",
        documents: [],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      extraResources: [
        {
          title: "Book Answers",
          url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/book-answers.pdf",
          note: "Book Answers",
        },
        {
          title: "pKa & pKb Values",
          url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/pka-pkb.pdf",
          note: "pKa & pKb Values",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mai Ramadan, Final Exam of 2013",
          url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/exams/dr-mai-ramadan-final-2013.pdf",
        },
        {
          title: "Dr. Mai Ramadan, Final Exam of 2015",
          url: "../../../documents/level-2/semester-1/alalytical-chemistry-2/exams/dr-mai-ramadan-final-2015.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Analytical Chemistry II",
        "Course Code:": "PHCH2304",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "CHEM1301", title: "General Chemistry", required: true },
        { code: "PHCH1201", title: "Analytical Chemistry I", required: false },
      ],
    },
  },
  {
    slug: "microbiology",
    title: "Pharamceutical Microboilogy & Parasitology.",
    description:
      "Pharamceutical Bacteriology, Mycology, Parasitology & Virology",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Taleb",
      },
    ],
    stats: {
      videosCount: 24,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction & Classification of Bacteria",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/microbiology/chapter-1.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/daq7fmxdJx8",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/NDBQAKicNWw",
          },
          {
            title: "Lecture (3)",
            description: "Introduction pt.C",
            url: "https://youtu.be/U3ZnvOikuQQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Bacterial Infection & Pathogenesis",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/microbiology/chapter-2.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pathogenesis of Bacteria Infection pt.A",
            url: "https://youtu.be/i65sT5yc-LM",
          },
          {
            title: "Lecture (2)",
            description: "Pathogenesis of Bacteria Infection pt.B",
            url: "https://youtu.be/blXvJUxbJm4",
          },
          {
            title: "Lecture (3)",
            description: "Pathogenesis of Bacteria Infection pt.C",
            url: "https://youtu.be/rDkwPqizArs",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Classification of Bacteria",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Classification of Bacteria pt.A",
            url: "https://youtu.be/sL7IXpv8vfs",
          },
          {
            title: "Lecture (2)",
            description: "Classification of Bacteria pt.B",
            url: "https://youtu.be/SsVo73TV21c",
          },
          {
            title: "Lecture (3)",
            description: "Classification of Bacteria pt.C",
            url: "https://youtu.be/zizeYw_kEwk",
          },
          {
            title: "Lecture (4)",
            description: "Classification of Bacteria pt.D",
            url: "https://youtu.be/oNVbaRD36yE",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Cocci",
        chapterTitleNote: "(Ch: 4, 5)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/microbiology/Chapter-3.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Streptococci",
            url: "https://youtu.be/mcOhxgIZz7k",
          },
          {
            title: "Lecture (2)",
            description: "Neisseria",
            url: "https://youtu.be/3qNGSl_FKhk",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Bacilli",
        chapterTitleNote: "(Ch: 6, 7, 8, 9, 10, 11)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Aerobic Non-Spore Forming",
            url: "https://youtu.be/FOaUKAskKBU",
          },
          {
            title: "Lecture (2)",
            description: "Aerobic Spore-forming Bacillus Species",
            url: "https://youtu.be/xv7MQcWL81U",
          },
          {
            title: "Lecture (3)",
            description: "Non Aerobic Spore-forming Clostridium Species pt.A",
            url: "https://youtu.be/cLnrFDGEPjU",
          },
          {
            title: "Lecture (4)",
            description: "Non Aerobic Spore-forming Clostridium Species pt.B",
            url: "https://youtu.be/VcxJSLywI8M",
          },
          {
            title: "Lecture (5)",
            description: "Gram Negative Bacilli pt.A",
            url: "https://youtu.be/jKFM_Xgl-Ks",
          },
          {
            title: "Lecture (6)",
            description: "Gram Negative Bacilli pt.B",
            url: "https://youtu.be/UOdwfFTgI-c",
          },
          {
            title: "Lecture (7)",
            description: "Gram Negative Bacilli pt.C",
            url: "https://youtu.be/2SEvI5K0WSg",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Medical Mycology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/microbiology/mycology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Medical Mycology",
            url: "https://youtu.be/v9NptawV6QA",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Medical Parasitology",
        chapterTitleNote: "(Protozoa & Helminths)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/microbiology/parasitology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Protozoa (Giardia Intestinalis)",
            url: "https://youtu.be/6c4UgdxL5dI",
          },
          {
            title: "Lecture (2)",
            description: "Protozoa (Sarcodina)",
            url: "https://youtu.be/rpjUtgSMP84",
          },
          {
            title: "Lecture (3)",
            description: "Helminths (Trematoda & Cestoda)",
            url: "https://youtu.be/tazwuCPwqfk",
          },
          {
            title: "Lecture (4)",
            description: "Helminths (Nematoda)",
            url: "https://youtu.be/xdQ-9Xpe1wg",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Medical Virology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/microbiology/virology.pdf",
            type: "slides",
          },
        ],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Review of Medical Microbiology & Immunology 40th Edition",
          url: "../../../documents/level-2/semester-1/microbiology/book/Review-of-Medical-Microbiology-and-Immunology.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mohammed Taleb, Final Exam of 2014",
          url: "../../../documents/level-2/semester-1/microbiology/exams/dr-mohammed-taleb-final-2014.pdf",
        },
        {
          title: "Dr. Mohammed Taleb, Final Exam of 2015",
          url: "../../../documents/level-2/semester-1/microbiology/exams/dr-mohammed-taleb-final-2015.pdf",
        },
        {
          title: "Dr. Rahifa Al-Hadad, Final Exam",
          url: "../../../documents/level-2/semester-1/microbiology/exams/dr-rahifa-final.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutical Microbiology & Parasitology",
        "Course Code:": "PHTC2305",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT1301", title: "Cell Biology", required: true },
      ],
    },
  },
  {
    slug: "organic-chemistry-2",
    title: "Organic Chemistry Two.",
    description:
      "Nomenclature of Polyfunctional Organic Compounds, Functional Groups Cont. (Benzene, Carboxylic Acid, Amines & Phenols) & Applications",
    lecturers: [
      {
        title: "Dr.",
        name: "Kanan Wahedy",
      },
    ],
    stats: {
      videosCount: 33,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Revision of Necessary Chemistry Basics",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/organic-chemistry-2/chapter-1-revision.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Functional Groups",
            url: "https://youtu.be/aznPKsCJa4s",
          },
          {
            title: "Lecture (2)",
            description: "Resonance",
            url: "https://youtu.be/PeWQ9nZA79U",
          },
          {
            title: "Lecture (3)",
            description: "Acidity & Basicity pt.A",
            url: "https://youtu.be/fnlGGZxLcBI",
          },
          {
            title: "Lecture (4)",
            description: "Acidity & Basicity pt.B",
            url: "https://youtu.be/K-ZzJdtrBbo",
          },
          {
            title: "Lecture (5)",
            description: "Acidity & Basicity pt.C",
            url: "https://youtu.be/60gyOz1hals",
          },
          {
            title: "Lecture (6)",
            description: "Acidity & Basicity pt.D",
            url: "https://youtu.be/dipvqtK9TUs",
          },
          {
            title: "Lecture (7)",
            description: "Acidity & Basicity pt.E",
            url: "https://youtu.be/7cStz6EPn_A",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Benzene & Aromaticity",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/organic-chemistry-2/chapter-2-benzen-and-aromaticity.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Benzene & Aromaticity pt.A",
            url: "https://youtu.be/Jt7Ec7RTB94",
          },
          {
            title: "Lecture (2)",
            description: "Benzene & Aromaticity pt.B",
            url: "https://youtu.be/VC8m944aFEk",
          },
          {
            title: "Lecture (3)",
            description: "Benzene & Aromaticity pt.C",
            url: "https://youtu.be/e9wnRVPU1pk",
          },
          {
            title: "Lecture (4)",
            description: "Benzene & Aromaticity pt.D",
            url: "https://youtu.be/149Ri14T4Ak",
          },
          {
            title: "Lecture (5)",
            description: "Discussion",
            url: "https://youtu.be/_c7TJZ3Gu5w",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter III : Nomenclature of Polyfunctional Organic Compounds",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/organic-chemistry-2/chapter-3-nomenclature.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Carboxylic Acid",
            url: "https://youtu.be/F1d3GpNvJ2k",
          },
          {
            title: "Lecture (2)",
            description: "Ester",
            url: "https://youtu.be/hLf99j4IghQ",
          },
          {
            title: "Lecture (3)",
            description: "Acid Halide",
            url: "https://youtu.be/SPcQlJcpYYo",
          },
          {
            title: "Lecture (4)",
            description: "Amide & Nitrile",
            url: "https://youtu.be/lMSEj6DIDK0",
          },
          {
            title: "Lecture (5)",
            description: "Aldehydr, Ketone & Amine",
            url: "https://youtu.be/o8aKoqUgXnE",
          },
          {
            title: "Lecture (6)",
            description: "Nomenclature Applications",
            url: "https://youtu.be/IMmiwm9d6F4",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Reactions of Benzene",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/organic-chemistry-2/chapter-4-reactions-of-benzene.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Reactions of Benzene pt.A",
            url: "https://youtu.be/HxIClsBRW3U",
          },
          {
            title: "Lecture (2)",
            description: "Reactions of Benzene pt.B",
            url: "https://youtu.be/huC_mWXLOP8",
          },
          {
            title: "Lecture (3)",
            description: "Reactions of Benzene pt.C",
            url: "https://youtu.be/LA49Gr8cQOI",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : α-Carbonyl Reactions",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/organic-chemistry-2/chapter-5-alpha-carbonyl-reactions.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "α-Carbonyl Condensation Reactions pt.A",
            url: "https://youtu.be/CXjW-jB6H3s",
          },
          {
            title: "Lecture (2)",
            description: "α-Carbonyl Condensation Reactions pt.B",
            url: "https://youtu.be/z8B-fNNIDSE",
          },
          {
            title: "Lecture (3)",
            description: "α-Carbonyl Condensation Reactions pt.C",
            url: "https://youtu.be/_McSSVCBYBU",
          },
          {
            title: "Lecture (4)",
            description: "α-Carbonyl Substitution Reactions",
            url: "https://youtu.be/wqguFOvjnVM",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Carboxylic Acid & its Derivatives",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/organic-chemistry-2/chapter-6-carboxylic-acid.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Carboxylic Acid",
            url: "https://youtu.be/kBBeyE2QnB0",
          },
          {
            title: "Lecture (2)",
            description: "Acid Halide",
            url: "https://youtu.be/BZ8wuFpoAyk",
          },
          {
            title: "Lecture (3)",
            description: "Acid Anhydride",
            url: "https://youtu.be/nWgiy5Ixgm0",
          },
          {
            title: "Lecture (4)",
            description: "Ester",
            url: "https://youtu.be/KOlHFLDy64g",
          },
          {
            title: "Lecture (5)",
            description: "Amide & Nitrile",
            url: "https://youtu.be/SwLK3EpjJc4",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Amines & Phenols",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/organic-chemistry-2/chapter-7-amines-and-phenols.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Amines & Phenols pt.A",
            url: "https://youtu.be/9ApoYdm2SpY",
          },
          {
            title: "Lecture (2)",
            description: "Amines & Phenols pt.B",
            url: "https://youtu.be/v3W0I25LXdM",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Applications & Discussion",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/organic-chemistry-2/chapter-8-applications.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Applications & Discussion",
            url: "https://youtu.be/h_ydnLJ15yo",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Organic Chemistry - John Mcmurry 9th Edition",
          url: "../../../documents/level-1/semester-2/organic-chemistry-1/Organic-Chemistry-John-McMurry-9th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Kanan Wahedy, Final Exam of 2012",
          url: "../../../documents/level-2/semester-1/organic-chemistry-2/exams/dr-kanaan-final-2012.pdf",
        },
        {
          title: "Dr. Kanan Wahedy, Final Exam of 2013",
          url: "../../../documents/level-2/semester-1/organic-chemistry-2/exams/dr-kanaan-final-2013.pdf",
        },
        {
          title: "Dr. Kanan Wahedy, Final Exam of 2018",
          url: "../../../documents/level-2/semester-1/organic-chemistry-2/exams/dr-kanaan-final-2018.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Organic Chemistry II",
        "Course Code:": "PHCH2306",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "CHEM1301", title: "General Chemistry", required: false },
        { code: "PHCH1303", title: "Organic Chemistry I", required: true },
      ],
    },
  },
  {
    slug: "physical-pharmacy-2-ibtihal",
    title: "Physical Pharamcy Two.",
    description:
      "Basics to the Department of Pharmaceutics & Industrial Pharmacy (Part II)",
    lecturers: [
      {
        name: "Ibtihal Al-astal",
      },
      {
        name: "Manal Zourab",
        altLink: "physical-pharmacy-2-manal",
      },
      {
        title: "Dr.",
        name: "Hend Abu-amara",
        altLink: "physical-pharmacy-2",
      },
    ],
    stats: {
      videosCount: 18,
      chaptersCount: 5,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Chemical Kinetics & Stability",
        documents: [],
        videos: [
          {
            title: "Lecture (0) - Dr. Manal",
            description: "Course Outline & Introduction",
            url: "https://youtu.be/uPAl4XbzmPU",
          },
          {
            title: "Lecture (1) - Dr. Manal",
            description: "Pseudo (Zero) Order Reactions pt.A",
            url: "https://youtu.be/YGnvXgWAaBw",
          },
          {
            title: "Lecture (2)",
            description: "Chemical Kinetics & Stability pt.B",
            url: "https://youtu.be/MF6yfx-X6pc",
          },
          {
            title: "Lecture (3)",
            description: "Chemical Kinetics & Stability pt.C",
            url: "https://youtu.be/36awl9s2jzU",
          },
          {
            title: "Lecture (4)",
            description: "Chemical Kinetics & Stability pt.D",
            url: "https://youtu.be/aGFHKi40ATU",
          },
          {
            title: "Lecture (5)",
            description: "Chemical Kinetics & Stability pt.E",
            url: "https://youtu.be/Rh5HD5brUZQ",
          },
          {
            title: "Lecture (6)",
            description: "Chemical Kinetics & Stability pt.F",
            url: "https://youtu.be/sH-iDxomqdM",
          },
          {
            title: "Lecture (7)",
            description: "Chemical Kinetics & Stability pt.G",
            url: "https://youtu.be/u3glBATySsQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Interfacial Phenomena",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Interfacial Phenomena pt.A",
            url: "https://www.youtube.com/watch?v=luL_sCcycOY",
          },
          {
            title: "Lecture (2)",
            description: "Interfacial Phenomena pt.B",
            url: "https://youtu.be/2SC8QP7-vVM",
          },
          {
            title: "Lecture (3)",
            description: "Interfacial Phenomena pt.C",
            url: "https://youtu.be/EDS2Hl09tx8",
          },
          {
            title: "Lecture (4)",
            description: "Interfacial Phenomena pt.D",
            url: "https://youtu.be/vi4kQr3jL0Y",
          },
          {
            title: "Lecture (5)",
            description: "Interfacial Phenomena pt.E",
            url: "https://youtu.be/bqPxFUOR8AA",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Colloidal Dispersion",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Colloidal Dispersion pt.A",
            url: "https://youtu.be/Lu-KDKzsJLQ",
          },
          {
            title: "Lecture (2)",
            description: "Colloidal Dispersion pt.B",
            url: "https://youtu.be/ZAiSR7nWCwc",
          },
          {
            title: "Lecture (3)",
            description: "Colloidal Dispersion pt.C",
            url: "https://youtu.be/1YDXyF8j9Kc",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Coarse Dispersion",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter V : Rheology",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Rheology pt.A",
            url: "https://www.youtube.com/watch?v=UdXh53yUz2A",
          },
          {
            title: "Lecture (2)",
            description: "Rheology pt.B",
            url: "https://www.youtube.com/watch?v=MQ86UL3tB14",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Physical Pharmacy - Alfred Martin 4th Edition",
          url: "../../../documents/level-1/semester-2/physical-pharmacy-1/book/Physical-Pharmacy-referance.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Hind Abu-amara, Final Exam of 2010",
          url: "../../../documents/level-2/semester-1/physical-pharmacy-2/exams/dr-hind-final-2010.pdf",
        },
        {
          title: "Dr. Hind Abu-amara, Final Exam of 2012",
          url: "../../../documents/level-2/semester-1/physical-pharmacy-2/exams/dr-hind-final-2012.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Physical Pharmacy II",
        "Course Code:": "PHTC2203",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "CHEM1301", title: "General Chemistry 1", required: true },
        { code: "PHTC1201", title: "Physical Pharmacy I", required: false },
      ],
    },
  },
  {
    slug: "physical-pharmacy-2-manal",
    title: "Physical Pharamcy Two.",
    description:
      "Basics to the Department of Pharmaceutics & Industrial Pharmacy (Part II)",
    lecturers: [
      {
        name: "Manal Zourab",
      },
      {
        name: "Ibtihal Al-astal",
        altLink: "physical-pharmacy-2-ibtihal",
      },
      {
        title: "Dr.",
        name: "Hend Abu-amara",
        altLink: "physical-pharmacy-2",
      },
    ],
    stats: {
      videosCount: 16,
      chaptersCount: 5,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Chemical Kinetics & Stability",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/physical-pharmacy-2/chapter-1-chemical-kinetics.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course Outline & Introduction",
            url: "https://youtu.be/uPAl4XbzmPU",
          },
          {
            title: "Lecture (1)",
            description: "Pseudo (Zero) Order Reactions pt.A",
            url: "https://youtu.be/YGnvXgWAaBw",
          },
          {
            title: "Lecture (2)",
            description: "Pseudo (Zero) Order Reactions pt.A",
            url: "https://youtu.be/-cDl-bi5v6k",
          },
          {
            title: "Lecture (3)",
            description:
              "Pseudo (Zero) Order Reactions pt.B + 1st       Order Reactions",
            url: "https://youtu.be/-cDl-bi5v6k",
          },
          {
            title: "Lecture (4)",
            description: "2nd Order Reactions",
            url: "https://youtu.be/ffN0IWzAOfU",
          },
          {
            title: "Lecture (5)",
            description: "Complex Reactions",
            url: "https://youtu.be/w37YtSfjwbI",
          },
          {
            title: "Lecture (6)",
            description: "Factors Affecting Rate of Reactions",
            url: "https://youtu.be/9l82IQNL_iA",
          },
          {
            title: "Lecture (7)",
            description: "Catalysis",
            url: "https://youtu.be/VV-kA-rXCuw",
          },
          {
            title: "Lecture (8)",
            description: "Stability of Pharmaceuticals",
            url: "https://youtu.be/4b4QswvWjYY",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Interfacial Phenomena",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/physical-pharmacy-2/chapter-2-interfacial-phenomena.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (2)",
            description:
              "Measurement of Surface & Interfacial Tension       pt.A",
            url: "https://youtu.be/PLB8RKBB7dw",
          },
          {
            title: "Lecture (4)",
            description: "Adsorption at Liquid Interfaces + Surfactants",
            url: "https://youtu.be/Ksj8gb3oc2E",
          },
          {
            title: "Lecture (5)",
            description:
              "Surfactants Cont. + Applications of Surface       Active Agents",
            url: "https://youtu.be/jS_zKqzWPbY",
          },
          {
            title: "Lecture (6)",
            description: "Applications of Surface Active Agents Cont.",
            url: "https://youtu.be/Sp51rf130bQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Colloidal Dispersion",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/physical-pharmacy-2/chapter-3-colloidal-dispersion.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Colloidal Dispersion",
            url: "https://youtu.be/uUx5gos4to8",
          },
          {
            title: "Lecture (2)",
            description: "Types of Colloidal Systems",
            url: "https://youtu.be/atkUePlYsHM",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Coarse Dispersion",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter V : Rheology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/physical-pharmacy-2/chapter-5-rheology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Rheology",
            url: "https://youtu.be/VSWr9twEl9k",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Physical Pharmacy - Alfred Martin 4th Edition",
          url: "../../../documents/level-1/semester-2/physical-pharmacy-1/book/Physical-Pharmacy-referance.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Hind Abu-amara, Final Exam of 2010",
          url: "../../../documents/level-2/semester-1/physical-pharmacy-2/exams/dr-hind-final-2010.pdf",
        },
        {
          title: "Dr. Hind Abu-amara, Final Exam of 2012",
          url: "../../../documents/level-2/semester-1/physical-pharmacy-2/exams/dr-hind-final-2012.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Physical Pharmacy II",
        "Course Code:": "PHTC2203",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "CHEM1301", title: "General Chemistry 1", required: true },
        { code: "PHTC1201", title: "Physical Pharmacy I", required: false },
      ],
    },
  },
  {
    slug: "physical-pharmacy-2",
    title: "Physical Pharamcy Two.",
    description:
      "Basics to the Department of Pharmaceutics & Industrial Pharmacy (Part II)",
    lecturers: [
      {
        title: "Dr.",
        name: "Hend Abu-amara",
      },
      {
        name: "Ibtihal Al-astal",
        altLink: "physical-pharmacy-2-ibtihal",
      },
      {
        name: "Manal Zourab",
        altLink: "physical-pharmacy-2-manal",
      },
    ],
    stats: {
      videosCount: 7,
      chaptersCount: 5,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Chemical Kinetics & Stability",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Interfacial Phenomena",
            url: "https://www.youtube.com/watch?v=R2hTFAGfpVA",
          },
          {
            title: "Lecture (2)",
            description: "Measurement of Surface Tension",
            url: "https://www.youtube.com/watch?v=iQOB8DYy5tM",
          },
          {
            title: "Lecture (3)",
            description: "Spreading Coefficient",
            url: "https://www.youtube.com/watch?v=UB-GLbOONc0",
          },
          {
            title: "Lecture (4)",
            description: "Adsorption at Liquid Interfaces",
            url: "https://www.youtube.com/watch?v=EXOQ8UTUCEE",
          },
          {
            title: "Lecture (5)",
            description:
              "Systems of Hydrophile − Lipophile       Classification",
            url: "https://www.youtube.com/watch?v=LP-v326VpHM",
          },
          {
            title: "Lecture (6)",
            description: "Types of Monolayer at Liquid Surfaces pt.A",
            url: "https://www.youtube.com/watch?v=Kna4uztGM4E",
          },
          {
            title: "Lecture (7)",
            description: "Types of Monolayer at Liquid Surfaces pt.B",
            url: "https://www.youtube.com/watch?v=rCVcO0K1JqE",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Interfacial Phenomena",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter III : Colloidal Dispersion",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter IV : Coarse Dispersion",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter V : Rheology",
        documents: [],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Physical Pharmacy - Alfred Martin 4th Edition",
          url: "../../../documents/level-1/semester-2/physical-pharmacy-1/book/Physical-Pharmacy-referance.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Hind Abu-amara, Final Exam of 2010",
          url: "../../../documents/level-2/semester-1/physical-pharmacy-2/exams/dr-hind-final-2010.pdf",
        },
        {
          title: "Dr. Hind Abu-amara, Final Exam of 2012",
          url: "../../../documents/level-2/semester-1/physical-pharmacy-2/exams/dr-hind-final-2012.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Physical Pharmacy II",
        "Course Code:": "PHTC2203",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "CHEM1301", title: "General Chemistry 1", required: true },
        { code: "PHTC1201", title: "Physical Pharmacy I", required: false },
      ],
    },
  },
  {
    slug: "physiology-1",
    title: "Human Physiology One.",
    description:
      "Introduction to Human Physiology || CNS, PNS & Muscle Physiology",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Shbair",
      },
    ],
    stats: {
      videosCount: 26,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Physiology & Homeostasis",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/physiology-1/chapter-1-homeostasis.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Course outline & Homeostasis pt.A",
            url: "https://youtu.be/LIV0pmKG1R4",
          },
          {
            title: "Lecture (2)",
            description: "Homeostasis pt.B",
            url: "https://youtu.be/G5wLlne40-4",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Membrane Potential",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/physiology-1/chapter-3-membrane-potential.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Membrane Potential pt.A",
            url: "https://youtu.be/aYDKSuDFg9I",
          },
          {
            title: "Lecture (2)",
            description: "Membrane Potential pt.B",
            url: "https://youtu.be/tOLXz1xVRJo",
          },
          {
            title: "Lecture (3)",
            description: "Membrane Potential pt.C",
            url: "https://youtu.be/Zy4TFy-5qos",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Neuronal Physiology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/physiology-1/chapter-4-neuronal-physiology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Neuronal Physiology pt.A I",
            url: "https://youtu.be/Yu66TKPi2hs",
          },
          {
            title: "Lecture (2)",
            description: "Neuronal Physiology pt.A II",
            url: "https://youtu.be/l0Q685oyzEw",
          },
          {
            title: "Lecture (3)",
            description: "Neuronal Physiology pt.B I",
            url: "https://youtu.be/H7N41lZiaQ8",
          },
          {
            title: "Lecture (4)",
            description: "Neuronal Physiology pt.B II",
            url: "https://youtu.be/SNoE6xHCahI",
          },
          {
            title: "Lecture (5)",
            description: "Neuronal Physiology pt.C I",
            url: "https://youtu.be/5IKRxIhgVOA",
          },
          {
            title: "Lecture (6)",
            description: "Neuronal Physiology pt.C II",
            url: "https://youtu.be/myXNIW8uMSY",
          },
          {
            title: "Lecture (7)",
            description: "Neuronal Physiology pt.D I",
            url: "https://youtu.be/yw_Ij-JM9NE",
          },
          {
            title: "Lecture (8)",
            description: "Neuronal Physiology pt.D II",
            url: "https://youtu.be/FUFJlyJWv7o",
          },
          {
            title: "Lecture (9)",
            description: "Neuronal Physiology pt.E I",
            url: "https://youtu.be/QXhN-t2i1fU",
          },
          {
            title: "Lecture (10)",
            description: "Neuronal Physiology pt.E II",
            url: "https://youtu.be/VBrpthzSXyw",
          },
          {
            title: "Lecture (11)",
            description: "Neuronal Physiology pt.E III",
            url: "https://youtu.be/ypkBS6ADszE",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : CNS Physiology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-1/physiology-1/chapter-5-cns-physiology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "CNS Physiology pt.A",
            url: "https://youtu.be/dJl0gX756Lo",
          },
          {
            title: "Lecture (2)",
            description: "CNS Physiology pt.A Cont.",
            url: "https://youtu.be/krxV9TkYIbA",
          },
          {
            title: "Lecture (3)",
            description: "CNS Physiology pt.B I",
            url: "https://youtu.be/a4PTzsC_cB8",
          },
          {
            title: "Lecture (4)",
            description: "CNS Physiology pt.B II",
            url: "https://youtu.be/0KeAmbOOebw",
          },
          {
            title: "Lecture (5)",
            description: "CNS Physiology pt.C I",
            url: "https://youtu.be/x91hsC8t77s",
          },
          {
            title: "Lecture (6)",
            description: "CNS Physiology pt.C II",
            url: "https://youtu.be/SQyhNf4V6GU",
          },
          {
            title: "Lecture (7)",
            description: "CNS Physiology pt.D I",
            url: "https://youtu.be/VQ4slUpYR2U",
          },
          {
            title: "Lecture (8)",
            description: "CNS Physiology pt.D II",
            url: "https://youtu.be/Bc60GxOaCWQ",
          },
          {
            title: "Lecture (9)",
            description: "CNS Physiology pt.E I",
            url: "https://youtu.be/xjDbCm1L1z0",
          },
          {
            title: "Lecture (10)",
            description: "CNS Physiology pt.E II",
            url: "https://youtu.be/kwqRfVSv9PQ",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter VI + VII : PNS Physiology   (Afferent & Efferent)",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VIII : Muscle Physiology",
        documents: [],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Human Physiology - From Cells to Systems 9th Edition",
          url: "../../../documents/level-2/semester-1/physiology-1/book/Human-Physiology-From-Cells-to-Systems-Sherwood-9th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Jamil Mohanna, Final Exam of 2017",
          url: "../../../documents/level-2/semester-1/physiology-1/exams/dr-jamil-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Human Physiology I",
        "Course Code:": "PHPT2306",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT1301", title: "Cell Biology", required: false },
        {
          code: "PHPT1203",
          title: "Human Anatomy & Histology",
          required: true,
        },
      ],
    },
  },
  {
    slug: "biochemistry-1",
    title: "Biochemistry One.",
    description: "Structures, Functions & Interactions of the Biomolecules",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Al-ghussein",
      },
    ],
    stats: {
      videosCount: 28,
      chaptersCount: 13,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Amino Acids",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/W0oe6R8nzXY",
          },
          {
            title: "Lecture (1)",
            description: "Amino Acids pt.A",
            url: "https://youtu.be/xLPY1tUagYo",
          },
          {
            title: "Lecture (2)",
            description: "Amino Acids pt.B",
            url: "https://youtu.be/_6S6GizMnk0",
          },
          {
            title: "Lecture (3)",
            description: "Amino Acids pt.C",
            url: "https://youtu.be/i2psFMX7mz4",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Structure of Protein",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Protein Structure pt.A",
            url: "https://youtu.be/bYntSp3ti0I",
          },
          {
            title: "Lecture (2)",
            description: "Protein Structure pt.B",
            url: "https://youtu.be/zojpVl28MKA",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Globular Protein",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Globular Protein pt.A",
            url: "https://youtu.be/72d-kx3QRJU",
          },
          {
            title: "Lecture (2)",
            description: "Globular Protein pt.B",
            url: "https://youtu.be/ULnDtPALtFA",
          },
          {
            title: "Lecture (3)",
            description: "Hemoglobinopathies",
            url: "https://youtu.be/434LB_Q0g-E",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Fibrous Protein",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Collagen",
            url: "https://youtu.be/R386CDCd_lc",
          },
          {
            title: "Lecture (2)",
            description: "Elastine",
            url: "https://youtu.be/mPxwObvWW0Q",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Enzymes",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Enzymes Overview",
            url: "https://youtu.be/Fpj7mW9LxrM",
          },
          {
            title: "Lecture (2)",
            description: "How Enzyme Work",
            url: "https://youtu.be/hWTy5xKUmSQ",
          },
          {
            title: "Lecture (3)",
            description: "Inhibition of Enzyme Activity",
            url: "https://youtu.be/pSSsVseYx18",
          },
          {
            title: "Lecture (4)",
            description: "Regulation of Enzyme Activity",
            url: "https://youtu.be/vwgijWAMKp4",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Amino Acids: Disposal of Nitrogen",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Amino Acids: Disposal of N",
            url: "https://youtu.be/J2co8_g5HBA",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Introduction to Carbohydrates",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction to Carbohydrates",
            url: "https://youtu.be/WPywKCI7lmQ",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter VIII : Glycosaminoglycans Proteoglycans &   Glycoproteins",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Glycosaminoglycans Proteoglycans & Glycoproteins",
            url: "https://youtu.be/FuypZaocpEc",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Metabolism of Dietary Lipids",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Metabolism of Dietary Lipids",
            url: "https://youtu.be/jnZxKdHRXgU",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Fatty Acids & Triglycerides Metabolism",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Fatty Acids, Triglycerides & Phospholipids",
            url: "https://youtu.be/8ACycVQb9H8",
          },
          {
            title: "Lecture (2)",
            description: "Glycolipids & Prostaglandines",
            url: "https://youtu.be/Wn6bVh4gwsc",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI : Cholesterol & Steroids Metabolism",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cholesterol & Steroids Metabolism",
            url: "https://youtu.be/e8O4fsXDC6s",
          },
        ],
      },
      {
        chapterTitle: "Chapter XII : Vitamins",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Water-Soluble Vitamins pt.A",
            url: "https://youtu.be/aiqlXmx70rE",
          },
          {
            title: "Lecture (2)",
            description: "Water-Soluble Vitamins pt.B",
            url: "https://youtu.be/eZOsicMLU_A",
          },
          {
            title: "Lecture (3)",
            description: "Water-Soluble Vitamins pt.C",
            url: "https://youtu.be/P1faAdtwi5o",
          },
          {
            title: "Lecture (4)",
            description: "Lipid-Soluble Vitamins pt.A",
            url: "https://youtu.be/9hqNwwXogaw",
          },
          {
            title: "Lecture (5)",
            description: "Lipid-Soluble Vitamins pt.B",
            url: "https://youtu.be/up9BXTUxkXI",
          },
        ],
      },
      {
        chapterTitle: "Chapter XIII : Introduction to DNA & RNA",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction to DNA & RNA",
            url: "https://youtu.be/9XxZh6rcgGY",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Lippincott's Illustrated Reviews: Biochemistry 5th Edition",
          url: "../../../documents/level-2/semester-2/biochemistry-1/Lippincotts_Illustrated_Review.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Moh. Al-ghussain, Final Exam of 2016",
          url: "../../../documents/level-2/semester-2/biochemistry-1/exams/dr-mohammed-alghusain-final-2016.pdf",
        },
        {
          title: "Dr. Moh. Al-ghussain, Final Exam of 2017",
          url: "../../../documents/level-2/semester-2/biochemistry-1/exams/dr-mohammed-alghusain-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Biochemistry I",
        "Course Code:": "PHCH2207",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "CHEM1301", title: "General Chemistry 1", required: false },
        { code: "PHCH2306", title: "Organic Chemistry II", required: true },
      ],
    },
  },
  {
    slug: "botany",
    title: "Pharmaceutical Botany.",
    description: "Taxonomy of Plants & Uses of Botanical Drugs",
    lecturers: [
      {
        title: "Dr.",
        name: "Jehad Ahmed",
      },
    ],
    stats: {
      videosCount: 0,
      chaptersCount: 0,
    },
    lectures: [],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutical Botay",
        "Course Code:": "PHCG2201",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacognosy & Pharmaceutical Botany (PHCG)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "pharmaceutics-1",
    title: "Pharamceutics One.",
    description:
      "Semi-Solid Pharmaceutical Dosage Forms & Formulations || Suspensions & Emulsions",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Taleb & Dr. Hend",
      },
    ],
    stats: {
      videosCount: 24,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Pharmaceutical Consideration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/pharmaceutics-1/chapter-1-pharmaceutical-consideration.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/phzD6H_RT_I",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/62tDj_1hLsI",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : The Skin & Semisolid Dosage Form",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/pharmaceutics-1/chapter-2-skin-and-semisolid-dosage.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "The Skin & Semisolid Dosage Form",
            url: "https://youtu.be/F-jaxw_Ve9g",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Ointments",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/pharmaceutics-1/chapter-3-ointment.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Ointments",
            url: "https://youtu.be/s1niU_DmcT8",
          },
          {
            title: "Lecture (2)",
            description: "Bases of Ointments pt.A",
            url: "https://youtu.be/Q8y0EVN_Ygw",
          },
          {
            title: "Lecture (3)",
            description: "Bases of Ointments pt.B",
            url: "https://youtu.be/4nOJV2fza9U",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV + V : Pastes & Cream",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/pharmaceutics-1/chapter-4-5-paste-and-cream.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pastes & Cream pt.A",
            url: "https://youtu.be/8NKlyipmgi0",
          },
          {
            title: "Lecture (2)",
            description: "Cream pt.B",
            url: "https://youtu.be/itCWckQ4urw",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Gels",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/pharmaceutics-1/chapter-6-gel.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Gels",
            url: "https://youtu.be/EEKnEOXEBqI",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Suppositories",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/pharmaceutics-1/chapter-7-suppositries.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Suppositories pt.A",
            url: "https://youtu.be/HyDl75UyLSc",
          },
          {
            title: "Lecture (2)",
            description: "Suppositories pt.B",
            url: "https://youtu.be/4XPQOuihsNo",
          },
          {
            title: "Lecture (3)",
            description: "Suppositories pt.C",
            url: "https://youtu.be/t7034AYG3pg",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Pharmaceutical Suspensions   (Dr. Hend)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pharmaceutical Suspension Introduction pt.A",
            url: "https://youtu.be/azg01Z9_ou0",
          },
          {
            title: "Lecture (2)",
            description: "Pharmaceutical Suspension Introduction pt.B",
            url: "https://youtu.be/8f1a19VrNH",
          },
          {
            title: "Lecture (3)",
            description: "Pharmaceutical Suspension Introduction pt.C",
            url: "https://youtu.be/7Lqo3EdWcqc",
          },
          {
            title: "Lecture (4)",
            description: "Pharmaceutical Suspension Introduction pt.D",
            url: "https://youtu.be/gMslA-IoiVM",
          },
          {
            title: "Lecture (5)",
            description: "Classification of Suspension",
            url: "https://youtu.be/b1P5ImWGvhg",
          },
          {
            title: "Lecture (6)",
            description: "Formulation Principles of Suspension pt.A",
            url: "https://youtu.be/U4SisEHwaOA",
          },
          {
            title: "Lecture (7)",
            description: "Formulation Principles of Suspension pt.B",
            url: "https://youtu.be/h8x2BsPxnWY",
          },
          {
            title: "Lecture (8)",
            description: "Formulation Principles of Suspension pt.C",
            url: "https://youtu.be/w04gdmr2R5I",
          },
          {
            title: "Lecture (9)",
            description: "Formulation of Suspension pt.A",
            url: "https://youtu.be/dJ_LwudIh6Y",
          },
          {
            title: "Lecture (10)",
            description: "Formulation of Suspension pt.B",
            url: "https://youtu.be/eUYhi1pPPtc",
          },
          {
            title: "Lecture (11)",
            description: "Formulation of Suspension pt.C",
            url: "https://youtu.be/vIl0rzaOQ30",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Pharmaceutical Emulsions   (Dr. Hend)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/pharmaceutics-1/chapter-9-emulsion.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction to Pharmaceutical Emulsions",
            url: "https://youtu.be/EvDAJcYWn3U",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Ansel's Pharmaceutical Dosage Forms & DDS 10th Edition",
          url: "../../../documents/level-2/semester-2/pharmaceutics-1/ansels_pharmaceutical_dosage_forms_and_drug_delivery_systems_10th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mohammed Taleb, Final Exam of 2015",
          url: "../../../documents/level-2/semester-2/pharmaceutics-1/exams/dr-mohammed-talev-final-2015.pdf",
        },
        {
          title: "Dr. Riad + Ibtihal, Final Exam of 2017",
          url: "../../../documents/level-2/semester-2/pharmaceutics-1/exams/dr-riad-and-ibtihal-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutics I",
        "Course Code:": "PHTC2307",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHTC1201", title: "Physical Pharmacy I", required: true },
        { code: "PHTC2203", title: "Physical Pharmacy II", required: false },
      ],
    },
  },
  {
    slug: "physiology-2-manal",
    title: "Human Physiology Two.",
    description: "Cardica, Respiratory, Urinary & Digestive Physiology",
    lecturers: [
      {
        name: "Manal Zourab",
      },
      {
        name: "Jamil Mohanna",
        altLink: "physiology-2",
      },
    ],
    stats: {
      videosCount: 24,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter IX : Cardiac Physiology",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cardiac Physiology pt.A",
            url: "https://youtu.be/Uzw7MCkLZK0",
          },
          {
            title: "Lecture (2)",
            description: "Cardiac Physiology pt.B",
            url: "https://youtu.be/iUBV6EeXQY0",
          },
          {
            title: "Lecture (3)",
            description: "Cardiac Physiology pt.C",
            url: "https://youtu.be/2F_odlUfoHQ",
          },
          {
            title: "Lecture (4)",
            description: "Cardiac Physiology pt.D",
            url: "https://youtu.be/3VrKADJeMKY",
          },
          {
            title: "Lecture (5)",
            description: "Cardiac Physiology pt.E",
            url: "https://youtu.be/M9I5UhghwbM",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI : The Blood",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "The Blood",
            url: "https://youtu.be/J8_tIEq7bME",
          },
        ],
      },
      {
        chapterTitle: "Chapter XII : Body Defenses",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Body Defenses",
            url: "https://youtu.be/H4VRnc2Zvg8",
          },
        ],
      },
      {
        chapterTitle: "Chapter XIII : The Respiratory System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Respiratory System pt.A",
            url: "https://youtu.be/o2lm1NDtnKo",
          },
          {
            title: "Lecture (2)",
            description: "Respiratory System pt.B",
            url: "https://youtu.be/wH0biTu_QzY",
          },
          {
            title: "Lecture (3)",
            description: "Respiratory System pt.C",
            url: "https://youtu.be/ZXN1v7wGQ_E",
          },
          {
            title: "Lecture (4)",
            description: "Respiratory System pt.D",
            url: "https://youtu.be/czsx0BbN8ec",
          },
        ],
      },
      {
        chapterTitle: "Chapter XIV : The Urinary System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Urinary System pt.A",
            url: "https://youtu.be/ckNP7Nm5Gh0",
          },
          {
            title: "Lecture (2)",
            description: "Urinary System pt.B",
            url: "https://youtu.be/6DQAWPIUsnc",
          },
          {
            title: "Lecture (3)",
            description: "Urinary System pt.C",
            url: "https://youtu.be/c0SjuFXXp0o",
          },
          {
            title: "Lecture (4)",
            description: "Urinary System pt.D",
            url: "https://youtu.be/P3GjEnWz02o",
          },
        ],
      },
      {
        chapterTitle: "Chapter XV : Fluid & Acid-Base Balance",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Fluid & Acid-Base Balance",
            url: "https://youtu.be/Y25dRohxIfg",
          },
        ],
      },
      {
        chapterTitle: "Chapter XVI : The Digestive System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Digestive System pt.A",
            url: "https://youtu.be/guxgMgYJHwY",
          },
          {
            title: "Lecture (2)",
            description: "Digestive System pt.B",
            url: "https://youtu.be/iXmOZGuRxe4",
          },
          {
            title: "Lecture (3)",
            description: "Digestive System pt.D",
            url: "https://youtu.be/Rv4XFeM8nU8",
          },
          {
            title: "Lecture (4)",
            description: "Digestive System pt.D",
            url: "https://youtu.be/YQm5RCz9Pxc",
          },
          {
            title: "Lecture (5)",
            description: "Digestive System pt.E",
            url: "https://youtu.be/fCK5e0M8kRw",
          },
        ],
      },
      {
        chapterTitle: "Chapter XVIII : The Endocrine System",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Endocrine System pt.A",
            url: "https://youtu.be/iQwX9QH47lg",
          },
          {
            title: "Lecture (2)",
            description: "Endocrine System pt.B",
            url: "https://youtu.be/QlkCrbtRCzg",
          },
          {
            title: "Lecture (3)",
            description: "Endocrine System pt.C",
            url: "https://youtu.be/Zbnvww8uDSU",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Human Physiology - From Cells to Systems 9th Edition",
          url: "../../../documents/level-2/semester-1/physiology-1/book/Human-Physiology-From-Cells-to-Systems-Sherwood-9th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2013",
          url: "../../../documents/level-2/semester-2/physiology-2/exams/dr-mohammed-shbair-final-2013.pdf",
        },
        {
          title: "Dr. Jamil Mohanna, Final Exam of 2015",
          url: "../../../documents/level-2/semester-2/physiology-2/exams/dr-jamil-final-2015.pdf",
        },
        {
          title: "Dr. Jamil Mohanna, Final Exam of 2017",
          url: "../../../documents/level-2/semester-2/physiology-2/exams/dr-jamil-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Human Physiology II",
        "Course Code:": "PHPT3307",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        {
          code: "PHPT1203",
          title: "Human Anatomy & Histology",
          required: true,
        },
        { code: "PHPT2306", title: "Human Physiology I", required: false },
      ],
    },
  },
  {
    slug: "physiology-2",
    title: "Human Physiology Two.",
    description: "Cardica, Respiratory, Urinary & Digestive Physiology",
    lecturers: [
      {
        name: "Jamil Mohanna",
      },
      {
        name: "Manal Zourab",
        altLink: "physiology-2-manal",
      },
    ],
    stats: {
      videosCount: 25,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle:
          "Chapter VI + VII : PNS Physiology   (Afferent & Efferent)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Afferent Division pt.A",
            url: "https://youtu.be/otXlUZa0Pgo",
          },
          {
            title: "Lecture (2)",
            description: "Afferent Division pt.B",
            url: "https://youtu.be/70M6L2Ad3c8",
          },
          {
            title: "Lecture (3)",
            description: "Afferent Division pt.C",
            url: "https://youtu.be/vk5aIGhaoV0",
          },
          {
            title: "Lecture (4)",
            description: "Afferent Division pt.D",
            url: "https://youtu.be/6GhSHpNENFU",
          },
          {
            title: "Lecture (5)",
            description: "Efferent Division pt.A",
            url: "https://youtu.be/sTD_EAq0HZ8",
          },
          {
            title: "Lecture (6)",
            description: "Efferent Division pt.B",
            url: "https://youtu.be/TA_FLHN3j1E",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Muscle Physiology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/physiology-2/chapter-8-muscle-physiology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Muscle Physiology",
            url: "https://youtu.be/2aOFXqdQJmI",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Cardiac Physiology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/physiology-2/chapter-9-cardiac-physiology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/_xtpWiGNMFs",
          },
          {
            title: "Lecture (2)",
            description: "Electrical Activity of The Heart",
            url: "https://youtu.be/-24Ya1rhDpA",
          },
          {
            title: "Lecture (3)",
            description: "ECG",
            url: "https://youtu.be/PB8OdtBXS6w",
          },
          {
            title: "Lecture (4)",
            description: "Cardiac Cycle",
            url: "https://youtu.be/7xd4Pq2q0Ds",
          },
          {
            title: "Lecture (5)",
            description: "Cardiac output",
            url: "https://youtu.be/OX4JgbPRut0",
          },
        ],
      },
      {
        chapterTitle: "Chapter XIII : Respiratory System Physiology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/physiology-2/chapter-13-respiratory-physiology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/MNk3YiuDOdQ",
          },
          {
            title: "Lecture (2)",
            description: "Respiratory Mechanics pt.A",
            url: "https://youtu.be/1gvFrmjg8bM",
          },
          {
            title: "Lecture (3)",
            description: "Respiratory Mechanics pt.B",
            url: "https://youtu.be/iHRFCo1UUW0",
          },
          {
            title: "Lecture (4)",
            description: "Variations in Lung Volume",
            url: "https://youtu.be/fND74pKPoec",
          },
          {
            title: "Lecture (5)",
            description: "Gas Exchange",
            url: "https://youtu.be/P6vtwnTlczw",
          },
          {
            title: "Lecture (6)",
            description: "Gas Transport",
            url: "https://youtu.be/eCT8H9qtDSk",
          },
        ],
      },
      {
        chapterTitle: "Chapter XIV : Urinary System Physiology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/physiology-2/chapter-14-urinary-physiology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Urinary System pt.A",
            url: "https://youtu.be/ONM0lWx5cJQ",
          },
          {
            title: "Lecture (2)",
            description: "Urinary System pt.B",
            url: "https://youtu.be/SkZHxxF3X8A",
          },
          {
            title: "Lecture (3)",
            description: "Urinary System pt.C I",
            url: "https://youtu.be/UvvUnJVhghU",
          },
          {
            title: "Lecture (4)",
            description: "Urinary System pt.C II",
            url: "https://youtu.be/tNXmO9YaVYY",
          },
        ],
      },
      {
        chapterTitle: "Chapter XVI : Digestive System Physiology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-2/semester-2/physiology-2/chapter-16-digestive-physiology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Digestive System pt.A",
            url: "https://youtu.be/R6cJ7iaexBI",
          },
          {
            title: "Lecture (2)",
            description: "Digestive System pt.B",
            url: "https://youtu.be/BCiyexly_gI",
          },
          {
            title: "Lecture (3)",
            description: "Digestive System pt.C",
            url: "https://youtu.be/xRPXUJwsQ80",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Human Physiology - From Cells to Systems 9th Edition",
          url: "../../../documents/level-2/semester-1/physiology-1/book/Human-Physiology-From-Cells-to-Systems-Sherwood-9th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2013",
          url: "../../../documents/level-2/semester-2/physiology-2/exams/dr-mohammed-shbair-final-2013.pdf",
        },
        {
          title: "Dr. Jamil Mohanna, Final Exam of 2015",
          url: "../../../documents/level-2/semester-2/physiology-2/exams/dr-jamil-final-2015.pdf",
        },
        {
          title: "Dr. Jamil Mohanna, Final Exam of 2017",
          url: "../../../documents/level-2/semester-2/physiology-2/exams/dr-jamil-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Human Physiology II",
        "Course Code:": "PHPT3307",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "2nd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        {
          code: "PHPT1203",
          title: "Human Anatomy & Histology",
          required: true,
        },
        { code: "PHPT2306", title: "Human Physiology I", required: false },
      ],
    },
  },
  {
    slug: "biochemistry-2",
    title: "Biochemistry Two.",
    description:
      "Biomolecules General Metabolism & Regulation Involved in the Body Functions,  Diseases Caused by Disturbance of that Function",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Al-ghussein",
      },
    ],
    stats: {
      videosCount: 25,
      chaptersCount: 10,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Bioenergetics & Oxidative Phosphorylation",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/mbKUcsleBjk",
          },
          {
            title: "Lecture (1)",
            description: "Bioenergetics",
            url: "https://youtu.be/EsQA0wHnrUc",
          },
          {
            title: "Lecture (2)",
            description: "Electron Transport Chain or Reparatory Chain",
            url: "https://youtu.be/Qx59iMPzoOc",
          },
          {
            title: "Lecture (3)",
            description: "Oxidative Phosphorylation",
            url: "https://youtu.be/oOqnTqDxLi4",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Introduction to Metabolism",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction to Metabolism",
            url: "https://youtu.be/zrmKY2VqJ3E",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter III : Krebs Cycle, Citric Acid Cycle or TCA   (Tricarboxylic Acid Cycle)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Krebs Cycle, Citric Acid Cycle or TCA",
            url: "https://youtu.be/n87zmyTEaxM",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Glycolysis",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Glycolysis",
            url: "https://www.youtube.com/watch?v=1ZwCdU0O6Gg",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Gluconeogenesis",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Gluconeogenesis",
            url: "https://www.youtube.com/watch?v=9utFXU1LRxA",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Glycogen Metabolism",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Glycogen Metabolism",
            url: "https://www.youtube.com/watch?v=se0fRz9-Fow",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter VII : Metabolism of Monosaccharides & Disaccharides",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Metabolism of Monosaccharides & Disaccharides",
            url: "https://www.youtube.com/watch?v=olHpmA_tAdo",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Pentos P Pathway & NADPH",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pentos P Pathway & NADPH",
            url: "https://www.youtube.com/watch?v=pK6isIx9aac",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Lipid Metabolism",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Fatty Acid Synthesis",
            url: "https://www.youtube.com/watch?v=BGpnFK8ZRF8",
          },
          {
            title: "Lecture (2)",
            description: "Triglycerols Metabolism",
            url: "https://www.youtube.com/watch?v=LYau2NYhDKA",
          },
          {
            title: "Lecture (3)",
            description: "Fatty Acid Degradation",
            url: "https://www.youtube.com/watch?v=49WDdk931yk",
          },
          {
            title: "Lecture (4)",
            description: "Ketone Bodies",
            url: "https://www.youtube.com/watch?v=KY6xHt2nmr4&feature=youtu.be",
          },
          {
            title: "Lecture (5)",
            description: "Phospholipids",
            url: "https://www.youtube.com/watch?v=iAgArxy5qxc",
          },
          {
            title: "Lecture (6)",
            description: "Cholesterol Metabolism",
            url: "https://www.youtube.com/watch?v=mVD0YKdiAxY",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Nitrogen Metabolism",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Amuno Acids: Disposal of Nitrogen",
            url: "https://www.youtube.com/watch?v=Mz0IdMUgbMQ",
          },
          {
            title: "Lecture (2)",
            description: "Urea Cycle",
            url: "https://www.youtube.com/watch?v=kTwpDI7yZhg",
          },
          {
            title: "Lecture (3)",
            description: "Metabolism of NH3",
            url: "https://www.youtube.com/watch?v=0RQLeq9Lfzo",
          },
          {
            title: "Lecture (4)",
            description: "Amino Acids Metabolism",
            url: "https://youtu.be/XzvKq2bQcRI",
          },
          {
            title: "Lecture (5)",
            description: "Metabolic Defects in Amino Acids Metabolism",
            url: "https://youtu.be/cMeJ_gckZNU",
          },
          {
            title: "Lecture (6)",
            description: "Conversion of Amino Acids to Specialized Products",
            url: "https://youtu.be/DZhbCx60xA8",
          },
          {
            title: "Lecture (7)",
            description: "Bilirubin & Jaundice",
            url: "https://youtu.be/zY3C3ipK3-k",
          },
          {
            title: "Lecture (8)",
            description: "Nitrogen Containing Compounds",
            url: "https://youtu.be/Loy_pc0ob9I",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Lippincott's Illustrated Reviews: Biochemistry 5th Edition",
          url: "../../../documents/level-2/semester-2/biochemistry-1/Lippincotts_Illustrated_Review.pdf",
        },
      ],
      summaries: [
        {
          title: "Mohammed Zourob",
          url: "../../../documents/level-3/semester-1/biochemistry-2/biochemistry-2-course-summary-zourob.pdf",
        },
      ],
      exams: [
        {
          title: "Dr. Moh. Al-ghussain, Final of Summer 2020",
          url: "../../../documents/level-3/semester-1/biochemistry-2/exams/dr-mohammed-alghusain-final-summer-2020.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Biochemistry II",
        "Course Code:": "PHCH3208",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH2306", title: "Organic Chemistry II", required: true },
        { code: "PHCH2306", title: "Biochemistry I", required: false },
      ],
    },
  },
  {
    slug: "biostatestics",
    title: "Biostatistics.",
    description: "Basic Principles of Biostatistics",
    lecturers: [
      {
        title: "Prof.",
        name: "Ali Abu-zaid",
      },
    ],
    stats: {
      videosCount: 23,
      chaptersCount: 7,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Biostatistics",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline & Introduction",
            url: "https://youtu.be/zcqrQh065lQ",
          },
          {
            title: "Lecture (1)",
            description: "Population & Samples",
            url: "https://youtu.be/RsUAvxb6DZo",
          },
          {
            title: "Lecture (2)",
            description: "Probability Samples",
            url: "https://youtu.be/-CfWvhwpFaQ",
          },
          {
            title: "Lecture (3)",
            description: "Sampling Error & sample size",
            url: "https://youtu.be/FbtCu2qcyaM?list=WL",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Organization & Presentation of Data",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Organization & Presentation of Data pt.A",
            url: "https://youtu.be/SEQmxiV_nfQ",
          },
          {
            title: "Lecture (2)",
            description: "Organization & Presentation of Data pt.B",
            url: "https://youtu.be/FwitFpux62U",
          },
          {
            title: "Lecture (3)",
            description: "Organization & Presentation of Data pt.C",
            url: "https://youtu.be/QuZjMziOv14",
          },
          {
            title: "Lecture (4)",
            description: "Organization & Presentation of Data pt.D",
            url: "https://www.youtube.com/watch?v=XkqSV2SXQpw",
          },
          {
            title: "Discussion",
            description: "Chapter I + II Discussion",
            url: "https://www.youtube.com/watch?v=ilyNWSIpbKM",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Summarizing Data",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Summarizing Data pt.A",
            url: "https://youtu.be/bnc7qe4IiCA",
          },
          {
            title: "Lecture (2)",
            description: "Summarizing Data pt.B",
            url: "https://www.youtube.com/watch?v=yJN1F_5Vn_Y",
          },
          {
            title: "Lecture (3)",
            description: "Summarizing Data pt.C",
            url: "https://www.youtube.com/watch?v=nvi6UIN_efs&list=PLfytIKYDWGMDwH0J_iC9EdNWD9eZpW1uY&index=21",
          },
          {
            title: "Lecture (4)",
            description: "Summarizing Data pt.D",
            url: "https://www.youtube.com/watch?v=_loA8gCiLIE&list=PLfytIKYDWGMDwH0J_iC9EdNWD9eZpW1uY&index=22",
          },
          {
            title: "Lecture (5)",
            description: "Summarizing Data pt.E",
            url: "https://youtu.be/NuwR8tMJwyg",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Probability",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Probability pt.A",
            url: "https://youtu.be/TStSZL5MPqc",
          },
          {
            title: "Lecture (2)",
            description: "Probability pt.B",
            url: "https://www.youtube.com/watch?v=S6WRuoPjODE&list=PLfytIKYDWGMDwH0J_iC9EdNWD9eZpW1uY&index=5",
          },
          {
            title: "Lecture (3)",
            description: "Probability pt.C",
            url: "https://www.youtube.com/watch?v=pWGmKyYxXK8&list=PLfytIKYDWGMDwH0J_iC9EdNWD9eZpW1uY&index=6",
          },
          {
            title: "Lecture (4)",
            description: "Probability pt.D",
            url: "https://youtu.be/ANQhyy9GsKI",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : The Binomial Normal Distribution",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VI : Correlation & Regression",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Correlation & Regression pt.A",
            url: "https://www.youtube.com/watch?v=-3lpy6Z9NH",
          },
          {
            title: "Lecture (2)",
            description: "Correlation & Regression pt.B",
            url: "https://www.youtube.com/watch?v=Mi_tLn9oI1Q",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Probability Distributions",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Probability Distributions pt.A",
            url: "https://youtu.be/a9VBlsUhLjM",
          },
          {
            title: "Lecture (2)",
            description: "Probability Distributions pt.B",
            url: "https://youtu.be/MrXJCQLmBeE",
          },
          {
            title: "Lecture (3)",
            description: "Probability Distributions pt.C",
            url: "https://youtu.be/CT96RRb8q-w",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Prof. Ali Abu-zaid: Principles of Statistics",
          url: "../../../documents/level-3/semester-1/biostatistics/biostatistics-book.pdf",
        },
        {
          title: "Basic Statistics for the Health Sciences 3rd Edition",
          url: "../../../documents/level-3/semester-1/biostatistics/Basic-Statistics-for-Health-Sciences.pdf",
        },
      ],
      extraResources: [
        {
          title: "Slides of the Course",
          url: "../../../documents/level-3/semester-1/biostatistics/Introductory-Statistics-for-Health-Sciences.pdf",
          note: "Slides of the Course",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Ali Abu-zaid, Final Exam",
          url: "../../../documents/level-3/semester-1/biostatistics/exams/dr-ali-abuazaid-final.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Biostatistics",
        "Course Code:": "PHPT4214",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "pathophysiology-1",
    title: "Pathophysiology One.",
    description:
      "Alterations in Cell Funcitons || Immune system, Cardiovascular & GIT Disorders",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Taha",
      },
    ],
    stats: {
      videosCount: 23,
      chaptersCount: 5,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Alterations of Cell Functions",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pathophysiology-1/chapter-01-alterationsofcellfunctions.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/yjKr4VkVqPI",
          },
          {
            title: "Lecture (1)",
            description: "Pathology of thee Cell",
            url: "https://youtu.be/iQ9d9bNDphk",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Immune System ",
        chapterTitleNote: "(as Physiology)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pathophysiology-1/chapter-02-immune-system.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Branches of the Immune system",
            url: "https://youtu.be/67c-DxP1zn8",
          },
          {
            title: "Lecture (2)",
            description: "Components of the Immune system pt.A",
            url: "https://youtu.be/JycrSY3nJJM",
          },
          {
            title: "Lecture (3)",
            description: "Components of the Immune system pt.B",
            url: "https://youtu.be/5TjgrWEvhhE",
          },
          {
            title: "Lecture (4)",
            description: "Innate Immunity",
            url: "https://youtu.be/-pplcZO5Xcw",
          },
          {
            title: "Lecture (5)",
            description: "Adaptive Immunity pt.A",
            url: "https://youtu.be/-WlNthc_w-U",
          },
          {
            title: "Lecture (6)",
            description: "Adaptive Immunity pt.B",
            url: "https://youtu.be/q2d539PQFJ4",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Immune System",
        chapterTitleNote: "(as Pathophysiology)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pathophysiology-1/chapter-03-inflamation.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Inflamation pt.A",
            url: "https://youtu.be/qPXHI3aniAc",
          },
          {
            title: "Lecture (2)",
            description: "Inflamation pt.B",
            url: "https://youtu.be/WO96I28Tk-0qPXHI3aniAc",
          },
          {
            title: "Lecture (3)",
            description: "Inflamation pt.C",
            url: "https://youtu.be/r1UR1vWkYlQ",
          },
          {
            title: "Lecture (4)",
            description: "Hypersensitivity Reactions pt.A",
            url: "https://youtu.be/0inJs3btA00",
          },
          {
            title: "Lecture (5)",
            description: "Hypersensitivity Reactions pt.B",
            url: "https://youtu.be/50gARFhdEdg",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Cardiovascular Disorders",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pathophysiology-1/chapter-04-cardiovascular-disorders.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Arterial Disorders pt.A",
            url: "https://youtu.be/hnnSBMAi38g",
          },
          {
            title: "Lecture (2)",
            description: "Arterial Disorders pt.B",
            url: "https://youtu.be/WY_GvRnDlWk",
          },
          {
            title: "Lecture (3)",
            description: "Arterial Disorders pt.C",
            url: "https://youtu.be/8cTd666kue0",
          },
          {
            title: "Lecture (4)",
            description: "Arterial Disorders pt.D",
            url: "https://youtu.be/AYZYTvEbdj0",
          },
          {
            title: "Lecture (5)",
            description: "Venous Disorders",
            url: "https://youtu.be/Lc93Ovxekbw",
          },
          {
            title: "Lecture (6)",
            description: "Heart Disorders pt.A",
            url: "https://youtu.be/shOVXt7bjRk",
          },
          {
            title: "Lecture (7)",
            description: "Heart Disorders pt.B",
            url: "https://youtu.be/V9jgE4PbbgM",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : GIT Disorders",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pathophysiology-1/chapter-05-git-disorders.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Disorders of the Esophagus",
            url: "https://youtu.be/2g6-IICwY_s",
          },
          {
            title: "Lecture (2)",
            description: "Disorders of the Stomach",
            url: "https://youtu.be/l4igWuMfyao",
          },
          {
            title: "Lecture (3)",
            description: "Diseases of the Small & Large Intestine",
            url: "https://youtu.be/EY4_2_UBTGs",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Reference of Pathophysiology",
          url: "../../../documents/level-3/semester-1/pathophysiology-1/pathophysiology-1-book.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Hala Al-agha, Final Exam of 2015",
          url: "../../../documents/level-3/semester-1/pathophysiology-1/exams/dr-hala-al-agha-final-2015.pdf",
        },
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2018",
          url: "../../../documents/level-3/semester-1/pathophysiology-1/exams/dr-mohammed-shbair-final-2018.pdf",
        },
        {
          title: "Dr. Mohammed Taha, Midterm of 2019",
          url: "../../../documents/level-3/semester-1/pathophysiology-1/exams/dr-mohammed-taha-mid-2019.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pathophysiology I",
        "Course Code:": "PHPT3204",
        "Faculty:": "Faculty of Pharmacy",
        "Department:": "Department Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT2306", title: "Human Physiology I", required: true },
        { code: "PHPT3307", title: "Human Physiology II", required: false },
      ],
    },
  },
  {
    slug: "pharmaceutics-2",
    title: "Pharmaceutics Two.",
    description: "Solid Pharmaceutical Dosage Forms & Formulations",
    lecturers: [
      {
        name: "Ibtihal Al-astal",
      },
    ],
    stats: {
      videosCount: 21,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pharmaceutics-2/chapter-1-introduction.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/pdiI359RUik",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/2IZq8xDvRzI",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Powder",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pharmaceutics-2/chapter-2-powder.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (2)",
            description: "Powder pt.B",
            url: "https://www.youtube.com/watch?v=wD2pk74qqn8&feature=emb_title",
          },
          {
            title: "Lecture (3)",
            description: "Powder pt.C",
            url: "https://youtu.be/-7Rw1swPMmc",
          },
          {
            title: "Lecture (4)",
            description: "Powder pt.D",
            url: "https://youtu.be/w1HTzAawolY",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Granules",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pharmaceutics-2/chapter-3-granules.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Granules pt.A",
            url: "https://www.youtube.com/watch?v=L2DWJwP9VpY&feature=youtu.be",
          },
          {
            title: "Lecture (2)",
            description: "Granules pt.B",
            url: "https://youtu.be/hg0lTwxVq6k",
          },
          {
            title: "Lecture (3)",
            description: "Granules pt.C",
            url: "https://youtu.be/nwlTHFEMONE",
          },
          {
            title: "Lecture (4)",
            description: "Granules pt.D",
            url: "https://www.youtube.com/watch?time_continue=2&v=5PqfSMmzpGI",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Tablets",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Tablets pt.A",
            url: "https://youtu.be/FiS-AwaTqqc",
          },
          {
            title: "Lecture (2)",
            description: "Tablets pt.B",
            url: "https://youtu.be/yjAOka-dv4M",
          },
          {
            title: "Lecture (3)",
            description: "Tablets pt.C",
            url: "https://youtu.be/1jpetRVsnwU",
          },
          {
            title: "Lecture (4)",
            description: "Tablets pt.D",
            url: "https://youtu.be/WKi-SWs0TXc",
          },
          {
            title: "Lecture (5)",
            description: "Tablets pt.E",
            url: "https://youtu.be/uRAlrU9IFek",
          },
          {
            title: "Lecture (6)",
            description: "Tablets pt.F",
            url: "https://youtu.be/lJIm2ITEu7c",
          },
          {
            title: "Lecture (7)",
            description: "Tablets pt.G",
            url: "https://youtu.be/50gHuYfbAuI",
          },
          {
            title: "Lecture (8)",
            description: "Tablets pt.H",
            url: "https://youtu.be/t5MApCrCaDk",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Capsules",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pharmaceutics-2/chapter-5-capsule.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Capsules pt.A",
            url: "https://youtu.be/QWb9PhmAkPI",
          },
          {
            title: "Lecture (2)",
            description: "Capsules pt.B",
            url: "https://youtu.be/M26cT_OBh34",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Modified Release Dosage Forms",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-1/pharmaceutics-2/chapter-6-modified-release.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Modified Release Dosage Forms pt.A",
            url: "https://youtu.be/u0VQEkIiibE",
          },
          {
            title: "Lecture (2)",
            description: "Modified Release Dosage Forms pt.B",
            url: "https://youtu.be/HQeAKgmgs9Q",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Ansel's Pharmaceutical Dosage Forms & DDS 10th Edition",
          url: "../../../documents/level-2/semester-2/pharmaceutics-1/ansels_pharmaceutical_dosage_forms_and_drug_delivery_systems_10th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutics II",
        "Course Code:": "PHTC3209",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHTC1201", title: "Physical Pharmacy I", required: true },
        { code: "PHTC2203", title: "Physical Pharmacy II", required: false },
        { code: "PHTC2307", title: "Pharmaceutics I", required: false },
      ],
    },
  },
  {
    slug: "pharmacognosy",
    title: "Pharmacognosy.",
    description:
      "Traditional Medicine || Extraction, Separation & Purification of Natural Drugs || Primary & Secondary Metabolites",
    lecturers: [
      {
        title: "Dr.",
        name: "Mazen El-sakka",
      },
    ],
    courseNotes: [
      {
        note: "* Checkout Chromatography chapter in the Technical Instruments Course",
        url: "/courses/technical-instruments",
        urlText: "Technical Instruments Course",
      },
    ],
    stats: {
      videosCount: 0,
      chaptersCount: 0,
    },
    lectures: [],
    resources: {
      referenceBooks: [
        {
          title: "404 - Not Found",
          url: "404",
        },
      ],
      extraResources: [
        {
          title: "Slides of the Course",
          url: "404",
          note: "Dr. Mazen",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmacognosy",
        "Course Code:": "PHCG3204",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacognosy & Pharmaceutical Botany (PHCG)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [
        { code: "PHCG2201", title: "Pharmaceutical Botany", required: true },
      ],
    },
  },
  {
    slug: "pathophysiology-2",
    title: "Pathophysiology Two.",
    description:
      "Liver, Respiratory, Endocrine, Kidney & CNS Disorders || Cancer",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Taha",
      },
    ],
    stats: {
      videosCount: 21,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Liver Disorders",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pathophysiology-2/chapter-1-liver-diseases-slides.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/jsY-Bc0E1nc",
          },
          {
            title: "Lecture (1)",
            description: "Cholelithiasis",
            url: "https://youtu.be/tYBW2lEm-Xs",
          },
          {
            title: "Lecture (2)",
            description: "Jaundice & Hepatitis",
            url: "https://youtu.be/iG-lPoAU0p8",
          },
          {
            title: "Lecture (3)",
            description: "Liver Cirrhosis",
            url: "https://youtu.be/2qlvW4EpwMg",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Respiratory Disorders",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pathophysiology-2/chapter-2-Respiratory-diseases.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Sinusitis",
            url: "https://youtu.be/933qlsP8T-c",
          },
          {
            title: "Lecture (2)",
            description: "COVID-19",
            url: "https://youtu.be/j5Ba94NQWhQ",
          },
          {
            title: "Lecture (3)",
            description: "Asthma",
            url: "https://youtu.be/5LWI43zERpw",
          },
          {
            title: "Lecture (4)",
            description: "COPD",
            url: "https://youtu.be/KRFiEdAMNl8",
          },
          {
            title: "Lecture (5)",
            description: "Cystic Fibrosis",
            url: "https://youtu.be/AtYQT54yp8A",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Endocrine Disorders",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pathophysiology-2/chapter-3-endocrine-disorders.pdf",
            type: "slides",
          },
          {
            title: "Summary of the Missing Video",
            url: "../../../documents/level-3/semester-2/pathophysiology-2/summary/chronic-complications-DM.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Thyroid Gland Diseases",
            url: "https://youtu.be/E1ByI2xH0jE",
          },
          {
            title: "Lecture (2)",
            description: "Adrenal Gland Disorder pt.A",
            url: "https://youtu.be/gD-NDgHNswI",
          },
          {
            title: "Lecture (3)",
            description: "Adrenal Gland Disorder pt.B",
            url: "https://youtu.be/r7Ia-pVYgng",
          },
          {
            title: "Lecture (4)",
            description: "Diabetes Mellitus pt.A",
            url: "https://youtu.be/wMvlnIEOO3Y",
          },
          {
            title: "Lecture (5)",
            description: "Diabetes Mellitus pt.B",
            url: "https://youtu.be/ZAg6gY1SuG4",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Kidney Disorders",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pathophysiology-2/chapter-4-kidney-disorders.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Inflammatory Disorders",
            url: "https://youtu.be/k3StdGiNp3w",
          },
          {
            title: "Lecture (2)",
            description: "Urinary Tract Obstruction & Vascular Disorders",
            url: "https://youtu.be/QTg57ePzAp8",
          },
          {
            title: "Lecture (3)",
            description: "Congenital Disorder & Renal Failure",
            url: "https://youtu.be/y4Redh0baaA",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : CNS Disorders",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pathophysiology-2/chapter-5-disorders-of-CNS.pdf",
            type: "slides",
          },
          {
            title: "Chapter Summary",
            url: "../../../documents/level-3/semester-2/pathophysiology-2/summary/cns-phathophysiology-summary-ahmed-skaik.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Multiple Sclerosis & Parkinson's Disease",
            url: "https://youtu.be/T7jJYuIDAIA",
          },
          {
            title: "Lecture (2)",
            description: "Alzheimer's Disease",
            url: "https://youtu.be/AZ254LiK0so",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Cancer",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pathophysiology-2/chapter-6-cancer.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction to Cancer pt.A",
            url: "https://youtu.be/fcFRR1BFwXs",
          },
          {
            title: "Lecture (2)",
            description: "Introduction to Cancer pt.B",
            url: "https://youtu.be/eTuhtEduXds",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Reference of Pathophysiology",
          url: "../../../documents/level-3/semester-2/pathophysiology-2/pathophysiology-2-book.pdf",
        },
      ],
      summaries: [
        {
          title: "Lolo Abushaban",
          url: "../../../documents/level-3/semester-2/pathophysiology-2/summary/pathophysiology-2-summary-lolo.pdf",
        },
        {
          title: "Tasneem Al-qeeq",
          url: "../../../documents/level-3/semester-2/pathophysiology-2/summary/pathophysiology-2-summary-tasneem.pdf",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pathophysiology II",
        "Course Code:": "PHPT3207",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT2306", title: "Human Physiology I", required: false },
        { code: "PHPT3307", title: "Human Physiology II", required: false },
        { code: "PHPT3204", title: "Pathophysiology II", required: true },
      ],
    },
  },
  {
    slug: "pharmaceutics-3",
    title: "Pharmaceutics Three.",
    description:
      "Liquid (Parenteral) Pharmaceutical Dosage Forms & Formulations",
    lecturers: [
      {
        title: "Dr.",
        name: "Hend Abu-amara",
      },
    ],
    stats: {
      videosCount: 32,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Routes of Administration pt.A",
            url: "https://youtu.be/luBZRPGcELA",
          },
          {
            title: "Lecture (2)",
            description: "Routes of Administration pt.B",
            url: "https://youtu.be/5HCgYM_HDFw",
          },
          {
            title: "Lecture (3)",
            description: "Sterile Dosage Form",
            url: "https://youtu.be/B-bGdzrCEEo",
          },
          {
            title: "Lecture (4)",
            description: "Sterilization pt.A",
            url: "https://youtu.be/2Tg66KRj2L8",
          },
          {
            title: "Lecture (5)",
            description: "Sterilization pt.B",
            url: "https://youtu.be/2PSXvP62-TY",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Parenteral Products",
        chapterTitleNote: "(Parenterals)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction to Parenterals pt.A",
            url: "https://youtu.be/TWCdwJm7FuY",
          },
          {
            title: "Lecture (2)",
            description: "Introduction to Parenterals pt.B",
            url: "https://youtu.be/GxbGkX-U1UY",
          },
          {
            title: "Lecture (3)",
            description: "Introduction to Parenteral Route pt.A",
            url: "https://youtu.be/abNT3ceFuSQ",
          },
          {
            title: "Lecture (4)",
            description: "Introduction to Parenteral Route pt.B",
            url: "https://youtu.be/AGrCHqNOJRo",
          },
          {
            title: "Lecture (5)",
            description: "Classification of Parenterals pt.A",
            url: "https://youtu.be/By1xiUyyglU",
          },
          {
            title: "Lecture (6)",
            description: "Classification of Parenterals pt.B",
            url: "https://youtu.be/Sl5IoJwtnAk",
          },
          {
            title: "Lecture (7)",
            description: "Classification of Parenterals pt.C",
            url: "https://youtu.be/FsqE5VYqlfk",
          },
          {
            title: "Lecture (8)",
            description: "Formulatoin Princibles of Parenterals pt.A",
            url: "https://youtu.be/MWwHM9_ZMr0",
          },
          {
            title: "Lecture (9)",
            description: "Formulatoin Princibles of Parenterals pt.B",
            url: "https://youtu.be/TdSqCMxb0yM",
          },
          {
            title: "Lecture (10)",
            description: "Formulatoin Princibles of Parenterals pt.C",
            url: "https://youtu.be/00-qBM4XqxY",
          },
          {
            title: "Lecture (11)",
            description: "Additives of Parenterals pt.A",
            url: "https://youtu.be/TDzEBJOPTjM",
          },
          {
            title: "Lecture (12)",
            description: "Additives of Parenterals pt.B",
            url: "https://youtu.be/BEUIoKh4G1o",
          },
          {
            title: "Lecture (13)",
            description: "Additives of Parenterals pt.C",
            url: "https://youtu.be/CFLPPYZaEus",
          },
          {
            title: "Lecture (14)",
            description: "Drugs to be Incorporated in Parenterals",
            url: "https://youtu.be/7JWRxYNYkec",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Formulation of Parenterals",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Calculations in Formulation pt.A",
            url: "https://youtu.be/17z1RYaZwak",
          },
          {
            title: "Lecture (2)",
            description: "Calculations in Formulation pt.B",
            url: "https://youtu.be/Gz-bSGqEP9o",
          },
          {
            title: "Lecture (3)",
            description: "Formulation of Parenterals",
            url: "https://youtu.be/YDHNuvagxLQ",
          },
          {
            title: "Lecture (4)",
            description: "Factors affecting Parenteral Formulation",
            url: "https://youtu.be/xsil9UcyixA",
          },
          {
            title: "Lecture (5)",
            description: "Formulation of Parenteral Suspension",
            url: "https://youtu.be/g33qhuCx3T4",
          },
          {
            title: "Lecture (6)",
            description: "Formulation of Parenteral Emulsion",
            url: "https://youtu.be/tZBCYInKTJg",
          },
          {
            title: "Lecture (7)",
            description: "Formulation of Dry Powder for Reconstitution",
            url: "https://youtu.be/hewUFAdeZGQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Packaging & Storage",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Packaging pt.A",
            url: "https://youtu.be/YxHvG_NPxJ0",
          },
          {
            title: "Lecture (2)",
            description: "Packaging pt.B",
            url: "https://youtu.be/bh1aFRETMhg",
          },
          {
            title: "Lecture (3)",
            description: "Packaging pt.C",
            url: "https://youtu.be/1d5_hZxbePc",
          },
          {
            title: "Lecture (4)",
            description: "Q.C.T pt.A",
            url: "https://youtu.be/BM-KhyMqHq0",
          },
          {
            title: "Lecture (5)",
            description: "Q.C.T pt.B",
            url: "https://youtu.be/NbrEIBD8xLQ",
          },
          {
            title: "Lecture (6)",
            description: "Q.C.T pt.C",
            url: "https://youtu.be/t_ODqbVw9mA",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter V : Biological Products (Biologicals) & Radiopharmaceuticals",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VI : Ophthalmic Preparations",
        chapterTitleNote: "(Ophthalmics)",
        documents: [],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Ansel's Pharmaceutical Dosage Forms & DDS 10th Edition",
          url: "../../../documents/level-2/semester-2/pharmaceutics-1/ansels_pharmaceutical_dosage_forms_and_drug_delivery_systems_10th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Issam Abushammala, Final Exam of 2013",
          url: "../../../documents/level-3/semester-2/pharmaceutics-3/exams/dr-issam-final-2013.pdf",
        },
        {
          title: "Dr. Issam Abushammala, Final",
          url: "../../../documents/level-3/semester-2/pharmaceutics-3/exams/dr-issam-final.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutics III",
        "Course Code:": "PHTC3211",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHTC1201", title: "Physical Pharmacy I", required: true },
        { code: "PHTC2203", title: "Physical Pharmacy II", required: false },
        { code: "PHTC2307", title: "Pharmaceutics I", required: false },
      ],
    },
  },
  {
    slug: "pharmacokinetics-1",
    title: "Biopharmaceutics & Pharmacokinetics One.",
    description:
      "Introdcution to Biopharmaceutics & Pharmacokinetics || Different Routes of Administration (Biopharmaceutics)",
    lecturers: [
      {
        title: "Prof.",
        name: "Issam Abushammala",
      },
    ],
    stats: {
      videosCount: 21,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle:
          "Chapter I : Introduction to Biopharmaceutics &   Pharmacokinetics",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacokinetics-1/chapter-01-introduction.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/g8iphB70MvE",
          },
          {
            title: "Lecture (1)",
            description:
              "Introduction to Biopharmaceutics &       Pharmacokinetics pt.A",
            url: "https://youtu.be/KeMDRYV-lsE",
          },
          {
            title: "Lecture (2)",
            description:
              "Introduction to Biopharmaceutics &       Pharmacokinetics pt.B",
            url: "https://youtu.be/dNJ_JcZPkoY",
          },
          {
            title: "Lecture (3)",
            description: "LADME, ADME, DME",
            url: "https://youtu.be/DEoE3zr7Wp8",
          },
          {
            title: "Lecture (4)",
            description: "Carrier Mediated Transport",
            url: "https://youtu.be/n0324Dx2H_E",
          },
        ],
      },
      {
        chapterTitle: "Chapter II => V : GIT Route of Administration",
        chapterTitleNote: "(Buccal & Sublingual, Oral, Rectal)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacokinetics-1/chapter-02-05-git-route.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Buccal & Sublingual",
            url: "https://youtu.be/7H6MwA0D1bE",
          },
          {
            title: "Lecture (2)",
            description: "Oral Administration of Drugs",
            url: "https://youtu.be/-C7o7PNwg4g",
          },
          {
            title: "Lecture (3)",
            description: "Factors Affecting Drug Absorption in GIT pt.A",
            url: "https://youtu.be/e8pAZX6v_ZA",
          },
          {
            title: "Lecture (4)",
            description: "Factors Affecting Drug Absorption in GIT pt.B",
            url: "https://youtu.be/on4viYVLHPc",
          },
          {
            title: "Lecture (5)",
            description: "Factors Affecting Drug Absorption in GIT pt.C",
            url: "https://youtu.be/KrN-sYBGURw",
          },
          {
            title: "Lecture (6)",
            description: "Rectal Route of Drug Administration",
            url: "https://youtu.be/vkpraRqaOBk",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Parenteral Route of Administration",
        chapterTitleNote: "(IV, IM, SC)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacokinetics-1/chapter-06-parenteral-routes.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "IV Route of Administration",
            url: "https://youtu.be/gt4qJRrZ0OM",
          },
          {
            title: "Lecture (2)",
            description: "IM & SC Routes of Administration",
            url: "https://youtu.be/9eRjXSlnhz4",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Intranasal Route of Administration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacokinetics-1/chapter-07-intranasal-route.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Intranasal Route of Administration pt.A",
            url: "https://youtu.be/ogpHw6horgg",
          },
          {
            title: "Lecture (2)",
            description: "Intranasal Route of Administration pt.B",
            url: "https://youtu.be/5I5B1FySAH8",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter VIII + IX : Vaginal & Ear Routes of Administration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacokinetics-1/chapter-08-09-vaginal-ear-routes.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Vaginal & Ear Routes of Administration",
            url: "https://youtu.be/yDE6IjRgHp0",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Ocular Route of Administration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacokinetics-1/chapter-10-ocular-route.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Ocular Route of Administration",
            url: "https://youtu.be/m0p__lPj7Og",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI : Pulmonary Route of Administration",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacokinetics-1/chapter-11-pulmonary-route.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pulmonary Route of Administration",
            url: "https://youtu.be/XK7EKC-2SdQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter XII : Transdermal Drug Delivery System",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacokinetics-1/chaptere-12-tds.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "TDS pt.A",
            url: "https://youtu.be/0PfI5bQVI7o",
          },
          {
            title: "Lecture (2)",
            description: "TDS pt.B",
            url: "https://youtu.be/I7mhdEdmO8I",
          },
          {
            title: "Lecture (3)",
            description: "TDS pt.C",
            url: "https://youtu.be/y9ohmIOpDBA",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Shargel & Yu's : Applied Biopharmaceutics & PK 7th Edition",
          url: "../../../documents/level-3/semester-2/pharmacokinetics-1/book/Leon_Shargel,_Andrew_B_C_Yu_Applied_Biopharmaceutics_&_Pharmacokinetics.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Issam Abushammala, Final Exam of 2012",
          url: "../../../documents/level-3/semester-2/pharmacokinetics-1/exams/dr-issam-final-2012.pdf",
        },
        {
          title: "Dr. Issam Abushammala, Final Answered",
          url: "../../../documents/level-3/semester-2/pharmacokinetics-1/exams/dr-issam-final-answerd.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Biopharmaceutics & Pharmacokinetics I",
        "Course Code:": "PHTC3213",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHTC1201", title: "Physical Pharmacy I", required: true },
        { code: "PHTC2307", title: "Pharmaceutics I", required: false },
        { code: "PHTC3209", title: "Pharmaceutics II", required: false },
      ],
    },
  },
  {
    slug: "pharmacology-1",
    title: "Pharmacology One.",
    description:
      "Introduction to Pharmacology, Pharmacodynamics || Drugs affecting the ANS & Drugs affecting the CNS",
    lecturers: [
      {
        name: "Rasha Bseiso",
      },
    ],
    stats: {
      videosCount: 23,
      chaptersCount: 13,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Pharmacology",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Course outline & Introduction to Pharmacology",
            url: "https://youtu.be/mAWHM7FxWFw",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter II : Drug-Receptor Interactions & Pharmacodynamics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pharmacodynamics pt.A",
            url: "https://youtu.be/TEoMIwq5TVs",
          },
          {
            title: "Lecture (2)",
            description: "Pharmacodynamics pt.B",
            url: "https://youtu.be/dO5Mv9e2wkE",
          },
          {
            title: "Lecture (3)",
            description: "Pharmacodynamics pt.C",
            url: "https://youtu.be/xdvU9i-lVO4",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : ANS",
        chapterTitleNote: "(as Physiology)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "ANS pt.A",
            url: "https://youtu.be/RnfTVXaWWIQ",
          },
          {
            title: "Lecture (2)",
            description: "ANS pt.B",
            url: "https://youtu.be/sWEpndjM3uc",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Cholinergic Agonist",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cholinergic Agonist pt.A",
            url: "https://youtu.be/wyRyWcomzkQ",
          },
          {
            title: "Lecture (2)",
            description: "Cholinergic Agonist pt.B",
            url: "https://youtu.be/zGlWQurStOg",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Cholinergic Antagonist",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cholinergic Antagonist pt.A",
            url: "https://youtu.be/qlpGAQt13eE",
          },
          {
            title: "Lecture (2)",
            description: "Cholinergic Antagonist pt.B",
            url: "https://youtu.be/viZnCHt3LYg",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Adrenergic Agonist",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Adrenergic Agonist pt.A",
            url: "https://youtu.be/dfJa6KvLo_c",
          },
          {
            title: "Lecture (2)",
            description: "Adrenergic Agonist pt.B",
            url: "https://youtu.be/mY4v7m3EsNE",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Adrenergic Antagonist",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Adrenergic Antagonist pt.A",
            url: "https://youtu.be/nvIrHkze9v0",
          },
          {
            title: "Lecture (2)",
            description: "Adrenergic Antagonist pt.B",
            url: "https://youtu.be/ubyib6NBpLk",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Drugs for Neurodegenerative Diseases",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Drugs for Neurodegenerative Diseases pt.A",
            url: "https://youtu.be/OSDsB5c4mkg",
          },
          {
            title: "Lecture (2)",
            description: "Drugs for Neurodegenerative Diseases pt.B",
            url: "https://youtu.be/5O2Mc-EeC2M",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Anxiolytic & Hypnotic Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Anxiolytic & Hypnotic Drugs pt.A",
            url: "https://youtu.be/PLXIzZbxr_8",
          },
          {
            title: "Lecture (2)",
            description: "Anxiolytic & Hypnotic Drugs pt.B",
            url: "https://youtu.be/2M2RwYUeaZo",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Antidepressants",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antidepressants pt.A",
            url: "https://youtu.be/1LzXNtp5v_0",
          },
          {
            title: "Lecture (2)",
            description: "Antidepressants pt.B",
            url: "https://youtu.be/XmfpFOkzOMo",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI : Antipsychotic Drugs",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter XII : Drug for Epilepsy",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacology-1/chapter-12-drugs-for-epilepsy.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Drug for Epilepsy pt.A",
            url: "https://youtu.be/ioTTU7eWYpw",
          },
          {
            title: "Lecture (2)",
            description: "Drug for Epilepsy pt.B",
            url: "https://youtu.be/w3j-BN65G9w",
          },
        ],
      },
      {
        chapterTitle: "Chapter XIV : Opioids",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/pharmacology-1/chapter-13-opioids.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Opioids",
            url: "https://youtu.be/z-c-diJdghk",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "404 - Nof Found",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "Ahmed J. Skaik - CNS Unit",
          url: "../../../documents/level-3/semester-2/pharmacology-1/summary/cns-pharmacology-summary-ahmed-skaik.pdf",
        },
      ],
      exams: [
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2016",
          url: "../../../documents/level-3/semester-2/pharmacology-1/exams/dr-mohammed-taleb-final-2016.pdf",
        },
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2017",
          url: "../../../documents/level-3/semester-2/pharmacology-1/exams/dr-mohammed-taleb-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmacology I",
        "Course Code:": "PHPT4310",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT2306", title: "Human Physiology I", required: true },
        { code: "PHPT3307", title: "Human Physiology II", required: false },
        { code: "PHPT3204", title: "Pathophysiology I", required: false },
      ],
    },
  },
  {
    slug: "phytochemistry-1",
    title: "Phytochemistry One.",
    description:
      "Introduction to Phytochemistry & Different Groups of Phytochemicals",
    lecturers: [
      {
        title: "Dr.",
        name: "Mazen El-sakka",
      },
    ],
    stats: {
      videosCount: 13,
      chaptersCount: 10,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Phytochemistry",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/4lnwZr757aE",
          },
          {
            title: "Lecture (2)",
            description: "Phytochemistry Principles",
            url: "https://youtu.be/CN8iFYZCPmc",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Simple Phenols",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Simple Phenols - Chemistry",
            url: "https://youtu.be/3PkbcY4-ODc",
          },
          {
            title: "Lecture (2)",
            description: "Drugs Containing Simple Phenols",
            url: "https://youtu.be/sMpfhCtaXE8",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Coumarin",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Coumarins",
            url: "https://youtu.be/XmVz2jzOJp8",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Lignane",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Lignane",
            url: "https://youtu.be/3ULRdjobqZA",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Shikimate: Phynylpropane chain",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Curcuma & Ginger",
            url: "https://youtu.be/ROvMWeRl12U",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Flavonoids",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Flavonoids Chemistry",
            url: "https://youtu.be/XtlYnCxYKV8",
          },
          {
            title: "Lecture (2)",
            description: "Drugs Containing Flavonoids",
            url: "https://youtu.be/KJK_HSdnX2E",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Anthocyanins",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Anthocyanins",
            url: "https://youtu.be/_-0ylbgaxos",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Tannins",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Tannins",
            url: "https://youtu.be/Wzv6gTGw3do",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Quinones",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Quinones",
            url: "https://youtu.be/GtTNSxf0T9o",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Orcinols",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Quinones",
            url: "https://youtu.be/MvnJe_cqLkI",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Dr. Mazen El-sakka: Manual of Phytochemistry I",
          url: "../../../documents/level-3/semester-2/phytochemistry-1/phytochemistry-1-book.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mazen El-sakka, Final Exam of 2015",
          url: "../../../documents/level-3/semester-2/phytochemistry-1/exams/dr-mazen-final-2015.pdf",
        },
        {
          title: "Dr. Mazen El-sakka, Midterm Exam of 2016",
          url: "../../../documents/level-3/semester-2/phytochemistry-1/exams/dr-mazen-final-2022-2016-2013.pdf",
        },
        {
          title: "Dr. Mazen El-sakka, Trial Exam of 2014 & 2022",
          url: "../../../documents/level-3/semester-2/phytochemistry-1/exams/dr-mazen-mid-2014-2022.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Phytochemistry I",
        "Course Code:": "PHCG3208",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacognosy & Pharmaceutical Botany (PHCG)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCG2201", title: "Pharmaceutical Botany", required: false },
        { code: "PHCG3204", title: "Pharmacognosy", required: true },
      ],
    },
  },
  {
    slug: "technical-instruments",
    title: "Technical Instruments.",
    description:
      "Quantitative & Qualitative Instrumental Analysis of Chemicals (Pharmaceutical Drugs)  NMR, IR, UV & Mass Spectroscopy || Chromatography",
    lecturers: [
      {
        title: "Dr.",
        name: "Kanan Wahedy",
      },
    ],
    stats: {
      videosCount: 41,
      chaptersCount: 5,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : NMR Spectroscopy",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/technical-instraments/chapter-1-nmr-spec.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "NMR Spectroscopy pt.A (1-19)",
            url: "https://youtu.be/qfpcqawwRbY",
          },
          {
            title: "Lecture (2)",
            description: "NMR Spectroscopy pt.B (19-34)",
            url: "https://youtu.be/qucB88j8VSI",
          },
          {
            title: "Lecture (3)",
            description: "NMR Spectroscopy pt.C (35-61)",
            url: "https://youtu.be/k-d0Ka569FU",
          },
          {
            title: "Lecture (4)",
            description: "NMR Spectroscopy pt.D (62-79)",
            url: "https://youtu.be/cNzz4-Yd68M",
          },
          {
            title: "Lecture (5)",
            description: "NMR Spectroscopy pt.E (80-107)",
            url: "https://youtu.be/1SHEs0y5rWg",
          },
          {
            title: "Lecture (6)",
            description: "NMR Spectroscopy pt.F (108-121)",
            url: "https://youtu.be/xzI4XotZynQ",
          },
          {
            title: "Lecture (7)",
            description: "NMR Spectroscopy pt.G (124-166)",
            url: "https://youtu.be/TL4-mvLelk0",
          },
          {
            title: "Lecture (8)",
            description: "NMR Spectroscopy pt.H (167-185)",
            url: "https://youtu.be/CxdGahoJQFU",
          },
          {
            title: "Discussion (2)",
            description: "Applications",
            url: "https://youtu.be/PRcjnex8Acs",
          },
          {
            title: "Answering Quiz Questions",
            description: "Applications",
            url: "https://youtu.be/4VgcHr72ZZs",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : IR Spectroscopy",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/technical-instraments/chapter-2-ir-spec.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/CSCnP4971BI",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/B7RW20S4tvM",
          },
          {
            title: "Lecture (3)",
            description: "Absorption Region pt.A (C-H)",
            url: "https://youtu.be/mTbsVbyUS6g",
          },
          {
            title: "Lecture (4)",
            description: "Absorption Region pt.B I (O-H)",
            url: "https://youtu.be/W6saRp6DPuU",
          },
          {
            title: "Lecture (5)",
            description: "Absorption Region pt.B II (O-H)",
            url: "https://youtu.be/m-vd7-ySGg4",
          },
          {
            title: "Lecture (6)",
            description: "Absorption Region (N-H)",
            url: "https://youtu.be/6DUkVq7M2Qs",
          },
          {
            title: "Lecture (7)",
            description: "Absorption Region (CN, ApplicationsC)",
            url: "https://youtu.be/KBAieEeoobg",
          },
          {
            title: "Lecture (8)",
            description: "Absorption Region (C=O)",
            url: "https://youtu.be/YZ6LAhr8fxc",
          },
          {
            title: "Lecture (9)",
            description:
              "Absorption Region, Angle Strain & Examples of       Carbonyls",
            url: "https://youtu.be/QRnOPMxfhqQ",
          },
          {
            title: "Lecture (10)",
            description: "Absorption Region (C=C, C-O, C-X)",
            url: "https://youtu.be/yUTfDN9KUlQ",
          },
          {
            title: "IR MCQ Questions (2)",
            description: "Applications",
            url: "https://youtu.be/P_kMxhRmo-E",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : UV Spectroscopy",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/technical-instraments/chapter-3-uv-spec.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/EDvJmfD3B1Q",
          },
          {
            title: "Lecture (2)",
            description: "principles & MO Theory",
            url: "https://youtu.be/2WM5nGaiidQ",
          },
          {
            title: "Lecture (3)",
            description: "λ-max & Factors pt.A",
            url: "https://youtu.be/TG12TLBnJtE",
          },
          {
            title: "Lecture (4)",
            description: "λ-max & Factors pt.B",
            url: "https://youtu.be/bo6RpJQjIjA",
          },
          {
            title: "Lecture (5)",
            description: "UV Terminology",
            url: "https://youtu.be/Xj7fbGpiaPg",
          },
          {
            title: "Lecture (6)",
            description: "Woodward pt.A",
            url: "https://youtu.be/h52peq6v8rc",
          },
          {
            title: "Lecture (7)",
            description: "Woodward pt.B",
            url: "https://youtu.be/QIndUzRpjc0",
          },
          {
            title: "Lecture (8)",
            description: "Color & Conjugation",
            url: "https://youtu.be/GnB89TVEDyE",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Mass Spectroscopy",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-3/semester-2/technical-instraments/chapter-4-mass-spec.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Mass Spectroscopy pt.A (1-6)",
            url: "https://youtu.be/ioPalG0uHZY",
          },
          {
            title: "Lecture (2)",
            description: "Mass Spectroscopy pt.B (7-12)",
            url: "https://youtu.be/XI-5BGnmhs4",
          },
          {
            title: "Lecture (3)",
            description: "Mass Spectroscopy pt.C (13-22)",
            url: "https://youtu.be/7_CmrsbLVL8",
          },
          {
            title: "Lecture (4)",
            description: "Mass Spectroscopy pt.D (23-30)",
            url: "https://youtu.be/P3g7BiHUiOs",
          },
          {
            title: "Lecture (5)",
            description: "Mass Spectroscopy pt.E (31-41)",
            url: "https://youtu.be/37MZnIarFyY",
          },
          {
            title: "Lecture (6)",
            description: "Mass Spectroscopy pt.F (42-47)",
            url: "https://youtu.be/IumXfjP7bXQ",
          },
          {
            title: "Lecture (7)",
            description: "Mass Spectroscopy pt.G (48-59)",
            url: "https://youtu.be/vbz5XZwvyqY",
          },
          {
            title: "Lecture (8)",
            description: "Mass Spectroscopy pt.H (60-90)",
            url: "https://youtu.be/5gmIb73PP10",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Chromatography",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Chromatography pt.A",
            url: "https://youtu.be/fm9tmQPeKwo",
          },
          {
            title: "Lecture (2)",
            description: "Chromatography pt.B",
            url: "https://youtu.be/owo8-V3yUGs",
          },
          {
            title: "Lecture (3)",
            description: "Chromatography pt.C",
            url: "https://youtu.be/niT-HPRCqyE",
          },
          {
            title: "Lecture (4)",
            description: "Chromatography pt.D",
            url: "https://youtu.be/N1owX_X_mxI",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "404 - Not Found",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      personalRecommendations: {
        title: "IR Spectroscopy",
        url: "https://www.youtube.com/watch?v=_Xi5ZVbbftI",
      },
      exams: [
        {
          title: "Dr. Kanan Wahedy, Final Exam of 2017",
          url: "../../../documents/level-3/semester-2/technical-instraments/exams/final-instramental-2017.pdf",
        },
        {
          title: "Dr. Kanan Wahedy, Final Exam of 2019",
          url: "../../../documents/level-3/semester-2/technical-instraments/exams/final-instrumental-2019.pdf",
        },
        {
          title: "Dr. Kanan Wahedy, Trial Exam of 2019",
          url: "../../../documents/level-3/semester-2/technical-instraments/exams/final-instrumental-trial.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Technical Instruments",
        "Course Code:": "PHCH2308",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "3rd Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH1303", title: "Organic Chemistry I", required: false },
        { code: "PHCH2306", title: "Organic Chemistry II", required: true },
        { code: "PHTC3209", title: "Pharmaceutics II", required: false },
      ],
    },
  },
  {
    slug: "first-aid",
    title: "First Aid.",
    description:
      "Theoretical Study of Common Cases & How to Deal with them Until Full Medical Treatment is Available",
    lecturers: [
      {
        name: "Jamil Mohanna",
      },
    ],
    stats: {
      videosCount: 11,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to First Aid",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline",
            url: "https://youtu.be/NAAi64CLoE4",
          },
          {
            title: "Lecture (1)",
            description: "Resuscitation",
            url: "https://youtu.be/3F1KD8qqUcI",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Unconsciousness",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Unconsciousness",
            url: "https://youtu.be/XS7fInR2Arw",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Airways & Breathing Problems",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Airways & Breathing Problems",
            url: "https://youtu.be/kOlko67qBB4",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Circulation Problems",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Circulation Problems",
            url: "https://youtu.be/NBZyUoTJ020",
          },
          {
            title: "Lecture (2)",
            description: "Wounds & Bleeding pt.A",
            url: "https://youtu.be/ge616NtOzhY",
          },
          {
            title: "Lecture (3)",
            description: "Wounds & Bleeding pt.B",
            url: "https://youtu.be/vlloeuw3ik4",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Poisons, Burns & Scalds",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Poisons, Burns & Scalds",
            url: "https://youtu.be/tGVE6jJERyM",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Injuries to Bone, Muscles & Joints",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Injuries to Bone, Muscles & Joints",
            url: "https://youtu.be/tM45C2stWng",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Effects of Heat & Cold",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Effects of Heat & Cold",
            url: "https://youtu.be/8P_D-sgVKt0",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Serious Conditions",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Serious Conditions",
            url: "https://youtu.be/dregUJU5748",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "First Aid Made Easy",
          url: "../../../documents/level-4/semester-1/first-aid/first-aid-book.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "First Aid",
        "Course Code:": "PHPT5122",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "College Need",
        "Course Level:": "4th Level",
        "Total Credits:": "1 Credit Hour",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "pharmaceutical-chem-1",
    title: "Pharmaceutical Chemistry One.",
    description:
      "Introduction to Pharmaceutical Chemistry, Biotransformation of Drugs & Antibiotics Classes",
    lecturers: [
      {
        title: "Prof.",
        name: "Usama Abu-mohsen",
      },
    ],
    courseNotes: [
      {
        note: "* It's Highly Recommended to Check out Chapter I & III of the",
        url: "/courses/organic-chemistry-2",
        urlText: "Organic Chemistry II Course",
      },
    ],
    stats: {
      videosCount: 23,
      chaptersCount: 10,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Pharmaceutical Chemistry",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/b7JB_QS73bM",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/UEHeMLMvUug",
          },
          {
            title: "Lecture (3)",
            description: "Introduction pt.C",
            url: "https://youtu.be/Eu3UggUlrA4",
          },
          {
            title: "Lecture (4)",
            description: "Introduction pt.D",
            url: "https://youtu.be/l_kWzQwlXFQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Biotransformation of Drugs",
        chapterTitleNote: "(Metabolism)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Biotransformation pt.A",
            url: "https://youtu.be/TgdeeyuFICg",
          },
          {
            title: "Lecture (2)",
            description: "Biotransformation pt.B",
            url: "https://youtu.be/aUx6gbTsrDQ",
          },
          {
            title: "Lecture (3)",
            description: "Biotransformation pt.C",
            url: "https://youtu.be/H0uVd_IiSZ0",
          },
          {
            title: "Lecture (4)",
            description: "Biotransformation pt.D",
            url: "https://youtu.be/xnjP41GHpxQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Sulfa Drugs",
        chapterTitleNote: "(Synthetic ABs)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Sulfa Drugs pt.A",
            url: "https://youtu.be/cT3R5C4Jbi0",
          },
          {
            title: "Lecture (2)",
            description: "Sulfa Drugs pt.B",
            url: "https://youtu.be/b-uni2fY8qI",
          },
          {
            title: "Lecture (3)",
            description: "Sulfa Drugs pt.C",
            url: "https://youtu.be/KWem-HmBaag",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Quinolones + Nitrofurans + Methenamines",
        chapterTitleNote: "(Synthetic ABs)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Quinolones pt.A",
            url: "https://youtu.be/jtXR_JSvSIw",
          },
          {
            title: "Lecture (2)",
            description: "Quinolones pt.B",
            url: "https://youtu.be/fhrm2Pk_fic",
          },
          {
            title: "Lecture (3)",
            description:
              "Quinolones pt.C + Nitrofurans       (02:30) + Methenamines       (07:30) + Penicillins       pt.A (10:30)",
            url: "https://youtu.be/hXikq-VQ_vk",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Penicillins",
        chapterTitleNote: "(Natural ABs)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Penicillins pt.B",
            url: "https://youtu.be/o-_-sAMi74o",
          },
          {
            title: "Lecture (2)",
            description: "Penicillins pt.C",
            url: "https://youtu.be/rkKOQlHjxTY",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Cephalosporins",
        chapterTitleNote: "(Natural AB)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cephalosporins pt.A",
            url: "https://youtu.be/RpuUc_5XVHo",
          },
          {
            title: "Lecture (2)",
            description: "Cephalosporins pt.B",
            url: "https://youtu.be/h61XT_0em40",
          },
          {
            title: "Lecture (3)",
            description: "Cephalosporins pt.C",
            url: "https://youtu.be/CJIePvtgtqQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : New β Lactams",
        chapterTitleNote: "(Natural ABs)",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VIII : Tetracyclines",
        chapterTitleNote: "(Natural ABs)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Tetracyclines pt.A",
            url: "https://youtu.be/W4Ftp61ChXE",
          },
          {
            title: "Lecture (2)",
            description: "Tetracyclines pt.B",
            url: "https://youtu.be/-8R89RDGhkk",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Chloramphenicol + Aminoglycosides",
        chapterTitleNote: "(Natural ABs)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description:
              "Tetracyclines pt.C + Chloramphenicol       (01:00) +       Aminoglycosides       (09:01) + Macrolides       pt.A       (18:20)",
            url: "https://youtu.be/UN72b3KV5Cc",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Macrolides & Polypeptides",
        chapterTitleNote: "(Other Natural ABs)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Macrolides pt.B & Polypeptides       (15:45)",
            url: "https://youtu.be/53tJ_DT1Hrs",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title:
            "Wilson & Gisvold's Textbook of Organic Medicinal & Pharmaceutical Chemistry - 12th Edition",
          url: "../../../documents/level-4/semester-1/pharmaceutical-chemistry-1/Wilson_and_Gisvold's_Textbook.pdf",
        },
        {
          title: "V. Alagarsamy, Textbook of Medicinal Chemistry",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/TEXTBOOK-OF-MEDICINAL-CHEMISTRY.pdf",
        },
        {
          title: "Foye's Principles of Medicinal Chmeistry - 7th Edition",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/Foye's_Principles_of_Medicinal_Chemistry,_7th.pdf",
        },
      ],
      summaries: [
        {
          title: "Marah Isam Falit",
          url: "../../../documents/level-4/semester-1/pharmaceutical-chemistry-1/summary/pharm-chem-1-summary.pdf",
        },
      ],
      exams: [
        {
          title: "Dr. Ihab Al-masry, Final Exam of 2018",
          url: "../../../documents/level-4/semester-1/pharmaceutical-chemistry-1/exams/dr-ihab-final-2018.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutical Chemistry I",
        "Course Code:": "PHCH4210",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH1303", title: "Organic Chemistry I", required: false },
        { code: "PHCH2306", title: "Organic Chemistry II", required: true },
      ],
    },
  },
  {
    slug: "pharmaceutical-law",
    title: "Pharmaceutical Law & History.",
    description:
      "Pharmaceutical Laws in the State of Palestine & Pharmaceutical History",
    lecturers: [
      {
        title: "Dr.",
        name: "Riad El-qidra",
      },
    ],
    stats: {
      videosCount: 19,
      chaptersCount: 2,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Pharmaceutical Law",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/TSxlyfB5oP8",
          },
          {
            title: "Lecture (2)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/2Bi9iRrRnN4",
          },
          {
            title: "Lecture (3)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/Lo2W6Y8WO4M",
          },
          {
            title: "Lecture (4)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/hTLnMrD4ZZc",
          },
          {
            title: "Lecture (5)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/zZwRmzIA1hU",
          },
          {
            title: "Lecture (6)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/VaobPWgxcnc",
          },
          {
            title: "Lecture (7)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/04z6CkO-yeAhttps://youtu.be/04z6CkO-yeA",
          },
          {
            title: "Lecture (8)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/bkiONFuKBpI",
          },
          {
            title: "Lecture (9)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/xyiw4HW0r0w",
          },
          {
            title: "Lecture (10)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/WRi74e1J6cs",
          },
          {
            title: "Lecture (11)",
            description: "Pharmaceutical Law",
            url: "https://youtu.be/ijlcFPuJSH4",
          },
        ],
      },
      {
        chapterTitle: "Part II : Pharamceutical History",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Pharamceutical History",
            url: "https://drive.google.com/file/d/10VHIpHMCvYtQzn9g_I1VuJ6sGaJNnPcA/view?usp=sharing",
          },
          {
            title: "Lecture (2)",
            description: "Pharamceutical History",
            url: "https://drive.google.com/file/d/1v5vqLCwP4YuUd52WaDYPsDSFmUz1EYy4/view",
          },
          {
            title: "Lecture (3)",
            description: "Pharamceutical History",
            url: "https://drive.google.com/file/d/1Y9KdeJa-76NR7NNYdEx4CI5HDSW0j4sa/view?usp=sharing",
          },
          {
            title: "Lecture (4)",
            description: "Pharamceutical History",
            url: "https://drive.google.com/file/d/1qgqjuwIu8o0zwXGcMhBaZXzhg1GE9Fy4/view?usp=sharing",
          },
          {
            title: "Lecture (5)",
            description: "Pharamceutical History",
            url: "https://drive.google.com/file/d/1m5qS-T9TwnmO-5XH7dbCPWWfRi3AU2Hx/view?usp=sharing",
          },
          {
            title: "Lecture (6)",
            description: "Pharamceutical History",
            url: "https://drive.google.com/file/d/10_IfmEmoIJ6kAdO6sRiMVZzd3WxUVUlC/view?usp=sharing",
          },
          {
            title: "Lecture (7)",
            description: "Pharamceutical History",
            url: "https://drive.google.com/file/d/1-Lgnj_2dS59VqmVyoVExlgIcqYHTpY-3/view?usp=sharing",
          },
          {
            title: "Lecture (8)",
            description: "Pharamceutical History",
            url: "https://drive.google.com/file/d/1b-PRQUJxKZcxSk0tyepPQmOyqJkgxmlQ/view?usp=sharing",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Reference of Pharmaceutical Law & History",
          url: "../../../documents/level-4/semester-1/pharmaceutical-law/pharmaceutical-law-history-book.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Issam Abushammala, Final Exam",
          url: "../../../documents/level-4/semester-1/pharmaceutical-law/exams/dr-issam-final.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutical Law & History",
        "Course Code:": "PHTC4111",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "1 Credit Hour",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "pharmacokinetics-2",
    title: "Biopharmaceutics & Pharmacokinetics Two.",
    description:
      "Pharmacokinetics of Drugs in the Body (ADME: Absorption, Distribution, Metabolism & Excretion)",
    lecturers: [
      {
        title: "Prof.",
        name: "Issam Abushammala",
      },
    ],
    stats: {
      videosCount: 21,
      chaptersCount: 9,
    },
    lectures: [
      {
        chapterTitle: "Chapter IA : Introduction to Pharmacokinetics",
        chapterTitleNote: "(Compartmental Theory)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-1-introduction-to-pk.pdf",
            type: "slides",
          },
          {
            title: "Chapter Questions",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-1-problmes.pdf",
            type: "questions",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Compartmental Theory pt.A",
            url: "https://youtu.be/vcrA-Kosi5o",
          },
          {
            title: "Lecture (2)",
            description: "Compartmental Theory pt.B",
            url: "https://youtu.be/_QTsnmlwCiA",
          },
        ],
      },
      {
        chapterTitle: "Chapter IB : One Comparmental Open Model",
        chapterTitleNote: "(IV: Bolus & Infusion)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "One Compartmental Open Model IV Bolus",
            url: "https://youtu.be/Rjgbjx1bY00",
          },
          {
            title: "Lecture (2)",
            description: "One Compartmental Open Model IV Infusion",
            url: "https://youtu.be/UIryMbSdO0o",
          },
          {
            title: "Lecture (3)",
            description:
              "One Compartmental Open Model IV Bolus       (Problems)",
            url: "https://youtu.be/86E0tpDVK1k",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Two Comparmental Open Model",
        chapterTitleNote: "(IV Bolus)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-3-compartemental-open-intra.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Two Comparmental Open Model IV Bolus",
            url: "https://www.youtube.com/watch?v=axtJ20fsM5I",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : One Comparmental Open Model",
        chapterTitleNote: "(Extravascular Routes)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-2-compartmental-open-extra.pdf",
            type: "slides",
          },
          {
            title: "Chapter Questions",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-2-problems.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "One Compartmental Open Model Extravascular pt.A",
            url: "https://youtu.be/dTfLWK98Hio",
          },
          {
            title: "Lecture (2)",
            description: "One Compartmental Open Model Extravascular pt.B",
            url: "https://youtu.be/zIsJrPuZYNw",
          },
          {
            title: "Lecture (3)",
            description:
              "One Compartmental Open Model Extravascular       (Problems)",
            url: "https://youtu.be/RY0HUvox0v4",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Non-linear Pharmacokinetics",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-4-non-linear-pk.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Non-linear PK",
            url: "https://www.youtube.com/watch?v=XS3XB2EwKdM",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Drug Distribution",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-5-distribution.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Distribution pt.A",
            url: "https://www.youtube.com/watch?v=p02XFBHdSB0&feature=youtu.be",
          },
          {
            title: "Lecture (2)",
            description: "Distribution pt.B",
            url: "https://www.youtube.com/watch?v=5qqcrZBuNBg",
          },
          {
            title: "Lecture (3)",
            description: "Distribution pt.C",
            url: "https://www.youtube.com/watch?v=AB1qaJhHwus&feature=youtu.be",
          },
          {
            title: "Lecture (4)",
            description: "Distribution pt.D",
            url: "https://www.youtube.com/watch?v=FRZqYkBTrX0",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Drug Metabolism",
        chapterTitleNote: "(Biotransformation)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-6-distribution.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Metabolism pt.A",
            url: "https://www.youtube.com/watch?v=pDJLhwGMWKY",
          },
          {
            title: "Lecture (2)",
            description: "Metabolism pt.B",
            url: "https://www.youtube.com/watch?v=_WfjjnsJv_M",
          },
          {
            title: "Lecture (3)",
            description: "Metabolism pt.C",
            url: "https://www.youtube.com/watch?v=Mn2oe3_OnfQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Drug Excretion",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-7-excretion.pdf",
            type: "slides",
          },
          {
            title: "Chapter Questions",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-7-problems.pdf",
            type: "answers",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Excretion pt.A",
            url: "https://www.youtube.com/watch?v=uCdIGo3AxoA",
          },
          {
            title: "Lecture (2)",
            description: "Excretion pt.B",
            url: "https://www.youtube.com/watch?v=t2_659CQqds",
          },
          {
            title: "Lecture (3)",
            description: "Excretion (Problems)",
            url: "https://www.youtube.com/watch?v=USIBlyw0AKM",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Bioavailability",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-1/pharmacokinetics-2/chapter-8-bioavailability.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Bioavailability",
            url: "https://www.youtube.com/watch?v=9stQ4JHK9Kc",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Shargel & Yu's : Applied Biopharmaceutics & PK 7th Edition",
          url: "../../../documents/level-3/semester-2/pharmacokinetics-1/book/Leon_Shargel,_Andrew_B_C_Yu_Applied_Biopharmaceutics_&_Pharmacokinetics.pdf",
        },
      ],
      summaries: [
        {
          title: "Mohammed El-Farra",
          url: "../../../documents/level-4/semester-1/pharmacokinetics-2/summary/pharmacokinetics-2-course-summary.pdf",
        },
      ],
      exams: [
        {
          title: "Dr. Issam Abushammala, Final Exam of 2018",
          url: "../../../documents/level-4/semester-1/pharmacokinetics-2/exams/dr-issam-final-2018.pdf",
        },
        {
          title: "Dr. Issam Abushammala, Final Exam",
          url: "../../../documents/level-4/semester-1/pharmacokinetics-2/exams/dr-issam-final.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Biopharmaceutics & Pharmacokinetics II",
        "Course Code:": "PHTC4314",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHTC1201", title: "Physical Pharmacy I", required: true },
        { code: "PHTC2307", title: "Pharmaceutics I", required: false },
        {
          code: "PHTC3213",
          title: "Biopharmaceutics & Pharmacokinetics I",
          required: false,
        },
      ],
    },
  },
  {
    slug: "pharmacology-2",
    title: "Pharmacology Two.",
    description:
      "Respiratory Drugs, Antihistamines, (GIT & Antiemetic Drugs), Drugs affecting the Cardiovascular System & Drugs for DM",
    lecturers: [
      {
        name: "Rasha Bseiso",
      },
    ],
    stats: {
      videosCount: 20,
      chaptersCount: 11,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Respiratory Disorders Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Respiratory Disorders Drugs pt.A",
            url: "https://youtu.be/8VinPL2FXN8",
          },
          {
            title: "Lecture (2)",
            description: "Respiratory Disorders Drugs pt.B",
            url: "https://youtu.be/BMaHR483qP0",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Antihistamines",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antihistamines pt.A",
            url: "https://www.youtube.com/watch?v=6ov25zaZkqQ&feature=youtu.be",
          },
          {
            title: "Lecture (2)",
            description:
              "Antihistamines pt.B + GIT & Antiemetic Drugs       pt.A",
            url: "https://www.youtube.com/watch?v=VxxVvW33BnQ&feature=youtu.be",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : GIT & Antiemetic Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "GIT & Antiemetic Drugs pt.B",
            url: "https://youtu.be/Lo3OuL5eXfs",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Antihypertensives",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antihypertensives pt.A",
            url: "https://youtu.be/xxdoEeguF6s",
          },
          {
            title: "Lecture (2)",
            description: "Antihypertensives pt.B",
            url: "https://youtu.be/KF2phC52XHA",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Diuretics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Diuretics pt.A",
            url: "https://youtu.be/zwrsYuzZqnI",
          },
          {
            title: "Lecture (2)",
            description: "Diuretics pt.B",
            url: "https://youtu.be/YYdeBZZf1H0",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Drugs for Heart Failure",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Drugs for Heart Failure pt.A",
            url: "https://youtu.be/qv7LLYYqsNg",
          },
          {
            title: "Lecture (2)",
            description: "Drugs for Heart Failure pt.B",
            url: "https://youtu.be/xdPrUBv_0is",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Antiarrhythmics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiarrhythmics pt.A",
            url: "https://youtu.be/d8LH0cIcU14",
          },
          {
            title: "Lecture (2)",
            description: "Antiarrhythmics pt.B",
            url: "https://youtu.be/1nzdSbbLBSc",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Antianginal Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antianginal Drugs",
            url: "https://youtu.be/uvz8GrYjJ5k",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Anticoagulants & Antiplatelet Agents",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Anticoagulants & Antiplatelet Agents pt.A",
            url: "https://youtu.be/-L8YaC8RRbg",
          },
          {
            title: "Lecture (2)",
            description: "Anticoagulants & Antiplatelet Agents pt.B",
            url: "https://youtu.be/RAoy0aM7ZCY",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Drugs for Hyperlipidemia",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Drugs for Hyperlipidemia pt.A",
            url: "https://youtu.be/0KXX8KrTZao",
          },
          {
            title: "Lecture (2)",
            description: "Drugs for Hyperlipidemia pt.B",
            url: "https://youtu.be/IK5l5rGqcLc",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI : Drugs for DM",
        chapterTitleNote: "(Diabetes Mellitus)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Drugs for DM pt.A",
            url: "https://youtu.be/UWdMczczQaY",
          },
          {
            title: "Lecture (2)",
            description: "Drugs for DM pt.B",
            url: "https://youtu.be/FxOlSWYsYNA",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2018",
          url: "../../../documents/level-4/semester-1/pharmacology-2/exams/dr-mohammed-shbair-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmacology II",
        "Course Code:": "PHPT4312",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT2306", title: "Human Physiology I", required: true },
        { code: "PHPT3307", title: "Human Physiology II", required: false },
        { code: "PHPT4310", title: "Pharmacology I", required: false },
      ],
    },
  },
  {
    slug: "phytochemistry-2",
    title: "Phytochemistry Two.",
    description: "Terpenoids & Steriods",
    lecturers: [
      {
        title: "Dr.",
        name: "Mazen El-sakka",
      },
    ],
    stats: {
      videosCount: 23,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/ge0-f_3ui3c",
          },
          {
            title: "Lecture (2)",
            description: "Building Blocks",
            url: "https://youtu.be/ipM4eajFtyA",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Monoterpenoids",
        chapterTitleNote: "(10C)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Fatty Acids",
            url: "https://youtu.be/LtSJaMLGKG0",
          },
          {
            title: "Lecture (2)",
            description: "Mevalonic Acid",
            url: "https://youtu.be/f3XCGLALn_c",
          },
          {
            title: "Lecture (3)",
            description: "GPP Chemistry",
            url: "https://youtu.be/_5ZAIScMW9M",
          },
          {
            title: "Lecture (4)",
            description: "Iridoids Chemistry",
            url: "https://youtu.be/dreWEG0bie4",
          },
          {
            title: "Lecture (5)",
            description: "Essential Oils pt.A",
            url: "https://youtu.be/p50sNOjxPO0",
          },
          {
            title: "Lecture (6)",
            description: "Essential Oils pt.B",
            url: "https://youtu.be/cBSYdm-HYzM",
          },
          {
            title: "Lecture (7)",
            description: "Devil's Claw",
            url: "https://youtu.be/tFCyEVl_nJ4",
          },
          {
            title: "Lecture (8)",
            description: "Valeriana Officinales & Olea Europea",
            url: "https://youtu.be/-papxKpYzjg",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Sesquiterpenes",
        chapterTitleNote: "(15C)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Sesquiterpenes",
            url: "https://youtu.be/WcuObV-eTp0",
          },
          {
            title: "Lecture (2)",
            description: "Diterpens & Sesterterpenes",
            url: "https://youtu.be/N6eZIJB0Qbc",
          },
          {
            title: "Revision of Chapter (2)",
            description: "Revision of Chapter (2)",
            url: "https://www.youtube.com/watch?v=JVPegvac70w&feature=youtu.be",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Triterpens",
        chapterTitleNote: "(30C)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Triterpens",
            url: "https://youtu.be/s9mlZH9VRrA",
          },
          {
            title: "Lecture (2)",
            description: "Triterpes Drugs",
            url: "https://youtu.be/UPYkCZ8skVY",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Steroids",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cholesterol",
            url: "https://youtu.be/PV2PXaor7bY",
          },
          {
            title: "Lecture (2)",
            description: "Vitamin D",
            url: "https://youtu.be/sftXMbGXnZE",
          },
          {
            title: "Lecture (3)",
            description: "Steroidal Saponine",
            url: "https://youtu.be/JBYtBooRafE",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Cardiotonic Glycosides",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Crdiotonic Glycosides pt.A",
            url: "https://youtu.be/wHFe0u9cGys",
          },
          {
            title: "Lecture (2)",
            description: "Crdiotonic Glycosides pt.B",
            url: "https://youtu.be/A5Jd0Ow0_fk",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Bile Acids",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Bile Acids",
            url: "https://youtu.be/SOUSH0w6t8o",
          },
          {
            title: "Lecture (2)",
            description: "Adrenal Hormones",
            url: "https://youtu.be/hSDU1a7PELo",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Tetraterpenes",
        chapterTitleNote: "(40C)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Terterterpenes",
            url: "https://m.youtube.com/watch?v=b-lyRUDsQt4&feature=youtu.be",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      extraResources: [
        {
          title: "Slides of the Course",
          url: "../../../documents/level-4/semester-1/phytochemistry-2/phytochemistry-2-slides.pdf",
          note: "Dr. Mazen",
        },
        {
          title: "Slides of the Course",
          url: "../../../documents/level-4/semester-1/phytochemistry-2/phytochemistry-2-slides-dr-khaldonue.pdf",
          note: "Dr. Khaldoun",
        },
      ],
      exams: [
        {
          title: "Dr. Mazen El-sakka, Final Exam of 2017",
          url: "../../../documents/level-4/semester-1/phytochemistry-2/exams/dr-mazen-final-2017.pdf",
        },
        {
          title: "Dr. Maha El-khateeb, Final Exam",
          url: "../../../documents/level-4/semester-1/phytochemistry-2/exams/dr-maha-final.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Phytochemistry II",
        "Course Code:": "PHCG4209",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacognosy & Pharmaceutical Botany (PHCG)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCG2201", title: "Pharmaceutical Botany", required: false },
        { code: "PHCG3204", title: "Pharmacognosy", required: true },
        { code: "PHCG3208", title: "Phytochemistry I", required: false },
      ],
    },
  },
  {
    slug: "industrial-pharmacy-1",
    title: "Industrial Pharmacy One.",
    description:
      "Design & Mechanism of Action of the Instruments Included in the Unit Operation in Pharmaceutical Practice",
    lecturers: [
      {
        title: "Dr.",
        name: "Riad El-qidra",
      },
    ],
    stats: {
      videosCount: 16,
      chaptersCount: 7,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Industrial Pharmacy",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/chapter-1-introductoin.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction to Industrial Pharmacy",
            url: "https://youtu.be/M5hzfv-kAX4",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Mixing Process",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/chapter-2-mixing-process.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "S-S Mixing pt.A",
            url: "https://youtu.be/83DO1ds-ZZ8",
          },
          {
            title: "Lecture (2)",
            description: "S-S Mixing pt.B",
            url: "https://youtu.be/PVn211T2XLk",
          },
          {
            title: "Lecture (3)",
            description: "L-L Mixing pt.A",
            url: "https://youtu.be/hUtr3UW2i7U",
          },
          {
            title: "Lecture (4)",
            description: "L-L Mixing pt.B",
            url: "https://youtu.be/a_n5KFEorcg",
          },
          {
            title: "Lecture (5)",
            description:
              "Mixers of Plastic Materials (Semi-Solid       Materials)",
            url: "https://youtu.be/TofCV8eGgQ0",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Homogenization & Emulsification Process",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/chapter-3-homogenization.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Homogenization Process",
            url: "https://youtu.be/j_Hs35AptLo",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Heat Transfer & Heating Process",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/chapter-4-heat-transfer-and-heating-process.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Heat Transfer & Heating Process pt.A",
            url: "https://youtu.be/r5y6oR1QFrA",
          },
          {
            title: "Lecture (2)",
            description: "Heat Transfer & Heating Process pt.B",
            url: "https://youtu.be/M1x71-qZvCY",
          },
          {
            title: "Lecture (3)",
            description: "Heat Transfer & Heating Process pt.C",
            url: "https://youtu.be/2i-jhYceLkg",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Evaporation Process",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/chapter-5-evaporation-process.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Evaporation Process pt.A",
            url: "https://youtu.be/1PP0enEYYWY",
          },
          {
            title: "Lecture (2)",
            description: "Evaporation Process pt.B",
            url: "https://youtu.be/ZEukPJam0H4",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Crystallization Process",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VII : Drying Process",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/chapter-6-drying-process.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Drying Process pt.A",
            url: "https://youtu.be/7HGdXesxpWw",
          },
          {
            title: "Lecture (2)",
            description: "Drying Process pt.B",
            url: "https://youtu.be/-QhE82JNMF8",
          },
          {
            title: "Lecture (3)",
            description: "Drying Process pt.C",
            url: "https://youtu.be/lL4JMGfDYws",
          },
          {
            title: "Lecture (4)",
            description: "Drying Process pt.D",
            url: "https://youtu.be/DDonoVFL7aU",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Ansel's Pharmaceutical Dosage Forms & DDS 10th Edition",
          url: "../../../documents/level-2/semester-2/pharmaceutics-1/ansels_pharmaceutical_dosage_forms_and_drug_delivery_systems_10th.pdf",
        },
        {
          title: "The Theory & Practice of Industrial Pharmacy 3rd Edition",
          url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/book/The-Theory-And-Practice-of-Industrial-Pharmacy.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Riad Al-qidra, Final Exam of 2012",
          url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/exams/dr-riad-final-2012.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Industrial Pharmacy I",
        "Course Code:": "PHTC4215",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHTC2307", title: "Pharmaceutics I", required: true },
        { code: "PHTC3209", title: "Pharmaceutics II", required: false },
        { code: "PHTC3211", title: "Pharmaceutics III", required: false },
      ],
    },
  },
  {
    slug: "pharmaceutical-chemistry-2",
    title: "Pharmaceutical Chemistry Two.",
    description:
      "Antibiotics Classes Cont., Opioids, NSAIDs & Chemotherapy (Anticancer Drugs)",
    lecturers: [
      {
        title: "Dr.",
        name: "Mai Ramadan",
      },
    ],
    stats: {
      videosCount: 26,
      chaptersCount: 5,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Antifungal Drugs",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/chapter-1-antifungal-agents.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (0)",
            description: "Introduction & Course outline",
            url: "https://youtu.be/gB_Iy2BxJJ0",
          },
          {
            title: "Lecture (1)",
            description: "Antifungal Drugs pt.A",
            url: "https://youtu.be/df10Xy94UVk",
          },
          {
            title: "Lecture (2)",
            description: "Antifungal Drugs pt.B",
            url: "https://youtu.be/-MrK-5eemDo",
          },
          {
            title: "Lecture (3)",
            description: "Antifungal Drugs pt.C",
            url: "https://youtu.be/apIcDfAkGbM",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Antiviral Drugs",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/chapter-2-antiviral-agents.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiviral Drugs pt.A",
            url: "https://youtu.be/X3SWar4EBek",
          },
          {
            title: "Lecture (2)",
            description: "Antiviral Drugs pt.B",
            url: "https://youtu.be/07lmsdxyTs4",
          },
          {
            title: "Lecture (3)",
            description: "Antiviral Drugs pt.C",
            url: "https://youtu.be/2xKPs1u5EEs",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Narcotic Analgesics",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/chapter-3-opioid-analgesics.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Opioid Analgesics pt.A",
            url: "https://youtu.be/Pe09gz1i8oo",
          },
          {
            title: "Lecture (2)",
            description: "Opioid Analgesics pt.B",
            url: "https://youtu.be/NxXsmXE8bZ0",
          },
          {
            title: "Lecture (3)",
            description: "Opioid Analgesics pt.C",
            url: "https://youtu.be/RF2isMzygcU",
          },
          {
            title: "Lecture (4)",
            description: "Opioid Analgesics pt.D",
            url: "https://youtu.be/sOFreX24f8g",
          },
          {
            title: "Lecture (5)",
            description: "Opioid Analgesics pt.E",
            url: "https://youtu.be/qloHyL2rx5w",
          },
          {
            title: "Lecture (6)",
            description: "Opioid Analgesics pt.F",
            url: "https://youtu.be/uCGm6k5d9BY",
          },
          {
            title: "Lecture (7)",
            description: "Opioid Analgesics pt.G",
            url: "https://youtu.be/JdycvYRZreI",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : NSAIDs",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/chapter-4-nsaids.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "NSAIDs pt.A",
            url: "https://youtu.be/QJZXjNssK9g",
          },
          {
            title: "Lecture (2)",
            description: "NSAIDs pt.B",
            url: "https://youtu.be/TBH7QzWiXeo",
          },
          {
            title: "Lecture (3)",
            description: "NSAIDs pt.C",
            url: "https://youtu.be/tDI9mZDpWu0",
          },
          {
            title: "Lecture (4)",
            description: "NSAIDs pt.D",
            url: "https://youtu.be/pbZShF94szg",
          },
          {
            title: "Lecture (5)",
            description: "NSAIDs pt.E",
            url: "https://youtu.be/0xb9b5fulOI",
          },
          {
            title: "Lecture (6)",
            description: "NSAIDs pt.F (COX-II Inhibitors)",
            url: "https://youtu.be/gD-imOXAew4",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Chemotherapy",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/chapter-5-chemotherapy.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "DNA Alkylating Agents pt.A",
            url: "https://youtu.be/pfjdI-G-hck",
          },
          {
            title: "Lecture (2)",
            description: "DNA Alkylating Agents pt.B",
            url: "https://youtu.be/xSuXhG9BHyk",
          },
          {
            title: "Lecture (3)",
            description: "Antimetabolite pt.A",
            url: "https://youtu.be/pEi_XtSpaTQ",
          },
          {
            title: "Lecture (4)",
            description: "Antimetabolite pt.B",
            url: "https://youtu.be/AgCbH2oL_yQ",
          },
          {
            title: "Lecture (5)",
            description: "Antibiotic pt.A",
            url: "https://youtu.be/wopq55AClhI",
          },
          {
            title: "Lecture (6)",
            description: "Antibiotic pt.B",
            url: "https://youtu.be/B-_i_wPVa8U",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title:
            "Wilson & Gisvold's Textbook of Organic Medicinal & Pharmaceutical Chemistry - 12th Edition",
          url: "../../../documents/level-4/semester-1/pharmaceutical-chemistry-1/Wilson_and_Gisvold's_Textbook.pdf",
        },
        {
          title: "V. Alagarsamy, Textbook of Medicinal Chemistry",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/TEXTBOOK-OF-MEDICINAL-CHEMISTRY.pdf",
        },
        {
          title: "Foye's Principles of Medicinal Chmeistry - 7th Edition",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/Foye's_Principles_of_Medicinal_Chemistry,_7th.pdf",
        },
      ],
      summaries: [
        {
          title: "Marah Issam Falit",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/pharm-chem-2-course-summary-marah.pdf",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutical Chemistry II",
        "Course Code:": "PHCH4211",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH1303", title: "Organic Chemistry I", required: false },
        { code: "PHCH2306", title: "Organic Chemistry II", required: true },
        {
          code: "PHCH4210",
          title: "Pharmaceutical Chemistry I",
          required: false,
        },
      ],
    },
  },
  {
    slug: "pharmacology-3",
    title: "Pharmacology Three.",
    description:
      "Drugs affecting the Endocrine System, Chemotherapeutic Drugs & Immunostimulants",
    lecturers: [
      {
        title: "Dr.",
        name: "Mahmoud Taleb",
      },
    ],
    stats: {
      videosCount: 22,
      chaptersCount: 7,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Endocrine System Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline & Introduction",
            url: "https://youtu.be/Mo0RMXf8z_E",
          },
          {
            title: "Lecture (1)",
            description: "Endocrine System pt.A",
            url: "https://youtu.be/hmHM-RnpT_c",
          },
          {
            title: "Lecture (2)",
            description: "Endocrine System pt.B",
            url: "https://youtu.be/4-Ir5P-8HN4",
          },
          {
            title: "Lecture (3)",
            description: "Endocrine System pt.C",
            url: "https://youtu.be/TsNy6wEeGRY",
          },
          {
            title: "Lecture (4)",
            description: "Endocrine System pt.D",
            url: "https://youtu.be/3-bqk_7faAI",
          },
          {
            title: "Lecture (5)",
            description: "Endocrine System pt.E",
            url: "https://youtu.be/cCXp86nl5r4",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Antibacterial Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antibacterial Drugs pt.A",
            url: "https://youtu.be/5Jw_rKkKWKY",
          },
          {
            title: "Lecture (2)",
            description: "Antibacterial Drugs pt.B",
            url: "https://youtu.be/VRMrBktewhs",
          },
          {
            title: "Lecture (3)",
            description: "Antibacterial Drugs pt.C",
            url: "https://youtu.be/iQz7FFLXvmU",
          },
          {
            title: "Lecture (4)",
            description: "Antibacterial Drugs pt.D",
            url: "https://youtu.be/VoE8Grzj0iU",
          },
          {
            title: "Lecture (5)",
            description: "Antibacterial Drugs pt.E",
            url: "https://youtu.be/SgiKvZ-32bQ",
          },
          {
            title: "Lecture (6)",
            description: "Antibacterial Drugs pt.F",
            url: "https://youtu.be/OCbmeqc86ZM",
          },
          {
            title: "Lecture (7)",
            description: "Antibacterial Drugs pt.G",
            url: "https://youtu.be/S9pwRmYNTYY",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Antiprotozoal Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiprotozoal Drugs",
            url: "https://youtu.be/neGcZV3Pm9k",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Antifungal Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antifungal Drugs",
            url: "https://youtu.be/FScLDkMUl_o",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Anthelmintic Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Anthelmintic Drugs",
            url: "https://youtu.be/N-VlvTMdmRw",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Antiviral Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiviral Drugs pt.A",
            url: "https://youtu.be/Hwzs46XLezw",
          },
          {
            title: "Lecture (2)",
            description: "Antiviral Drugs pt.B",
            url: "https://youtu.be/Dc9OGCGxP3Y",
          },
          {
            title: "Lecture (3)",
            description: "Antiviral Drugs pt.C",
            url: "https://youtu.be/A2Miig1ZHuo",
          },
          {
            title: "Lecture (4)",
            description: "Antiviral Drugs pt.D",
            url: "https://youtu.be/w5yM2lzStCA",
          },
          {
            title: "Lecture (5)",
            description: "Antiviral Drugs pt.E",
            url: "https://youtu.be/rRJS3xNxlBA",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Immunostimulants",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Immunostimulants",
            url: "https://youtu.be/HNeeO9Ty1kM",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Basic & Clinical Pharmacology 14th Edition)",
          url: "../../../documents/level-4/semester-2/pharmacology-3/Basic_and_Clinical_Pharmacology.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mohammed Shbair, Midterm Exam of 2014",
          url: "../../../documents/level-4/semester-2/pharmacology-3/exams/dr-mohammed-shbair-final-2014.pdf",
        },
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2015",
          url: "../../../documents/level-4/semester-2/pharmacology-3/exams/dr-mohammed-shbair-final-2015.pdf",
        },
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2016",
          url: "../../../documents/level-4/semester-2/pharmacology-3/exams/dr-mahmoud-taleb-final-2016.pdf",
        },
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2017",
          url: "../../../documents/level-4/semester-2/pharmacology-3/exams/dr-mahmoud-taleb-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmacology III",
        "Course Code:": "PHPT5315",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT2306", title: "Human Physiology I", required: true },
        { code: "PHPT2306", title: "Human Physiology II", required: false },
        { code: "PHPT4310", title: "Pharmacology I", required: false },
      ],
    },
  },
  {
    slug: "phytochemistry-3",
    title: "Phytochemistry Three.",
    description: "Alkaloids",
    lecturers: [
      {
        title: "Dr.",
        name: "Mazen El-sakka",
      },
    ],
    stats: {
      videosCount: 14,
      chaptersCount: 4,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction & General Alkaloids",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/nEU8472eQCs",
          },
          {
            title: "Lecture (2)",
            description: "General Alkaloids",
            url: "https://youtu.be/U6CbCxJMYgA",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Alkaloids Derived From Ornithine",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Ornithine Chemistry",
            url: "https://youtu.be/q8McYY_L77E",
          },
          {
            title: "Lecture (2)",
            description: "Ornithine Drug",
            url: "https://youtu.be/5WM5iDUgZx8",
          },
          {
            title: "Lecture (3)",
            description: "Cocaine pt.A",
            url: "https://youtu.be/iBBbNPni7ME",
          },
          {
            title: "Lecture (4)",
            description: "Cocaine pt.B",
            url: "https://youtu.be/wFjFpuQjhLQ",
          },
          {
            title: "Lecture (5)",
            description: "Pyrrolyzidine & Quinolyzidine Alkaloids",
            url: "https://youtu.be/oXldo0LATWU",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Alkaloids Derived From Lysine",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Lysine Alkaloids",
            url: "https://youtu.be/m4M5zLNcMFo",
          },
          {
            title: "Lecture (2)",
            description: "Pyridine & Tobacco",
            url: "https://youtu.be/KDrNZdV_ER4",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter IV : Alkaloids Derived From Phenyalanine &   Tyrosine",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Phenylalanine pt.A",
            url: "https://youtu.be/SY3ebyft2jk",
          },
          {
            title: "Lecture (2)",
            description: "Phenylalanine pt.B",
            url: "https://youtu.be/szwrzyujA6E",
          },
          {
            title: "Lecture (3)",
            description: "Phenylalanine pt.C",
            url: "https://youtu.be/I72HbTy22y8",
          },
          {
            title: "Lecture (4)",
            description: "Tryptophan pt.A",
            url: "https://youtu.be/z_UUoBqfsgw",
          },
          {
            title: "Lecture (5)",
            description: "Tryptophan pt.B",
            url: "https://youtu.be/hwbsM4ncYeo",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Dr. Mazen El-sakka: Manual of Phytochemistry III",
          url: "../../../documents/level-4/semester-2/phytochemistry-3/phytochemistry-3-book.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      extraResources: [
        {
          title: "Slides of the Course",
          url: "../../../documents/level-4/semester-2/phytochemistry-3/phytochemistry-3-slides.pdf",
          note: "Dr. Mazen",
        },
      ],
      exams: [
        {
          title: "Dr. Mazen El-sakka, Final Exam of 2016",
          url: "../../../documents/level-4/semester-2/phytochemistry-3/exams/dr-mazen-final-2016.pdf",
        },
        {
          title: "Dr. Mazen El-sakka, Final Exam of 2017",
          url: "../../../documents/level-4/semester-2/phytochemistry-3/exams/dr-mazen-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Phytochemistry III",
        "Course Code:": "PHCG4211",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacognosy & Pharmaceutical Botany (PHCG)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCG2201", title: "Pharmaceutical Botany", required: false },
        { code: "PHCG3204", title: "Pharmacognosy", required: true },
        { code: "PHCG3208", title: "Phytochemistry I", required: false },
      ],
    },
  },
  {
    slug: "public-health",
    title: "Public Health & Preventative Medicine.",
    description: "General Principles of Public Health & Preventative Medicine",
    lecturers: [
      {
        title: "Dr.",
        name: "Ahmed Najem",
      },
    ],
    stats: {
      videosCount: 14,
      chaptersCount: 5,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Public Health",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/public-health/chapter-1-introduction.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Concepts of Health",
            url: "https://youtu.be/BMieR_AG_EM",
          },
          {
            title: "Lecture (2)",
            description: "Introduction to Public Health",
            url: "https://youtu.be/GezbkDLGBYg",
          },
          {
            title: "Lecture (3)",
            description: "Public Health Approach",
            url: "https://youtu.be/PnZ2bDrWOLA",
          },
          {
            title: "Lecture (4)",
            description: "Demoghraphy",
            url: "https://youtu.be/l9a7bsdsf0Q",
          },
          {
            title: "Lecture (5)",
            description: "Health Indicators",
            url: "https://youtu.be/ryvKLWLc1Nk",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Screening & Epidemiology",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/public-health/chapter-2-screening-and-epidemiology.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Screening",
            url: "https://youtu.be/l9869O8b6G8",
          },
          {
            title: "Lecture (2)",
            description: "Screening & Epidemiology",
            url: "https://youtu.be/gB3ZG-PsriY",
          },
          {
            title: "Lecture (3)",
            description: "Epidemiology",
            url: "https://youtu.be/DsBk1Qd7hLE",
          },
          {
            title: "Lecture (5)",
            description: "How do you Describe a Disease ?",
            url: "https://youtu.be/JmWr_eZuMmc",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Concepts of Disease Occurrence",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/public-health/chapter-4-concept-of-disease-occurrence.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Concepts of Disease Occurrence",
            url: "https://youtu.be/fckm6BS76rE",
          },
          {
            title: "Lecture (2)",
            description: "Concepts of Control & Prevention",
            url: "https://youtu.be/U6Hh6JDMqMA",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Health Education",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/public-health/chapter-5-health-education.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Health Education",
            url: "https://youtu.be/LG7HPZXgHac",
          },
          {
            title: "Lecture (2)",
            description: "School Health Program",
            url: "https://youtu.be/JbOQjli20fw",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Communicable Disease & Immunizations",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-4/semester-2/public-health/chapter-6-communicable-diseases.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Communicable Disease & Immunizations",
            url: "https://youtu.be/JF0Ib_-3ecM",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Reference of Public Health",
          url: "../../../documents/level-4/semester-2/public-health/public-health-book-pt-1.pdf",
        },
        {
          title: "Dr. Ahmed Najem",
          url: "../../../documents/level-4/semester-2/public-health/public-health-book-ahmed-najem.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Ahmed Najim, Final Exam of 2016",
          url: "../../../documents/level-4/semester-2/public-health/exams/dr-ahmed-najim-final-2016.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Public Health & Preventative Medicine",
        "Course Code:": "PHPT5221",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "4th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "pharmacy-training",
    title: "Pharamcy Training.",
    description: "Pharmacy Practical Summer Training",
    lecturers: [
      {
        title: "Dr.",
        name: "Mahmoud Taleb",
      },
    ],
    stats: {
      videosCount: 6,
      chaptersCount: 1,
    },
    lectures: [
      {
        chapterTitle: "Instructions about Pharmacy Summer Training",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Training Instructions",
            url: "https://www.youtube.com/watch?v=VMHU2utWe5s",
          },
          {
            title: "Lecture (2)",
            description: "Training Instructions",
            url: "https://www.youtube.com/watch?v=IYTFRd9TR5E",
          },
          {
            title: "Lecture (3)",
            description: "Training Instructions",
            url: "https://www.youtube.com/watch?v=80QE6murl9w",
          },
          {
            title: "Lecture (4)",
            description: "Training Instructions",
            url: "https://www.youtube.com/watch?v=tqzk5o4KfiM",
          },
          {
            title: "Lecture (5)",
            description: "Training Instructions",
            url: "https://www.youtube.com/watch?v=oIp_DZmY5tI",
          },
          {
            title: "Lecture (6)",
            description: "Training Instructions",
            url: "https://www.youtube.com/watch?v=-VqWlYY-YGo",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Training Book -Empty-",
          url: "../../../documents/level-4/summer/training-book-empty.pdf",
        },
      ],
      summaries: [
        {
          title: "Training Book -Filled-, By: TA. Eman Ibrahim",
          url: "../../../documents/level-4/summer/training-book-filled-ta-eman-ibrahem.pdf",
        },
      ],
      extraResources: [
        {
          title: "Training Form",
          url: "../../../documents/level-4/summer/training-form.pdf",
          note: "Pharmacy Training Form",
        },
      ],
      exams: [
        {
          title: "Previous Exams",
          url: "../../../documents/level-4/summer/training-exams.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmacy Training",
        "Course Code:": "PHTC4218",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Department of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "College Need",
        "Course Level:": "4th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "cosmetics",
    title: "Cosmetic & Dermatological Preparations.",
    description: "Dermatological Dosage Forms, Cosmetic & Skin Conditions",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Taleb",
      },
    ],
    stats: {
      videosCount: 24,
      chaptersCount: 9,
    },
    lectures: [
      {
        chapterTitle:
          "Chapter I + II : Dermatological Dosage Forms & Types of Skin",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cosmotics & Skin Structure",
            url: "https://youtu.be/kcdQeb01BPo",
          },
          {
            title: "Lecture (2)",
            description: "Cosmotics & Dermatology",
            url: "https://youtu.be/NKpqOf9GJxc",
          },
          {
            title: "Lecture (3)",
            description: "Skin & Moisturers pt.A",
            url: "https://youtu.be/-lGhst63k3c",
          },
          {
            title: "Lecture (4)",
            description: "Skin & Moisturers pt.B",
            url: "https://youtu.be/UpWQRmdPgeY",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Sking Aging",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Sking Aging pt.A",
            url: "https://youtu.be/Vd8hAQid-EM",
          },
          {
            title: "Lecture (2)",
            description: "Sking Aging pt.B",
            url: "https://youtu.be/HM0sRsSBILU",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Sun Screeners",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Sun Screeners pt.A",
            url: "https://youtu.be/aEhq2bXKoTw",
          },
          {
            title: "Lecture (2)",
            description: "Sun Screeners pt.B",
            url: "https://youtu.be/gcvBVcCAqbo",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Skin Care Products",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Skin Tanning",
            url: "https://youtu.be/RFO_fVxGqrU",
          },
          {
            title: "Lecture (2)",
            description: "Skin Bleaching",
            url: "https://youtu.be/8FtoP2HV-lM",
          },
          {
            title: "Lecture (3)",
            description: "Chemical Skin Peeling",
            url: "https://youtu.be/t-bkPYzJ_7g",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Deodorants & Antiperspirants",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiperspirants",
            url: "https://youtu.be/tdyFaccqkco",
          },
          {
            title: "Lecture (2)",
            description: "Hyperhidrosis",
            url: "https://youtu.be/vzcAEznZhNY",
          },
          {
            title: "Lecture (3)",
            description: "Deoderants",
            url: "https://youtu.be/vHMOTI_Jvm4",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Acne & Cosmetics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Acne & its Pathognisis",
            url: "https://youtu.be/JLarMnGessc",
          },
          {
            title: "Lecture (2)",
            description: "Treatment of Acne",
            url: "https://youtu.be/TZb1xCEjx74",
          },
          {
            title: "Lecture (3)",
            description: "Cosmotecs and Acne",
            url: "https://youtu.be/06dzMtF3hbQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Skin Diseases & Cosmetics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Psoriasis",
            url: "https://youtu.be/RrbA37eXWJY",
          },
          {
            title: "Lecture (2)",
            description: "Treatment of Psoriasis & Cosmetics",
            url: "https://youtu.be/YEQYiv94czk",
          },
          {
            title: "Lecture (3)",
            description: "SLE & Vitiligo",
            url: "https://youtu.be/seWBdlZEdQU",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Infectious Skin Diseases",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Bacterial Infectious Skin Disease",
            url: "https://youtu.be/sS7QKXn_f_A",
          },
          {
            title: "Lecture (2)",
            description:
              "Fungal, Viral & Parasitic Infectious Skin       Diseases",
            url: "https://youtu.be/qs9MqeRPcaA",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Hair Problems & Cosmetics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Female Hair Loss",
            url: "https://youtu.be/ml6g3p_BFzY",
          },
          {
            title: "Lecture (2)",
            description: "Alopecia & Dandruff",
            url: "https://youtu.be/mVwO3J6uuqo",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Cosmetic & Dermatological Preparations",
        "Course Code:": "PHTC5216",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need - (Optional)",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "drug-interactions",
    title: "Drug Interactions.",
    description:
      "Introduction to Drug Interactions, Mechanisms of Drug Interactions & Drug Interactions of Selected Classes of Therapeutic Agents",
    lecturers: [
      {
        name: "Rasha Bseiso",
      },
    ],
    stats: {
      videosCount: 0,
      chaptersCount: 0,
    },
    lectures: [],
    resources: {
      referenceBooks: [
        {
          title: "Stockley's Drug Interactions 9th Edition",
          url: "../../../documents/level-5/optional/drug-interactions/referance/stockley's-drug-interactions-9th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2016",
          url: "../../../documents/level-5/optional/drug-interactions/exams/dr-mohammed-shbair-final-2016.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Drug Interactions",
        "Course Code:": "PHPT5223",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need - (Optional)",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "food-supplements",
    title: "Food Supplements.",
    description:
      "Studying Sources of Nutrients or Other Substances with a Nutritional or Physiological Effect to Supply a Healthy Diet",
    lecturers: [
      {
        title: "Dr.",
        name: "Mazen El-sakka",
      },
    ],
    stats: {
      videosCount: 20,
      chaptersCount: 10,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Food Supplements",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course outline & Introduction",
            url: "https://youtu.be/xlpgpd5yRAU",
          },
          {
            title: "Lecture (1)",
            description: "Definition of Food Supplements",
            url: "https://youtu.be/fzpZP0eyLSs",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Basics in Food Supplements",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Fasting",
            url: "https://youtu.be/cnxsUz1vWBU",
          },
          {
            title: "Lecture (2)",
            description: "Chromotherapy",
            url: "https://youtu.be/jVs-gGG9LCo",
          },
          {
            title: "Lecture (3)",
            description: "PH",
            url: "https://youtu.be/XdyywMnRyqk",
          },
          {
            title: "Lecture (4)",
            description: "Inflammation",
            url: "https://youtu.be/z4CF2HPxUPM",
          },
          {
            title: "Lecture (5)",
            description: "Probiotics",
            url: "https://youtu.be/BVodGHRHTzI",
          },
          {
            title: "Lecture (6)",
            description: "Antioxidants",
            url: "https://youtu.be/As-lj1Ffn_E",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Brain & Food Supplements",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Brain",
            url: "https://youtu.be/-hDA4d1oXhI",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Diabetes & Food Supplements",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "DM pt.A",
            url: "https://youtu.be/8Ia9uiD8H0U",
          },
          {
            title: "Lecture (2)",
            description: "DM pt.B",
            url: "https://youtu.be/KB-B1br_iFI",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Hypertension & Food Supplements",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "HTN",
            url: "https://youtu.be/Znp3rWbjrfE",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Bones & Joints",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Bones & Joints",
            url: "https://youtu.be/tlL4Atkii6Y",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Liver & Food Supplements",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Liver",
            url: "https://youtu.be/bsbqljWfces",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Respiratory Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Respiratory Disorders",
            url: "https://youtu.be/amKkJJ7Fc4U",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Urogenital Tract Disorder",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Urogenital Tract",
            url: "https://youtu.be/UYwwIaKSR2Y",
          },
          {
            title: "Lecture (2)",
            description: "Bed-Wetting",
            url: "https://youtu.be/RdeRpbvnzFg",
          },
          {
            title: "Lecture (3)",
            description: "BPH",
            url: "https://youtu.be/Jp3l7iC8FEI",
          },
          {
            title: "Lecture (4)",
            description: "Women Health",
            url: "https://youtu.be/ZBHDW0X0tUQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Cancer",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cancer",
            url: "https://youtu.be/CJc3P7SzE94",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Dr. Mazen El-sakka: Manual of Food Supplements",
          url: "../../../documents/level-5/optional/food-supplements/food-supplements-book.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Food Supplements",
        "Course Code:": "PHCG5210",
        "Faculty:": "Faculty of Pharmacy",
        "Department:": "Pharmacognosy & Pharmaceutical Botany (PHCG)",
        "Course Classification:": "Major Need - (Optional)",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "hospital-pharmacy",
    title: "Hospital Pharmacy.",
    description:
      "Understanding the Concept of Hospital Pharmacy & the Importance of it in Different Health Care Settings",
    lecturers: [
      {
        name: "Khalil Al-majdalawi",
      },
    ],
    stats: {
      videosCount: 17,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Hospital Pharmacy",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/BXqPdUTToVg",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/HPxcJG4tCmM",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Therapeutic Fluids",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Fluids",
            url: "https://youtu.be/zkpkSYKbBEM",
          },
          {
            title: "Lecture (2)",
            description: "Colloids",
            url: "https://youtu.be/_6TF7byrhJY",
          },
          {
            title: "Lecture (3)",
            description: "Hypovolemic Shock",
            url: "https://youtu.be/UhtRP-GWNc8",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Electrolytes",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Electrolytes Introduction",
            url: "https://youtu.be/ju38_yoN5II",
          },
          {
            title: "Lecture (2)",
            description: "Sodium (Na)",
            url: "https://youtu.be/eBHAw4GmGdI",
          },
          {
            title: "Lecture (3)",
            description: "Potassium (K)",
            url: "https://youtu.be/8ler83D56AI",
          },
          {
            title: "Lecture (4)",
            description: "Magnesium (Mg) & Calcium       (Ca)",
            url: "https://youtu.be/Lko8ggestGM",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Acid-Base Imbalance",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Acid-Base Imbalance pt.A",
            url: "https://youtu.be/ZrPHLFY-HJY",
          },
          {
            title: "Lecture (2)",
            description: "Acid-Base Imbalance pt.B",
            url: "https://youtu.be/xlLFahZksus",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Surgical Site Infection",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Surgical Site Infection",
            url: "https://youtu.be/X8hfti3YnPs",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Parenteral Nutrition",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Parenteral Nutrition pt.A",
            url: "https://youtu.be/SzHoaBWoym4",
          },
          {
            title: "Lecture (2)",
            description: "Parenteral Nutrition pt.B",
            url: "https://youtu.be/INDlnhxEXsY",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Sepsis",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Sepsis pt.A",
            url: "https://youtu.be/Ty_IYD5Sd_U",
          },
          {
            title: "Lecture (2)",
            description: "Sepsis pt.B",
            url: "https://youtu.be/wcbvItrF43k",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Status Epilepticus",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Status Epilepticus",
            url: "https://youtu.be/HkVnf56_20s",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Hospital Pharamcy",
        "Course Code:": "PHPT5216",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need - (Optional)",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "phytotherapy",
    title: "Phytotherapy.",
    description:
      "Acquiring the Knowledge of Plant Biology & Recognizing the Principal Characteristics of Plant-based Drugs",
    lecturers: [
      {
        name: "Maha Al-khateeb",
      },
    ],
    stats: {
      videosCount: 25,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Phytotherap",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Introduction & Course Outline",
            url: "https://youtu.be/92cfO9VI0XM",
          },
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/HqSDXofF1a0",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/qMveuA6cU_g",
          },
          {
            title: "Lecture (3)",
            description: "Introduction pt.C",
            url: "https://youtu.be/bvX5x_2U6DM",
          },
          {
            title: "Lecture (4)",
            description: "Introduction pt.D",
            url: "https://youtu.be/yQvi0wt7Ya8",
          },
          {
            title: "Lecture (5)",
            description: "Introduction pt.E",
            url: "https://youtu.be/vPHgshW-VEA",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : CNS Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "CNS Disorders pt.A",
            url: "https://youtu.be/yg660a8mEhk",
          },
          {
            title: "Lecture (2)",
            description: "CNS Disorders pt.B",
            url: "https://youtu.be/RgOdXtE3seU",
          },
          {
            title: "Lecture (3)",
            description: "Practical Applications",
            url: "https://youtu.be/EtPFb41A-FE",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Cardiovascular System Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "CVS Disorders pt.A",
            url: "https://youtu.be/pQ9fEUobaS8",
          },
          {
            title: "Lecture (2)",
            description: "CVS Disorders pt.B",
            url: "https://youtu.be/69xClACczXk",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Respiratory System Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Respiratory System Disorders pt.A",
            url: "https://youtu.be/HU_pqkEBD6U",
          },
          {
            title: "Lecture (2)",
            description: "Respiratory System Disorders pt.B",
            url: "https://youtu.be/YcdIkuosB-w",
          },
          {
            title: "Lecture (3)",
            description: "Respiratory System Disorders pt.C",
            url: "https://youtu.be/Q-rDgYNbaC0",
          },
          {
            title: "Lecture (4)",
            description: "Respiratory System Disorders pt.D",
            url: "https://youtu.be/pQ9m1cYuJBQ",
          },
          {
            title: "Lecture (5)",
            description: "Respiratory System Disorders pt.E",
            url: "https://youtu.be/PGU2FyBRC_Y",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : GIT Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "GIT Disorders pt.A",
            url: "https://youtu.be/PJUvjFB4QGc",
          },
          {
            title: "Lecture (2)",
            description: "GIT Disorders pt.B",
            url: "https://youtu.be/UFpes3FFlas",
          },
          {
            title: "Lecture (3)",
            description: "GIT Disorders pt.C",
            url: "https://youtu.be/EeLLQbLgjkM",
          },
          {
            title: "Lecture (4)",
            description: "GIT Disorders pt.D",
            url: "https://youtu.be/JQBfAcKBUPE",
          },
          {
            title: "Lecture (5)",
            description: "GIT Disorders pt.E",
            url: "https://youtu.be/9FmHlF9rs9I",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Urinary Tract Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Inflammatory Urinary Tract Diseases",
            url: "https://youtu.be/qc0vjkWtr9E",
          },
          {
            title: "Lecture (2)",
            description: "BPH",
            url: "https://youtu.be/ViV5KuWE4z8",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Gynecological Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Gynecological Disorders",
            url: "https://youtu.be/YSN2FJiysZA",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Inflammation & Pain",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Inflammation & Pain",
            url: "https://youtu.be/qY7clTINdwU",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Fundamentals of Pharmacognosy & Phytotherapy",
          url: "../../../documents/level-5/optional/phytotherapy/Fundamentals_of_Pharmacognosy_and_Phytotherapy,_2nd_Edition.pdf",
        },
        {
          title: "Rational Phytotherapy",
          url: "../../../documents/level-5/optional/phytotherapy/rational-phyto.pdf",
        },
        {
          title: "University of Szeged: Textbook of Phytotherapy",
          url: "../../../documents/level-5/optional/phytotherapy/Szeged.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mazen El-sakka, Final Exam of 2011",
          url: "../../../documents/level-5/optional/phytotherapy/exams/dr-mazen-final-2011.pdf",
        },
        {
          title: "Dr. Mazen El-sakka, Final Exam of 2013",
          url: "../../../documents/level-5/optional/phytotherapy/exams/dr-mazen-final-2013.pdf",
        },
        {
          title: "Dr. Mazen El-sakka, Final Exam of 2015",
          url: "../../../documents/level-5/optional/phytotherapy/exams/dr-mazen-final-2015.pdf",
        },
        {
          title: "Dr. Mazen El-sakka, Final Exam of 2016",
          url: "../../../documents/level-5/optional/phytotherapy/exams/dr-mazen-final-2016.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Phytotherapy",
        "Course Code:": "PHCG5213",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacognosy & Pharmaceutical Botany (PHCG)",
        "Course Classification:": "Major Need - (Optional)",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "technology",
    title: "Selected Topics in Pharmaceutical Technology.",
    description:
      "Pharmaceutical Technology & Advanced Pharmaceutical Formulations",
    lecturers: [
      {
        name: "Ibtihal Al-astal",
      },
    ],
    stats: {
      videosCount: 0,
      chaptersCount: 0,
    },
    lectures: [],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Selected Topics in Pharmaceutical Technology",
        "Course Code:": "PHTC5221",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need - (Optional)",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "clinical-pharmacy",
    title: "Clinical Pharmacy.",
    description:
      "Understanding the Concept of Clinical Pharmacy & the Importance of it in Different Health Care Settings",
    lecturers: [
      {
        title: "Dr.",
        name: "Hala Al-agha",
      },
    ],
    stats: {
      videosCount: 25,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Clinical Pharmacy Practice",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Clinical Pharmacy Practice pt.A",
            url: "https://youtu.be/55WQKFt8FIU",
          },
          {
            title: "Lecture (2)",
            description: "Clinical Pharmacy Practice pt.B I",
            url: "https://youtu.be/YuGe1yp3_u0",
          },
          {
            title: "Lecture (2)",
            description: "Clinical Pharmacy Practice pt.B II",
            url: "https://youtu.be/ok8TzB0411A",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Adverse Drug Reactions & Pharmacovigilance",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "ADR pt.A I",
            url: "https://youtu.be/IY667ko-c6w",
          },
          {
            title: "Lecture (2)",
            description: "ADR pt.A II",
            url: "https://youtu.be/UVEOmWBSqAE",
          },
          {
            title: "Lecture (3)",
            description: "ADR pt.B",
            url: "https://youtu.be/US32rOWULeU",
          },
          {
            title: "Lecture (4)",
            description: "Drug Induced Skin Reactions pt.A",
            url: "https://youtu.be/nqwQT1sXWTQ",
          },
          {
            title: "Lecture (5)",
            description: "Drug Induced Skin Reactions pt.B",
            url: "https://youtu.be/2DCpeUEdNxc",
          },
          {
            title: "Lecture (6)",
            description: "Anaphylaxis",
            url: "https://youtu.be/KeUxEepqzO0",
          },
          {
            title: "Lecture (7)",
            description: "Pharmacovigilance",
            url: "https://youtu.be/kD_a8XVdzcs",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Common Skin Conditions & thier Management",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Psoriasis pt.A",
            url: "https://youtu.be/T0KoamnQXDQ",
          },
          {
            title: "Lecture (2)",
            description: "Psoriasis pt.B",
            url: "https://youtu.be/Ou3HdRX_aI0",
          },
          {
            title: "Lecture (3)",
            description: "Psoriasis pt.C",
            url: "https://youtu.be/T3pOWn2q-dY",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Therapeutic Considerations for Geriatrics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Geriatrics Drug Use",
            url: "https://youtu.be/kifX5tw-yNk",
          },
          {
            title: "Lecture (2)",
            description: "Geriatrics DRPs",
            url: "https://youtu.be/ZbK99H6Wws0",
          },
          {
            title: "Lecture (3)",
            description: "Unknown (Hidden)",
            url: "https://youtu.be/vXvFGacubvU",
          },
          {
            title: "Lecture (4)",
            description: "Unknown (Hidden)",
            url: "https://youtu.be/vN8sEXmU4v0",
          },
          {
            title: "Lecture (5)",
            description: "Stroke pt.A",
            url: "https://youtu.be/AYqSBFpKb_s",
          },
          {
            title: "Lecture (6)",
            description: "Stroke pt.B",
            url: "https://youtu.be/gMQRQ-gu8yo",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Therapeutic Considerations for Pediatrics",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VI : Contraception",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Contraception pt.A I",
            url: "https://youtu.be/p3gjOngqLp0",
          },
          {
            title: "Lecture (2)",
            description: "Contraception pt.A II",
            url: "https://youtu.be/hTq2LLGC3CM",
          },
          {
            title: "Lecture (3)",
            description:
              "Contraception pt.B (Risks, Benefits & ADRs       of COCs )",
            url: "https://youtu.be/l-vQZtte7OM",
          },
          {
            title: "Lecture (4)",
            description: "Contraception pt.C I (COC ADRs)",
            url: "https://youtu.be/6698NsuHK5k",
          },
          {
            title: "Lecture (5)",
            description: "Contraception pt.C II (COC ADRs)",
            url: "https://youtu.be/7nWYFElZTso",
          },
          {
            title: "Lecture (6)",
            description: "Dysmenorrhea",
            url: "https://youtu.be/1p79hnJZ0b8",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Pharmacotherapy Principles & Practice 5th Edition",
          url: "../../../documents/level-5/semester-1/clinical-pharmacy/Kelly_C_Lee,_Marie_A_Chisholm_Burns,_Patrick_M_Malone,_P_Brandon.pdf",
        },
        {
          title: "Clincial Pharmacy & Therapeutics 6th Edition",
          url: "../../../documents/level-5/semester-1/clinical-pharmacy/Clinical-Pharmacy.pdf",
        },
      ],
      summaries: [
        {
          title: "Aya Maher Fatooh",
          url: "../../../documents/level-5/semester-1/clinical-pharmacy/clinical-pharmacy-course-summary-aya.pdf",
        },
      ],
      exams: [
        {
          title: "Final Exam of 2013",
          url: "../../../documents/level-5/semester-1/clinical-pharmacy/exams/final-2013.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Clinical Pharmacy",
        "Course Code:": "PHPT5220",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT4310", title: "Pharmacology I", required: false },
        { code: "PHPT4312", title: "Pharmacology II", required: false },
        { code: "PHPT5315", title: "Pharmacology II", required: true },
      ],
    },
  },
  {
    slug: "industrial-pharmacy-2",
    title: "Industrial Pharmacy Two.",
    description:
      "Design & Mechanism of Action of the Instruments Included in the Unit Operation in Pharmaceutical Practice Cont.",
    lecturers: [
      {
        title: "Dr.",
        name: "Riad El-qidra",
      },
    ],
    courseNotes: [
      {
        note: "* Drying Process Lectures are the same as those in",
        url: "/courses/industrial-pharmacy-1",
        urlText: "Industrial Pharmacy I Course",
      },
      {
        note: "* Crystallization Process is usually part of the",
        url: "/courses/industrial-pharmacy-1",
        urlText: "Industrial Pharmacy I Course",
      },
    ],
    stats: {
      videosCount: 17,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Crystallization Process",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Crystallization Process pt.A",
            url: "https://youtu.be/iKAseqQjsnw?si=VkhiYJoBbSYLn0qi",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Extraction Process",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Extraction Process pt.A",
            url: "https://youtu.be/GOxeIKW6ND4",
          },
          {
            title: "Lecture (2)",
            description: "Extraction Process pt.B",
            url: "https://youtu.be/bTJkpetcR30",
          },
          {
            title: "Lecture (3)",
            description: "Extraction Process pt.C",
            url: "https://youtu.be/JTEQzUhYV6k",
          },
          {
            title: "Lecture (4)",
            description: "Liquid-Liquid Extraction pt.A",
            url: "https://youtu.be/NoE82TwqQGQ",
          },
          {
            title: "Lecture (5)",
            description: "Liquid-Liquid Extraction pt.B",
            url: "https://youtu.be/HNZtJLzc3us",
          },
          {
            title: "Lecture (6)",
            description: "Liquid-Liquid Extraction pt.C",
            url: "https://youtu.be/Lbd3J3PsPVg",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Filtration Process",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Filtration Process pt.A",
            url: "https://youtu.be/uRhYAVIEO5U",
          },
          {
            title: "Lecture (2)",
            description: "Filtration Process pt.B",
            url: "https://youtu.be/MNbe69LM2u8",
          },
          {
            title: "Lecture (3)",
            description: "Filtration Process pt.C",
            url: "https://youtu.be/numgQKiUXts",
          },
          {
            title: "Lecture (4)",
            description: "Filtration Process pt.D",
            url: "https://youtu.be/ugGzHiMrWls",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Centrifugation Process",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Centrifugation Process pt.A",
            url: "https://youtu.be/d9r66SsI9f0",
          },
          {
            title: "Lecture (2)",
            description: "Centrifugation Process pt.B",
            url: "https://youtu.be/L8k9pt4LC-w",
          },
          {
            title: "Lecture (3)",
            description: "Centrifugation Process pt.C",
            url: "https://youtu.be/huoEvFybm5c",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Distillation Process",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VI : Particle Technology",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Particle Size Reduction pt.A",
            url: "https://youtu.be/DBXf0mk2CYs",
          },
          {
            title: "Lecture (2)",
            description: "Particle Size Reduction pt.B",
            url: "https://youtu.be/-v_glBb3bxM",
          },
          {
            title: "Lecture (3)",
            description: "Particle Size Reduction pt.C",
            url: "https://youtu.be/-V-2NfmE2j0",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Mass Transfer",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VIII : Good Manufacturing Practice   (GMP)",
        documents: [],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Ansel's Pharmaceutical Dosage Forms & DDS 10th Edition",
          url: "../../../documents/level-2/semester-2/pharmaceutics-1/ansels_pharmaceutical_dosage_forms_and_drug_delivery_systems_10th.pdf",
        },
        {
          title: "The Theory & Practice of Industrial Pharmacy 3rd Edition",
          url: "../../../documents/level-4/semester-2/industrial-pharmacy-1/book/The-Theory-And-Practice-of-Industrial-Pharmacy.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Industial Pharamcy II",
        "Course Code:": "PHTC5316",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmaceutics & Industrial Pharmacy     (PHTC)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHTC2307", title: "Pharmaceutics I", required: true },
        { code: "PHTC3211", title: "Pharmaceutics III", required: false },
        { code: "PHTC3209", title: "Pharmaceutics II", required: false },
      ],
    },
  },
  {
    slug: "pharmaceutical-chemistry-3",
    title: "Pharmaceutical & Med. Chemistry Three.",
    description:
      "CNS Stimulants, CNS Depressants, Adrenergic Drugs, Antiadrenergic Drugs & Antihypertensive Drugs",
    lecturers: [
      {
        title: "Prof.",
        name: "Ihab Almasri",
      },
    ],
    stats: {
      videosCount: 29,
      chaptersCount: 8,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : General Anesthetics",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-5/semester-1/pharmaceutical-chemistry-3/chapter-1-general-anesthetic.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (0)",
            description: "Introduction & Course outline",
            url: "https://youtu.be/eM_EucsTWoQ",
          },
          {
            title: "Lecture (1)",
            description: "General Anesthetics pt.A",
            url: "https://youtu.be/_fhbsSTjdyU",
          },
          {
            title: "Lecture (2)",
            description: "General Anesthetics pt.B",
            url: "https://youtu.be/exoJ4qvJ4s8",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Sedatives & Hypnotics",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-5/semester-1/pharmaceutical-chemistry-3/chapter-2-sedatives-and-hypnotics.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Barbiturates",
            url: "https://youtu.be/opxnkbrGBrY",
          },
          {
            title: "Lecture (2)",
            description: "Benzodiazepines",
            url: "https://youtu.be/o8XanMAc3AI",
          },
          {
            title: "Lecture (3)",
            description: "Non-Benzodiazepines pt.A",
            url: "https://youtu.be/HT01msyHJTM",
          },
          {
            title: "Lecture (4)",
            description: "Non-Benzodiazepines pt.B",
            url: "https://youtu.be/xd7BWUSlSbw",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Antiseizure Drugs",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-5/semester-1/pharmaceutical-chemistry-3/chapter-3-anti-seizure-drug.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/wrl-wdWL3Bo",
          },
          {
            title: "Lecture (2)",
            description: "Antiepileptics pt.A",
            url: "https://youtu.be/FmLIvAcBYe8",
          },
          {
            title: "Lecture (3)",
            description: "Antiepileptics pt.B",
            url: "https://youtu.be/CoVRXU-wrrU",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Centrally Acting Muscle Relaxants",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-5/semester-1/pharmaceutical-chemistry-3/chapter-4-Muscle-relaxants.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Muscle Relaxants",
            url: "https://youtu.be/YUw3Xg0T3SU",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Antipsychotic Drugs",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-5/semester-1/pharmaceutical-chemistry-3/chapter-5-antipsychotics.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/JYciuXLX0sE",
          },
          {
            title: "Lecture (2)",
            description: "Antipsychotics pt.A",
            url: "https://youtu.be/w4e2Udv-1Cw",
          },
          {
            title: "Lecture (3)",
            description: "Antipsychotics pt.B",
            url: "https://youtu.be/z-VHIy_O4C8",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Antidepressants & Psychomotor Stimulants",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-5/semester-1/pharmaceutical-chemistry-3/chapter-6-antidepressants-and-psychomotor-stimulants.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/suRABcdYTH0",
          },
          {
            title: "Lecture (2)",
            description: "Antidepressants pt.A",
            url: "https://youtu.be/FvPnBahHaPE",
          },
          {
            title: "Lecture (3)",
            description: "Antidepressants pt.B",
            url: "https://youtu.be/khPqWiXu700",
          },
          {
            title: "Lecture (4)",
            description: "Antidepressants pt.C",
            url: "https://youtu.be/TimrlMhq5E4",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Adrenergic & Antiadrenergic Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Adrenergic Drugs Introduction",
            url: "https://youtu.be/CQsfAcOIW4c",
          },
          {
            title: "Lecture (2)",
            description: "Adrenergic Drugs pt.A",
            url: "https://youtu.be/iAiPEjo_IJQ",
          },
          {
            title: "Lecture (3)",
            description: "Adrenergic Drugs pt.B",
            url: "https://youtu.be/7QVYT620T2M",
          },
          {
            title: "Lecture (4)",
            description: "Adrenergic Drugs pt.C",
            url: "https://youtu.be/49zqWu81nnI",
          },
          {
            title: "Lecture (5)",
            description: "Adrenergic Drugs pt.D",
            url: "https://youtu.be/b5jaXe6ESNQ",
          },
          {
            title: "Lecture (6)",
            description: "Adrenergic Drugs pt.E",
            url: "https://youtu.be/v_LR2qwis60z",
          },
          {
            title: "Lecture (7)",
            description: "Adrenergic Drugs pt.F",
            url: "https://youtu.be/S4o6bTuSPhQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Antihypertensive Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "ACE Inhibitors pt.A",
            url: "https://youtu.be/Nu5t6CX_ekw",
          },
          {
            title: "Lecture (2)",
            description: "ACE Inhibitors pt.B",
            url: "https://youtu.be/V6_h5T1vU_c",
          },
          {
            title: "Lecture (3)",
            description: "ACE Inhibitors pt.C",
            url: "https://youtu.be/d_aJ4_0quSA",
          },
          {
            title: "Lecture (4)",
            description: "ACE Inhibitors pt.D",
            url: "https://youtu.be/789LJXcsZhc",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title:
            "Wilson & Gisvold's Textbook of Organic Medicinal & Pharmaceutical Chemistry - 12th Edition",
          url: "../../../documents/level-4/semester-1/pharmaceutical-chemistry-1/Wilson_and_Gisvold's_Textbook.pdf",
        },
        {
          title: "V. Alagarsamy, Textbook of Medicinal Chemistry",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/TEXTBOOK-OF-MEDICINAL-CHEMISTRY.pdf",
        },
        {
          title: "Foye's Principles of Medicinal Chmeistry - 7th Edition",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/Foye's_Principles_of_Medicinal_Chemistry,_7th.pdf",
        },
      ],
      summaries: [
        {
          title: "Marah Isam Falit",
          url: "../../../documents/level-5/semester-1/pharmaceutical-chemistry-3/summary/pharm-chem-3-summary.pdf",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutical & Med. Chemistry III",
        "Course Code:": "PHCH4213",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH2306", title: "Organic Chemistry I", required: true },
        {
          code: "PHCH4210",
          title: "Pharmaceutical Chemistry I",
          required: false,
        },
        {
          code: "PHCH4211",
          title: "Pharmaceutical Chemistry II",
          required: false,
        },
      ],
    },
  },
  {
    slug: "pharmacotherapeutics-1-samar",
    title: "Pharmacotherapeutics One.",
    description:
      "Introduction to Pharmacotherapeutics || Chemotherapeutic Agents of Different Families of Antibiotics, Antifungals, Antiprotozoals, Antiparasitics & Applications of Diseases",
    lecturers: [
      {
        name: "Samar Abu-rkhaya",
      },
      {
        title: "Dr.",
        name: "Mahmoud Taleb",
        altLink: "pharmacotherapeutics-1",
      },
    ],
    stats: {
      videosCount: 32,
      chaptersCount: 12,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : General Principles of Pharmacotherapeutics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://m.youtube.com/watch?v=yh_olW3gYUw&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=1",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://m.youtube.com/watch?v=l_qVxE6EN-k&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=2",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Revision of Antibacterial Agents",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cephalosporins",
            url: "https://m.youtube.com/watch?v=CZewy71MSKY&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=3",
          },
          {
            title: "Lecture (2)",
            description: "Pencillins",
            url: "https://m.youtube.com/watch?v=w-k9G7RIR5c&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=4",
          },
          {
            title: "Lecture (3)",
            description: "Other β Lactams",
            url: "https://m.youtube.com/watch?v=toLrjYqL7tk&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=5",
          },
          {
            title: "Lecture (4)",
            description: "Tetracyclines",
            url: "https://m.youtube.com/watch?v=ENkqXNL0DT4&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=6",
          },
          {
            title: "Lecture (5)",
            description: "Aminoglycosides + Others",
            url: "https://m.youtube.com/watch?v=rK4gm4859JM&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=7",
          },
          {
            title: "Lecture (6)",
            description: "Sulfonamides",
            url: "https://m.youtube.com/watch?v=vcdf8PHXRhc&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=8",
          },
          {
            title: "Lecture (7)",
            description: "Fluoroquinolones",
            url: "https://m.youtube.com/watch?v=ZuR623dlJZE&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=9",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Antiprotozoal Agents",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Amebiasis + Giardiasis",
            url: "https://m.youtube.com/watch?v=L0WicViBlE0&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=10",
          },
          {
            title: "Lecture (2)",
            description: "Trichomoniasis",
            url: "https://m.youtube.com/watch?v=Mkuux-1VrQ4&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=11",
          },
          {
            title: "Lecture (3)",
            description: "Protein Synthesis Inhibitors",
            url: "https://m.youtube.com/watch?v=YbdE6T6d4Pk&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=12",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : CNS Infections",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "CNS Infection pt.A",
            url: "https://m.youtube.com/watch?v=_3lnyLDS6No&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=13",
          },
          {
            title: "Lecture (2)",
            description: "CNS Infection pt.B",
            url: "https://m.youtube.com/watch?v=3Oilbh1Zj3k&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=14",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Respiratory Tract Infections",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "URTI pt.A",
            url: "https://m.youtube.com/watch?v=RTV-EhZ15wE&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=15",
          },
          {
            title: "Lecture (2)",
            description: "URTI pt.B (Sinusitis)",
            url: "https://m.youtube.com/watch?v=T-RHrxqNcWY&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=16",
          },
          {
            title: "Lecture (3)",
            description: "LRTI pt.A",
            url: "https://m.youtube.com/watch?v=flJGUMKxSK0&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=17",
          },
          {
            title: "Lecture (4)",
            description: "LRTI pt.B (Acute Brochitis)",
            url: "https://m.youtube.com/watch?v=lslbCHDJLPQ&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=18",
          },
          {
            title: "Lecture (5)",
            description: "LRTI pt.C (Pulmonary Tuberculosis pt.I)",
            url: "https://m.youtube.com/watch?v=DRhMcp4rHzY&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=19",
          },
          {
            title: "Lecture (6)",
            description: "LRTI pt.D (Pulmonary Tuberculosis pt.II)",
            url: "https://m.youtube.com/watch?v=XJTBjkASgjc&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=20",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : GIT Infections",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Acute Gastroenteritis pt.A",
            url: "https://m.youtube.com/watch?v=DKi5efUOHek&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=21",
          },
          {
            title: "Lecture (2)",
            description: "Acute Gastroenteritis pt.B",
            url: "https://m.youtube.com/watch?v=4F1epzKPH3I&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=22",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Urinary Tract Infections",
        chapterTitleNote: "(UTI)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "UTI pt.A",
            url: "https://m.youtube.com/watch?v=JDZvoK16PaE&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=23",
          },
          {
            title: "Lecture (2)",
            description: "UTI pt.B",
            url: "https://m.youtube.com/watch?v=wN0HYE9ymD4&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=24",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Antifungal Agents",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antifungal Agents pt.A",
            url: "https://m.youtube.com/watch?v=hyeQ-LYJdTs&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=25",
          },
          {
            title: "Lecture (2)",
            description: "Antifungal Agents pt.B",
            url: "https://m.youtube.com/watch?v=q3ZArtVin7Q&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=26",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Antiviral Agents",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiviral Agents pt.A",
            url: "https://m.youtube.com/watch?v=XQuzKyr_wfE&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=27",
          },
          {
            title: "Lecture (2)",
            description: "Antiviral Agents pt.B",
            url: "https://m.youtube.com/watch?v=J5NB4Rcyu4E&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=28",
          },
          {
            title: "Lecture (3)",
            description: "Antiviral Agents pt.C",
            url: "https://m.youtube.com/watch?v=x-8pjs5sqtk&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=29",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Antihelminthic Agents",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antihelminthic Agents",
            url: "https://m.youtube.com/watch?v=KvxsfN1gIkE&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=30",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI : Sexually Transmitted Disease",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Sexually Transmitted Disease",
            url: "https://m.youtube.com/watch?v=0egi0RVDYQc&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=31",
          },
        ],
      },
      {
        chapterTitle: "Chapter XII : Dermatological Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Acne Vulgaris",
            url: "https://m.youtube.com/watch?v=EUIh0gPs7GQ&list=PLkYQrorWCLMp0qhXi1OMj1zEk9StHNqJF&index=32",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Pharmacotherapy Principles & Practice 5th Edition",
          url: "../../../documents/level-5/semester-1/clinical-pharmacy/Kelly_C_Lee,_Marie_A_Chisholm_Burns,_Patrick_M_Malone,_P_Brandon.pdf",
        },
        {
          title: "Clincial Pharmacy & Therapeutics 5th Edition",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/Clinical-Pharmacy-and-Therapeutics-roger-walker-5th.pdf",
        },
      ],
      summaries: [
        {
          title: "Aya Maher Fatooh",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/therapeutics-1-course-summary-aya.pdf",
        },
      ],
      exams: [
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2012",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/exams/dr-mahmoud-taleb-final-2012.pdf",
        },
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2014",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/exams/dr-mahmoud-taleb-final-2014.pdf",
        },
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2015",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/exams/dr-mahmoud-taleb-final-2015.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmacotherapeutics I",
        "Course Code:": "PHPT5317",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT4310", title: "Pharmacology I", required: true },
        { code: "PHPT4312", title: "Pharmacology II", required: false },
        { code: "PHPT5315", title: "Pharmacology III", required: false },
      ],
    },
  },
  {
    slug: "pharmacotherapeutics-1",
    title: "Pharmacotherapeutics One.",
    description:
      "Introduction to Pharmacotherapeutics || Chemotherapeutic Agents of Different Families of Antibiotics, Antifungals, Antiprotozoals, Antiparasitics & Applications of Diseases",
    lecturers: [
      {
        title: "Dr.",
        name: "Mahmoud Taleb",
      },
      {
        name: "Samar Abu-rkhaya",
        altLink: "pharmacotherapeutics-1-samar",
      },
    ],
    stats: {
      videosCount: 23,
      chaptersCount: 12,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : General Principles of Pharmacotherapeutics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://www.youtube.com/watch?v=USsQAPjGLX8&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=24&t=47s",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://www.youtube.com/watch?v=C8MVkVIn0Bg&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=23",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Revision of Antibacterial Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Cell Wall Synthesis Inhibitors pt.A",
            url: "https://www.youtube.com/watch?v=xxsajVQwyns&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=22",
          },
          {
            title: "Lecture (2)",
            description: "Cell Wall Synthesis Inhibitors pt.B",
            url: "https://www.youtube.com/watch?v=oFKs322DC8g&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=21",
          },
          {
            title: "Lecture (3)",
            description: "Protein Synthesis Inhibitors pt.A",
            url: "https://www.youtube.com/watch?v=C9q26jupfhw&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=20",
          },
          {
            title: "Lecture (4)",
            description: "Protein Synthesis Inhibitors pt.B",
            url: "https://www.youtube.com/watch?v=B_4LSEVSY3I&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=19",
          },
          {
            title: "Lecture (5)",
            description: "Protein Synthesis Inhibitors pt.C",
            url: "https://www.youtube.com/watch?v=C_cWXsenV9Y&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=18",
          },
          {
            title: "Lecture (6)",
            description: "Nucleic Acid Inhibitors",
            url: "https://www.youtube.com/watch?v=dVXFtBOoih0&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=17",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : CNS Infections",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/chapter-3-cns-infections.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "CNS Infections (Meningitis)",
            url: "https://www.youtube.com/watch?v=Tt6u6OrTMjc&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=16",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Respiratory Tract Infections",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../Files/level-3/semester-1/pathophysiology-1/chapter-03-inflamation.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "URTIs (Otitis)",
            url: "https://www.youtube.com/watch?v=0KoFsLOktF0&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=15",
          },
          {
            title: "Lecture (2)",
            description: "URITs (Sinusitis) + LRTIs       (Bronchitis)",
            url: "https://www.youtube.com/watch?v=66kktpcecHM&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=14",
          },
          {
            title: "Lecture (3)",
            description: "LRTIs (Pneumonia)",
            url: "https://www.youtube.com/watch?v=7RUNbKfgOo0&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=13",
          },
          {
            title: "Lecture (4)",
            description: "LRTIs (TB)",
            url: "https://www.youtube.com/watch?v=SwhtVTFd1R0&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=12",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : GIT Infections",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "GIT Infections (Dehydration)",
            url: "https://www.youtube.com/watch?v=xENMcivU_Xc&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=11",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Urinary Tract Infections",
        chapterTitleNote: "(UTI)",
        documents: [
          {
            title: "Chapter Slides",
            url: "../../../Files/level-3/semester-1/pathophysiology-1/chapter-05-git-disorders.pdf",
            type: "slides",
          },
        ],
        videos: [
          {
            title: "Lecture (1)",
            description: "LUTI (Cystitis)",
            url: "https://www.youtube.com/watch?v=dxxmJsG6bsE&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=10",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Sexually Transmitted Disease",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Sexually Transmitted Disease",
            url: "https://www.youtube.com/watch?v=EzT7SdIqpcU&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=9",
          },
        ],
      },
      {
        chapterTitle: "Chapter VIII : Dermatological Disorders",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Dermatological Disorders pt.A",
            url: "https://www.youtube.com/watch?v=ST6vrBBsEp8&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=8",
          },
          {
            title: "Lecture (2)",
            description: "Dermatological Disorders pt.B",
            url: "https://www.youtube.com/watch?v=YKNC8rPaJQo&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=7",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Antifungal Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antifungal Drugs",
            url: "https://www.youtube.com/watch?v=PSYytYJEeD8&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=6",
          },
        ],
      },
      {
        chapterTitle: "Chapter X : Antiprotozoal Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiprotozoal Drugs",
            url: "https://www.youtube.com/watch?v=s3nTNKbVEfU&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=5",
          },
        ],
      },
      {
        chapterTitle: "Chapter XI : Antihelminthic Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antihelminthic Drugs",
            url: "https://www.youtube.com/watch?v=Ysc2LedfYts&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=4",
          },
        ],
      },
      {
        chapterTitle: "Chapter XII : Antiviral Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiviral Drugs pt.A",
            url: "https://www.youtube.com/watch?v=wUVByplI4Ng&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=2",
          },
          {
            title: "Lecture (2)",
            description: "Antiviral Drugs pt.B",
            url: "https://www.youtube.com/watch?v=axliF0jKibM&list=PLRQuCY98Q_etFlafpQ3eQQS4Fv1_POTfi&index=1",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Pharmacotherapy Principles & Practice 5th Edition",
          url: "../../../documents/level-5/semester-1/clinical-pharmacy/Kelly_C_Lee,_Marie_A_Chisholm_Burns,_Patrick_M_Malone,_P_Brandon.pdf",
        },
        {
          title: "Clincial Pharmacy & Therapeutics 5th Edition",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/Clinical-Pharmacy-and-Therapeutics-roger-walker-5th.pdf",
        },
      ],
      summaries: [
        {
          title: "Aya Maher Fatooh",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/therapeutics-1-course-summary-aya.pdf",
        },
      ],
      exams: [
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2012",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/exams/dr-mahmoud-taleb-final-2012.pdf",
        },
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2014",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/exams/dr-mahmoud-taleb-final-2014.pdf",
        },
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2015",
          url: "../../../documents/level-5/semester-1/pharmacotherapeutics-1/exams/dr-mahmoud-taleb-final-2015.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmacotherapeutics I",
        "Course Code:": "PHPT5317",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT4310", title: "Pharmacology I", required: true },
        { code: "PHPT4312", title: "Pharmacology II", required: false },
        { code: "PHPT5315", title: "Pharmacology III", required: false },
      ],
    },
  },
  {
    slug: "clinical-biochemistry",
    title: "Clinical Biochemistry.",
    description:
      "Biomolecules Modifications that affect the Body Health Status & Diseases Associated with it",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Al-ghussein",
      },
    ],
    stats: {
      videosCount: 21,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Introduction to Clinical Biochemistry",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course Outline",
            url: "https://youtu.be/M9yaTWl5XoQ",
          },
          {
            title: "Lecture (1)",
            description: "Introduction pt.A",
            url: "https://youtu.be/UuBikZ8NNfA",
          },
          {
            title: "Lecture (2)",
            description: "Introduction pt.B",
            url: "https://youtu.be/WzaRQLcUYJI",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Fluids & Electrolytes Balance",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Fluids & Electrolytes",
            url: "https://youtu.be/49JgTR5UEzk",
          },
          {
            title: "Lecture (2)",
            description: "Hyponatraemia pt.A",
            url: "https://youtu.be/O4jMpDXpcMc",
          },
          {
            title: "Lecture (3)",
            description: "Hyponatraemia pt.B",
            url: "https://youtu.be/1t73g51hdSc",
          },
          {
            title: "Lecture (4)",
            description: "Hyperkalemia",
            url: "https://youtu.be/i4nT_-1oYkA",
          },
          {
            title: "Lecture (5)",
            description: "Hypokalemia",
            url: "https://youtu.be/nXJ65WZGrw0",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Renal Function",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Investigation of Renal Function pt.A",
            url: "https://youtu.be/_Vt6n6V_WhM",
          },
          {
            title: "Lecture (2)",
            description: "Investigation of Renal Function pt.B",
            url: "https://youtu.be/ehcYffvKCEU",
          },
          {
            title: "Lecture (3)",
            description: "Urinanlysis",
            url: "https://youtu.be/BAQpwwG0E50",
          },
          {
            title: "Lecture (4)",
            description: "Acute Renal Failure",
            url: "https://youtu.be/sJry12R09CU",
          },
          {
            title: "Lecture (5)",
            description: "Proteinuria",
            url: "https://youtu.be/m67TL8NUN34",
          },
          {
            title: "Lecture (6)",
            description: "Chronic Renal Failure",
            url: "https://youtu.be/RCzVVD2C3FA",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Proteins & Enzymes",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Proteins & Enzymes",
            url: "https://youtu.be/yCBTSHmS-Sw",
          },
          {
            title: "Lecture (2)",
            description: "Immunoglobulins",
            url: "https://youtu.be/kLdCsH9g72E",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Myocardial Infarction",
        chapterTitleNote: "(MI)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "MI",
            url: "https://youtu.be/oiQJS48PWK0",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Liver Function",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Liver Function Tests (LFT)",
            url: "https://youtu.be/Ga2wclMnkDI",
          },
          {
            title: "Lecture (2)",
            description: "Jaundice",
            url: "https://youtu.be/LaKF0sKzQWw",
          },
          {
            title: "Lecture (3)",
            description: "Acute Liver Disease",
            url: "https://youtu.be/nwoSYs7rWKM",
          },
          {
            title: "Lecture (4)",
            description: "Chronic Liver Disease",
            url: "https://youtu.be/qyjUnMpOeLo",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Clinical Biochemistry: An Illustrated Colour Text",
          url: "../../../documents/level-5/semester-2/clinical-biochemistry/Clinical-Biochemistry-An-Illustrated-Colour-Text-5th-2013.pdf",
        },
      ],
      summaries: [
        {
          title: "Tasneem Al-qeeq",
          url: "../../../documents/level-5/semester-2/clinical-biochemistry/clinical-biochemistry-course-summary-tasneem.pdf",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Clinical Biochemistry",
        "Course Code:": "PHCH5218",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH2207", title: "Biochemistry I", required: false },
        { code: "PHCH3208", title: "Biochemistry II", required: true },
      ],
    },
  },
  {
    slug: "human-nutrition",
    title: "Human Nutrition.",
    description: "The Role of Diet in Prevention & Treatment of Diseases",
    lecturers: [
      {
        title: "Dr.",
        name: "Abedel-Raziq Salama",
      },
    ],
    stats: {
      videosCount: 0,
      chaptersCount: 0,
    },
    lectures: [],
    resources: {
      referenceBooks: [
        {
          title: "",
          url: "404",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Final Exam of 2016",
          url: "../../../documents/level-5/semester-2/nutrition/exams/final-2016.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Human Nutrition",
        "Course Code:": "PHCH5222",
        "Faculty:": "Faculty of Pharmacy",
        "Department:": "Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "-",
      },
      preRequirements: [{}],
    },
  },
  {
    slug: "pharmaceutical-chemistry-4",
    title: "Pharmaceutical Chemistry Four.",
    description:
      "Cardiovascular System Drug Classes Cont., Diuretics, Hypoglycemic Agents & Antihistamines",
    lecturers: [
      {
        title: "Prof.",
        name: "Ihab Almasri",
      },
    ],
    stats: {
      videosCount: 29,
      chaptersCount: 9,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Antianginal Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (0)",
            description: "Course Outline",
            url: "https://youtu.be/zPcXUD5b8-s",
          },
          {
            title: "Lecture (1)",
            description: "Organic Nitrates",
            url: "https://youtu.be/OEbRxvHMe8U",
          },
          {
            title: "Lecture (2)",
            description: "Calcium Channel Blockers (DHP)",
            url: "https://youtu.be/vB6BvTgjP2g",
          },
          {
            title: "Lecture (3)",
            description: "Calcium Channel Blockers (Other Classes)",
            url: "https://youtu.be/w95Yx9BKtEw",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Antihyperlipidemic Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antihyperlipidemic Drugs pt.A (Statins)",
            url: "https://youtu.be/1uBgNmk8XvM",
          },
          {
            title: "Lecture (2)",
            description: "Antihyperlipidemic Drugs pt.B",
            url: "https://youtu.be/8T7oTy7ulGQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Antiplatelet Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antiplatelet Drugs pt.A",
            url: "https://youtu.be/1wUwMwqxqKo",
          },
          {
            title: "Lecture (2)",
            description: "Antiplatelet Drugs pt.B",
            url: "https://youtu.be/xap32wh-x2I",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Anticoagulant Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Anticoagulant Drugs pt.A",
            url: "https://youtu.be/hJxlhWTGEUE",
          },
          {
            title: "Lecture (2)",
            description: "Anticoagulant Drugs pt.B",
            url: "https://youtu.be/o0BM4Ak4c8E",
          },
          {
            title: "Lecture (3)",
            description: "Anticoagulant Drugs pt.C",
            url: "https://youtu.be/6TpfOBcZfIA",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Diuretics",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Introduction",
            url: "https://youtu.be/qLev4D8ZdLI",
          },
          {
            title: "Lecture (2)",
            description: "Site 1 Diuretics (CAIs)",
            url: "https://youtu.be/lFWoyoSntVg",
          },
          {
            title: "Lecture (3)",
            description: "Site 3 Diuretics (Thiazides)",
            url: "https://youtu.be/aOZ_xTq-GAQ",
          },
          {
            title: "Lecture (4)",
            description: "Site 3 Diuretics (Thiazide-Like Diuretics)",
            url: "https://youtu.be/bkHZWi-auZM",
          },
          {
            title: "Lecture (5)",
            description: "Site 2 Diuretics (Loop Diuretics) pt.A",
            url: "https://youtu.be/3yWnfHchmS0",
          },
          {
            title: "Lecture (6)",
            description: "Site 2 Diuretics (Loop Diuretics) pt.B",
            url: "https://youtu.be/23ozZJ5_308",
          },
          {
            title: "Lecture (7)",
            description: "Site 4 Diuretics (Potassium Sparing       Diuretics)",
            url: "https://youtu.be/P208PfUayBs",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Oral Hypoglycemic Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "OHA pr.A",
            url: "https://youtu.be/oiQLcZJ0i-I",
          },
          {
            title: "Lecture (2)",
            description: "OHA pr.B",
            url: "https://youtu.be/OPXV26S9tg0",
          },
          {
            title: "Lecture (3)",
            description: "OHA pr.C",
            url: "https://youtu.be/Wo_C_9NzqrM",
          },
          {
            title: "Lecture (4)",
            description: "OHA pr.D",
            url: "https://youtu.be/etXhp01CFs8",
          },
          {
            title: "Lecture (5)",
            description: "OHA pr.E",
            url: "https://youtu.be/Mpq2Zzw5Caw",
          },
        ],
      },
      {
        chapterTitle: "Chapter VII : Local Anesthetic",
        documents: [],
        videos: [],
      },
      {
        chapterTitle: "Chapter VIII : Antihistamine Drugs",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Antihistamines pt.A",
            url: "https://youtu.be/53mHClJv5VY",
          },
          {
            title: "Lecture (2)",
            description: "Antihistamines pt.B",
            url: "https://youtu.be/FSQnhclCgW4",
          },
          {
            title: "Lecture (3)",
            description: "Antihistamines pt.C",
            url: "https://youtu.be/H9lxXtRiGcA",
          },
          {
            title: "Lecture (4)",
            description: "Antihistamines pt.D",
            url: "https://youtu.be/8XKJl5eO2Ec",
          },
          {
            title: "Lecture (5)",
            description: "Antihistamines pt.E",
            url: "https://youtu.be/hjSG37swyS0",
          },
          {
            title: "Lecture (6)",
            description: "Antihistamines pt.F",
            url: "https://youtu.be/GmavzL7-oXQ",
          },
        ],
      },
      {
        chapterTitle: "Chapter IX : Cholinergic Drugs",
        documents: [],
        videos: [],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title:
            "Wilson & Gisvold's Textbook of Organic Medicinal & Pharmaceutical Chemistry - 12th Edition",
          url: "../../../documents/level-4/semester-1/pharmaceutical-chemistry-1/Wilson_and_Gisvold's_Textbook.pdf",
        },
        {
          title: "V. Alagarsamy, Textbook of Medicinal Chemistry",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/TEXTBOOK-OF-MEDICINAL-CHEMISTRY.pdf",
        },
        {
          title: "Foye's Principles of Medicinal Chmeistry - 7th Edition",
          url: "../../../documents/level-4/semester-2/pharmaceutical-chemistry-2/Foye's_Principles_of_Medicinal_Chemistry,_7th.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "(404 - Not Found)",
          url: "404",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmaceutical Chemistry IV",
        "Course Code:": "PHCH5217",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Chemistry & Pharmaceutical Chemistry     (PHCH)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHCH2306", title: "Organic Chemistry I", required: true },
        {
          code: "PHCH4211",
          title: "Pharmaceutical Chemistry II",
          required: false,
        },
        {
          code: "PHCH4213",
          title: "Pharmaceutical Chemistry III",
          required: false,
        },
      ],
    },
  },
  {
    slug: "pharmacotherapeutics-2",
    title: "Pharmacotherapeutics Two.",
    description: "Breast Cancer, Cardiology, CKD, Liver Diseases & DM",
    lecturers: [
      {
        title: "Dr.",
        name: "Hala Al-agha",
      },
    ],
    stats: {
      videosCount: 27,
      chaptersCount: 6,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : Breast Cancer",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Breast Cancer pt.A",
            url: "https://youtu.be/atU_9--ix1k",
          },
          {
            title: "Lecture (2)",
            description: "Breast Cancer pt.B",
            url: "https://youtu.be/DItSkiGw3mo",
          },
          {
            title: "Lecture (3)",
            description: "Breast Cancer pt.C",
            url: "https://youtu.be/UEnxAfDAuIw",
          },
          {
            title: "Lecture (4)",
            description: "Breast Cancer pt.D",
            url: "https://youtu.be/IDqrerrU5NU",
          },
        ],
      },
      {
        chapterTitle: "Chapter II : Unknown",
        chapterTitleNote: "(Hidden)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Unknown (Hidden)",
            url: "https://youtu.be/ZZEJ46ktkCY",
          },
          {
            title: "Lecture (2)",
            description: "Unknown (Hidden)",
            url: "https://youtu.be/KmxTxL2PXDc",
          },
          {
            title: "Lecture (3)",
            description: "Unknown (Hidden)",
            url: "https://youtu.be/rf55se3gIhc",
          },
          {
            title: "Lecture (4)",
            description: "Unknown (Hidden)",
            url: "https://youtu.be/oMH9MS4D5EY",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Cardiology",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "HTN pt.A",
            url: "https://youtu.be/JVMIL7rs6Pc",
          },
          {
            title: "Lecture (2)",
            description: "HTN pt.B",
            url: "https://youtu.be/QQXurG_efL4",
          },
          {
            title: "Lecture (3)",
            description: "HTN pt.C",
            url: "https://youtu.be/8aeDTC4Z9Sc",
          },
          {
            title: "Lecture (4)",
            description: "Stable Angina pt.A       (couldn't find the lecture)",
            url: "404",
          },
          {
            title: "Lecture (5)",
            description: "Stable Angina pt.B",
            url: "https://youtu.be/3s0l21f4pZM",
          },
          {
            title: "Lecture (7)",
            description: "Acute Coronary Syndrome pt.B",
            url: "https://youtu.be/hpcAkF-tCV0",
          },
        ],
      },
      {
        chapterTitle: "Chapter IV : Chronic Kidney Diseases",
        chapterTitleNote: "(CKD)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "CKD pt.A",
            url: "https://youtu.be/799YDhbvNfI",
          },
          {
            title: "Lecture (2)",
            description: "CKD pt.B (Anemia)",
            url: "https://youtu.be/hZOHqiPeFGQ",
          },
          {
            title: "Lecture (3)",
            description: "CKD pt.C",
            url: "https://youtu.be/MUdAt7O3lxo",
          },
          {
            title: "Lecture (4)",
            description: "CKD pt.D (Renal Osteodystrophy CKD-MBD)",
            url: "https://youtu.be/L2TLZBNCqp8",
          },
        ],
      },
      {
        chapterTitle: "Chapter V : Liver Diseases",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Liver Cirrhosis",
            url: "https://youtu.be/NtRy0MnTvoc",
          },
          {
            title: "Lecture (2)",
            description: "Management of Liver Cirrhosis Complications pt.A",
            url: "https://youtu.be/yWhgyQrSprU",
          },
          {
            title: "Lecture (3)",
            description: "Management of Liver Cirrhosis Complications pt.B",
            url: "https://youtu.be/mM1Jz78nBc8",
          },
        ],
      },
      {
        chapterTitle: "Chapter VI : Diabetes Mellitus",
        chapterTitleNote: "(DM)",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "DM",
            url: "https://youtu.be/pos9LMZzblo",
          },
          {
            title: "Lecture (2)",
            description: "Management of DM pt.A",
            url: "https://youtu.be/MVCJcmnNvDM",
          },
          {
            title: "Lecture (3)",
            description: "Management of DM pt.B",
            url: "https://youtu.be/gzLbmJBByPY",
          },
          {
            title: "Lecture (4)",
            description: "Management of DM pt.C",
            url: "https://youtu.be/dFJDHT5-ozU",
          },
          {
            title: "Lecture (5)",
            description: "Unknown (Hidden)",
            url: "https://youtu.be/7DC70K3CLIk",
          },
          {
            title: "Lecture (6)",
            description: "Unknown (Hidden)",
            url: "https://youtu.be/Mpek2ZuwHhY",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Pharmacotherapy Principles & Practice 5th Edition",
          url: "../../../documents/level-5/semester-1/clinical-pharmacy/Kelly_C_Lee,_Marie_A_Chisholm_Burns,_Patrick_M_Malone,_P_Brandon.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mahmoud Taleb, Final Exam of 2015",
          url: "../../../documents/level-5/semester-2/pharmacotherapeutics-2/exams/dr-mahmoud-taleb-final-2015.pdf",
        },
        {
          title: "Dr. Hala Al-agha, Final Exam of 2016",
          url: "../../../documents/level-5/semester-2/pharmacotherapeutics-2/exams/dr-hala-alagha-final-2016.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Pharmacotherapeutics II",
        "Course Code:": "PHPT5318",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "3 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT4310", title: "Pharmacology I", required: true },
        { code: "PHPT4312", title: "Pharmacology II", required: false },
        { code: "PHPT5315", title: "Pharmacology III", required: false },
      ],
    },
  },
  {
    slug: "toxicology",
    title: "Toxicology.",
    description:
      "Introduction to Toxicology, Dealing with Poisoning, Toxicity of Therapeutic & Non-therapeutic Agents",
    lecturers: [
      {
        title: "Dr.",
        name: "Mohammed Shbair",
      },
    ],
    stats: {
      videosCount: 21,
      chaptersCount: 4,
    },
    lectures: [
      {
        chapterTitle: "Chapter I : General Principles of Toxicology",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description:
              "Course Outline & General Principles of       Toxicology pt.A",
            url: "https://youtu.be/go0_zL_ykbM",
          },
          {
            title: "Lecture (2)",
            description: "General Principles of Toxicology pt.B",
            url: "https://youtu.be/pS4V4Ajaj64",
          },
          {
            title: "Lecture (3)",
            description: "General Principles of Toxicology pt.C",
            url: "https://youtu.be/rHaL1nrjMvY",
          },
          {
            title: "Lecture (4)",
            description: "General Principles of Toxicology pt.D",
            url: "https://youtu.be/i4BqUhh6yjo",
          },
          {
            title: "Lecture (5)",
            description: "General Principles of Toxicology pt.E",
            url: "https://youtu.be/IL_89i4IDt4",
          },
          {
            title: "Lecture (6)",
            description: "General Principles of Toxicology pt.F",
            url: "https://youtu.be/Sk3YWF-49xg",
          },
          {
            title: "Lecture (7)",
            description: "General Principles of Toxicology pt.G",
            url: "https://youtu.be/7-nE1NEdhCI",
          },
          {
            title: "Lecture (8)",
            description: "General Principles of Toxicology pt.H",
            url: "https://youtu.be/wRxBg1sNFgY",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter II : General Management & Treatment of Poisoning",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Management & Treatment of Poisoning Introduction",
            url: "https://youtu.be/zLdY3kSQie0",
          },
          {
            title: "Lecture (2)",
            description: "Emesis pt.A",
            url: "https://youtu.be/9Q_FTXg5NH0",
          },
          {
            title: "Lecture (3)",
            description: "Emesis pt.B",
            url: "https://youtu.be/jlvdw5g0qBg",
          },
          {
            title: "Lecture (4)",
            description: "Gastric Lavage & Activated Charcoal",
            url: "https://youtu.be/lI5W7WrS8JI",
          },
          {
            title: "Lecture (5)",
            description: "Cathartics & Whole Bowel IrrigationUnit",
            url: "https://youtu.be/514p9-a1nu0",
          },
          {
            title: "Lecture (6)",
            description: "Enhanced Elimination",
            url: "https://youtu.be/6XNN133POFs",
          },
        ],
      },
      {
        chapterTitle: "Chapter III : Toxicity of Selected Therapeutic Agents",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Toxicity of BZDs & Aspirin",
            url: "https://youtu.be/kTftMpSbTgc",
          },
          {
            title: "Lecture (2)",
            description: "Toxicity of Acetaminophen, Ibuprofen & Opiates",
            url: "https://youtu.be/dg9qfbS4958",
          },
          {
            title: "Lecture (3)",
            description: "Toxicity of Cocaine & Marijuana",
            url: "https://youtu.be/2qP1QAR7iQ4",
          },
          {
            title: "Lecture (4)",
            description:
              "Toxicity of Amphetamine & Phenethylamine       Derivatives",
            url: "https://youtu.be/T_1n28VPVzQ",
          },
        ],
      },
      {
        chapterTitle:
          "Chapter IV : Toxicity of Selected Non-therapeutic Agents",
        documents: [],
        videos: [
          {
            title: "Lecture (1)",
            description: "Gases & Metals Poisoning",
            url: "https://youtu.be/5o57LwDE62A",
          },
          {
            title: "Lecture (2)",
            description: "Food & Animal Poisoning",
            url: "https://youtu.be/FulNRIJvdcc",
          },
          {
            title: "Lecture (3)",
            description: "Toxic Effect of Pesticides",
            url: "https://youtu.be/rFk8tU2-Nug",
          },
        ],
      },
    ],
    resources: {
      referenceBooks: [
        {
          title: "Casarett & Duoll's Toxicology - 8th Edition",
          url: "../../../documents/level-5/semester-2/toxicology/reference/Casarett-&-Doull's-Toxicology_The-Basic-Science-of-Poisons.pdf",
        },
      ],
      summaries: [
        {
          title: "",
          url: "404",
        },
      ],
      exams: [
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2013",
          url: "../../../documents/level-5/semester-2/toxicology/dr-mohammed-shbair-final-2013.pdf",
        },
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2015",
          url: "../../../documents/level-5/semester-2/toxicology/dr-mohammed-shbair-final-2015.pdf",
        },
        {
          title: "Dr. Mohammed Shbair, Final Exam of 2017",
          url: "../../../documents/level-5/semester-2/toxicology/dr-mohammed-shbair-final-2017.pdf",
        },
      ],
    },
    about: {
      description: "Course Description (404 - Not Found)",
      infoTable: {
        "Course Title:": "Toxicology",
        "Course Code:": "PHPT5219",
        "Faculty:": "Faculty of Pharmacy",
        "Department:":
          "Departemnt of Pharmacology & Medical Sciences     (PHPT)",
        "Course Classification:": "Major Need",
        "Course Level:": "5th Level",
        "Total Credits:": "2 Credit Hours",
        "Notes:": "You Should at least Study this Course.",
      },
      preRequirements: [
        { code: "PHPT4310", title: "Pharmacology I", required: true },
        { code: "PHPT4312", title: "Pharmacology II", required: false },
        { code: "PHPT5315", title: "Pharmacology III", required: false },
      ],
    },
  },
] as const;
