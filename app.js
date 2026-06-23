// Default Database Seed Data
const DEFAULT_DATABASE = {
  ageGroups: [
    {
      id: "u6",
      name: "U6 (Under 6)",
      matchFormat: "See U7",
      ballSize: "Size 3",
      rosterSize: "See U7",
      matchDuration: "See U7",
      fieldDimension: "See U7",
      goalkeeper: "None - players rotate in active play",
      offsides: "No offside",
      heading: "No header",
      notes: "Main focus is fun and learning basics."
    },
    {
      id: "u7",
      name: "U7 (Under 7)",
      matchFormat: "6v6 (including goalkeeper)",
      ballSize: "Size 3",
      rosterSize: "10 players",
      matchDuration: "Four 10-minute quarters",
      fieldDimension: "50 x 40 yards",
      goalkeeper: "Encourage rotation",
      offsides: "No offside",
      heading: "No header",
      notes: "Focus is on team play and player positioning."
    },
    {
      id: "u8",
      name: "U8 (Under 8)",
      matchFormat: "6v6 (including goalkeeper)",
      ballSize: "Size 3 or 4",
      rosterSize: "10 players",
      matchDuration: "Two 20-minute halves",
      fieldDimension: "50 x 40 yards",
      goalkeeper: "Encourage rotation",
      offsides: "No offside",
      heading: "No header",
      notes: "Encourage spacing and basic passing rules."
    },
    {
      id: "u9",
      name: "U9 (Under 9)",
      matchFormat: "7v7 (including goalkeeper)",
      ballSize: "Size 4",
      rosterSize: "12 players",
      matchDuration: "Two 25-minute halves",
      fieldDimension: "60 x 45 yards",
      goalkeeper: "Yes - introduce goalkeeper play",
      offsides: "Yes (enforced at build-out line)",
      heading: "No header",
      notes: "First year playing with offside and build-out lines."
    },
    {
      id: "u10",
      name: "U10 (Under 10)",
      matchFormat: "7v7 (including goalkeeper)",
      ballSize: "Size 4",
      rosterSize: "12 players",
      matchDuration: "Two 25-minute halves",
      fieldDimension: "60 x 40 yards",
      goalkeeper: "Yes - introduce goalkeeper play",
      offsides: "Yes (enforced at build-out line)",
      heading: "No header",
      notes: "Introduction of tactics and standard positional roles."
    },
    {
      id: "u11",
      name: "U11 (Under 11)",
      matchFormat: "9v9 (including goalkeeper)",
      ballSize: "Size 4",
      rosterSize: "14 players",
      matchDuration: "Two 30-minute halves",
      fieldDimension: "70 x 50 yards",
      goalkeeper: "Yes - standard goalkeeper play",
      offsides: "Yes (standard)",
      heading: "No header",
      notes: "First year of tactical play with larger squads."
    },
    {
      id: "u12",
      name: "U12 (Under 12)",
      matchFormat: "9v9 (including goalkeeper)",
      ballSize: "Size 4",
      rosterSize: "14 players",
      matchDuration: "Two 30-minute halves",
      fieldDimension: "70 x 50 yards",
      goalkeeper: "Yes - standard goalkeeper play",
      offsides: "Yes (standard)",
      heading: "No header",
      notes: "Tactical positioning and build-up transitions."
    },
    {
      id: "u13-older",
      name: "U13 & Older (U13 - U19)",
      matchFormat: "11v11 (full field)",
      ballSize: "Size 5",
      rosterSize: "18 players",
      matchDuration: "Two 35-minute halves",
      fieldDimension: "110 x 70 yards",
      goalkeeper: "Yes - 11v11 rules",
      offsides: "Yes (standard)",
      heading: "Permitted",
      notes: "Full-field tactics and competitive league matches."
    }
  ],
  drills: [
    {
      id: "drill-001",
      title: "Cone Slalom Dribbling",
      type: "Dribbling",
      ageRange: "u6, u7, u8",
      duration: "10 mins",
      description: "On the coach's whistle, the first player dribbles in and out of the cones as fast as possible. Once they finish, the next player starts.",
      whyImportant: "Place 6 cones in a straight line, 3 yards apart.",
      pointers: "Keep the ball close. Use all surfaces of the foot. Stay low for balance and look up between touches.",
      youtubeUrl: "https://www.youtube.com/watch?v=FkWp9dY_Brc",
      imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-002",
      title: "Gate Passing Pair-Work",
      type: "Passing",
      ageRange: "u8, u9, u10, u11",
      duration: "12 mins",
      description: "Pairs jog around the field and pass the ball through as many different gates as possible. Can play as a competition to see who scores the most gates.",
      whyImportant: "Set up small cone gates around the field.",
      pointers: "Communication is key. Weight the passes correctly. Look up before passing and lock the ankle.",
      youtubeUrl: "https://www.youtube.com/watch?v=A3M1c4e7vA8",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-003",
      title: "1v1 Transfield Attack",
      type: "Shooting",
      ageRange: "u10, u11, u12",
      duration: "15 mins",
      description: "Coach plays a ball into the center of the grid, and two opposing players sprint out to win possession and score in a 1v1 matchup.",
      whyImportant: "Set up a grid with mini-goals on opposite ends.",
      pointers: "Be aggressive to the ball. Take positive first touches towards the goal. Shield the ball with your body.",
      youtubeUrl: "https://www.youtube.com/watch?v=yIyYxN_uV5U",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-004",
      title: "Clean your Room! (Sharks and Minnows)",
      type: "Fun Game",
      ageRange: "u6, u7, u8",
      duration: "10 mins",
      description: "Active players try to keep their soccer balls from the defenders ('sharks') who try to steal them and kick them out of the grid ('cleaning the room').",
      whyImportant: "A 20x20 yard grid represents the 'room'.",
      pointers: "Keep body between ball and defender. Dribble to open spaces. React quickly to recover when ball is lost.",
      youtubeUrl: "https://www.youtube.com/watch?v=F88-g4_k_d0",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-005",
      title: "Coordinated Dynamic Warm-up",
      type: "Warmup",
      ageRange: "u10, u11, u12, u13-older",
      duration: "8 mins",
      description: "Perform active dynamic movements (high knees, butt kicks, lunges, shuffles) down a 15-yard distance, returning with a light jog.",
      whyImportant: "Create two lines of players.",
      pointers: "Perform movements with control. Focus on proper posture. Maintain high energy and coordination.",
      youtubeUrl: "https://www.youtube.com/watch?v=1C6fWqny24w",
      imageUrl: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-006",
      title: "Dribbling Through Cones",
      type: "Dribbling",
      ageRange: "u6, u7, u8",
      duration: "Improve dribbling",
      description: "Arrange 5 cones in a zig-zag pattern. Players dribble in and out of the cones focusing on close foot control and shifting body weight to make quick cuts.",
      whyImportant: "Improve dribbling",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-007",
      title: "Passing Grid",
      type: "Passing",
      ageRange: "u8, u9, u10, u11",
      duration: "Improve passing",
      description: "Divide players into pairs and have them pass inside a grid. Increase the distance over time, and introduce one-touch passing challenges.",
      whyImportant: "Improve passing",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-008",
      title: "Defensive Rotations",
      type: "Defending",
      ageRange: "u10, u11, u12",
      duration: "Develop defense",
      description: "Divide players into 3-4 defenders and 1-2 attackers. Attackers circulate the ball while defenders practice shifting and rotating to cover open spaces.",
      whyImportant: "Develop defense",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-009",
      title: "Small-Sided Game (3v3)",
      type: "Fun Game",
      ageRange: "u6, u7, u8",
      duration: "Develop skills",
      description: "Divide players into teams of 3 and have them play a scrimmage on a small grid with mini-goals. No goalkeepers are used, maximizing touches.",
      whyImportant: "Develop skills",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-010",
      title: "Shooting on Goal",
      type: "Shooting",
      ageRange: "u10, u11, u12, u13-older",
      duration: "Improve shooting",
      description: "Divide players into pairs and have them strike the ball first-time on goal. Work on power and placement.",
      whyImportant: "Improve shooting",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-011",
      title: "Dribbling Around Cones (with Obstacles)",
      type: "Dribbling",
      ageRange: "u8, u10",
      duration: "Improve dribbling",
      description: "Arrange 5 cones with tape or obstacles. Players must navigate the maze, cutting around obstacles while keeping the ball under tight control.",
      whyImportant: "Improve dribbling",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/x2WC8re2Lqg?si=lJbK6oc71lcNkj6G",
      imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-012",
      title: "One-Touch Passing",
      type: "Passing",
      ageRange: "u8, u10",
      duration: "Improve passing",
      description: "Divide players into pairs and have them pass one-touch inside a grid. Focus on quick reflexes and clean cushioning of the ball.",
      whyImportant: "Improve passing",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-013",
      title: "Defensive Aggression",
      type: "Defending",
      ageRange: "u6, u7, u8",
      duration: "Develop defense",
      description: "Divide players into 3-4 defenders and 1-2 attackers. Attackers try to keep ball while defenders challenge actively to win possession.",
      whyImportant: "Develop defense",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-014",
      title: "Small-Sided Game (4v4)",
      type: "Fun Game",
      ageRange: "u8, u9, u10, u11",
      duration: "Develop skills",
      description: "Divide players into teams of 4 and have them play scrimmage. Adds a bit more complexity than 3v3 while preserving touch counts.",
      whyImportant: "Develop skills",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-015",
      title: "Finishing in the Box",
      type: "Shooting",
      ageRange: "u10, u11, u12",
      duration: "Improve shooting",
      description: "Divide players into pairs and have them practice finishing crosses inside the penalty box. Keep keeper active to test shot placement.",
      whyImportant: "Improve shooting",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-016",
      title: "Ball Control",
      type: "Dribbling",
      ageRange: "u6, u7, u8",
      duration: "Teach play",
      description: "Use smaller balls; dribble through cones focusing on keeping the ball within a close radius and utilizing all parts of the boot.",
      whyImportant: "Helps play",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/eD2T5GXeaYE?si=opjNrZueisfjtQWB",
      imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-017",
      title: "Passing",
      type: "Dribbling",
      ageRange: "u10, u11, u12",
      duration: "Teach play",
      description: "Practice passing with a teammate, focusing on foot position and body angling. Rotate pairs to test different passing distances.",
      whyImportant: "Helps play",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/_lexjndYGc?si=5gwEWH8zsoJr0PRe",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-018",
      title: "Dribbling",
      type: "Dribbling",
      ageRange: "u8, u10",
      duration: "Teach and train",
      description: "Use smaller balls and focus on changing direction rapidly when facing a direct defender. Practice dummy moves and step-overs.",
      whyImportant: "Enhances skill",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-019",
      title: "Teamwork",
      type: "Dribbling",
      ageRange: "u6, u7, u8",
      duration: "Teach play",
      description: "Practice teamwork drills, focusing on passing, overlapping runs, and communicating where the space is.",
      whyImportant: "Builds cohesion",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/Kb58F3r_TQM?si=cIPYqan_YamSHg4l",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-020",
      title: "Area Responsibilities",
      type: "Dribbling",
      ageRange: "u8, u9, u10",
      duration: "Teach play",
      description: "Practice positional drills, focusing on maintaining defense area and staying compact when opponent has ball.",
      whyImportant: "Strengthen defense",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/E5kGtr2K61Y?si=pd0sQQTVcS_5f82_",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-021",
      title: "Rotations",
      type: "Dribbling",
      ageRange: "u10, u11, u12",
      duration: "Train players",
      description: "Rotation relay; “switch and cover” - players dribble to a cone, perform a turn, and pass back.",
      whyImportant: "Improves agility",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/oclFQQgXLCQ?si=7U_taGSXzMfJ8Ox5",
      imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-022",
      title: "Defending Set Pieces",
      type: "Dribbling",
      ageRange: "u6, u7, u8",
      duration: "Teach play",
      description: "Practice defending set pieces (corners, throw-ins), focusing on tracking runs, marking, and clearing the ball.",
      whyImportant: "Helps play",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/yRewtO19RQc?si=g5BvWEPbSOB5p",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-023",
      title: "Goalkeeping Fundamentals",
      type: "Dribbling",
      ageRange: "u10, u11, u12",
      duration: "Teach goal",
      description: "Practice basic goalkeeping drills, focusing on catching, proper hand positioning (the 'W'), diving safely, and distribution.",
      whyImportant: "Helps keepers",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/k1i6kWxI2Ls?si=9-8xBtLPGRNum6af",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-024",
      title: "Small Sided Games",
      type: "Dribbling",
      ageRange: "u8, u9, u10",
      duration: "Encourage play",
      description: "Practice small sided games, focusing on decision making, switching fields, and integrating skills learned.",
      whyImportant: "Integrates skill",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/XWIP0VbJtKs?si=AsyCw-chEo3pPLYf",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-025",
      title: "Game Situations",
      type: "Dribbling",
      ageRange: "u8, u9, u10",
      duration: "Teach play",
      description: "Practice game situation drills (throw-ins, goal kicks, restarts), focusing on soccer rules and early team shape.",
      whyImportant: "Builds match",
      pointers: "Verify appropriate player posture.; Maintain high energy practice.",
      youtubeUrl: "https://youtu.be/zUo_FMbox5I?si=UngFMS8V8iJ8thaz",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    }
  ],
  blogs: [
    {
      id: "blog-001",
      title: "Understanding 'Play-Practice-Play' Coaching Methodology",
      author: "Director Dave",
      role: "AYSA Director of Coaching",
      date: "June 18, 2026",
      content: "US Soccer highly recommends the Play-Practice-Play structure. It kicks off with a small-sided game ('Play') right as players arrive. This stimulates engagement and builds game context. Then, move to a focused activity ('Practice') to develop a specific theme like passing or spatial awareness. Finally, finish with a scrimmage ('Play') without coach interruptions. This is particularly effective for volunteer coaches, as it gets players moving immediately."
    },
    {
      id: "blog-002",
      title: "Sideline Etiquette: Partnering with Rec & Travel Parents",
      author: "Coach Sarah",
      role: "U12 Travel Lead",
      date: "May 25, 2026",
      content: "Sideline behavior impacts young players significantly. Before the season starts, hold a parent meeting. Establish clear expectations: parents cheer, coaches coach, and referees manage the game. Provide them with the '24-hour rule' for disputes—encourage them to wait a day before sending feedback about games. Sideline positivity reduces stress and promotes creativity on the ball."
    },
    {
      id: "blog-003",
      title: "Warmup Templates: Effective 10-Minute Routines",
      author: "Coach Miller",
      role: "PeeWee & U8 Coordinator",
      date: "April 12, 2026",
      content: "Static stretching is out for youth sports. Dynamic movements are in! Design warmups that incorporate the ball immediately. Dynamic tags, body circles, and gates passing get the heart rate up, lubricate joints, and improve coordination. Try to ensure each child gets at least 200 touches in the first 10 minutes of training."
    }
  ],
  practicePlans: [
    { name: "U6 Ball Comfort & Dribbling Plan", ageGroup: "U6", link: "#", author: "Coach Miller" },
    { name: "U8 Gate Passing & Movement Session", ageGroup: "U8", link: "#", author: "Coach Miller" },
    { name: "U10 Defensive Positioning & Jockeying", ageGroup: "U10", link: "#", author: "Director Dave" },
    { name: "U12 Counter-Attack Transition Play", ageGroup: "U12", link: "#", author: "Coach Sarah" },
    { name: "U14 Shielding & Attacking Triangles", ageGroup: "U13 & Older", link: "#", author: "Director Dave" }
  ],
  complaints: [
    {
      id: "INC-1024",
      type: "referee",
      subject: "U10 Travel Ref Verbal Harassment",
      date: "2026-06-20",
      reporter: "Coach Mike Kelly (Amherst United)",
      opponentCommunity: "Lorain Soccer Club",
      details: "During the second half, the center referee yelled aggressively at our U10 players, telling them to 'shut up and run' when they asked for clarification on a handball. The tone was completely unprofessional and frightened two players.",
      status: "assigned"
    },
    {
      id: "INC-1025",
      type: "parents",
      subject: "Sideline Heckling at U8 Rec Match",
      date: "2026-06-21",
      reporter: "Coach Brenda Foster",
      opponentCommunity: "Elyria Rec League",
      details: "Two parents from the opposing team stood behind my team's bench and repeatedly made negative comments about my players' skills and physical size. I asked them to move, but they refused. Field commissioner had to step in.",
      status: "new"
    }
  ],
  tasks: [
    {
      id: "task-001",
      title: "Contact Lorain Referee Coordinator regarding Incident INC-1024",
      status: "todo",
      tag: "ref",
      assignee: "John S. (Ref Rep)",
      dueDate: "2026-06-25"
    },
    {
      id: "task-002",
      title: "Draft community-wide reminder newsletter on parent code of conduct",
      status: "in-progress",
      tag: "general",
      assignee: "Sarah L. (Secretary)",
      dueDate: "2026-06-30"
    },
    {
      id: "task-003",
      title: "Procure replacement goals for Oberlin field 3",
      status: "done",
      tag: "general",
      assignee: "Dave M. (Equipment)",
      dueDate: "2026-06-15"
    }
  ]
};

