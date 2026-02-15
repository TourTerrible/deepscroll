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
  {
    id: "21",
    title: "Margin of Safety",
    body: "Build buffers against error. In investing, buy below intrinsic value. In engineering, overdesign for stress. In life, leave room for uncertainty. Precision assumptions break; buffers absorb volatility. (The Intelligent Investor – Benjamin Graham)",
    category: "risk management",
  },
  {
    id: "22",
    title: "Regression to the Mean",
    body: "Extreme outcomes are often followed by more typical ones. Exceptional performance frequently normalizes. Don’t over-attribute skill to outliers or panic over temporary lows. Randomness rebalances. (Statistics; discussed in Thinking, Fast and Slow – Daniel Kahneman)",
    category: "probability",
  },
  {
    id: "23",
    title: "Local vs Global Optima",
    body: "Improving what exists can trap you in a suboptimal peak. True progress may require temporary decline before reaching a higher maximum. Short-term discomfort enables structural improvement. (Optimization theory; common in computer science)",
    category: "systems thinking",
  },
  {
    id: "24",
    title: "Power Laws",
    body: "Outcomes are not evenly distributed. A few winners dominate results. In venture capital, one investment pays for the fund. In content, a few pieces drive most traffic. Position for asymmetric upside. (Fooled by Randomness – Nassim Nicholas Taleb)",
    category: "leverage",
  },
  {
    id: "25",
    title: "The Red Queen Effect",
    body: "You must keep improving just to stay in place. Competitive systems evolve continuously. Standing still is regression. Sustainable advantage requires constant adaptation. (Evolutionary biology; popularized in business literature)",
    category: "strategy",
  },
  {
    id: "26",
    title: "Cognitive Dissonance",
    body: "When actions and beliefs conflict, the mind adjusts beliefs to reduce discomfort. Rationalization protects identity. Intellectual honesty requires tolerating psychological friction. (A Theory of Cognitive Dissonance – Leon Festinger)",
    category: "behavioral bias",
  },
  {
    id: "27",
    title: "The Halo Effect",
    body: "We generalize from one positive trait to assume overall excellence. A charismatic founder is assumed competent. A prestigious degree implies intelligence. Separate attributes; avoid global judgments. (Thinking, Fast and Slow – Daniel Kahneman)",
    category: "behavioral bias",
  },
  {
    id: "28",
    title: "Game Theory – Incentives Matter",
    body: "Behavior follows incentives, not intentions. Change the payoff structure and behavior shifts. In negotiations, understand the other party’s utility function before proposing solutions. (The Evolution of Cooperation – Robert Axelrod)",
    category: "strategy",
  },
  {
    id: "29",
    title: "Chesterton’s Fence",
    body: "Before removing a rule, understand why it exists. Systems often encode hard-earned lessons. Eliminate only after comprehension, not impatience. (G.K. Chesterton essays)",
    category: "systems thinking",
  },
  {
    id: "30",
    title: "The Overton Window",
    body: "Publicly acceptable ideas shift over time. What is radical today may be mainstream tomorrow. Influence often works by gradually moving the boundary of discourse. (Political theory)",
    category: "power dynamics",
  },
  {
    id: "31",
    title: "Diminishing Returns",
    body: "Initial effort yields large gains; additional effort yields progressively smaller improvements. Past a threshold, optimization wastes resources. Identify when marginal gains turn inefficient. (Economic theory)",
    category: "decision theory",
  },
  {
    id: "32",
    title: "The Peter Principle",
    body: "People are promoted to their level of incompetence. Success in one domain does not guarantee competence at the next level. Design roles based on skills, not tenure. (The Peter Principle – Laurence J. Peter)",
    category: "organizational behavior",
  },
  {
    id: "33",
    title: "Narrative Fallacy",
    body: "Humans impose coherent stories on random events. We prefer explanation over uncertainty. Beware of clean narratives explaining complex outcomes. Reality is often messy. (The Black Swan – Nassim Nicholas Taleb)",
    category: "epistemology",
  },
  {
    id: "34",
    title: "Loss Aversion",
    body: "Losses hurt more than equivalent gains feel good. This distorts risk-taking and decision-making. Evaluate probabilities objectively; emotional asymmetry misprices risk. (Prospect Theory – Kahneman & Tversky)",
    category: "behavioral bias",
  },
  {
    id: "35",
    title: "Agency",
    body: "High-agency individuals assume problems are solvable. Instead of waiting for permission, they adjust constraints. Systems reward those who modify environments rather than complain about them. (Startup culture; common in entrepreneurial literature)",
    category: "execution",
  },
  {
    id: "36",
    title: "The Flywheel Effect",
    body: "Momentum builds gradually. Consistent small pushes create acceleration over time. Breakthrough results often appear sudden but are cumulative. (Good to Great – Jim Collins)",
    category: "leverage",
  },
  {
    id: "37",
    title: "Optionality",
    body: "Preserve choices when uncertainty is high. Flexibility is a form of power. Avoid commitments that eliminate upside without compensation. (Antifragile – Nassim Nicholas Taleb)",
    category: "risk management",
  },
  {
    id: "38",
    title: "Status Games",
    body: "Much human behavior is driven by perceived rank. Compete in games you understand. Opt out of games that distort values. Not all status hierarchies are worth entering. (Finite and Infinite Games – James Carse)",
    category: "social dynamics",
  },
  {
    id: "39",
    title: "The Law of Requisite Variety",
    body: "Control systems must be as complex as the environment they regulate. Oversimplified strategies fail in complex environments. Match sophistication to reality. (Cybernetics – W. Ross Ashby)",
    category: "systems thinking",
  },
  {
    id: "40",
    title: "Entropy",
    body: "Disorder increases without maintenance. Systems decay unless energy is applied. Relationships, codebases, bodies—neglect accelerates deterioration. Stability requires continuous input. (Thermodynamics; applied metaphorically in systems design)",
    category: "fundamentals",
  },

];
