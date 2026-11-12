/**
 * English copy for /blog/one-growth-consultant-or-three-agencies. English only
 * for now: the Portuguese twin goes through a review batch (docs/pt-review/)
 * before it gets a /pt route.
 *
 * The brand stays unnamed ("a UK food brand I worked with"), as on
 * /case-study-google-ads and /case-study-email. Linked runs are split into
 * { a, link, b } so the page places the <Link>; every word lives here.
 */
const en = {
    path: "/blog/one-growth-consultant-or-three-agencies",
    title: "One Growth Consultant or Three Agencies? What a Small E-commerce Brand Needs",
    headline: "One Growth Consultant or Three Agencies? What a Small E-commerce Brand Needs",
    description: "SEO, email and paid ads are usually bought from three suppliers. Three real examples of what gets lost between them, and when one consultant is the better choice.",
    articleSection: "Growth",
    about: ["Growth consulting", "E-commerce marketing", "Google Ads", "Klaviyo", "Search engine optimisation"],
    breadcrumb: ["Home", "Blog", "One Growth Consultant or Three Agencies?"],
    allArticles: "All articles",
    eyebrow: "Growth · E-commerce",
    readTime: " 8 min read",

    summary: {
        lead: "Short answer: ",
        text: "a small e-commerce brand usually gets more from one consultant who runs SEO, email and paid ads together than from three specialist agencies. Most of the wasted money sits between the channels, where no single agency is looking. Separate agencies start to make sense once each channel is big enough to need a team of its own.",
    },
    intro1: {
        a: "I am a ",
        consultantLink: "growth consultant",
        b: ". I work on ",
        searchLink: "search",
        c: ", ",
        klaviyoLink: "Klaviyo",
        d: ", ",
        adsLink: "paid ads",
        e: " and websites for brands that sell online, so I have an obvious interest in that answer.",
    },
    intro2: "This article is my attempt to earn it with three examples from my own work, including one that did not go well.",

    missingTitle: "Where the money goes missing",
    missing1: "Each agency reports on its own channel, and each report can be accurate. The ads agency shows cost per lead. The email agency shows open rates and flow revenue. The SEO agency shows rankings.",
    missing2: "None of those reports answers the question the owner is asking, which is whether the business made money. That answer depends on what happens when a customer moves from one channel to the next:",
    missingList: [
        "A lead bought through an ad becomes an email subscriber. Was it worth what it cost?",
        "A search term brings organic visitors every week. Is anyone bidding on it?",
        "A campaign reports a record return. Were those new customers, or people who would have bought anyway?",
    ],
    missing3: "These are questions about the joins. To answer them, one person has to be able to open the ad account, the email platform and Search Console on the same afternoon.",

    ex1Title: "Example 1: the ads worked, the follow-up did not",
    ex1p1: "Early in 2026 I built a lead campaign for a UK food brand I worked with. Google and Meta ads sent people to a Klaviyo sign-up page offering 15% off a first order. Sign-ups went into their own list, kept apart from organic subscribers so I could measure them separately. They received a welcome email with the code, then two reminders on day one and day three.",
    ex1p2: "I ran both halves: the ad campaigns and the Klaviyo flow.",
    ex1Table: {
        caption: "The lead campaign, stage by stage, from ad spend to orders from the follow-up emails",
        head: ["Stage", "Result"],
        rows: [
            ["Google Search campaign, January to April", "£677 spent, 136 leads, about £5 per lead"],
            ["Sign-up form", "About 3,000 views, 227 sign-ups"],
            ["Form completion (two steps)", "146 of 227 finished, 36% lost at step two"],
            ["Bought on day one, from the welcome email", "16 of 203 people in the flow (7.9%)"],
            ["Reminder 1", "161 delivered, 33.5% opened, 1 order"],
            ["Reminder 2", "136 delivered, 35.8% opened, 0 orders"],
        ],
    },
    ex1p3: "Seen from the ads side, this was a success. Five pounds per lead is a number most agencies would be glad to report.",
    ex1p4: "Seen from the email side, the picture was mixed. The welcome email did better than the brand's organic welcome flow, which converted 5.6%. The reminders did nothing. People who had not used the code on day one did not use it after two more emails about the same code.",
    ex1p5: "Put the two sides together and the number changes. Sixteen first orders against £677 of Google spend is £42 per first customer, before counting what Meta cost. On first orders the leads returned about 1.8x the Google spend, and the account needed 4x to break even. The £5 lead was a £42 customer.",

    listTitle: "What I did with the list",
    list1: {
        a: "The budget moved to the sales campaigns, which were ",
        link: "already above break-even",
        b: ". The list stayed.",
    },
    list2: "I added it to the Performance Max campaign in Google Ads as an audience signal, next to the Klaviyo lists of existing buyers. People who had asked for a discount on this food were a good description of who to find next. The list paid off in ads, not in email.",

    differentTitle: "What I would do differently",
    different: [
        "Sell the product in the reminders. Two more emails repeating the discount added nothing.",
        "Set the target as cost per first customer before launch. Cost per lead looked excellent and hid the real figure for weeks.",
        "Use a one-step form. A third of the people who started it never finished.",
    ],
    different2: "None of this was hard to see. It only needed someone looking at the ad spend and the flow report in the same sitting.",

    ex2Title: "Example 2: Search Console told me what to bid on",
    ex2p1: "This one has no table, because it is a habit and I did not measure it as an experiment.",
    ex2p2: "Google Search Console shows the words people type before they reach a site through organic search. It is free, and it is the customer's own vocabulary. I used those queries to choose what to target in Google Ads for the same brand.",
    ex2p3: "With separate suppliers this often does not happen. The SEO supplier has Search Console and the ads supplier has the ad account. Neither has a reason to log in to the other, so the paid campaigns are built from a keyword tool's guesses while the real list sits a few clicks away.",
    ex2p4: "It works in the other direction too. The search terms report in Google Ads shows which phrases lead to a sale, and those are the phrases worth using on product and collection pages.",

    ex3Title: "Example 3: a record month that was not good news",
    ex3p1: "The same brand ran a seasonal Performance Max campaign alongside its brand search campaign. In June I added ten search themes to the seasonal campaign. One of them was the brand's own name. That was my mistake.",
    ex3Table: {
        caption: "Return on ad spend for the brand and seasonal campaigns, June and July",
        head: ["Campaign", "June", "July"],
        rows: [
            ["Brand", "6.8x", "3.9x"],
            ["Seasonal", "6.6x", "7.9x"],
        ],
    },
    ex3p2: "In July the seasonal campaign posted a higher return, while the brand campaign fell by almost half. The seasonal campaign was showing to people who were already searching for the brand, and taking the credit for their orders. Its great number was our own customers counted in the wrong place.",
    ex3p3: "I found it because I write down every change with its date, and because I was watching both campaigns as one account. On 20 July I added a negative brand list to the seasonal campaign and removed the brand themes. The brand campaign improved the following month, and the seasonal one settled at its real level.",
    ex3p4: "This example sits inside a single channel. I include it because it shows the same habit as the first one: a good number is only good news once you know where the traffic came from.",

    compareTitle: "One consultant or three agencies, side by side",
    compare: {
        caption: "One growth consultant compared with three specialist agencies",
        head: ["", "One growth consultant", "Three specialist agencies"],
        rows: [
            ["Who does the work", "The person you speak to", "An account manager, with a team behind them"],
            ["What you get reported", "One view of the business across channels", "Three reports, one per channel"],
            ["The joins between channels", "Part of the job", "Nobody's job unless you do it yourself"],
            ["Depth in each channel", "Strong, and limited by one person's time", "Deeper, with specialists for each task"],
            ["Volume of output", "What one person can produce", "High, if you need many ads or articles a month"],
            ["Cost", "One fee", "Three retainers, plus your time to coordinate"],
            ["Best fit", "Small and growing brands", "Brands where each channel needs its own team"],
        ],
    },

    whenTitle: "When three agencies are the better choice",
    when1: "One person is the wrong answer in some situations, and it is better to say so:",
    whenList: [
        "Your ad spend is large enough to need daily attention. At that level a paid media team earns its fee.",
        "You need volume. Dozens of new ad creatives a month, or a digital PR programme, is production work for a team.",
        "You already have a head of marketing. If someone in-house owns the strategy and connects the channels, specialists reporting to that person can work well.",
        "You need a channel I do not run. I manage Google, Meta and Microsoft Ads. I have never run TikTok Ads, and I would tell you to find someone who has.",
    ],
    when2: "If none of these describes you, the more likely problem is that nobody is looking at the whole picture.",

    howTitle: "How I work",
    how1: "I start with a fixed-price growth audit. I look at search, email, paid ads and the site together, then walk you through what I found on a 60-minute call. You get a written list of what to fix, in order.",
    how2: {
        a: "After that you can stop, agree a project with a scope and price in writing, or work with me monthly for a minimum of three months. I work inside your own ad accounts, your Klaviyo and your Search Console, so everything stays with you when we finish. The options are on the ",
        link: "pricing page",
        b: ".",
    },
    how3: {
        a: "If you would like to talk it through first, ",
        link: "book a free call",
        b: ".",
    },

    faqTitle: "Frequently asked questions",
    /* One source for the visible FAQ and the FAQPage schema. */
    faqs: [
        {
            q: "Is one consultant enough to run marketing for an e-commerce brand?",
            a: "For a small or growing brand, usually yes. One consultant can run search, email and paid ads well when the budgets are modest, and will see how the channels affect each other. Once a single channel needs daily work from several people, that channel is ready for a specialist team.",
        },
        {
            q: "What does an e-commerce growth consultant do?",
            a: "A growth consultant finds where an online shop is losing sales and fixes it, across channels. In my case that covers SEO and AI search, Klaviyo email, Google, Meta and Microsoft Ads, and the website itself.",
        },
        {
            q: "Is a consultant cheaper than an agency?",
            a: "One consultant's fee is normally lower than three agency retainers added together. The larger saving tends to be the money that stops being wasted between channels, such as paying for leads that never become customers.",
        },
        {
            q: "Can you work alongside my existing agency or team?",
            a: "Yes. If you already have an agency for one channel, I can run the others and make sure the numbers are read together.",
        },
        {
            q: "How do I know if my channels are working against each other?",
            a: "Check three things. Compare cost per lead with cost per first customer. Look at whether your non-brand campaigns are showing for searches of your brand name. Ask whether anyone has compared your Search Console queries with your ad keywords.",
        },
    ],

    related: ["All services: search, email, ads and websites", "Google Ads case study: a UK food brand", "Email marketing case study"],
};

export default en;