// Database class helper
class SoccerDb {
  constructor() {
    this.key = "soccercoach_hub_db_v3";
    this.init();
  }

  init() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify(DEFAULT_DATABASE));
    }
  }

  getData() {
    try {
      return JSON.parse(localStorage.getItem(this.key));
    } catch (e) {
      console.error("Error reading database from localStorage, resetting", e);
      localStorage.setItem(this.key, JSON.stringify(DEFAULT_DATABASE));
      return DEFAULT_DATABASE;
    }
  }

  saveData(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  resetToDefault() {
    localStorage.setItem(this.key, JSON.stringify(DEFAULT_DATABASE));
    return DEFAULT_DATABASE;
  }
}

// Global DB instance
const db = new SoccerDb();

// State Variables
let currentView = "handbook";
let selectedAgeGroupId = "u6";
let selectedDrillId = null;
let drillFilterAge = "all";
let drillFilterType = "all";
let searchDrillQuery = "";
let isBoardAuthenticated = localStorage.getItem("board_admin_logged_in") === "true";
let isGoogleSynced = false;
const boardPasscode = "board123";

// Admin Authentication Interceptor
function checkAdminAuth(message = "This action requires Administrative authorization.") {
  if (isBoardAuthenticated) return true;
  const code = prompt(`${message}\n\nPlease enter the board passcode:`);
  if (code === boardPasscode) {
    isBoardAuthenticated = true;
    localStorage.setItem("board_admin_logged_in", "true");
    addSystemLog("Board administrator authenticated via prompt.");
    renderBoardPortal(); 
    renderHandbook();    
    updateAdminLockIcons();
    if (selectedDrillId) {
      viewDrillDetail(selectedDrillId); 
    }
    return true;
  }
  alert("Invalid passcode. Access Denied.");
  return false;
}

