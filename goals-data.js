const GOALS_DATA = [
  {
    id: 1,
    title: "No Poverty",
    subtitle: "End poverty in all its forms everywhere",
    color: "#e5243b",
    targets: [
      "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $2.15 a day.",
      "Reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions.",
      "Implement nationally appropriate social protection systems and measures for all, including floors, and achieve substantial coverage of the poor and the vulnerable.",
      "Ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources and access to basic services.",
      "Build the resilience of the poor and those in vulnerable situations and reduce their exposure to climate-related extreme events."
    ],
    facts: [
      "Over 700 million people still live in extreme poverty today.",
      "1 in 10 people worldwide earns less than $2.15 per day.",
      "COVID-19 pushed an estimated 97 million more people into poverty.",
      "Women and children are disproportionately affected by poverty worldwide."
    ]
  },
  {
    id: 2,
    title: "Zero Hunger",
    subtitle: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture",
    color: "#dda63a",
    targets: [
      "By 2030, end hunger and ensure access by all people to safe, nutritious and sufficient food all year round.",
      "End all forms of malnutrition, including achieving the internationally agreed targets on stunting and wasting in children under 5 years of age.",
      "Double the agricultural productivity and incomes of small-scale food producers.",
      "Ensure sustainable food production systems and implement resilient agricultural practices.",
      "Maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals."
    ],
    facts: [
      "Around 733 million people face hunger globally.",
      "3.1 billion people cannot afford a healthy diet.",
      "1 in 3 people worldwide suffer some form of malnutrition.",
      "Agriculture accounts for 70% of freshwater withdrawals worldwide."
    ]
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    subtitle: "Ensure healthy lives and promote well-being for all at all ages",
    color: "#4c9f38",
    targets: [
      "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births.",
      "End preventable deaths of newborns and children under 5 years of age.",
      "End the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases.",
      "Reduce by one third premature mortality from non-communicable diseases through prevention and treatment.",
      "Achieve universal health coverage, including financial risk protection and access to quality essential health-care services."
    ],
    facts: [
      "At least 400 million people lack access to basic healthcare services.",
      "Tobacco causes more than 8 million deaths each year.",
      "Mental health disorders affect 1 in 8 people globally.",
      "Road traffic injuries are the leading cause of death among young people aged 5–29."
    ]
  },
  {
    id: 4,
    title: "Quality Education",
    subtitle: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    color: "#c5192d",
    targets: [
      "By 2030, ensure all girls and boys complete free, equitable and quality primary and secondary education.",
      "Ensure all girls and boys have access to quality early childhood development and pre-primary education.",
      "Ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education.",
      "Substantially increase the number of youth and adults who have relevant skills for employment.",
      "Eliminate gender disparities in education and ensure equal access to education for the vulnerable."
    ],
    facts: [
      "244 million children and youth are still out of school worldwide.",
      "Two thirds of the world's 750 million illiterate adults are women.",
      "617 million children and adolescents lack minimum proficiency in reading and maths.",
      "Only 4% of students with disabilities in developing countries complete primary school."
    ]
  },
  {
    id: 5,
    title: "Gender Equality",
    subtitle: "Achieve gender equality and empower all women and girls",
    color: "#ff3a21",
    targets: [
      "End all forms of discrimination against all women and girls everywhere.",
      "Eliminate all forms of violence against all women and girls in the public and private spheres.",
      "Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation.",
      "Ensure women's full and effective participation and equal opportunities for leadership at all levels.",
      "Ensure universal access to sexual and reproductive health and reproductive rights."
    ],
    facts: [
      "1 in 3 women worldwide have experienced physical or sexual violence.",
      "Women earn 20% less than men on average globally.",
      "Women hold only 26% of parliamentary seats worldwide.",
      "An estimated 650 million women alive today were married before age 18."
    ]
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    subtitle: "Ensure availability and sustainable management of water and sanitation for all",
    color: "#26bde2",
    targets: [
      "By 2030, achieve universal and equitable access to safe and affordable drinking water for all.",
      "Achieve access to adequate and equitable sanitation and hygiene for all and end open defecation.",
      "Improve water quality by reducing pollution and eliminating dumping.",
      "Substantially increase water-use efficiency across all sectors.",
      "Implement integrated water resources management at all levels."
    ],
    facts: [
      "2 billion people lack access to safely managed drinking water.",
      "3.6 billion people lack safely managed sanitation.",
      "80% of wastewater flows back into the ecosystem without treatment.",
      "Water scarcity affects more than 40% of the world's population."
    ]
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    subtitle: "Ensure access to affordable, reliable, sustainable and modern energy for all",
    color: "#fcc30b",
    targets: [
      "By 2030, ensure universal access to affordable, reliable and modern energy services.",
      "Increase substantially the share of renewable energy in the global energy mix.",
      "Double the global rate of improvement in energy efficiency.",
      "Expand infrastructure and upgrade technology for supplying modern and sustainable energy services.",
      "Enhance international cooperation to facilitate access to clean energy research and technology."
    ],
    facts: [
      "675 million people still lack access to electricity.",
      "Renewable energy now makes up 30% of global electricity generation.",
      "Energy is responsible for 73% of human-caused greenhouse gas emissions.",
      "Every dollar invested in clean energy generates up to 3 times more jobs than fossil fuels."
    ]
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    subtitle: "Promote sustained, inclusive and sustainable economic growth, full employment and decent work for all",
    color: "#a21942",
    targets: [
      "Sustain per capita economic growth in accordance with national circumstances.",
      "Achieve higher levels of economic productivity through diversification and technological upgrading.",
      "Promote development-oriented policies that support productive activities and decent job creation.",
      "By 2030, achieve full and productive employment and decent work for all women and men.",
      "By 2025, end child labour in all its forms."
    ],
    facts: [
      "About 160 million children are still engaged in child labour.",
      "Around 2 billion people work informally, without social protection.",
      "The global unemployment rate was 5.3% in 2023.",
      "Youth are three times more likely to be unemployed than adults."
    ]
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    subtitle: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    color: "#fd6925",
    targets: [
      "Develop quality, reliable, sustainable and resilient infrastructure to support economic development.",
      "Promote inclusive and sustainable industrialization and significantly raise industry's share of employment.",
      "Increase the access of small-scale industrial and other enterprises to financial services.",
      "Upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency.",
      "Enhance scientific research, upgrade technological capabilities of industrial sectors."
    ],
    facts: [
      "2.6 billion people in developing countries lack access to reliable electricity.",
      "Manufacturing accounts for 16% of GDP and 14% of employment globally.",
      "Global R&D spending reached $2.4 trillion, but low-income countries invest less than 1% of GDP.",
      "Least developed countries have only 1 researcher per million inhabitants compared to 7,000 in high-income countries."
    ]
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    subtitle: "Reduce inequality within and among countries",
    color: "#dd1367",
    targets: [
      "By 2030, progressively achieve and sustain income growth of the bottom 40% of the population.",
      "By 2030, empower and promote the social, economic and political inclusion of all.",
      "Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws.",
      "Adopt policies that progressively achieve greater equality.",
      "Improve the regulation and monitoring of global financial markets and institutions."
    ],
    facts: [
      "The richest 1% captured nearly twice as much new wealth as the rest of the world since 2020.",
      "Income inequality has increased in most countries over the past 30 years.",
      "People with disabilities are twice as likely to be unemployed.",
      "Migrants send over $700 billion in remittances to developing countries each year."
    ]
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    subtitle: "Make cities and human settlements inclusive, safe, resilient and sustainable",
    color: "#fd9d24",
    targets: [
      "By 2030, ensure access for all to adequate, safe and affordable housing and basic services.",
      "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all.",
      "Enhance inclusive and sustainable urbanization and capacity for participatory human settlement planning.",
      "Strengthen efforts to protect and safeguard the world's cultural and natural heritage.",
      "By 2030, significantly reduce the number of deaths and people affected by disasters."
    ],
    facts: [
      "More than half of the world's population lives in cities — 4.4 billion people.",
      "By 2050, nearly 7 of 10 people will live in cities.",
      "More than 1 billion people still live in informal settlements and slums.",
      "Cities consume 78% of the world's energy and produce more than 60% of greenhouse gas emissions."
    ]
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    subtitle: "Ensure sustainable consumption and production patterns",
    color: "#bf8b2e",
    targets: [
      "Implement the 10-Year Framework of Programmes on Sustainable Consumption and Production.",
      "By 2030, achieve the sustainable management and efficient use of natural resources.",
      "By 2030, halve per capita global food waste at the retail and consumer levels.",
      "By 2020, achieve environmentally sound management of chemicals and all wastes.",
      "By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse."
    ],
    facts: [
      "If everyone lived like people in high-income countries, we would need 3 Earths.",
      "1.3 billion tonnes of food — one third of all food produced — is wasted annually.",
      "Only 9% of the world's plastic has ever been recycled.",
      "The fashion industry produces 10% of global carbon emissions."
    ]
  },
  {
    id: 13,
    title: "Climate Action",
    subtitle: "Take urgent action to combat climate change and its impacts",
    color: "#3f7e44",
    targets: [
      "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries.",
      "Integrate climate change measures into national policies, strategies and planning.",
      "Improve education, awareness-raising and human and institutional capacity on climate change mitigation.",
      "Implement the commitment undertaken by developed-country parties to the UNFCCC.",
      "Promote mechanisms for raising capacity for effective climate change-related planning and management."
    ],
    facts: [
      "The last decade (2011–2020) was the warmest on record.",
      "Sea levels are rising at a rate of 3.6 mm per year.",
      "Climate change could push 216 million people into internal migration by 2050.",
      "Limiting warming to 1.5°C requires cutting greenhouse gas emissions by 45% by 2030."
    ]
  },
  {
    id: 14,
    title: "Life Below Water",
    subtitle: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
    color: "#0a97d9",
    targets: [
      "By 2025, prevent and significantly reduce marine pollution of all kinds.",
      "By 2020, sustainably manage and protect marine and coastal ecosystems.",
      "Minimize and address the impacts of ocean acidification.",
      "By 2020, effectively regulate harvesting and end overfishing.",
      "By 2020, conserve at least 10 per cent of coastal and marine areas."
    ],
    facts: [
      "Oceans cover 70% of the planet and absorb 90% of excess heat from global warming.",
      "Over 3 billion people depend on marine and coastal biodiversity for their livelihoods.",
      "Around 80% of marine pollution originates from land-based activities.",
      "By 2050, there could be more plastic in the ocean than fish by weight."
    ]
  },
  {
    id: 15,
    title: "Life on Land",
    subtitle: "Protect, restore and promote sustainable use of terrestrial ecosystems",
    color: "#56c02b",
    targets: [
      "By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems.",
      "By 2020, promote the implementation of sustainable management of all types of forests.",
      "By 2030, combat desertification, restore degraded land and soil.",
      "By 2020, ensure the conservation of mountain ecosystems.",
      "Take urgent and significant action to reduce the degradation of natural habitats and halt the loss of biodiversity."
    ],
    facts: [
      "1 million animal and plant species are currently threatened with extinction.",
      "Land degradation affects 3.2 billion people and costs over $300 billion per year.",
      "Forests cover 31% of the land area on our planet.",
      "Deforestation removes 10 million hectares of forest every year."
    ]
  },
  {
    id: 16,
    title: "Peace, Justice and Strong Institutions",
    subtitle: "Promote peaceful and inclusive societies for sustainable development",
    color: "#00689d",
    targets: [
      "Significantly reduce all forms of violence and related death rates everywhere.",
      "End abuse, exploitation, trafficking and all forms of violence against and torture of children.",
      "Promote the rule of law at the national and international levels and ensure equal access to justice for all.",
      "By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery of stolen assets.",
      "Develop effective, accountable and transparent institutions at all levels."
    ],
    facts: [
      "About 1 billion people live in fragile and conflict-affected countries.",
      "1 in 4 children under 5 is unregistered — leaving them without legal identity.",
      "Corruption costs $2.6 trillion per year globally.",
      "One person is forcibly displaced every 2 seconds due to conflict or persecution."
    ]
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    subtitle: "Strengthen the means of implementation and revitalize the global partnership for sustainable development",
    color: "#19486a",
    targets: [
      "Strengthen domestic resource mobilization to improve domestic capacity for tax and revenue collection.",
      "Developed countries to fully implement official development assistance commitments.",
      "Mobilize additional financial resources for developing countries from multiple sources.",
      "Enhance international support for capacity-building in developing countries.",
      "Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system."
    ],
    facts: [
      "Official development assistance reached $204 billion in 2022, a new record.",
      "Internet access reaches 66% of the global population, leaving 2.7 billion offline.",
      "International trade has grown from 18% to 25% of global GDP over 30 years.",
      "Achieving all SDGs requires an estimated $5–7 trillion per year globally."
    ]
  }
];
