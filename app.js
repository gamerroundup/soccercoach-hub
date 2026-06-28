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
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkk1A36UR0AZepSsr3RJ9F5FzUhcjpk1L7n3ihgF6VJwVdGkAwGx0ESfJ47mXA0GjTL8ljFYBlr-DwITJyvVYRTelikKhlVXf_e4EBX28y6qJFPOOFASOW_KbrH-lL4DOSDpDVBFqDCZJ3TYtcusch4Aaf_h6nUcpbmO2_uomyBR5JsxwC3jtaktX2mcS7HGTIsniI4zePOv8tzClDpYO0p2_d2OvNkyyNhcBZz5PbYhD1W2v_o3UFzB-Ms04FTPRGHV2wmI43Zf4"
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
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8zK6RaKkP8UT6ngcU8Yy6MN1lgEH68LU22RxoPWfHe0lU3lIATYdvrt8rO9KDaCU_6QLnp6YDQni-GwmeHifhWx-5XcjcznZQC-10KLoHlAMKKqkckzer0T0FuBgIsSd9sGavto3FrpYRZJhGHgN1uc-cfWhhW8lcrT3EjsbyuSY1mUyuXJGKgaL_QGCP3SDVHB5d0TQ3bcgWl8DVY8kt7J68u35fzsLVJM6iPRV1RD3WjZIX0Wmd4kuHmRFTnQqe4Pnm-ZZum1o"
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
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOuP7knuh_y58Bjzv-9LHz2GW6cYMUrAxWITeszFRWQBiAC6df5ppTp1uAwc2zgNhjCubOucXtabaVZv366Yw0dh-aYbLFXKe6DOFiCb_9qXNT95CjyZ3T3n0H5KmHnhCKVM2R957IyLnt5Vc5NGywvTrWbi-yIxcSXdxf-YRGcvwhSyKh_sjkkb3sLs8MBEwCQrTeY1DYFboy9QD3BxllxAbOftQ86tWEFRw2WxLa8cFOghwYp_08WzuhNZqykv8AfW4FISV4M8I"
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
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2OLYikplm2VXYE7Mg71uptWZIix6Yl48OgV5DHgeDJNRsHZMGVPoU7ALEDf-JKZ1zAv9DIHynL4uv88P-U2QbC0SeeXrL9N97I0Gws8QpOOedpL30pAJj7sUXR-x9NoRmn7vgxDRqLG4ZxSiYWHddIshj5GSXjl4-V9zfSv5OeQdxlar2JRqzFCjtDkp2jfOCDG8VBaV6HAyILeqEubYPngpHqjhS3kK_2dAbqPxOvbTq1U4s5oNpyjEoGyaR-CMeS47WqPYxNaA"
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
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF8koCUsVtgqHeXRGLz2xLVQezcfO7zAwkH3IUDDupZsrpvQYJcbv1ijQIKviwuvY6C76nwRj0ycOTI-QU_2gSCaEp1UqyJmJf-AGNemJgc1bjgaKKiTDO_oCigI0qeIQgN_HVI7SFiK8GYKJKoLLIiXDIIt1rSfpRzZnpMsTWiTJ7oN6dYyPtEM0zSroo9Dz0nZgkIezovtXRoiiMz-9SY4xCFECZbpjs21TqdCV3KsY2cvfF5DnKGcehundLNtB1RwOP4SdXMWQ"
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
      type: "Passing",
      ageRange: "u10, u11, u12",
      duration: "15 mins",
      description: "Practice passing with a teammate, focusing on foot position and body angling. Rotate pairs to test different passing distances.",
      whyImportant: "Ensures precise ball control and vision on the pitch.",
      pointers: "Keep your ankle locked, look up before delivering the pass, and cushion the ball on receiving.",
      youtubeUrl: "https://youtu.be/_lexjndYGc?si=5gwEWH8zsoJr0PRe",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-018",
      title: "Dribbling Focus",
      type: "Dribbling",
      ageRange: "u8, u10",
      duration: "12 mins",
      description: "Use smaller balls and focus on changing direction rapidly when facing a direct defender. Practice dummy moves and step-overs.",
      whyImportant: "Improves 1v1 confidence and body positioning.",
      pointers: "Stay low to the ground, keep touches tight, and accelerate after making a cut.",
      youtubeUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-019",
      title: "Teamwork & Movement",
      type: "Passing",
      ageRange: "u6, u7, u8",
      duration: "10 mins",
      description: "Practice teamwork drills, focusing on passing, overlapping runs, and communicating where the space is.",
      whyImportant: "Teaches players how to move off the ball and call for passes early.",
      pointers: "Communicate clearly, make eye contact, and point to where you want the ball.",
      youtubeUrl: "https://youtu.be/Kb58F3r_TQM?si=cIPYqan_YamSHg4l",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-020",
      title: "Area Responsibilities",
      type: "Defending",
      ageRange: "u8, u9, u10",
      duration: "15 mins",
      description: "Practice positional drills, focusing on maintaining defense area and staying compact when opponent has ball.",
      whyImportant: "Develops positional awareness and prevents defensive gaps.",
      pointers: "Drop back as a unit, keep an arm's distance from opponents, and shift with the ball.",
      youtubeUrl: "https://youtu.be/E5kGtr2K61Y?si=pd0sQQTVcS_5f82_",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-021",
      title: "Rotations Relay",
      type: "Dribbling",
      ageRange: "u10, u11, u12",
      duration: "10 mins",
      description: "Rotation relay; “switch and cover” - players dribble to a cone, perform a turn, and pass back.",
      whyImportant: "Improves transition speed, agility, and relay chemistry.",
      pointers: "Focus on clean turns, weight passes back accurately, and sprint immediately after passing.",
      youtubeUrl: "https://youtu.be/oclFQQgXLCQ?si=7U_taGSXzMfJ8Ox5",
      imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-022",
      title: "Defending Set Pieces",
      type: "Defending",
      ageRange: "u6, u7, u8",
      duration: "12 mins",
      description: "Practice defending set pieces (corners, throw-ins), focusing on tracking runs, marking, and clearing the ball.",
      whyImportant: "Reduces soft goals from restarts by tracking marks early.",
      pointers: "Stay between your player and the goal, keep eyes on both player and ball, and clear dynamically.",
      youtubeUrl: "https://youtu.be/yRewtO19RQc?si=g5BvWEPbSOB5p",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-023",
      title: "Goalkeeping Fundamentals",
      type: "Goalkeeping",
      ageRange: "u10, u11, u12",
      duration: "15 mins",
      description: "Practice basic goalkeeping drills, focusing on catching, proper hand positioning (the 'W'), diving safely, and distribution.",
      whyImportant: "Builds goalie fundamentals and instills confidence inside the box.",
      pointers: "Form a solid 'W' with your hands, look the ball into your hands, and get your body behind the ball.",
      youtubeUrl: "https://youtu.be/k1i6kWxI2Ls?si=9-8xBtLPGRNum6af",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-024",
      title: "Small Sided Games",
      type: "Fun Game",
      ageRange: "u8, u9, u10",
      duration: "20 mins",
      description: "Practice small sided games, focusing on decision making, switching fields, and integrating skills learned.",
      whyImportant: "Encourages creativity and high number of match-like touches.",
      pointers: "Look for open passes, transition quickly, and create space by spreading wide.",
      youtubeUrl: "https://youtu.be/XWIP0VbJtKs?si=AsyCw-chEo3pPLYf",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "drill-025",
      title: "Game Situations",
      type: "Fun Game",
      ageRange: "u8, u9, u10",
      duration: "15 mins",
      description: "Practice game situation drills (throw-ins, goal kicks, restarts), focusing on soccer rules and early team shape.",
      whyImportant: "Aids volunteer coaches in explaining match restarts and spacing configurations.",
      pointers: "Follow throw-in rules (both feet down, overhead), spread out for goal kicks, and look for open teammates.",
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
    { name: "U6 Ball Comfort & Dribbling Plan", ageGroup: "U6", link: "#", author: "Coach Miller", details: "1. Warmup: Dynamic movements and ball tags (10 mins).\n2. Practice: Cone slalom dribbling focusing on using inside/outside foot surfaces (15 mins).\n3. Play: Sharks & minnows small grid game (15 mins).\n4. Scrimmage: 3v3 no goalie fun play (15 mins)." },
    { name: "U8 Gate Passing & Movement Session", ageGroup: "U8", link: "#", author: "Coach Miller", details: "1. Warmup: Jogging and gate passing in pairs (10 mins).\n2. Practice: Passing relays with focus on first touch cushioning (15 mins).\n3. Play: 4v4 scrimmage emphasizing spacing and finding open gates (20 mins)." },
    { name: "U10 Defensive Positioning & Jockeying", ageGroup: "U10", link: "#", author: "Director Dave", details: "1. Warmup: Dynamic stretching and keep-away grids (10 mins).\n2. Practice: 1v1 defensive jockeying drills showing stance (15 mins).\n3. Play: 7v7 scrimmage with offside rules enforced (25 mins)." },
    { name: "U12 Counter-Attack Transition Play", ageGroup: "U12", link: "#", author: "Coach Sarah", details: "1. Warmup: Small-sided 3v1 possession squares (10 mins).\n2. Practice: Transition attack drills from defensive halves (20 mins).\n3. Play: 9v9 scrimmage with fast build-ups (30 mins)." },
    { name: "U14 Shielding & Attacking Triangles", ageGroup: "U13 & Older", link: "#", author: "Director Dave", details: "1. Warmup: Passing triangles with overlapping runs (15 mins).\n2. Practice: Shielding exercises under pressure (20 mins).\n3. Play: 11v11 full scrimmage applying tactical positioning (35 mins)." }
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
  ],
  calendarEvents: [
    {
      id: "event-1",
      title: "LCSL Board League Monthly Meet",
      date: new Date(Date.now() + 2*24*60*60*1000).toISOString().split('T')[0], // Today + 2 days
      time: "19:30",
      link: "https://meet.google.com/abc-defg-hij",
      description: "Standard monthly board review of schedules, referee allocations, and incident reports from rec and travel divisions."
    },
    {
      id: "event-2",
      title: "Referee Conduct Panel & Training Clinic",
      date: new Date(Date.now() + 5*24*60*60*1000).toISOString().split('T')[0], // Today + 5 days
      time: "18:00",
      link: "https://teams.microsoft.com/l/meetup-join/19:meeting_abcdef",
      description: "Special panels to address referee escalation reports and coordinate standard training cues for county commissioners."
    },
    {
      id: "event-3",
      title: "Oberlin Fields Maintenance & Replacement Walkthrough",
      date: new Date(Date.now() + 12*24*60*60*1000).toISOString().split('T')[0], // Today + 12 days
      time: "10:00",
      link: "",
      description: "On-site equipment review to procure replacement goals, verify nets, and confirm field painting coordinators."
    }
  ],
  boardLinks: {
    coachOnboarding: { label: "Coach Onboarding FAQ", url: "https://www.usys.org/coaching-resources/" },
    playerTravel: { label: "Travel Registration Link", url: "https://aysaohiosoccer.com/travel/" },
    playerRec: { label: "Rec Registration Link", url: "https://www.quickscores.com/loraincountysoccer" }
  }
};