// Update lock icon states on static buttons
function updateAdminLockIcons() {
  const btnAddAge = document.getElementById("btn-add-agegroup");
  const btnCreateDrill = document.getElementById("btn-create-drill");
  
  if (btnAddAge) {
    btnAddAge.innerHTML = isBoardAuthenticated ? 
      '<i class="fas fa-plus"></i> Add Age Category' : 
      '<i class="fas fa-lock"></i> Add Age Category (Admin)';
  }
  if (btnCreateDrill) {
    btnCreateDrill.innerHTML = isBoardAuthenticated ? 
      '<i class="fas fa-plus"></i> Create Drill' : 
      '<i class="fas fa-lock"></i> Create Drill (Admin)';
  }
}

// UI Logs Array
let systemLogs = [
  { time: "16:58:00", text: "SoccerCoach PWA Database Loaded." },
  { time: "16:58:02", text: "Ready for operations." }
];

// Log to Board Widget Console
function addSystemLog(text) {
  const now = new Date();
  const timeStr = now.toTimeString().split(' ')[0];
  systemLogs.unshift({ time: timeStr, text: text });
  // Keep last 30 logs
  if (systemLogs.length > 30) systemLogs.pop();
  renderLogs();
}

// Navigation & Tabs
function setupNavigation() {
  const mobileButtons = document.querySelectorAll(".mobile-nav-item");
  const desktopButtons = document.querySelectorAll(".nav-tab-btn");

  function changeView(viewId) {
    currentView = viewId;
    
    // Update active tab buttons
    mobileButtons.forEach(btn => {
      if (btn.dataset.view === viewId) btn.classList.add("active");
      else btn.classList.remove("active");
    });

    desktopButtons.forEach(btn => {
      if (btn.dataset.view === viewId) btn.classList.add("active");
      else btn.classList.remove("active");
    });

    // Hide/show views
    document.querySelectorAll(".view-section").forEach(view => {
      view.classList.remove("active");
    });

    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) targetView.classList.add("active");

    // Hide drill detail view when returning to drills list
    if (viewId === "drills") {
      selectedDrillId = null;
      renderDrills();
    }

    // Special checks for board portal
    if (viewId === "board") {
      renderBoardPortal();
    }
  }

  mobileButtons.forEach(btn => {
    btn.addEventListener("click", () => changeView(btn.dataset.view));
  });

  desktopButtons.forEach(btn => {
    btn.addEventListener("click", () => changeView(btn.dataset.view));
  });

  // Handle drill detail modal closing or returning
  window.closeDrillDetail = function() {
    selectedDrillId = null;
    document.getElementById("drills-list-container").style.display = "block";
    document.getElementById("drill-detail-container").style.display = "none";
  };
}

// Layout Switcher (Mobile Mockup vs Full Desktop Portal)
function setupLayoutSwitcher() {
  const btnMobile = document.getElementById("layout-mobile");
  const btnDesktop = document.getElementById("layout-desktop");
  const mobileWrapper = document.getElementById("mobile-view-wrapper");
  const desktopWrapper = document.getElementById("desktop-view-wrapper");
  const appViews = document.getElementById("app-views");
  const mobileTarget = document.getElementById("mobile-view-content-target");
  const desktopTarget = document.getElementById("desktop-view-content-target");

  // Move views to desktop on initialization
  if (desktopTarget && appViews) {
    desktopTarget.appendChild(appViews);
  }

  btnMobile.addEventListener("click", () => {
    btnMobile.classList.add("active");
    btnDesktop.classList.remove("active");
    mobileWrapper.style.display = "block";
    desktopWrapper.style.display = "none";
    if (mobileTarget && appViews) {
      mobileTarget.appendChild(appViews);
    }
    addSystemLog("Switched display layout to Mobile Frame Mockup.");
  });

  btnDesktop.addEventListener("click", () => {
    btnDesktop.classList.add("active");
    btnMobile.classList.remove("active");
    desktopWrapper.style.display = "flex";
    mobileWrapper.style.display = "none";
    if (desktopTarget && appViews) {
      desktopTarget.appendChild(appViews);
    }
    addSystemLog("Switched display layout to Desktop Portal.");
  });

  // Light/Dark Theme Switcher
  const btnTheme = document.getElementById("theme-toggle");
  btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    btnTheme.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    addSystemLog(`Toggled UI Theme to: ${isLight ? "Light Mode" : "Dark Mode"}`);
  });
}

