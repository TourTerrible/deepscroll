export interface ContentItem {
  id: string;
  title: string;
  body: string;
  category: string;
  imageUrl?: string;
}

export const seedContent: ContentItem[] = [
  {
    id: "1",
    title: "Second-Order Thinking",
    body: "Most decisions are evaluated on immediate outcomes. Intelligent decision-makers ask: what happens after this happens? Short-term relief often creates long-term fragility. Second-order thinkers optimize for downstream consequences, not just the first ripple.",
    category: "brain hacks",
  },
  {
    id: "2",
    title: "Lindy Effect",
    body: "The longer something has survived, the longer it's likely to continue surviving. A book that's been in print for 100 years will probably be read for another 100. Technology that's 50 years old is more robust than something released last year. Time is the ultimate filter.",
    category: "brain hacks",
  },
  {
    id: "3",
    title: "Inversion Principle",
    body: "Instead of asking 'How do I succeed?', ask 'How do I fail?' Then avoid those paths. Charlie Munger: 'All I want to know is where I'm going to die, so I'll never go there.' Avoiding stupidity is easier than seeking brilliance.",
    category: "brain hacks",
  },
  {
    id: "4",
    title: "The Eisenhower Matrix",
    body: "Urgent vs Important. Most people spend their lives in Quadrant 1 (urgent + important) and Quadrant 3 (urgent + not important). Winners live in Quadrant 2: important but not urgent. That's where strategy, relationships, and health live.",
    category: "life hacks",
  },
  {
    id: "5",
    title: "Parkinson's Law",
    body: "Work expands to fill the time available for its completion. Give yourself a week for a task, it takes a week. Give yourself two hours, it takes two hours. Constraint breeds focus. Abundance breeds waste.",
    category: "life hacks",
  },
  {
    id: "6",
    title: "The Feynman Technique",
    body: "To truly understand something: 1) Write it out in simple language. 2) Identify gaps in your explanation. 3) Go back to the source material. 4) Simplify further. If you can't explain it simply, you don't understand it well enough.",
    category: "skill unlocks",
  },
  {
    id: "7",
    title: "Opportunity Cost",
    body: "Every choice has a hidden price: the value of the next best alternative you didn't choose. Saying yes to one thing means saying no to everything else. The best investors don't just evaluate returns—they evaluate what they're giving up.",
    category: "money moves",
  },
  {
    id: "8",
    title: "Skin in the Game",
    body: "Never trust advice from someone who doesn't bear the consequences of being wrong. Taleb's rule: Don't take health advice from someone who's unhealthy. Don't take financial advice from someone who's broke. Incentives reveal truth.",
    category: "deep thoughts",
  },
  {
    id: "9",
    title: "The Dunning-Kruger Effect",
    body: "Incompetent people overestimate their competence. Experts underestimate theirs. The less you know, the more confident you feel. True mastery begins when you realize how much you don't know. Confidence is not competence.",
    category: "mind games",
  },
  {
    id: "10",
    title: "Antifragility",
    body: "Some things benefit from stress and chaos. Your muscles grow from resistance. Your immune system strengthens from exposure. Systems that hide from volatility become fragile. Seek controlled doses of stress—they make you stronger.",
    category: "deep thoughts",
  },
  {
    id: "11",
    title: "The 80/20 Rule",
    body: "80% of results come from 20% of efforts. 80% of wealth is held by 20% of people. 80% of bugs come from 20% of code. Identify the vital few. Eliminate the trivial many. Optimization isn't doing more—it's doing less, better.",
    category: "life hacks",
  },
  {
    id: "12",
    title: "Confirmation Bias",
    body: "We seek information that confirms what we already believe. We ignore evidence that contradicts it. This is why echo chambers exist. The antidote: actively seek disconfirming evidence. Ask 'What would prove me wrong?' not 'What proves me right?'",
    category: "mind games",
  },
  {
    id: "13",
    title: "Compounding",
    body: "Small gains, repeated consistently, create exponential results. 1% better every day = 37x better in a year. This applies to money, knowledge, health, relationships. The magic isn't in the rate—it's in the time. Start early. Stay consistent.",
    category: "money moves",
  },
  {
    id: "14",
    title: "Circle of Competence",
    body: "Know what you know. Know what you don't know. Stay inside your circle. Buffett: 'I don't look to jump over 7-foot bars: I look around for 1-foot bars that I can step over.' Genius isn't knowing everything—it's knowing your limits.",
    category: "brain hacks",
  },
  {
    id: "15",
    title: "Asymmetric Risk",
    body: "Seek situations where downside is limited but upside is unlimited. Starting a business: lose your time, gain a fortune. Reading a book: lose $20, gain a worldview. Avoid the reverse: high risk, low reward. Optimize for favorable asymmetry.",
    category: "big brain plays",
  },
  {
    id: "16",
    title: "The Mere Exposure Effect",
    body: "Familiarity breeds preference. The more you're exposed to something, the more you like it—even if you weren't initially interested. This is why ads work. Why songs grow on you. Why habits form. Repetition creates comfort.",
    category: "mind games",
  },
  {
    id: "17",
    title: "First Principles Thinking",
    body: "Break problems down to their fundamental truths. Question every assumption. Elon Musk: 'Boil things down to the most fundamental truths and reason up from there.' Don't reason by analogy—reason from physics. Build from bedrock.",
    category: "brain hacks",
  },
  {
    id: "18",
    title: "The Paradox of Choice",
    body: "More options lead to less satisfaction. Too many choices create paralysis, regret, and anxiety. Restaurants with 100 items? You'll be less happy than with 10 good ones. Constraint liberates. Abundance overwhelms. Simplify ruthlessly.",
    category: "mind games",
  },
  {
    id: "19",
    title: "Via Negativa",
    body: "Improvement by subtraction, not addition. Remove bad habits instead of adding good ones. Remove toxic people instead of seeking more friends. Remove distractions instead of adding productivity hacks. Less is more. Subtraction is underrated.",
    category: "deep thoughts",
  },
  {
    id: "20",
    title: "The Map Is Not the Territory",
    body: "Models are simplifications of reality—not reality itself. Your mental map of the world is incomplete and biased. The menu is not the meal. The theory is not the practice. Stay humble. Reality always has the final word.",
    category: "deep thoughts",
  },
  {
    id: "21",
    title: "Hormesis",
    body: "Low doses of stress make you stronger. Cold showers. Fasting. Exercise. Difficult conversations. Your body and mind adapt to challenges when the dose is right. Too much breaks you. Too little weakens you. Find the sweet spot.",
    category: "self care",
  },
  {
    id: "22",
    title: "The Availability Heuristic",
    body: "We judge probability by what's easily recalled. Plane crashes feel more common than car crashes because they're more memorable. Rare but vivid events distort our perception of risk. Don't let the memorable override the statistical.",
    category: "mind games",
  },
  {
    id: "23",
    title: "Goodhart's Law",
    body: "When a measure becomes a target, it ceases to be a good measure. Optimize for test scores, education suffers. Optimize for clicks, content quality drops. Metrics are tools, not goals. The moment you game the system, the system breaks.",
    category: "big brain plays",
  },
  {
    id: "24",
    title: "The Sunk Cost Fallacy",
    body: "Past investments don't justify future ones. You can't get back time or money already spent. The question isn't 'How much have I invested?' but 'Is this still worth it?' Quit bad projects. Cut losses. The past is gone.",
    category: "money moves",
  },
  {
    id: "25",
    title: "Occam's Razor",
    body: "The simplest explanation is usually correct. Don't multiply entities unnecessarily. If two theories explain the data equally well, choose the simpler one. Complexity is often a mask for confusion. Simplicity is a sign of understanding.",
    category: "deep thoughts",
  },
];
