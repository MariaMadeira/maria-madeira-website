/** English copy. See src/i18n/privacy.ts. */
const en = {
    path: "/privacy",
    title: "Privacy Policy | Maria Madeira",
    description: "How Maria Madeira, a growth consultant in Lisbon, handles the details you send through the contact form or by email, and your rights under GDPR.",
    breadcrumb: ["Home", "Privacy policy"],
    h1: "Privacy policy",
    intro: "This policy explains what personal data this website collects, why, and what you can do about it. It follows the EU General Data Protection Regulation (GDPR).",
    sections: [
        {
            title: "Who is responsible",
            paragraphs: [
                "The controller of your data is Maria Madeira, an independent growth consultant based in Lisbon, Portugal, NIF 256029342. For anything in this policy, email info@mariamadeira.com.",
            ],
        },
        {
            title: "What I collect",
            paragraphs: ["Only what you choose to send me:"],
            list: [
                "Through the contact form: your name, email address, website (optional), what you need help with (optional) and your message.",
                "By email: whatever you include in your email.",
            ],
            after: [
                "If the form can't send your message, it opens your email app with the message filled in, and you send it from there.",
                "This website sets no cookies and uses no analytics or advertising trackers. Fonts are served from this website, so opening a page sends no request to a third party.",
            ],
        },
        {
            title: "Why I use it, and the legal basis",
            list: [
                "To reply to your enquiry and, if you ask, prepare a proposal: steps taken at your request before entering into a contract (GDPR Article 6(1)(b)).",
                "To keep a record of our correspondence: my legitimate interest in being able to refer back to what was discussed and agreed (Article 6(1)(f)).",
            ],
            after: [
                "I don't add you to a mailing list, and I don't sell or share your details with anyone for marketing.",
            ],
        },
        {
            title: "Who else handles it",
            list: [
                "Formspree, Inc. delivers contact form messages to my inbox. It processes data in the United States. Its privacy policy says it transfers personal data only where the law permits and takes steps to keep it appropriately protected.",
                "Vercel Inc. hosts this website. Like any host, it keeps server logs, such as IP addresses, for security and to keep the site running. Vercel is based in the United States and certified under the EU-US Data Privacy Framework.",
                "My email provider stores the emails I send and receive.",
            ],
        },
        {
            title: "How long I keep it",
            paragraphs: [
                "Enquiries that don't lead to work are deleted within 24 months. If you become a client, our correspondence is kept for as long as the law requires, for example under accounting and tax rules.",
            ],
        },
        {
            title: "Your rights",
            paragraphs: [
                "You can ask me for access to your data, to correct or delete it, to restrict or object to how I use it, and to receive it in a portable format. Email info@mariamadeira.com and I'll reply within one month, as GDPR requires.",
                "If you think I have handled your data wrongly, you can complain to the Portuguese data protection authority, the Comissão Nacional de Proteção de Dados (CNPD), at www.cnpd.pt, or to the data protection authority where you live.",
            ],
        },
        {
            title: "Changes to this policy",
            paragraphs: [
                "If this policy changes, the new version will be published on this page with a new date.",
            ],
        },
    ] as { title: string; paragraphs?: string[]; list?: string[]; after?: string[] }[],
    updated: "Last updated: 2 November 2026",
};

export default en;