// ----------------------------------------------------
// 1. AGE RULES HANDBOOK LOGIC
// ----------------------------------------------------
function renderHandbook() {
  const data = db.getData();
  const listContainerMobile = document.getElementById("handbook-list-mobile");
  const listContainerDesktop = document.getElementById("handbook-list-desktop");
  
  // Render sidebar selections
  let listHtml = "";
  data.ageGroups.forEach(group => {
    listHtml += `
      <button class="sidebar-item ${group.id === selectedAgeGroupId ? 'active' : ''}" onclick="selectAgeGroup('${group.id}')">
        <span>${group.name}</span>
        <div class="sidebar-indicator"></div>
      </button>
    `;
  });
  
  if (listContainerMobile) listContainerMobile.innerHTML = listHtml;
  if (listContainerDesktop) listContainerDesktop.innerHTML = listHtml;
  
  // Render details card
  const selectedGroup = data.ageGroups.find(g => g.id === selectedAgeGroupId);
  const detailContainerMobile = document.getElementById("handbook-details-mobile");
  const detailContainerDesktop = document.getElementById("handbook-details-desktop");
  
  if (!selectedGroup) return;

  const detailHtml = `
    <div class="details-header">
      <div>
        <h2>${selectedGroup.name} Rules</h2>
        <p>Official specifications, roster sizes, and field guidelines.</p>
      </div>
      <div class="action-row-buttons">
        <button class="btn btn-secondary btn-small" onclick="openEditAgeGroupModal('${selectedGroup.id}')">
          <i class="fas fa-${isBoardAuthenticated ? 'edit' : 'lock'}"></i> ${isBoardAuthenticated ? 'Edit Spec' : 'Edit Spec (Locked)'}
        </button>
        <button class="btn btn-danger btn-small" onclick="deleteAgeGroup('${selectedGroup.id}')">
          <i class="fas fa-${isBoardAuthenticated ? 'trash' : 'lock'}"></i> Delete
        </button>
      </div>
    </div>
    <div class="spec-grid">
      <div class="spec-card match-format">
        <div class="spec-label"><i class="fas fa-users"></i> Match Format</div>
        <div class="spec-value">${selectedGroup.matchFormat}</div>
      </div>
      <div class="spec-card ball-size">
        <div class="spec-label"><i class="fas fa-futbol"></i> Ball Size</div>
        <div class="spec-value">${selectedGroup.ballSize}</div>
      </div>
      <div class="spec-card roster-size">
        <div class="spec-label"><i class="fas fa-clipboard-list"></i> Roster Size</div>
        <div class="spec-value">${selectedGroup.rosterSize}</div>
      </div>
      <div class="spec-card match-duration">
        <div class="spec-label"><i class="fas fa-clock"></i> Match Duration</div>
        <div class="spec-value">${selectedGroup.matchDuration}</div>
      </div>
      <div class="spec-card field-dimension">
        <div class="spec-label"><i class="fas fa-vector-square"></i> Field Dimension</div>
        <div class="spec-value">${selectedGroup.fieldDimension}</div>
      </div>
      <div class="spec-card goalkeeper">
        <div class="spec-label"><i class="fas fa-hands"></i> Goalkeeper Status</div>
        <div class="spec-value">${selectedGroup.goalkeeper}</div>
      </div>
      <div class="spec-card offsides">
        <div class="spec-label"><i class="fas fa-flag"></i> Offside Regulation</div>
        <div class="spec-value">${selectedGroup.offsides}</div>
      </div>
      <div class="spec-card heading">
        <div class="spec-label"><i class="fas fa-exclamation-triangle"></i> Heading Restrictions</div>
        <div class="spec-value">${selectedGroup.heading}</div>
      </div>
      <div class="spec-card notes" style="border-left-color: var(--accent); grid-column: 1 / -1;">
        <div class="spec-label"><i class="fas fa-sticky-note"></i> League Guidance & Developmental Notes</div>
        <div class="spec-value" style="font-size: 13px; font-weight: 500; line-height: 1.5; color: var(--text-muted); margin-top: 4px;">${selectedGroup.notes || 'No developmental notes listed.'}</div>
      </div>
    </div>
  `;

  if (detailContainerMobile) detailContainerMobile.innerHTML = detailHtml;
  if (detailContainerDesktop) detailContainerDesktop.innerHTML = detailHtml;
  renderComparisonTable();
  updateAdminLockIcons();
}

window.toggleHandbookView = function(viewType) {
  const cardsBtn = document.getElementById("handbook-view-cards-btn");
  const tableBtn = document.getElementById("handbook-view-table-btn");
  const cardsView = document.getElementById("handbook-cards-view");
  const tableView = document.getElementById("handbook-table-view");
  
  if (!cardsBtn || !tableBtn || !cardsView || !tableView) return;
  
  if (viewType === 'cards') {
    cardsBtn.classList.add("active");
    tableBtn.classList.remove("active");
    cardsView.style.display = "flex";
    tableView.style.display = "none";
  } else {
    tableBtn.classList.add("active");
    cardsBtn.classList.remove("active");
    cardsView.style.display = "none";
    tableView.style.display = "block";
    renderComparisonTable();
  }
  addSystemLog(`Switched Handbook View to: ${viewType === 'cards' ? 'Detailed Cards' : 'Comparison Matrix'}`);
};

