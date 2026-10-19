/**
 * Credentials shown on /about and marked up on the canonical Person entity.
 *
 * One array per group, each entry carrying both what the page renders and the
 * schema.org node it becomes, so adding a certification later (Google Ads,
 * Meta) means adding one object here and nothing else. Entries without a
 * `schema` node are covered elsewhere in the graph: the Klaviyo partnership is
 * Person.memberOf, not a credential.
 */

export interface Credential {
    /** Display name, as it reads on the page. */
    name: string;
    /** Issuer and year, as one line under the name. */
    issuer: string;
    /** Optional qualifying line, e.g. a credit-rating framework. */
    note?: string;
    /** Public verification page. Opens in a new tab. */
    verifyUrl?: string;
    /** schema.org EducationalOccupationalCredential, when the entry is one. */
    schema?: Record<string, unknown>;
}

const KLAVIYO = { "@type": "Organization", "name": "Klaviyo", "url": "https://www.klaviyo.com" };

export const CERTIFICATIONS: Credential[] = [
    {
        name: "Klaviyo Practitioner",
        issuer: "Klaviyo Academy, 2026",
        verifyUrl: "https://credential.klaviyo.com/4fad1bbd-788e-460e-a12c-b3172b770162",
        schema: {
            "@type": "EducationalOccupationalCredential",
            "name": "Klaviyo Practitioner Certificate",
            "credentialCategory": "certificate",
            "recognizedBy": KLAVIYO,
            "dateCreated": "2026-09-30",
            "expires": "2028-09-30",
            "url": "https://credential.klaviyo.com/4fad1bbd-788e-460e-a12c-b3172b770162",
        },
    },
    {
        name: "Klaviyo Sales",
        issuer: "Klaviyo Academy, 2026",
        verifyUrl: "https://credential.klaviyo.com/557248da-c19d-467b-b5ed-e41cd3447949",
        schema: {
            "@type": "EducationalOccupationalCredential",
            "name": "Klaviyo Sales Certificate",
            "credentialCategory": "certificate",
            "recognizedBy": KLAVIYO,
            "dateCreated": "2026-10-16",
            "expires": "2028-10-16",
            "url": "https://credential.klaviyo.com/557248da-c19d-467b-b5ed-e41cd3447949",
        },
    },
    {
        // Covered by Person.memberOf below rather than hasCredential: it is a
        // partnership programme, not a credential.
        name: "Klaviyo Partner (K:Partners programme)",
        issuer: "Klaviyo, 2026",
    },
    {
        name: "Certified Digital Marketing Professional",
        issuer: "Digital Marketing Institute, 2021",
        note: "Credit-rated on the Scottish Credit and Qualifications Framework (SCQF)",
        schema: {
            "@type": "EducationalOccupationalCredential",
            "name": "Certified Digital Marketing Professional",
            "credentialCategory": "professional certification",
            "recognizedBy": { "@type": "Organization", "name": "Digital Marketing Institute", "url": "https://digitalmarketinginstitute.com" },
            "dateCreated": "2021-03-29",
        },
    },
];

export const EDUCATION: Credential[] = [
    {
        name: "Postgraduate programme in Artificial Intelligence for Design",
        issuer: "IADE, Universidade Europeia, Lisbon, 2025",
        schema: {
            "@type": "EducationalOccupationalCredential",
            "name": "Postgraduate programme in Artificial Intelligence for Design",
            "credentialCategory": "postgraduate certificate",
            "recognizedBy": { "@type": "CollegeOrUniversity", "name": "IADE, Universidade Europeia" },
            "dateCreated": "2025-07-17",
        },
    },
    {
        name: "Postgraduate programme in Journalism Practice and Studies",
        issuer: "Escola Superior de Comunicação Social, Lisbon, 2019",
        schema: {
            "@type": "EducationalOccupationalCredential",
            "name": "Postgraduate programme in Journalism Practice and Studies",
            "credentialCategory": "postgraduate certificate",
            "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Escola Superior de Comunicação Social, Politécnico de Lisboa" },
            "dateCreated": "2019",
        },
    },
    {
        name: "Bachelor's degree in Fashion and Textile Design",
        issuer: "Instituto Politécnico de Castelo Branco, 2012",
        schema: {
            "@type": "EducationalOccupationalCredential",
            "name": "Bachelor's degree in Fashion and Textile Design",
            "credentialCategory": "degree",
            "educationalLevel": "Bachelor's degree",
            "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Instituto Politécnico de Castelo Branco" },
            "dateCreated": "2012-07-16",
        },
    },
];

export const CREDENTIAL_GROUPS: { title: string; items: Credential[] }[] = [
    { title: "Certifications", items: CERTIFICATIONS },
    { title: "Education", items: EDUCATION },
];

/** Person.hasCredential, derived from the same arrays the page renders. */
export const HAS_CREDENTIAL = [...CERTIFICATIONS, ...EDUCATION]
    .map((c) => c.schema)
    .filter((s): s is Record<string, unknown> => Boolean(s));

/** Person.memberOf. The partnership is a programme membership, not a credential. */
export const PROGRAM_MEMBERSHIP = {
    "@type": "ProgramMembership",
    "programName": "Klaviyo K:Partners",
    "hostingOrganization": KLAVIYO,
};

/** The Practitioner credential, for the trust line on the email pages. */
export const PRACTITIONER_URL = CERTIFICATIONS[0].verifyUrl as string;