// Database class helper
class SoccerDb {
  constructor() {
    this.key = "soccercoach_hub_db_v4";
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
    
    // Update sliding tracer position
    updateMobileNavTracer();
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
    setTimeout(() => {
      updateMobileNavTracer();
      loadTacticsData();
      renderTacticsInputs();
      renderPlayerTokens();
    }, 100);
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
    setTimeout(() => {
      updateMobileNavTracer();
      loadTacticsData();
      renderTacticsInputs();
      renderPlayerTokens();
    }, 100);
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
  customConfirm("Are you sure you want to delete this age category and all its rule specs?", () => {
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
      showToast(`Deleted age category <strong>${name}</strong>`, "warning");
    }
  });
};

window.restoreHandbookDefaults = function() {
  if (!checkAdminAuth("Only board administrators can restore default rules.")) return;
  customConfirm("Reset all specifications, rules and handbook entries back to league default values?", () => {
    const data = db.resetToDefault();
    selectedAgeGroupId = "u6";
    db.saveData(data);
    renderHandbook();
    renderDrills();
    updateAgeSelectors();
    addSystemLog("Restored database to default rules and values.");
    showToast("Restored database to league default handbook rules.", "success");
  });
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

  // Render stats count
  const countInfo = document.getElementById("drills-count-info");
  if (countInfo) {
    countInfo.innerHTML = `<i class="fas fa-info-circle" style="color: var(--primary);"></i> Showing <strong>${filteredDrills.length}</strong> of <strong>${data.drills.length}</strong> drills matching your filters.`;
  }

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
  customConfirm("Are you sure you want to delete this drill from the library?", () => {
    const data = db.getData();
    const index = data.drills.findIndex(d => d.id === drillId);
    if (index !== -1) {
      const title = data.drills[index].title;
      data.drills.splice(index, 1);
      addSystemLog(`Deleted drill: ${title}`);
      db.saveData(data);
      closeDrillDetail();
      renderDrills();
      showToast(`Deleted drill <strong>${title}</strong>`, "warning");
    }
  });
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
    data.practicePlans.forEach((plan, index) => {
      plansHtml += `
        <a href="javascript:void(0)" class="plan-item" onclick="viewPracticePlanDetail(${index})">
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

window.viewPracticePlanDetail = function(index) {
  const data = db.getData();
  const plan = data.practicePlans[index];
  if (!plan) return;

  document.getElementById("plan-details-title").innerText = "Practice Plan Outline";
  document.getElementById("plan-details-age").innerText = `${plan.ageGroup} Category`;
  document.getElementById("plan-details-author").innerText = `Contributed by: ${plan.author}`;
  document.getElementById("plan-details-theme").innerText = plan.name;
  document.getElementById("plan-details-text").innerText = plan.details || "No details provided for this practice plan.";

  openModal("modal-plan-details");
};

window.openAddPracticePlanModal = function() {
  document.getElementById("practice-plan-form").reset();
  openModal("modal-practice-plan");
};

window.savePracticePlan = function(e) {
  e.preventDefault();
  const data = db.getData();
  const name = document.getElementById("plan-name").value;
  const ageGroup = document.getElementById("plan-ageGroup").value;
  const author = document.getElementById("plan-author").value;
  const details = document.getElementById("plan-details").value;

  const newPlan = {
    name: name,
    ageGroup: ageGroup,
    link: "#",
    author: author,
    details: details
  };

  data.practicePlans.unshift(newPlan);
  db.saveData(data);
  closeModal("modal-practice-plan");
  renderLounge();
  addSystemLog(`Shared new Practice Plan template: "${name}" for ${ageGroup} Group`);
};

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

// Toast Notification System
window.showToast = function(message, type = "success") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.style.position = "fixed";
    toastContainer.style.bottom = "30px";
    toastContainer.style.right = "30px";
    toastContainer.style.display = "flex";
    toastContainer.style.flexDirection = "column";
    toastContainer.style.gap = "10px";
    toastContainer.style.zIndex = "11000";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.style.background = "rgba(15, 23, 42, 0.95)";
  toast.style.color = "var(--text-main)";
  toast.style.borderLeft = `4px solid ${type === "success" ? "var(--success)" : type === "warning" ? "var(--warning)" : "var(--primary)"}`;
  toast.style.borderTop = "1px solid var(--border-color)";
  toast.style.borderRight = "1px solid var(--border-color)";
  toast.style.borderBottom = "1px solid var(--border-color)";
  toast.style.padding = "14px 20px";
  toast.style.borderRadius = "var(--radius-md)";
  toast.style.boxShadow = "var(--shadow-lg)";
  toast.style.fontSize = "13px";
  toast.style.fontWeight = "600";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "10px";
  toast.style.minWidth = "280px";
  toast.style.maxWidth = "400px";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(20px)";
  toast.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";

  const icon = document.createElement("i");
  if (type === "success") {
    icon.className = "fas fa-check-circle";
    icon.style.color = "var(--success)";
  } else if (type === "warning") {
    icon.className = "fas fa-exclamation-triangle";
    icon.style.color = "var(--warning)";
  } else {
    icon.className = "fas fa-info-circle";
    icon.style.color = "var(--primary)";
  }

  const text = document.createElement("span");
  text.innerHTML = message;

  toast.appendChild(icon);
  toast.appendChild(text);
  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 10);

  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px)";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
};

// Custom Modal Confirmation System
window.customConfirm = function(message, onConfirm) {
  const modal = document.getElementById("modal-confirm");
  const msgEl = document.getElementById("confirm-message");
  const actionBtn = document.getElementById("btn-confirm-action");
  
  if (!modal || !msgEl || !actionBtn) {
    if (confirm(message)) {
      onConfirm();
    }
    return;
  }
  
  msgEl.innerText = message;
  
  // Clone button to remove previous event listeners
  const newActionBtn = actionBtn.cloneNode(true);
  actionBtn.parentNode.replaceChild(newActionBtn, actionBtn);
  
  newActionBtn.addEventListener("click", () => {
    closeModal("modal-confirm");
    onConfirm();
  });
  
  openModal("modal-confirm");
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

    // Trigger elegant Toast Notification
    showToast(`<strong>Report Submitted Successfully!</strong> Assigned ID: ${newId}. reps notified.`, "success");

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
  renderBoardCalendar();
  renderBoardLinks();
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

// ----------------------------------------------------
// BOARD CALENDAR (ROLLING 30-DAY WINDOW)
// ----------------------------------------------------
window.renderBoardCalendar = function() {
  const container = document.getElementById("board-calendar-list");
  if (!container) return;

  const data = db.getData();
  if (!data.calendarEvents) {
    data.calendarEvents = [];
    db.saveData(data);
  }

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const today = new Date(todayStr);
  const maxDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

  // Filter events within rolling 30 days
  const filteredEvents = data.calendarEvents.filter(function(event) {
    const eventDate = new Date(event.date);
    return eventDate >= today && eventDate <= maxDate;
  });

  // Sort chronologically
  filteredEvents.sort(function(a, b) {
    if (a.date !== b.date) {
      return a.date.localeCompare(b.date);
    }
    return a.time.localeCompare(b.time);
  });

  if (filteredEvents.length === 0) {
    container.innerHTML = '<div class="empty-state">' +
      '<i class="fas fa-calendar-times" style="font-size: 28px; color: var(--text-muted); margin-bottom: 8px;"></i>' +
      '<p>No upcoming board meetings or notices posted for the next 30 days.</p>' +
    '</div>';
    return;
  }

  let html = "";
  filteredEvents.forEach(function(event) {
    const eventDateObj = new Date(event.date + 'T00:00:00');
    const month = eventDateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day = eventDateObj.getDate();

    let joinLinkHtml = "";
    if (event.link) {
      let linkText = "Join Meeting";
      let linkClass = "";
      if (event.link.indexOf("meet.google.com") !== -1 || event.link.indexOf("google.com") !== -1) {
        linkText = '<i class="fab fa-google"></i> Google Meet';
      } else if (event.link.indexOf("teams.microsoft.com") !== -1 || event.link.indexOf("teams.live.com") !== -1) {
        linkText = '<i class="fab fa-microsoft"></i> MS Teams';
        linkClass = "teams";
      } else if (event.link.indexOf("zoom.us") !== -1) {
        linkText = '<i class="fas fa-video"></i> Zoom Meet';
      }
      joinLinkHtml = '<a href="' + event.link + '" target="_blank" class="meeting-join-link ' + linkClass + '">' + linkText + '</a>';
    }

    html += '<div class="calendar-event-item">' +
      '<div class="event-date-badge">' +
        '<span class="month">' + month + '</span>' +
        '<span class="day">' + day + '</span>' +
      '</div>' +
      '<div class="event-info">' +
        '<div class="event-title-row">' +
          '<h4 class="event-item-title">' + event.title + '</h4>' +
          '<span class="event-time-badge"><i class="fas fa-clock"></i> ' + formatTimeStr(event.time) + '</span>' +
        '</div>' +
        '<p class="event-item-desc">' + event.description + '</p>' +
        '<div class="event-actions-row">' +
          joinLinkHtml +
          '<button class="btn-event-edit" onclick="openEditEventModal(\'' + event.id + '\')">' +
            '<i class="fas fa-edit"></i> Edit Notice' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  });

  container.innerHTML = html;
};

function formatTimeStr(time24) {
  if (!time24) return "";
  const parts = time24.split(':');
  let hrs = parseInt(parts[0]);
  const mins = parts[1];
  const ampm = hrs >= 12 ? 'PM' : 'AM';
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  return hrs + ':' + mins + ' ' + ampm;
}

window.openAddEventModal = function() {
  document.getElementById("calendar-event-modal-title").innerText = "Post Board Notice";
  document.getElementById("calendar-event-id-input").value = "";
  document.getElementById("calendar-event-form").reset();
  
  document.getElementById("calendar-event-date").value = new Date().toISOString().split('T')[0];
  document.getElementById("calendar-event-time").value = "19:00";
  
  document.getElementById("btn-delete-calendar-event").style.display = "none";
  openModal("modal-calendar-event");
};

window.openEditEventModal = function(eventId) {
  const data = db.getData();
  const event = data.calendarEvents.find(function(e) { return e.id === eventId; });
  if (!event) return;

  document.getElementById("calendar-event-modal-title").innerText = "Edit Board Notice";
  document.getElementById("calendar-event-id-input").value = event.id;
  document.getElementById("calendar-event-title").value = event.title;
  document.getElementById("calendar-event-date").value = event.date;
  document.getElementById("calendar-event-time").value = event.time;
  document.getElementById("calendar-event-link").value = event.link || "";
  document.getElementById("calendar-event-description").value = event.description;

  document.getElementById("btn-delete-calendar-event").style.display = "inline-flex";
  openModal("modal-calendar-event");
};

window.saveCalendarEvent = function(e) {
  e.preventDefault();
  const data = db.getData();
  const idInput = document.getElementById("calendar-event-id-input").value;
  const title = document.getElementById("calendar-event-title").value;
  
  const eventData = {
    title: title,
    date: document.getElementById("calendar-event-date").value,
    time: document.getElementById("calendar-event-time").value,
    link: document.getElementById("calendar-event-link").value,
    description: document.getElementById("calendar-event-description").value
  };

  if (idInput) {
    const index = data.calendarEvents.findIndex(function(ev) { return ev.id === idInput; });
    if (index !== -1) {
      data.calendarEvents[index] = { ...data.calendarEvents[index], ...eventData };
      addSystemLog("Modified board notice: " + title);
    }
  } else {
    const newId = "event-" + Date.now();
    data.calendarEvents.push({ id: newId, ...eventData });
    addSystemLog("Posted new board notice: " + title);
  }

  db.saveData(data);
  closeModal("modal-calendar-event");
  renderBoardCalendar();
};

window.deleteCalendarEvent = function() {
  const idInput = document.getElementById("calendar-event-id-input").value;
  if (!idInput) return;
  customConfirm("Are you sure you want to delete this board calendar notice?", () => {
    const data = db.getData();
    const index = data.calendarEvents.findIndex(function(ev) { return ev.id === idInput; });
    if (index !== -1) {
      const title = data.calendarEvents[index].title;
      data.calendarEvents.splice(index, 1);
      addSystemLog("Deleted board notice: " + title);
      db.saveData(data);
      closeModal("modal-calendar-event");
      renderBoardCalendar();
      showToast(`Deleted notice <strong>${title}</strong>`, "warning");
    }
  });
};

// ----------------------------------------------------
// BOARD EDITABLE RESOURCE LINKS
// ----------------------------------------------------
window.renderBoardLinks = function() {
  const container = document.getElementById("board-links-container");
  if (!container) return;

  const data = db.getData();
  if (!data.boardLinks) {
    data.boardLinks = {
      coachOnboarding: { label: "Coach Onboarding FAQ", url: "https://www.usys.org/coaching-resources/" },
      playerTravel: { label: "Travel Registration Link", url: "https://aysaohiosoccer.com/travel/" },
      playerRec: { label: "Rec Registration Link", url: "https://www.quickscores.com/loraincountysoccer" }
    };
    db.saveData(data);
  }

  let html = "";
  const keys = ["coachOnboarding", "playerTravel", "playerRec"];
  keys.forEach(function(key) {
    const linkObj = data.boardLinks[key];
    html += '<div class="board-link-item">' +
      '<div class="board-link-info">' +
        '<strong>' + linkObj.label + '</strong>' +
        '<a href="' + linkObj.url + '" target="_blank" class="board-link-url-display">' +
          '<i class="fas fa-external-link-alt"></i> ' + cleanUrlDisplay(linkObj.url) +
        '</a>' +
      '</div>' +
      '<button class="btn btn-secondary btn-small" onclick="openEditLinkModal(\'' + key + '\')">' +
        '<i class="fas fa-edit"></i> Edit' +
      '</button>' +
    '</div>';
  });

  container.innerHTML = html;
};

function cleanUrlDisplay(url) {
  if (!url) return "";
  return url.replace(/^(https?:\/\/)?(www\.)?/, "");
}

window.openEditLinkModal = function(key) {
  const data = db.getData();
  if (!data.boardLinks || !data.boardLinks[key]) return;
  const linkObj = data.boardLinks[key];

  document.getElementById("board-link-key-input").value = key;
  document.getElementById("board-link-label").value = linkObj.label;
  document.getElementById("board-link-url").value = linkObj.url;

  openModal("modal-board-link-edit");
};

window.saveBoardLink = function(e) {
  e.preventDefault();
  const key = document.getElementById("board-link-key-input").value;
  const label = document.getElementById("board-link-label").value;
  const url = document.getElementById("board-link-url").value;

  const data = db.getData();
  if (!data.boardLinks) data.boardLinks = {};
  data.boardLinks[key] = { label: label, url: url };

  db.saveData(data);
  closeModal("modal-board-link-edit");
  renderBoardLinks();
  addSystemLog("Updated board resource link: " + label);
};

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
      <div class="kanban-card" draggable="true" ondragstart="dragTask(event, '${task.id}')" ondragend="dragEndTask(event)" onclick="openEditTaskModal('${task.id}')">
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

window.dragTask = function(ev, taskId) {
  ev.dataTransfer.setData("text/plain", taskId);
  ev.currentTarget.classList.add("dragging");
};

window.dragEndTask = function(ev) {
  ev.currentTarget.classList.remove("dragging");
};

window.moveTaskStatus = function(taskId, newStatus) {
  const data = db.getData();
  const index = data.tasks.findIndex(t => t.id === taskId);
  if (index !== -1) {
    const task = data.tasks[index];
    if (task.status !== newStatus) {
      const oldStatus = task.status;
      task.status = newStatus;
      db.saveData(data);
      addSystemLog(`Moved task "${task.title}" from [${oldStatus.toUpperCase()}] to [${newStatus.toUpperCase()}]`);
      renderKanbanBoard();
      showToast(`Task status updated to <strong>${newStatus.toUpperCase()}</strong>`, "info");
    }
  }
};

function setupKanbanDragAndDrop() {
  const containers = document.querySelectorAll(".kanban-cards-container");
  containers.forEach(container => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      container.classList.add("drag-over");
    });
    
    container.addEventListener("dragleave", () => {
      container.classList.remove("drag-over");
    });
    
    container.addEventListener("drop", (e) => {
      e.preventDefault();
      container.classList.remove("drag-over");
      const taskId = e.dataTransfer.getData("text/plain");
      if (!taskId) return;
      
      let newStatus = "todo";
      if (container.id === "kanban-progress") {
        newStatus = "in-progress";
      } else if (container.id === "kanban-done") {
        newStatus = "done";
      }
      
      window.moveTaskStatus(taskId, newStatus);
    });
  });
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
  customConfirm("Are you sure you want to delete this task card?", () => {
    const data = db.getData();
    const index = data.tasks.findIndex(t => t.id === idInput);
    if (index !== -1) {
      const title = data.tasks[index].title;
      data.tasks.splice(index, 1);
      addSystemLog(`Deleted board task card: "${title}"`);
      db.saveData(data);
      closeModal("modal-task");
      renderKanbanBoard();
      showToast(`Deleted task <strong>${title}</strong>`, "warning");
    }
  });
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
  customConfirm("Remove this complaint entry permanently from archives?", () => {
    const data = db.getData();
    const index = data.complaints.findIndex(c => c.id === complaintId);
    if (index !== -1) {
      data.complaints.splice(index, 1);
      db.saveData(data);
      addSystemLog(`Removed complaint ${complaintId} from archives.`);
      renderBoardPortal();
      showToast(`Removed complaint <strong>${complaintId}</strong>`, "warning");
    }
  });
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
  
  // Initialize Match Timers and Navigation Tracer
  setupTimers();
  updateMobileNavTracer();
  
  // Initialize Kanban Drag-and-Drop
  setupKanbanDragAndDrop();
  
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
  if (e.key === "soccercoach_timers") {
    loadTimers();
    updateTimersUI();
  }
});

// ----------------------------------------------------
// TACTICS BOARD (LINEUP BUILDER) LOGIC
// ----------------------------------------------------
function getDefaultPositions() {
  const isMobile = document.getElementById("tactics-field") && document.getElementById("tactics-field").clientWidth < 350;
  const positions = [];
  
  if (isMobile) {
    // Mobilized scaled positions (field is 320x520)
    // GK
    positions.push({ left: 144, top: 380 });
    // LB, LCB, RCB, RB
    positions.push({ left: 20, top: 310 });
    positions.push({ left: 100, top: 310 });
    positions.push({ left: 180, top: 310 });
    positions.push({ left: 260, top: 310 });
    // LM, CM, RM
    positions.push({ left: 35, top: 210 });
    positions.push({ left: 144, top: 225 });
    positions.push({ left: 245, top: 210 });
    // LW, CF, RW
    positions.push({ left: 35, top: 80 });
    positions.push({ left: 144, top: 50 });
    positions.push({ left: 245, top: 80 });
    
    // Subs on bench
    for (let i = 0; i < 7; i++) {
      positions.push({ left: 10 + i * 43, top: 474 });
    }
  } else {
    // Desktop positions (field is 380x600)
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

// ====================================================
// ADDED: SOCCER APP TIMERS & MOBILE VIEW LOGIC
// ====================================================

// persistent timers state
let timersState = {
  starters: { elapsed: 0, running: false, lastTick: null },
  sub1: { elapsed: 0, running: false, lastTick: null },
  sub2: { elapsed: 0, running: false, lastTick: null }
};

let timersInterval = null;
const maxTimerSeconds = 3600; // 60 minutes max

function loadTimers() {
  const saved = localStorage.getItem("soccercoach_timers");
  if (saved) {
    try {
      timersState = JSON.parse(saved);
      // Catch up running timers for time elapsed while tab was closed/inactive
      const now = Date.now();
      Object.keys(timersState).forEach(key => {
        const timer = timersState[key];
        if (timer.running && timer.lastTick) {
          const diffSeconds = Math.floor((now - timer.lastTick) / 1000);
          timer.elapsed = Math.min(maxTimerSeconds, timer.elapsed + Math.max(0, diffSeconds));
          timer.lastTick = now;
          if (timer.elapsed >= maxTimerSeconds) {
            timer.running = false;
          }
        }
      });
    } catch (e) {
      console.error("Error loading timers from storage:", e);
    }
  }
}

function saveTimers() {
  localStorage.setItem("soccercoach_timers", JSON.stringify(timersState));
}

window.toggleTimer = function(key) {
  const timer = timersState[key];
  if (!timer) return;
  
  if (timer.elapsed >= maxTimerSeconds && !timer.running) {
    alert("Timer has reached the maximum duration of 60 minutes. Please reset to start again.");
    return;
  }

  timer.running = !timer.running;
  
  var label = "Starters";
  if (key === "sub1") {
    label = "Sub Line 1";
  } else if (key === "sub2") {
    label = "Sub Line 2";
  }

  if (timer.running) {
    timer.lastTick = Date.now();
    addSystemLog("Timer for " + label + " started.");
  } else {
    timer.lastTick = null;
    addSystemLog("Timer for " + label + " paused.");
  }
  saveTimers();
  updateTimersUI();
};

// Track reset confirmation timeouts
let resetConfirmTimeouts = {};
let resetAllTimeout = null;

window.resetTimer = function(key) {
  const btn = document.getElementById("btn-" + key + "-reset");
  if (!btn) return;

  var label = "Starters";
  if (key === "sub1") {
    label = "Sub Line 1";
  } else if (key === "sub2") {
    label = "Sub Line 2";
  }

  if (btn.classList.contains("confirm-active")) {
    // Second click: perform the reset
    clearTimeout(resetConfirmTimeouts[key]);
    delete resetConfirmTimeouts[key];
    btn.classList.remove("confirm-active");
    btn.innerHTML = '<i class="fas fa-redo"></i>';
    btn.style.background = "";
    btn.style.color = "";
    
    timersState[key] = { elapsed: 0, running: false, lastTick: null };
    saveTimers();
    updateTimersUI();
    addSystemLog("Timer for " + label + " reset to 00:00.");
  } else {
    // First click: activate confirm mode
    btn.classList.add("confirm-active");
    btn.innerHTML = '<i class="fas fa-check" style="font-size: 10px;"></i>';
    btn.style.background = "var(--danger)";
    btn.style.color = "white";
    
    // Automatically revert after 3 seconds
    resetConfirmTimeouts[key] = setTimeout(function() {
      btn.classList.remove("confirm-active");
      btn.innerHTML = '<i class="fas fa-redo"></i>';
      btn.style.background = "";
      btn.style.color = "";
      delete resetConfirmTimeouts[key];
    }, 3000);
  }
};

window.resetAllTimers = function() {
  const btn = document.getElementById("btn-reset-all-timers");
  if (!btn) return;

  if (btn.classList.contains("confirm-active")) {
    // Second click: perform reset all
    clearTimeout(resetAllTimeout);
    resetAllTimeout = null;
    btn.classList.remove("confirm-active");
    btn.innerHTML = '<i class="fas fa-history"></i> Half-Time Reset (All)';
    
    timersState = {
      starters: { elapsed: 0, running: false, lastTick: null },
      sub1: { elapsed: 0, running: false, lastTick: null },
      sub2: { elapsed: 0, running: false, lastTick: null }
    };
    saveTimers();
    updateTimersUI();
    addSystemLog("All game timers reset to 00:00 (Half-Time Reset).");
  } else {
    // First click: activate confirm mode
    btn.classList.add("confirm-active");
    btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Confirm Reset All?';
    
    // Automatically revert after 4 seconds
    resetAllTimeout = setTimeout(function() {
      btn.classList.remove("confirm-active");
      btn.innerHTML = '<i class="fas fa-history"></i> Half-Time Reset (All)';
      resetAllTimeout = null;
    }, 4000);
  }
};

function startTimersInterval() {
  if (timersInterval) return;
  timersInterval = setInterval(() => {
    let stateChanged = false;
    const now = Date.now();
    
    Object.keys(timersState).forEach(key => {
      const timer = timersState[key];
      if (timer.running) {
        timer.elapsed = Math.min(maxTimerSeconds, timer.elapsed + 1);
        timer.lastTick = now;
        if (timer.elapsed >= maxTimerSeconds) {
          timer.running = false;
          timer.lastTick = null;
          
          let timerLabel = "Starters";
          if (key === "sub1") {
            timerLabel = "Sub Line 1";
          } else if (key === "sub2") {
            timerLabel = "Sub Line 2";
          }
          addSystemLog("Timer for " + timerLabel + " reached max limit of 60 mins.");
        }
        stateChanged = true;
      }
    });
    
    if (stateChanged) {
      saveTimers();
    }
    updateTimersUI();
  }, 1000);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
}

function updateTimersUI() {
  Object.keys(timersState).forEach(key => {
    const timer = timersState[key];
    const displayId = 'timer-' + key + '-time';
    const cardId = 'timer-card-' + key;
    const toggleId = 'btn-' + key + '-toggle';
    
    const displayEl = document.getElementById(displayId);
    const cardEl = document.getElementById(cardId);
    const toggleEl = document.getElementById(toggleId);
    
    if (displayEl) {
      displayEl.innerText = formatTime(timer.elapsed);
      if (timer.elapsed >= maxTimerSeconds) {
        displayEl.style.color = "var(--danger)";
      } else {
        displayEl.style.color = "";
      }
    }
    
    if (cardEl) {
      if (timer.running) {
        cardEl.classList.add("running");
      } else {
        cardEl.classList.remove("running");
      }
    }
    
    if (toggleEl) {
      if (timer.running) {
        toggleEl.innerHTML = '<i class="fas fa-pause"></i> Pause';
      } else {
        toggleEl.innerHTML = '<i class="fas fa-play"></i> Start';
      }
    }
  });
}

function setupTimers() {
  loadTimers();
  updateTimersUI();
  startTimersInterval();
  
  // Attach listeners
  const btnStartersToggle = document.getElementById("btn-starters-toggle");
  if (btnStartersToggle) btnStartersToggle.addEventListener("click", () => toggleTimer("starters"));
  const btnStartersReset = document.getElementById("btn-starters-reset");
  if (btnStartersReset) btnStartersReset.addEventListener("click", () => resetTimer("starters"));
  
  const btnSub1Toggle = document.getElementById("btn-sub1-toggle");
  if (btnSub1Toggle) btnSub1Toggle.addEventListener("click", () => toggleTimer("sub1"));
  const btnSub1Reset = document.getElementById("btn-sub1-reset");
  if (btnSub1Reset) btnSub1Reset.addEventListener("click", () => resetTimer("sub1"));
  
  const btnSub2Toggle = document.getElementById("btn-sub2-toggle");
  if (btnSub2Toggle) btnSub2Toggle.addEventListener("click", () => toggleTimer("sub2"));
  const btnSub2Reset = document.getElementById("btn-sub2-reset");
  if (btnSub2Reset) btnSub2Reset.addEventListener("click", () => resetTimer("sub2"));
  
  const btnResetAll = document.getElementById("btn-reset-all-timers");
  if (btnResetAll) btnResetAll.addEventListener("click", resetAllTimers);
}

// Mobile Nav Active Underline Slide Logic
window.updateMobileNavTracer = function() {
  const activeBtn = document.querySelector(".mobile-nav-item.active");
  const tracer = document.querySelector(".mobile-nav-tracer");
  if (!activeBtn || !tracer) return;
  
  const btnWidth = activeBtn.offsetWidth;
  const btnLeft = activeBtn.offsetLeft;
  
  tracer.style.width = btnWidth + 'px';
  tracer.style.transform = 'translateX(' + btnLeft + 'px)';
};

// Listen to window size changes to keep mobile nav tracer in line
window.addEventListener("resize", () => {
  updateMobileNavTracer();
});