function renderComparisonTable() {
  const data = db.getData();
  const tbody = document.getElementById("comparison-table-body");
  if (!tbody) return;
  
  let html = "";
  data.ageGroups.forEach(group => {
    html += `
      <tr>
        <td>${group.name}</td>
        <td>${group.matchFormat}</td>
        <td>${group.rosterSize}</td>
        <td>${group.ballSize}</td>
        <td>${group.fieldDimension}</td>
        <td>${group.matchDuration}</td>
        <td>${group.offsides}</td>
        <td>${group.heading}</td>
        <td>${group.goalkeeper}</td>
        <td class="notes-cell">${group.notes || 'No developmental notes.'}</td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

window.selectAgeGroup = function(groupId) {
  selectedAgeGroupId = groupId;
  renderHandbook();
};

window.openAddAgeGroupModal = function() {
  if (!checkAdminAuth("Only board administrators can add new age categories.")) return;
  document.getElementById("agegroup-modal-title").innerText = "Add Age Category";
  document.getElementById("agegroup-id-input").value = "";
  document.getElementById("agegroup-form").reset();
  openModal("modal-agegroup");
};

window.openEditAgeGroupModal = function(groupId) {
  if (!checkAdminAuth("Only board administrators can edit age group specifications.")) return;
  const data = db.getData();
  const group = data.ageGroups.find(g => g.id === groupId);
  if (!group) return;

  document.getElementById("agegroup-modal-title").innerText = `Edit ${group.name} Specs`;
  document.getElementById("agegroup-id-input").value = group.id;
  document.getElementById("agegroup-name").value = group.name;
  document.getElementById("agegroup-format").value = group.matchFormat;
  document.getElementById("agegroup-ball").value = group.ballSize;
  document.getElementById("agegroup-roster").value = group.rosterSize;
  document.getElementById("agegroup-duration").value = group.matchDuration;
  document.getElementById("agegroup-field").value = group.fieldDimension;
  document.getElementById("agegroup-gk").value = group.goalkeeper;
  document.getElementById("agegroup-offside").value = group.offsides;
  document.getElementById("agegroup-heading").value = group.heading;
  document.getElementById("agegroup-notes").value = group.notes || "";

  openModal("modal-agegroup");
};

window.saveAgeGroup = function(e) {
  e.preventDefault();
  const data = db.getData();
  const idInput = document.getElementById("agegroup-id-input").value;
  const name = document.getElementById("agegroup-name").value;
  
  const groupData = {
    name: name,
    matchFormat: document.getElementById("agegroup-format").value,
    ballSize: document.getElementById("agegroup-ball").value,
    rosterSize: document.getElementById("agegroup-roster").value,
    matchDuration: document.getElementById("agegroup-duration").value,
    fieldDimension: document.getElementById("agegroup-field").value,
    goalkeeper: document.getElementById("agegroup-gk").value,
    offsides: document.getElementById("agegroup-offside").value,
    heading: document.getElementById("agegroup-heading").value,
    notes: document.getElementById("agegroup-notes").value || ""
  };

  if (idInput) {
    // Edit Mode
    const index = data.ageGroups.findIndex(g => g.id === idInput);
    if (index !== -1) {
      data.ageGroups[index] = { ...data.ageGroups[index], ...groupData };
      addSystemLog(`Modified age group specifications: ${name}`);
    }
  } else {
    // Add Mode
    const newId = "u-" + name.replace(/\s+/g, '-').toLowerCase();
    const newGroup = { id: newId, ...groupData };
    data.ageGroups.push(newGroup);
    selectedAgeGroupId = newId;
    addSystemLog(`Created new age category: ${name}`);
  }

  db.saveData(data);
  closeModal("modal-agegroup");
  renderHandbook();
  updateAgeSelectors(); // update drop downs across pages
};

window.deleteAgeGroup = function(groupId) {
  if (!checkAdminAuth("Only board administrators can delete age categories.")) return;
  if (!confirm("Are you sure you want to delete this age category and all its rule specs?")) return;
  const data = db.getData();
  const index = data.ageGroups.findIndex(g => g.id === groupId);
  if (index !== -1) {
    const name = data.ageGroups[index].name;
    data.ageGroups.splice(index, 1);
    addSystemLog(`Deleted age category: ${name}`);
    
    // Update active selection
    if (data.ageGroups.length > 0) {
      selectedAgeGroupId = data.ageGroups[0].id;
    } else {
      selectedAgeGroupId = "";
    }
    
    db.saveData(data);
    renderHandbook();
    updateAgeSelectors();
  }
};

window.restoreHandbookDefaults = function() {
  if (!checkAdminAuth("Only board administrators can restore default rules.")) return;
  if (!confirm("Reset all specifications, rules and handbook entries back to league default values?")) return;
  const data = db.resetToDefault();
  selectedAgeGroupId = "u6";
  db.saveData(data);
  renderHandbook();
  renderDrills();
  updateAgeSelectors();
  addSystemLog("Restored database to default rules and values.");
};

// Update dropdown listings for adding drills etc.
function updateAgeSelectors() {
  const data = db.getData();
  const ageSelect = document.getElementById("drill-ageRange");
  if (ageSelect) {
    let optionsHtml = '<option value="all">Any Age</option>';
    data.ageGroups.forEach(g => {
      optionsHtml += `<option value="${g.id}">${g.name}</option>`;
    });
    ageSelect.innerHTML = optionsHtml;
  }
}

// ----------------------------------------------------
// 2. COACHING DRILLS LIBRARY LOGIC
// ----------------------------------------------------
function renderDrills() {
  const data = db.getData();
  const container = document.getElementById("drills-grid-container");
  if (!container) return;

  // Filter logic
  let filteredDrills = data.drills.filter(drill => {
    // Search Query filter
    const matchesSearch = drill.title.toLowerCase().includes(searchDrillQuery) || 
                          drill.type.toLowerCase().includes(searchDrillQuery) || 
                          drill.description.toLowerCase().includes(searchDrillQuery);
    
    // Age Filter
    let matchesAge = true;
    if (drillFilterAge !== "all") {
      matchesAge = drill.ageRange.toLowerCase().includes(drillFilterAge);
    }

    // Drill Type Filter
    let matchesType = true;
    if (drillFilterType !== "all") {
      matchesType = drill.type.toLowerCase() === drillFilterType.toLowerCase();
    }

    return matchesSearch && matchesAge && matchesType;
  });

  // Render cards
  if (filteredDrills.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fas fa-search-minus"></i>
        <h3>No drills found</h3>
        <p>Try clearing filters or search parameters, or click "Create Drill" to add one.</p>
      </div>
    `;
    return;
  }

  let html = "";
  filteredDrills.forEach(drill => {
    // Helper to extract a clean age range label (e.g., u6-u10 -> U6-U10)
    const ageLabel = drill.ageRange.toUpperCase();
    
    html += `
      <div class="drill-card" onclick="viewDrillDetail('${drill.id}')">
        <div class="drill-image-wrapper">
          <img class="drill-image" src="${drill.imageUrl || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80'}" alt="${drill.title}" />
          <div class="drill-badge-age">${ageLabel}</div>
        </div>
        <div class="drill-card-body">
          <div class="drill-type">${drill.type}</div>
          <h3 class="drill-title">${drill.title}</h3>
          <p class="drill-desc-preview">${drill.description}</p>
          <div class="drill-card-footer">
            <span class="drill-footer-info"><i class="fas fa-clock"></i> ${drill.duration || '15 mins'}</span>
            <span class="drill-footer-link">Details <i class="fas fa-chevron-right"></i></span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  
  // Render total badge count (matching Screenshot 2: Library [25])
  const drillCounts = document.querySelectorAll(".drills-count-badge");
  drillCounts.forEach(el => {
    el.innerText = data.drills.length;
  });
  updateAdminLockIcons();
}

window.viewDrillDetail = function(drillId) {
  selectedDrillId = drillId;
  const data = db.getData();
  const drill = data.drills.find(d => d.id === drillId);
  if (!drill) return;

  document.getElementById("drills-list-container").style.display = "none";
  const detailContainer = document.getElementById("drill-detail-container");
  detailContainer.style.display = "block";

  // Build youtube embed iframe
  let videoEmbedHtml = "";
  if (drill.youtubeUrl) {
    let cleanEmbedUrl = drill.youtubeUrl;
    // Format youtube URLs to embed format if user copied regular watch link
    if (cleanEmbedUrl.includes("watch?v=")) {
      const vidId = cleanEmbedUrl.split("watch?v=")[1].split("&")[0];
      cleanEmbedUrl = `https://www.youtube.com/embed/${vidId}`;
    } else if (cleanEmbedUrl.includes("youtu.be/")) {
      const vidId = cleanEmbedUrl.split("youtu.be/")[1].split("?")[0];
      cleanEmbedUrl = `https://www.youtube.com/embed/${vidId}`;
    }
    
    videoEmbedHtml = `
      <div class="video-iframe-wrapper">
        <iframe src="${cleanEmbedUrl}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    `;
  } else {
    videoEmbedHtml = `
      <div class="no-video-placeholder">
        <i class="fab fa-youtube" style="font-size: 38px; color: #ef4444;"></i>
        <p>No video walkthrough attached to this drill yet.</p>
        <button class="btn btn-secondary btn-small" onclick="openEditDrillModal('${drill.id}')"><i class="fas fa-plus"></i> Add YouTube Walkthrough</button>
      </div>
    `;
  }

  detailContainer.innerHTML = `
    <div class="drill-detail-view">
      <img class="detail-banner-img" src="${drill.imageUrl || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80'}" alt="${drill.title}">
      
      <div class="detail-body-container">
        <button class="btn btn-secondary btn-small" style="margin-bottom: 20px;" onclick="closeDrillDetail()">
          <i class="fas fa-arrow-left"></i> Back to Drills Library
        </button>

        <div class="detail-meta-line">
          <div class="detail-meta-left">
            <span class="detail-meta-pill skill">${drill.type} Drill</span>
            <span class="detail-meta-pill age">Ages ${drill.ageRange.toUpperCase()}</span>
            <span class="detail-meta-pill age" style="background: rgba(16,185,129,0.1); color: var(--success);"><i class="fas fa-clock"></i> ${drill.duration || '15 mins'}</span>
          </div>
          <div class="action-row-buttons">
            <button class="btn btn-primary btn-small" onclick="openEditDrillModal('${drill.id}')">
              <i class="fas fa-${isBoardAuthenticated ? 'edit' : 'lock'}"></i> ${isBoardAuthenticated ? 'Edit Drill' : 'Edit Drill (Locked)'}
            </button>
            <button class="btn btn-danger btn-small" onclick="deleteDrill('${drill.id}')">
              <i class="fas fa-${isBoardAuthenticated ? 'trash' : 'lock'}"></i> Delete
            </button>
          </div>
        </div>

        <div class="detail-title-section">
          <h1>${drill.title}</h1>
        </div>

        <div class="detail-desc">
          <p>${drill.description}</p>
        </div>

        <div class="detail-grid-sections">
          <div class="info-section-block">
            <h3 class="why"><i class="fas fa-question-circle"></i> Why it helps</h3>
            <p>${drill.whyImportant || 'No developmental reasons listed yet.'}</p>
          </div>
          <div class="info-section-block">
            <h3 class="tips"><i class="fas fa-lightbulb"></i> Coaching Pointers</h3>
            <p>${drill.pointers || 'No pointers listed yet.'}</p>
          </div>
        </div>

        <div class="video-container-section">
          <h3><i class="fab fa-youtube"></i> Video Walkthrough & Drills Tutorial</h3>
          ${videoEmbedHtml}
        </div>
      </div>
    </div>
  `;
};

window.openAddDrillModal = function() {
  if (!checkAdminAuth("Only board administrators can create training drills.")) return;
  document.getElementById("drill-modal-title").innerText = "Add Training Drill";
  document.getElementById("drill-id-input").value = "";
  document.getElementById("drill-form").reset();
  openModal("modal-drill");
};

window.openEditDrillModal = function(drillId) {
  if (!checkAdminAuth("Only board administrators can edit training drills.")) return;
  const data = db.getData();
  const drill = data.drills.find(d => d.id === drillId);
  if (!drill) return;

  document.getElementById("drill-modal-title").innerText = `Edit Drill: ${drill.title}`;
  document.getElementById("drill-id-input").value = drill.id;
  document.getElementById("drill-title").value = drill.title;
  document.getElementById("drill-type").value = drill.type;
  document.getElementById("drill-ageRange").value = drill.ageRange;
  document.getElementById("drill-duration").value = drill.duration || "15 mins";
  document.getElementById("drill-imageUrl").value = drill.imageUrl || "";
  document.getElementById("drill-youtubeUrl").value = drill.youtubeUrl || "";
  document.getElementById("drill-description").value = drill.description;
  document.getElementById("drill-whyImportant").value = drill.whyImportant || "";
  document.getElementById("drill-pointers").value = drill.pointers || "";

  openModal("modal-drill");
};

window.saveDrill = function(e) {
  e.preventDefault();
  const data = db.getData();
  const idInput = document.getElementById("drill-id-input").value;
  const title = document.getElementById("drill-title").value;
  
  const drillData = {
    title: title,
    type: document.getElementById("drill-type").value,
    ageRange: document.getElementById("drill-ageRange").value,
    duration: document.getElementById("drill-duration").value,
    imageUrl: document.getElementById("drill-imageUrl").value || "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: document.getElementById("drill-youtubeUrl").value,
    description: document.getElementById("drill-description").value,
    whyImportant: document.getElementById("drill-whyImportant").value,
    pointers: document.getElementById("drill-pointers").value
  };

  if (idInput) {
    // Edit
    const index = data.drills.findIndex(d => d.id === idInput);
    if (index !== -1) {
      data.drills[index] = { ...data.drills[index], ...drillData };
      addSystemLog(`Modified training drill: ${title}`);
    }
  } else {
    // Add
    const newId = "drill-" + Date.now();
    data.drills.push({ id: newId, ...drillData });
    addSystemLog(`Created new training drill: ${title}`);
  }

  db.saveData(data);
  closeModal("modal-drill");
  
  if (selectedDrillId) {
    // If we were inside the detail view, reload it
    viewDrillDetail(idInput || data.drills[data.drills.length - 1].id);
  } else {
    renderDrills();
  }
};

window.deleteDrill = function(drillId) {
  if (!checkAdminAuth("Only board administrators can delete training drills.")) return;
  if (!confirm("Are you sure you want to delete this drill from the library?")) return;
  const data = db.getData();
  const index = data.drills.findIndex(d => d.id === drillId);
  if (index !== -1) {
    const title = data.drills[index].title;
    data.drills.splice(index, 1);
    addSystemLog(`Deleted drill: ${title}`);
    db.saveData(data);
    closeDrillDetail();
    renderDrills();
  }
};

// Filters setup
function setupDrillFilters() {
  const searchInput = document.getElementById("drill-search");
  const ageSelect = document.getElementById("drill-filter-age");
  const typeSelect = document.getElementById("drill-filter-type");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchDrillQuery = e.target.value.toLowerCase();
      renderDrills();
    });
  }

  if (ageSelect) {
    ageSelect.addEventListener("change", (e) => {
      drillFilterAge = e.target.value;
      renderDrills();
    });
  }

  if (typeSelect) {
    typeSelect.addEventListener("change", (e) => {
      drillFilterType = e.target.value;
      renderDrills();
    });
  }
}

