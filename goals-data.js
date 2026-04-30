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
    ],
    progress: {
      overview: "The global extreme poverty rate fell from 36% in 1990 to 8.4% in 2019 — one of humanity's greatest achievements — but COVID-19 reversed years of gains and progress toward the 2030 target has effectively stalled.",
      accomplishments: [
        "Over 1.2 billion people lifted out of extreme poverty between 1990 and 2019.",
        "China alone lifted over 800 million people out of poverty since 1978, the largest reduction in history.",
        "Social protection systems now cover about 45% of the global population, up from under 20% in 2000.",
        "Rwanda cut its poverty rate from 78% in 2000 to 38% by 2017 through targeted rural development programs.",
        "Bangladesh reduced extreme poverty from 43% to under 5% between 2000 and 2022."
      ],
      outlook: {
        status: "Off Track",
        text: "COVID-19 pushed an estimated 97 million additional people into extreme poverty in 2020. By 2030, an estimated 575 million people will still live on less than $2.15 per day if current trends continue. Conflict-affected countries now account for over 80% of the extreme poor. Without a dramatic surge in investment and policy action, SDG 1 will not be achieved on time."
      },
      leaders: [
        { name: "China", detail: "Officially declared elimination of extreme rural poverty in 2021 after lifting over 800 million people in four decades." },
        { name: "Vietnam", detail: "Poverty rate fell from 58% in 1990 to under 5% by 2022 through land reforms and export-led growth." },
        { name: "Bangladesh", detail: "Reduced extreme poverty from 43% to 5% despite being one of the world's most densely populated nations." },
        { name: "Rwanda", detail: "Pioneered community-based social protection; one of Africa's fastest poverty-reduction records." },
        { name: "Brazil", detail: "Bolsa Familia conditional cash transfer program became a global model, lifting millions in the 2000s." }
      ]
    }
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
    ],
    progress: {
      overview: "Hunger had been declining for two decades, but since 2019 the trend has sharply reversed — driven by the COVID-19 pandemic, worsening climate shocks, and armed conflicts. The world entered 2023 with more hungry people than when the goal was adopted in 2015.",
      accomplishments: [
        "Global undernourishment fell from 14.7% in 2000 to 8.0% in 2019 — a remarkable reduction.",
        "Child stunting (under-5s) declined from 32.6% in 2000 to 22.3% in 2022.",
        "Brazil achieved near-zero hunger by 2014 through its Fome Zero (Zero Hunger) program.",
        "Ethiopia achieved one of the fastest reductions in child stunting in sub-Saharan Africa via the PSNP safety net.",
        "Many countries doubled smallholder agricultural productivity through improved seeds and irrigation."
      ],
      outlook: {
        status: "Off Track",
        text: "The number of hungry people has risen for four consecutive years, reaching 733 million in 2023 — exceeding the 2015 baseline. The UN estimates the world is nearly 30 years away from ending hunger at the current pace. Achieving SDG 2 by 2030 would require at least a threefold increase in investment in food systems, plus urgent action on conflict and climate change."
      },
      leaders: [
        { name: "Brazil", detail: "Near-zero hunger achieved by 2014 through Fome Zero; twice removed from the UN world hunger map." },
        { name: "China", detail: "Dramatically reduced food insecurity through large-scale irrigation, rural support, and grain security programs." },
        { name: "Thailand", detail: "Achieved near-zero hunger through integrated agricultural development and rural poverty programs." },
        { name: "Ethiopia", detail: "One of Africa's fastest reductions in child stunting in the 2010s through the Productive Safety Net Programme." },
        { name: "India", detail: "POSHAN 2.0 mission and food subsidy schemes reduced severe malnutrition at significant scale." }
      ]
    }
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
    ],
    progress: {
      overview: "The world made extraordinary health gains between 2000 and 2019 — life expectancy rose six years, child mortality halved, and HIV/AIDS deaths plummeted. Then COVID-19 caused the largest single setback to global life expectancy since World War II, and deep structural coverage gaps remain.",
      accomplishments: [
        "Global life expectancy rose from 67 years in 2000 to 73.3 years in 2019.",
        "Under-5 child mortality fell by over 59% between 2000 and 2022, saving millions of young lives.",
        "New HIV infections fell 59% since 2000; AIDS-related deaths declined 68% due to antiretroviral therapy.",
        "Malaria deaths cut by 30% between 2000 and 2015 through bed net distribution and treatment programs.",
        "Rwanda reduced child mortality by 80% since 2000 — one of the greatest healthcare turnarounds in African history."
      ],
      outlook: {
        status: "At Risk",
        text: "COVID-19 reversed a decade of progress in life expectancy and strained health systems globally. Universal health coverage — the cornerstone of SDG 3 — remains out of reach for over 4.5 billion people. Rising antimicrobial resistance, the mental health crisis, and non-communicable diseases present growing threats. The world is tracking at roughly 60% of the pace needed to meet all SDG 3 targets by 2030."
      },
      leaders: [
        { name: "Japan", detail: "World's longest life expectancy (84 years); sustained through universal healthcare, diet, and preventive care." },
        { name: "Singapore", detail: "One of the world's most efficient healthcare systems; among the lowest infant mortality rates globally." },
        { name: "South Korea", detail: "Achieved near-universal coverage and eliminated preventable diseases through systematic public health investment." },
        { name: "Norway", detail: "Near-zero maternal mortality and one of the world's highest healthy life expectancy rates." },
        { name: "Rwanda", detail: "80% reduction in child mortality since 2000; community health worker system replicated worldwide." }
      ]
    }
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
    ],
    progress: {
      overview: "School enrollment has reached near-universal levels in most regions — a genuine achievement. But the world faces a deep learning crisis: millions of enrolled children still cannot read or do basic arithmetic, and COVID-19 school closures erased over a decade of learning progress in many countries.",
      accomplishments: [
        "Primary school net enrollment rose from 83% in 2000 to over 89% globally by 2022.",
        "Adult literacy improved from 76% to 87% between 2000 and 2022.",
        "Gender parity in primary education was largely achieved in most regions of the world.",
        "South Korea transformed from 22% adult literacy in 1945 to near 100%, leading globally in tertiary education rates.",
        "Over 180 countries now have some legal right to education enshrined in law."
      ],
      outlook: {
        status: "Off Track",
        text: "COVID-19 school closures erased an estimated 1.6 trillion student-days of instruction and pushed 244 million children out of school. More critically, 617 million children cannot read or do basic maths even after completing primary school. The UN projects 300 million children will still lack basic literacy by 2030 at the current pace. Closing the quality gap — not just the enrollment gap — is the defining education challenge of this decade."
      },
      leaders: [
        { name: "Finland", detail: "Consistently ranked #1 globally for education quality, teacher training, and equitable student outcomes." },
        { name: "South Korea", detail: "Transformed from widespread illiteracy in 1945 to near-100%; leads globally in tertiary education rates." },
        { name: "Canada", detail: "Top PISA performer; highly inclusive and well-funded public education systems across provinces." },
        { name: "Singapore", detail: "Highest PISA scores in maths and science; pioneering government-directed skills development framework." },
        { name: "Estonia", detail: "Fastest-improving education system in Europe; early digital learning integration from kindergarten." }
      ]
    }
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
    ],
    progress: {
      overview: "Legal and educational progress on gender equality has been real and measurable since 2000. But deep structural barriers — in political representation, economic participation, and gender-based violence — persist worldwide, and the pace of change remains far too slow.",
      accomplishments: [
        "Women's share of parliamentary seats grew from 13% in 2000 to 26% by 2023.",
        "Maternal mortality declined by 34% between 2000 and 2020, saving hundreds of thousands of lives.",
        "Over 160 countries now have laws criminalising domestic violence.",
        "Gender parity in primary school enrollment has been largely achieved globally.",
        "Iceland became the first country to make equal pay mandatory through legislation in 2018."
      ],
      outlook: {
        status: "Off Track",
        text: "The World Economic Forum estimates full gender equality will take over 130 years at the current pace. Female labor force participation has barely changed since 1990, sitting at around 47% globally. Only 26 countries have achieved gender parity or better in their legislatures. Violence against women remains at epidemic levels — 1 in 3 women experience physical or sexual violence in their lifetime."
      },
      leaders: [
        { name: "Iceland", detail: "Ranked #1 for gender equality 14 years running by the WEF; first country to enforce equal pay through law." },
        { name: "Rwanda", detail: "Leads the world in female parliamentary representation at 61% of seats — above any other nation." },
        { name: "New Zealand", detail: "Led by a female prime minister for 6+ years; strong policies on equal pay and paid parental leave." },
        { name: "Sweden", detail: "Pioneered feminist foreign policy; one of the world's narrowest gender wage gaps." },
        { name: "Finland", detail: "Elected the world's youngest female prime minister; near-universal paid parental leave and childcare access." }
      ]
    }
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
    ],
    progress: {
      overview: "Access to basic water and sanitation has improved significantly over two decades. But SDG 6 demands a much higher standard — safely managed water and sanitation — and on that measure, billions of people are still excluded, particularly in rural Africa and South Asia.",
      accomplishments: [
        "2.1 billion people gained access to safe drinking water between 2000 and 2022.",
        "Open defecation was halved — from 21% of the world's population in 2000 to 9% in 2022.",
        "2.4 billion people gained basic sanitation access since 2000.",
        "Singapore turned a water-scarce island into a global leader in water recycling and desalination.",
        "Over 100 countries have integrated water resources management plans in place."
      ],
      outlook: {
        status: "At Risk",
        text: "2 billion people still lack safely managed drinking water and 3.6 billion lack safely managed sanitation. Progress is highest in urban areas but virtually stalled in remote rural communities. Climate change is intensifying droughts and floods, putting existing infrastructure under increasing stress. The UN projects a 40% global freshwater supply shortfall by 2030 if current trends continue."
      },
      leaders: [
        { name: "Iceland", detail: "100% of population has safely managed water, powered by natural geothermal and glacial sources." },
        { name: "Norway", detail: "Universal safe water and sanitation access with world-class wastewater treatment infrastructure." },
        { name: "Finland", detail: "Consistently ranks highest in water security and treatment standards across the EU." },
        { name: "Singapore", detail: "Turned a water-scarce city-state into a global model through NEWater recycling and desalination." },
        { name: "Denmark", detail: "Near-zero drinking water contamination rates and strict nationwide groundwater protection policies." }
      ]
    }
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
    ],
    progress: {
      overview: "The renewable energy revolution is real and accelerating — solar became the cheapest electricity source in history. But universal electrification remains an unfinished agenda for hundreds of millions, and energy efficiency gains are nowhere near the pace required to meet 2030 targets.",
      accomplishments: [
        "Solar and wind capacity more than doubled between 2015 and 2023; solar became the cheapest electricity source ever recorded.",
        "People without electricity fell from 1.2 billion in 2010 to around 675 million by 2023.",
        "Renewables accounted for 30% of global electricity generation in 2023, up from 19% in 2010.",
        "Costa Rica generated over 99% of its electricity from renewables for multiple consecutive years.",
        "135 countries had met or exceeded their renewable energy targets as of 2022."
      ],
      outlook: {
        status: "At Risk",
        text: "Universal electricity access by 2030 looks unlikely at current rates — electrification in sub-Saharan Africa is being outpaced by population growth. Energy efficiency improvements need to triple their current pace to hit 2030 targets. Clean cooking access is a critical gap: 2.3 billion people still rely on harmful solid fuels. Massive grid infrastructure investment is needed, especially in developing regions."
      },
      leaders: [
        { name: "Iceland", detail: "Nearly 100% of electricity from geothermal and hydropower; one of the world's most carbon-neutral energy mixes." },
        { name: "Costa Rica", detail: "Generated 99%+ electricity from renewables for over 5 consecutive years; global clean energy model." },
        { name: "Norway", detail: "Over 90% of electricity from hydropower; world leader in electric vehicle adoption per capita." },
        { name: "Denmark", detail: "Generates over 60% of electricity from wind; on track to reach 100% renewable electricity." },
        { name: "Germany", detail: "Invested over $500 billion in the Energiewende (energy transition) since 2000; phasing out coal and nuclear." }
      ]
    }
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
    ],
    progress: {
      overview: "The world built a strong foundation for economic growth and decent work between 2000 and 2019. Then the COVID-19 pandemic caused the worst labor market disruption since World War II, and recovery has been deeply uneven — widening gaps between formal and informal workers, youth and adults, and richer and poorer nations.",
      accomplishments: [
        "Global real GDP per capita grew from roughly $5,700 in 2000 to over $11,500 in 2019.",
        "Global unemployment fell from 6.6% in 2000 to a historic low of 5.0% by 2019.",
        "Child labour declined from 246 million in 2000 to 160 million in 2020 — a 35% reduction.",
        "Labor productivity in developing countries grew more than twice as fast as in high-income countries from 2000 to 2015.",
        "Germany's dual apprenticeship system became a global model keeping youth unemployment below 5%."
      ],
      outlook: {
        status: "At Risk",
        text: "The pandemic wiped out 255 million full-time equivalent jobs in 2020. Child labour rose for the first time in two decades during COVID-19. Youth unemployment, informality, and rising cost-of-living crises continue to widen gaps globally. AI and automation are disrupting labour markets faster than education systems can adapt. A significant acceleration in inclusive growth policies is needed to meet 2030 targets."
      },
      leaders: [
        { name: "Germany", detail: "Among the world's lowest youth unemployment rates; globally admired apprenticeship and vocational training systems." },
        { name: "Japan", detail: "Near-full employment model; one of the lowest structural unemployment rates globally sustained over decades." },
        { name: "Netherlands", detail: "Pioneered flexible-yet-protected labour market reforms; among the world's highest labour participation rates." },
        { name: "South Korea", detail: "Transformed from poverty to high-income economy in 30 years; strong labour rights protections." },
        { name: "Switzerland", detail: "Dual education system combining apprenticeships with academic tracks keeps youth unemployment below 3%." }
      ]
    }
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
    ],
    progress: {
      overview: "Digital infrastructure and innovation have expanded faster than almost any other area covered by the SDGs — connecting billions of people who previously had no access. But a massive physical and investment divide between the Global North and South persists, and the technology revolution is widening some gaps even as it closes others.",
      accomplishments: [
        "Global internet access grew from 16% in 2005 to 66% in 2023, connecting an additional 3 billion people.",
        "Mobile money services like M-Pesa revolutionised financial access for tens of millions across Africa.",
        "Global R&D spending grew from $1.1 trillion in 2000 to $2.4 trillion in 2021.",
        "Many developing countries leapfrogged fixed-line infrastructure by deploying 4G and 5G networks directly.",
        "South Korea became the world's first country to deploy a nationwide 5G network in 2019."
      ],
      outlook: {
        status: "At Risk",
        text: "A $15 trillion infrastructure investment gap persists in developing countries. Manufacturing value-added in least developed countries has barely grown as a share of GDP. While digital connectivity expands rapidly, the quality of physical infrastructure — roads, ports, power grids — remains severely inadequate across much of Asia and sub-Saharan Africa. Only 1 in 4 people in sub-Saharan Africa has a reliable internet connection."
      },
      leaders: [
        { name: "South Korea", detail: "Highest R&D spending as % of GDP; leads globally in 5G deployment, semiconductors, and green technology." },
        { name: "Germany", detail: "Global leader in industrial automation, precision engineering, and the Industry 4.0 model." },
        { name: "Japan", detail: "World's second-largest R&D spender; leads in robotics, electronics, and transportation innovation." },
        { name: "Sweden", detail: "Top global innovation economy; birthplace of Ericsson, Spotify, and Klarna; strong startup ecosystem." },
        { name: "United States", detail: "Largest overall R&D investment globally; home to the world's leading technology and innovation ecosystem." }
      ]
    }
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
    ],
    progress: "Between 2011 and 2019, the incomes of the bottom 40% grew faster than the national average in about half of the countries with available data — a positive signal. International remittances and improved social protection systems have provided meaningful support to vulnerable populations. Yet the COVID-19 pandemic sharply reversed much of this progress: the richest 1% captured nearly twice as much new wealth as the rest of the world combined between 2020 and 2022. Tackling inequality requires bold fiscal policies, fair trade rules, and strong anti-discrimination frameworks."
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
    ],
    progress: "Urban access to improved water, sanitation, and basic services has improved across many cities. The proportion of urban residents living in slums fell from 30% to 24% globally between 2000 and 2020, though the absolute number has grown as cities expand. Many cities are now adopting climate resilience plans and investing in public transport. However, rapid urbanisation in Africa and Asia means the absolute scale of the housing and infrastructure challenge continues to grow faster than solutions are being deployed."
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
    ],
    progress: "Dozens of countries have adopted national action plans on sustainable consumption and production, and corporate sustainability reporting has expanded significantly. The circular economy is gaining traction in Europe and parts of Asia, with policies promoting product repair, reuse, and recycling. However, global material footprints remain well above sustainable levels, food waste targets have not been met, and single-use plastic pollution continues to grow. Shifting consumption patterns will require both strong regulations and changes in individual behaviour."
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
    ],
    progress: "The Paris Agreement, ratified by 197 parties, established the most comprehensive global framework ever for limiting warming to 1.5–2°C. Renewable energy investment has surged past fossil fuels in annual financing, and coal's share of global power generation is declining in many regions. Despite this momentum, current nationally determined contributions still put the world on a path toward roughly 2.5–3°C of warming by 2100. Halving emissions by 2030 — the level scientists say is necessary — would require transformational changes across energy, transport, agriculture, and industry at unprecedented speed."
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
    ],
    progress: "The share of the ocean under formal protection grew from under 1% in 2000 to nearly 8% by 2023, and a landmark UN High Seas Treaty was adopted in 2023 to extend protection to international waters. International agreements on reducing plastic pollution and ending harmful fishing subsidies have moved forward. However, ocean warming, acidification, and plastic pollution are all accelerating, and overfishing continues in roughly 35% of monitored fish stocks. Turning the tide will require significantly stronger global governance and pollution controls."
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
    ],
    progress: "Protected land areas now cover 16% of the world's terrestrial surface, up from around 10% in 2000, and reforestation programmes are scaling up across multiple continents. The Kunming-Montreal Global Biodiversity Framework, agreed in 2022, committed nations to protecting 30% of land and sea by 2030. Despite these milestones, current species extinction rates are estimated at 100 to 1,000 times higher than natural background levels, and net global forest cover continues to decline as gains in some regions are outpaced by ongoing deforestation in tropical areas."
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
    ],
    progress: "The spread of functioning democracies, wider access to civil registration, and the adoption of anti-corruption legislation in many countries represent meaningful institutional progress. Globally, homicide rates have declined over the long term, and more countries now have independent audit institutions. However, armed conflict and political violence intensified significantly after 2012, and the number of forcibly displaced people reached a record 117 million in 2023. Strengthening accountability mechanisms, protecting civic space, and investing in conflict prevention remain among the most urgent priorities for this goal."
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
    ],
    progress: "Official development assistance reached a record $204 billion in 2022, and the proportion of countries with national statistical plans is growing, improving the data needed to track all SDGs. Debt relief initiatives have provided some breathing room to the most heavily indebted developing nations. However, the annual financing gap for achieving the SDGs is estimated at $4 trillion, and geopolitical tensions are straining multilateral cooperation. Strengthening the global partnership — through fairer trade rules, technology transfer, and increased concessional finance — is the backbone upon which all other goals depend."
  }
];