// ----------------------------------------------------
// 3. COACHES' LOUNGE (BLOGS & PRACTICE PLANS)
// ----------------------------------------------------
function renderLounge() {
  const data = db.getData();
  const blogList = document.getElementById("blog-posts-container");
  const plansList = document.getElementById("practice-plans-container");

  if (blogList) {
    let blogHtml = "";
    data.blogs.forEach(blog => {
      blogHtml += `
        <article class="blog-card">
          <div class="blog-meta">
            <div class="author-avatar">${blog.author.substring(0, 2).toUpperCase()}</div>
            <div>
              <strong>${blog.author}</strong> &bull; <span class="text-muted">${blog.role}</span> &bull; <span>${blog.date}</span>
            </div>
          </div>
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-body">${blog.content}</p>
        </article>
      `;
    });
    blogList.innerHTML = blogHtml;
  }

  if (plansList) {
    let plansHtml = "";
    data.practicePlans.forEach(plan => {
      plansHtml += `
        <a href="${plan.link}" class="plan-item" onclick="alert('Downloading practice template: ${plan.name} - ${plan.ageGroup}')">
          <div class="plan-meta">
            <span class="plan-age">${plan.ageGroup} Group</span>
            <span class="text-muted">By ${plan.author}</span>
          </div>
          <div class="plan-name">${plan.name}</div>
        </a>
      `;
    });
    plansList.innerHTML = plansHtml;
  }
}

window.openAddBlogModal = function() {
  document.getElementById("blog-form").reset();
  openModal("modal-blog");
};

window.saveBlog = function(e) {
  e.preventDefault();
  const data = db.getData();
  const title = document.getElementById("blog-title").value;
  const author = document.getElementById("blog-author").value;
  const content = document.getElementById("blog-content").value;
  
  const newBlog = {
    id: "blog-" + Date.now(),
    title: title,
    author: author,
    role: "Community Coach",
    date: new Date().toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' }),
    content: content
  };

  data.blogs.unshift(newBlog);
  db.saveData(data);
  closeModal("modal-blog");
  renderLounge();
  addSystemLog(`Published new Coaches' Blog post: "${title}"`);
};

// ----------------------------------------------------
// 4. OFFICIAL COMPLAINT LOGGER
// ----------------------------------------------------
function setupComplaintForm() {
  const form = document.getElementById("ref-complaint-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = document.getElementById("complaint-type").value;
    const subject = document.getElementById("complaint-subject").value;
    const reporter = document.getElementById("complaint-reporter").value;
    const opponent = document.getElementById("complaint-opponent").value;
    const details = document.getElementById("complaint-details").value;

    const data = db.getData();
    const newId = "INC-" + Math.floor(1000 + Math.random() * 9000);

    const newComplaint = {
      id: newId,
      type: type,
      subject: subject,
      date: new Date().toISOString().split('T')[0],
      reporter: reporter,
      opponentCommunity: opponent,
      details: details,
      status: "new"
    };

    // 1. Save Complaint
    data.complaints.unshift(newComplaint);
    
    // 2. Automatically generate Board Task for representatives to investigate
    const newBoardTask = {
      id: "task-" + Date.now(),
      title: `Investigate: ${subject} (${newId})`,
      status: "todo",
      tag: type === "referee" ? "ref" : "complaint",
      assignee: "Unassigned (Review Required)",
      dueDate: new Date(Date.now() + 5*24*60*60*1000).toISOString().split('T')[0] // 5 days from now
    };
    data.tasks.push(newBoardTask);

    db.saveData(data);
    form.reset();

    // Show dynamic success banner
    const alertSuccess = document.getElementById("complaint-success-alert");
    if (alertSuccess) {
      alertSuccess.querySelector(".inc-id-placeholder").innerText = newId;
      alertSuccess.style.display = "block";
      setTimeout(() => {
        alertSuccess.style.display = "none";
      }, 7000);
    }

    addSystemLog(`New official complaint submitted: ${newId} regarding "${subject}". Task automatically assigned on board workflow.`);
  });
}

// ----------------------------------------------------
// 5. SECRET BOARD PORTAL & WORKFLOW WORKSPACE
// ----------------------------------------------------
function renderBoardPortal() {
  const loginSection = document.getElementById("board-login-section");
  const workspaceSection = document.getElementById("board-workspace-section");

  if (!isBoardAuthenticated) {
    loginSection.style.display = "block";
    workspaceSection.style.display = "none";
    return;
  }

  loginSection.style.display = "none";
  workspaceSection.style.display = "block";

  // Render components
  renderGoogleSyncState();
  renderKanbanBoard();
  renderBoardComplaints();
  renderLogs();
}

window.submitBoardLogin = function(e) {
  e.preventDefault();
  const passcode = document.getElementById("board-passcode-input").value;
  if (passcode === boardPasscode) {
    isBoardAuthenticated = true;
    localStorage.setItem("board_admin_logged_in", "true");
    document.getElementById("board-passcode-input").value = "";
    addSystemLog("Board administrator authenticated successfully.");
    renderBoardPortal();
    renderHandbook();
    renderDrills();
  } else {
    alert("Incorrect administrative security passcode. Access Denied.");
    addSystemLog("WARNING: Unauthorized Board access attempt failed.");
  }
};

window.logoutBoard = function() {
  isBoardAuthenticated = false;
  localStorage.setItem("board_admin_logged_in", "false");
  addSystemLog("Board administrator logged out.");
  renderBoardPortal();
  renderHandbook();
  renderDrills();
};

// Google Calendar Sync Simulation
window.syncGoogleAccounts = function() {
  const syncBtn = document.getElementById("btn-google-sync");
  if (!syncBtn) return;

  syncBtn.innerText = "Syncing Google Accounts...";
  syncBtn.disabled = true;

  // Simulate delay
  setTimeout(() => {
    isGoogleSynced = !isGoogleSynced;
    syncBtn.disabled = false;
    syncBtn.innerHTML = isGoogleSynced ? '<i class="fab fa-google"></i> Connected & Synced' : '<i class="fab fa-google"></i> Sync Google Account';
    
    if (isGoogleSynced) {
      addSystemLog("Synced Google Workspace: Fetched Google Calendar virtual meets and sheets data.");
    } else {
      addSystemLog("Google Account disconnected.");
    }
    renderGoogleSyncState();
  }, 1200);
};

function renderGoogleSyncState() {
  const indicator = document.getElementById("google-sync-indicator");
  const meetingsList = document.getElementById("google-meetings-list");
  
  if (!indicator || !meetingsList) return;

  if (isGoogleSynced) {
    indicator.className = "sync-status-indicator synced";
    indicator.innerHTML = `
      <span>Google Workspace</span>
      <span class="sync-pill">Connected & Synced</span>
    `;

    meetingsList.innerHTML = `
      <div class="meeting-item">
        <div class="meeting-details">
          <div class="meeting-title">LCSL Board League Monthly Meet</div>
          <div class="meeting-time">Today, 7:30 PM &bull; Google Meet</div>
        </div>
        <a href="https://meet.google.com" target="_blank" class="meeting-join-btn" onclick="addSystemLog('Joined Google Meet: Board Monthly Meet')">Join Meet</a>
      </div>
      <div class="meeting-item" style="border-left-color: var(--warning);">
        <div class="meeting-details">
          <div class="meeting-title">Referee Escalations & Conduct Panel</div>
          <div class="meeting-time">June 25, 6:00 PM &bull; Google Meet</div>
        </div>
        <a href="https://meet.google.com" target="_blank" class="meeting-join-btn" onclick="addSystemLog('Joined Google Meet: Referee Panel')">Join Meet</a>
      </div>
    `;
  } else {
    indicator.className = "sync-status-indicator";
    indicator.innerHTML = `
      <span>Google Workspace</span>
      <span class="sync-pill">Offline</span>
    `;
    meetingsList.innerHTML = `
      <div class="empty-state">
        <i class="fab fa-google"></i>
        <p>No active connections. Click the button above to sync Google Meet schedules and spreadsheets.</p>
      </div>
    `;
  }
}

// Kanban Task Board
function renderKanbanBoard() {
  const data = db.getData();
  const colTodo = document.getElementById("kanban-todo");
  const colProgress = document.getElementById("kanban-progress");
  const colDone = document.getElementById("kanban-done");

  if (!colTodo || !colProgress || !colDone) return;

  let htmlTodo = "", htmlProgress = "", htmlDone = "";
  let countTodo = 0, countProgress = 0, countDone = 0;

  data.tasks.forEach(task => {
    const cardHtml = `
      <div class="kanban-card" onclick="openEditTaskModal('${task.id}')">
        <span class="card-tag ${task.tag}">${task.tag.toUpperCase()}</span>
        <div class="card-title">${task.title}</div>
        <div class="card-meta">
          <span class="card-assignee"><i class="fas fa-user-circle"></i> ${task.assignee}</span>
          <span class="card-date"><i class="fas fa-calendar-alt"></i> ${task.dueDate}</span>
        </div>
      </div>
    `;

    if (task.status === "todo") {
      htmlTodo += cardHtml;
      countTodo++;
    } else if (task.status === "in-progress") {
      htmlProgress += cardHtml;
      countProgress++;
    } else if (task.status === "done") {
      htmlDone += cardHtml;
      countDone++;
    }
  });

  // Inject columns counts
  document.getElementById("count-todo").innerText = countTodo;
  document.getElementById("count-progress").innerText = countProgress;
  document.getElementById("count-done").innerText = countDone;

  colTodo.innerHTML = htmlTodo || '<div class="empty-state"><p>No tasks</p></div>';
  colProgress.innerHTML = htmlProgress || '<div class="empty-state"><p>No tasks</p></div>';
  colDone.innerHTML = htmlDone || '<div class="empty-state"><p>No tasks</p></div>';
}

window.openAddTaskModal = function() {
  document.getElementById("task-modal-title").innerText = "Assign Board Task";
  document.getElementById("task-id-input").value = "";
  document.getElementById("task-form").reset();
  
  // Set defaults
  document.getElementById("task-status").value = "todo";
  document.getElementById("task-tag").value = "general";
  document.getElementById("task-dueDate").value = new Date().toISOString().split('T')[0];

  // Hide delete button for new tasks
  document.getElementById("btn-delete-task").style.display = "none";
  openModal("modal-task");
};

window.openEditTaskModal = function(taskId) {
  const data = db.getData();
  const task = data.tasks.find(t => t.id === taskId);
  if (!task) return;

  document.getElementById("task-modal-title").innerText = "Edit Board Task";
  document.getElementById("task-id-input").value = task.id;
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-status").value = task.status;
  document.getElementById("task-tag").value = task.tag;
  document.getElementById("task-assignee").value = task.assignee;
  document.getElementById("task-dueDate").value = task.dueDate;

  document.getElementById("btn-delete-task").style.display = "inline-flex";
  openModal("modal-task");
};

window.saveTask = function(e) {
  e.preventDefault();
  const data = db.getData();
  const idInput = document.getElementById("task-id-input").value;
  const title = document.getElementById("task-title").value;
  const status = document.getElementById("task-status").value;

  const taskData = {
    title: title,
    status: status,
    tag: document.getElementById("task-tag").value,
    assignee: document.getElementById("task-assignee").value || "Unassigned",
    dueDate: document.getElementById("task-dueDate").value
  };

  if (idInput) {
    // Edit
    const index = data.tasks.findIndex(t => t.id === idInput);
    if (index !== -1) {
      data.tasks[index] = { ...data.tasks[index], ...taskData };
      addSystemLog(`Updated task: "${title}" to status [${status.toUpperCase()}]`);
    }
  } else {
    // Add
    const newId = "task-" + Date.now();
    data.tasks.push({ id: newId, ...taskData });
    addSystemLog(`Created board task: "${title}"`);
  }

  db.saveData(data);
  closeModal("modal-task");
  renderKanbanBoard();
};

window.deleteTask = function() {
  const idInput = document.getElementById("task-id-input").value;
  if (!idInput) return;
  if (!confirm("Are you sure you want to delete this task card?")) return;

  const data = db.getData();
  const index = data.tasks.findIndex(t => t.id === idInput);
  if (index !== -1) {
    const title = data.tasks[index].title;
    data.tasks.splice(index, 1);
    addSystemLog(`Deleted board task card: "${title}"`);
    db.saveData(data);
    closeModal("modal-task");
    renderKanbanBoard();
  }
};

// Render Referee and Parent complaints in Board area
function renderBoardComplaints() {
  const data = db.getData();
  const container = document.getElementById("board-complaints-container");
  if (!container) return;

  if (data.complaints.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-check-circle"></i>
        <p>No complaints reported. Clean sheet!</p>
      </div>
    `;
    return;
  }

  let html = "";
  data.complaints.forEach(item => {
    let btnEscalateHtml = "";
    if (item.status !== "escalated") {
      btnEscalateHtml = `
        <button class="btn btn-warning btn-small btn-primary" onclick="escalateComplaint('${item.id}')">
          <i class="fas fa-share-square"></i> Escalate to County
        </button>
      `;
    } else {
      btnEscalateHtml = `
        <span class="text-muted" style="font-size: 11px; font-weight: 700; color: var(--warning);"><i class="fas fa-exclamation-triangle"></i> Escalated to County League</span>
      `;
    }

    html += `
      <div class="complaint-item-card">
        <div class="complaint-header-row">
          <div class="complaint-header-left">
            <span class="complaint-type-badge ${item.type}">${item.type.toUpperCase()}</span>
            <span class="complaint-id">${item.id}</span>
          </div>
          <span class="complaint-date">${item.date}</span>
        </div>
        <div class="complaint-subject">${item.subject}</div>
        <p class="complaint-details-text">"${item.details}"</p>
        
        <div class="complaint-footer-meta">
          <div>
            <div class="complaint-reporter">Reporter: <span>${item.reporter}</span></div>
            <div class="text-muted" style="margin-top:2px;">Against: <strong>${item.opponentCommunity}</strong></div>
          </div>
          <div class="complaint-actions">
            ${btnEscalateHtml}
            <button class="btn btn-danger btn-small" onclick="deleteComplaint('${item.id}')"><i class="fas fa-trash-alt"></i> Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.escalateComplaint = function(complaintId) {
  const data = db.getData();
  const index = data.complaints.findIndex(c => c.id === complaintId);
  if (index !== -1) {
    data.complaints[index].status = "escalated";
    
    // Add a Board Task for county meeting agenda
    const newBoardTask = {
      id: "task-" + Date.now(),
      title: `Submit escalated Incident ${complaintId} at Lorain County Soccer meeting`,
      status: "todo",
      tag: "meeting",
      assignee: "Board President",
      dueDate: new Date(Date.now() + 7*24*60*60*1000).toISOString().split('T')[0]
    };
    data.tasks.push(newBoardTask);

    db.saveData(data);
    addSystemLog(`Escalated complaint ${complaintId} to Lorain County League. Added County Meeting preparation task to board.`);
    renderBoardPortal();
  }
};

window.deleteComplaint = function(complaintId) {
  if (!confirm("Remove this complaint entry permanently from archives?")) return;
  const data = db.getData();
  const index = data.complaints.findIndex(c => c.id === complaintId);
  if (index !== -1) {
    data.complaints.splice(index, 1);
    db.saveData(data);
    addSystemLog(`Removed complaint ${complaintId} from archives.`);
    renderBoardPortal();
  }
};

// Render Logs in dashboard
function renderLogs() {
  const container = document.getElementById("system-logs-container");
  if (!container) return;

  let html = "";
  systemLogs.forEach(log => {
    html += `<div class="log-entry"><span class="time">[${log.time}]</span> ${log.text}</div>`;
  });
  container.innerHTML = html;
}

// ----------------------------------------------------
// SYSTEM MODALS UTILS
// ----------------------------------------------------
window.openModal = function(modalId) {
  document.getElementById(modalId).classList.add("active");
};

window.closeModal = function(modalId) {
  document.getElementById(modalId).classList.remove("active");
};

// ----------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupLayoutSwitcher();
  renderHandbook();
  setupDrillFilters();
  renderDrills();
  renderLounge();
  setupComplaintForm();
  updateAgeSelectors();
  loadTacticsData();
  renderTacticsInputs();
  renderPlayerTokens();
  
  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker Registered Successfully', reg.scope))
        .catch(err => console.log('Service Worker Registration Failed', err));
    });
  }

  addSystemLog("Interactive PWA modules initialized.");
});

// Real-time synchronization listener across tabs
window.addEventListener('storage', (e) => {
  if (e.key === db.key) {
    renderHandbook();
    renderDrills();
    renderLounge();
    renderBoardPortal();
    addSystemLog("Database updated in another tab/window. UI synchronized.");
  }
  if (e.key === "board_admin_logged_in") {
    isBoardAuthenticated = localStorage.getItem("board_admin_logged_in") === "true";
    renderHandbook();
    renderDrills();
    renderBoardPortal();
    updateAdminLockIcons();
    addSystemLog(`Admin authorization synchronized across tabs: ${isBoardAuthenticated ? "Authenticated" : "Logged Out"}`);
  }
  if (e.key === "soccercoach_tactics_sync_trigger") {
    loadTacticsData();
    renderTacticsInputs();
    renderPlayerTokens();
    addSystemLog("Tactics Board lineup synchronized across tabs.");
  }
});

// ----------------------------------------------------
// TACTICS BOARD (LINEUP BUILDER) LOGIC
// ----------------------------------------------------
function getDefaultPositions() {
  const positions = [];
  // GK
  positions.push({ left: 174, top: 450 });
  // LB, LCB, RCB, RB
  positions.push({ left: 40, top: 370 });
  positions.push({ left: 130, top: 370 });
  positions.push({ left: 210, top: 370 });
  positions.push({ left: 300, top: 370 });
  // LM, CM, RM
  positions.push({ left: 60, top: 250 });
  positions.push({ left: 174, top: 270 });
  positions.push({ left: 280, top: 250 });
  // LW, CF, RW
  positions.push({ left: 60, top: 100 });
  positions.push({ left: 174, top: 70 });
  positions.push({ left: 280, top: 100 });
  
  // 7 Subs on the bench (y = 544)
  for (let i = 0; i < 7; i++) {
    positions.push({ left: 15 + i * 50, top: 544 });
  }
  return positions;
}

let playerNames = Array.from({ length: 18 }, (_, i) => `Player ${i + 1}`);
let playerPositions = getDefaultPositions();
let ballPosition = { left: 178, top: 248 };

function loadTacticsData() {
  try {
    const savedNames = localStorage.getItem("soccercoach_tactics_names");
    if (savedNames) {
      const parsedNames = JSON.parse(savedNames);
      if (parsedNames.length === 18) {
        playerNames = parsedNames;
      } else {
        playerNames = Array.from({ length: 18 }, (_, i) => parsedNames[i] || `Player ${i + 1}`);
      }
    }
    
    const savedPositions = localStorage.getItem("soccercoach_tactics_positions");
    if (savedPositions) {
      const parsedPositions = JSON.parse(savedPositions);
      if (parsedPositions.length === 18) {
        playerPositions = parsedPositions;
      } else {
        const defaultPos = getDefaultPositions();
        playerPositions = Array.from({ length: 18 }, (_, i) => parsedPositions[i] || defaultPos[i]);
      }
    }

    const savedBall = localStorage.getItem("soccercoach_tactics_ball");
    if (savedBall) {
      ballPosition = JSON.parse(savedBall);
    } else {
      ballPosition = { left: 178, top: 248 };
    }
  } catch (e) {
    console.error("Error loading tactics data", e);
  }
}

function renderTacticsInputs() {
  const container = document.getElementById("player-inputs-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < 18; i++) {
    html += `
      <div class="player-input-group">
        <span class="player-input-num">${i + 1}</span>
        <input type="text" class="player-input-field" data-index="${i}" value="${playerNames[i]}" oninput="updatePlayerName(this)">
      </div>
    `;
  }
  container.innerHTML = html;
}

window.updatePlayerName = function(input) {
  const index = parseInt(input.dataset.index);
  playerNames[index] = input.value;
  localStorage.setItem("soccercoach_tactics_names", JSON.stringify(playerNames));
  
  const label = document.getElementById(`player-token-label-${index}`);
  if (label) label.innerText = input.value;
  
  localStorage.setItem("soccercoach_tactics_sync_trigger", Date.now());
};

function renderPlayerTokens() {
  const field = document.getElementById("tactics-field");
  if (!field) return;
  
  const existingTokens = field.querySelectorAll(".player-token, .soccer-ball");
  existingTokens.forEach(t => t.remove());
  
  playerPositions.forEach((pos, i) => {
    const token = document.createElement("div");
    token.className = "player-token";
    token.id = `player-token-${i}`;
    token.style.left = `${pos.left}px`;
    token.style.top = `${pos.top}px`;
    token.innerHTML = `
      ${i + 1}
      <div class="player-token-label" id="player-token-label-${i}">${playerNames[i]}</div>
    `;
    
    field.appendChild(token);
    makeElementDraggable(token, false, i);
  });

  // Render soccer ball
  const ball = document.createElement("div");
  ball.className = "soccer-ball";
  ball.id = "soccer-ball";
  ball.style.left = `${ballPosition.left}px`;
  ball.style.top = `${ballPosition.top}px`;
  ball.innerHTML = `<i class="fas fa-futbol"></i>`;
  
  field.appendChild(ball);
  makeElementDraggable(ball, true, 0);
}

function makeElementDraggable(el, isBall, index) {
  let isDragging = false;
  let startX, startY;
  
  el.addEventListener('mousedown', startDrag);
  el.addEventListener('touchstart', startDrag, { passive: false });
  
  function startDrag(e) {
    if (e.type === 'mousedown' && e.button !== 0) return;
    
    e.preventDefault();
    isDragging = true;
    
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    
    startX = clientX - el.offsetLeft;
    startY = clientY - el.offsetTop;
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
  }
  
  function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    
    let x = clientX - startX;
    let y = clientY - startY;
    
    const parent = el.parentElement;
    const maxX = parent.clientWidth - el.clientWidth;
    const maxY = parent.clientHeight - el.clientHeight;
    
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    if (isBall) {
      ballPosition = { left: x, top: y };
    } else {
      playerPositions[index] = { left: x, top: y };
    }
  }
  
  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('touchmove', drag);
    document.removeEventListener('mouseup', endDrag);
    document.removeEventListener('touchend', endDrag);
    
    if (isBall) {
      localStorage.setItem("soccercoach_tactics_ball", JSON.stringify(ballPosition));
    } else {
      localStorage.setItem("soccercoach_tactics_positions", JSON.stringify(playerPositions));
    }
    localStorage.setItem("soccercoach_tactics_sync_trigger", Date.now());
  }
}

window.resetPlayerPositions = function() {
  playerPositions = getDefaultPositions();
  ballPosition = { left: 178, top: 248 };
  
  localStorage.setItem("soccercoach_tactics_positions", JSON.stringify(playerPositions));
  localStorage.setItem("soccercoach_tactics_ball", JSON.stringify(ballPosition));
  localStorage.setItem("soccercoach_tactics_sync_trigger", Date.now());
  
  renderPlayerTokens();
  addSystemLog("Tactics Board layout reset to default lineup and ball position.");
};
