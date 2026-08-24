const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const siteUrl = process.env.SITE_URL || 'https://www.gsatvik.in';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const expressLayouts = require('express-ejs-layouts');
const { type } = require('os');

app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.static(path.join(__dirname, 'public')));

const homeKeywords = 'Satvik Gupta, Satviky, Shadowveil Studio, Satvik Gupta developer, Satvik Gupta portfolio, web developer Satviky, Project Rescue Satviky, app developer Satviky, Shadowveil apps, ResQ Satviky';
const cvKeywords = 'Satvik Gupta AEC, Satvik Gupta MAKAUT, Satvik Gupta, Satviky, web developer Satviky, Satviky portfolio, Satviky resume, Satvik Gupta CV, portfolio of Satviky';
const projectsKeywords = 'Project Rescue, Project Rescue Mystery Game India, Project Rescue game by Indian devs, projects by Satviky, projects by Satvik Gupta, final year project ideas, net-banking JSP project, Spiele Zone, ResQ';
const appKeywords = 'App development projects by Satviky, app development by Satvik Gupta, Simplify Goals, Chromogram, mobile apps by Satviky, React Native apps by Satviky';
const contactKeywords = 'How to contact Satviky, how to contact Satvik Gupta, Project Rescue Satviky, Satviky email, Satviky LinkedIn, contact Satvik Gupta';
const testKeywords = 'Satviky test page, layout testing, component testing, portfolio test';

const sszHomeKeywords = 'Shadowveil Studioz, Shadowveil Studio, indie digital studio, Shadowveil apps, Shadowveil projects, Shadowveil Studioz games, interactive studio, Satviky studio';
const sszProjectsKeywords = 'Shadowveil Studioz projects, Shadowveil projects, indie game studio projects, digital experiments, interactive projects, Shadowveil prototypes';
const sszLinkKeywords = 'Shadowveil Studioz linktree, Shadowveil links, Shadowveil Studioz pages, Shadowveil profiles';
const simplifyGoalsKeywords = 'Simplify Goals, Simplify Goals app, productivity app concept, neurodivergent productivity, goal tracking app, Shadowveil Studioz productivity';

const lingoHomeKeywords = 'Lingo app, Lingo by Shadowveil Studioz, language learning app, learn languages app, Shadowveil language app';
const lingoPrivacyKeywords = 'Lingo privacy policy, Lingo app privacy, Lingo Shadowveil Studioz privacy policy, Lingo data policy';
const lingoTosKeywords = 'Lingo terms, Lingo terms of service, Lingo Shadowveil Studioz terms, Lingo app terms';

const sayoriHomeKeywords = 'Sayori bot, Sayori Discord bot, Shadowveil Studioz Sayori, interactive Discord bot, Discord bot games, Sayori bot features, Sayori discord, mafia sayori, discovery';
const sayoriPrivacyKeywords = 'Sayori privacy policy, Sayori bot privacy, Shadowveil Studioz Sayori privacy policy, Discord bot privacy policy';
const sayoriTosKeywords = 'Sayori terms of service, Sayori bot terms, Shadowveil Studioz Sayori terms, Discord bot terms';
const sayoriSDKeywords = 'Sayori mafia rules, mafia rules Discord bot, Sayori mafia game, Shadowveil Studioz mafia rules, Sayori bot, targeter role in mafia, reviver roles, what does revenger do in mafia, what does targeter do in mafia, what does reviver do in mafia, how to become a mafia in sayori bot, how does detective inspect other people?';

const sayoriMafiaKeywords = 'Sayori mafia rules, mafia rules Discord bot, Sayori mafia game, Shadowveil Studioz mafia rules, targeter role in mafia, reviver roles, what does revenger do in mafia, what does targeter do in mafia, what does reviver do in mafia, how to become a mafia in sayori bot';
const sayoriGtaKeywords = 'Guess the Agent, Sayori Guess the Agent, Shadowveil Studioz game, Sayori bot game, how do I know if I am agent Red?, Is agent red imposter in gta?';

const sGGKeywords = 'guess, sayori guess game, how to play guess game in sayori, guess the number game, guess word, guess the agent'
const sWGKeywords = 'word games, sayori word games, wordle sayori, unlimited wordle, wordle challenge, how to challenge my friend for wordle?'
const sTTKeywords = 'tea games, trivia games, anime tea, anime trivia, country tea, country trivia, geo tea, math tea, math trivia, general knowledge tea, general knowledge trivia, gktea, gktrivia, jumble tea, science tea, teacher sayori, sayori teacher mode, shadowveil studioz teas, satvikytea'
const sSFKeywords = 'simple fun, casual, casual games on sayori, easy sayori games, multiplayer but easy games to play on Sayori'
const shadowpediaSayoriKeywords =
'Shadowpedia, Sayori, Shadowveil StudioZ, Sayori Discord bot, Shadowpedia encyclopedia, Sayori wiki, Shadowveil StudioZ products';
const brandMetaDefaults = {
    personal: {
        author: 'Satvik Gupta',
        keywords: homeKeywords,
        ogImage: '/images/img-proj/PortFolio.png'
    },
    ssz: {
        author: 'Shadowveil Studioz',
        keywords: sszHomeKeywords,
        ogImage: '/images/og-ssz.png'
    },
    sayori: {
        author: 'Shadowveil Studioz',
        keywords: sayoriHomeKeywords,
        ogImage: '/images/sayori/sayori_phone.png'
    },
    none: {
        author: 'Shadowveil Studioz',
        keywords: lingoHomeKeywords,
        ogImage: '/images/og-ssz.png'
    }
};

const resolveSiteUrl = (value) => {
    if (!value) {
        return undefined;
    }

    return value.startsWith('http') ? value : new URL(value, siteUrl).toString();
};

const buildMeta = (pathname, brand, overrides = {}) => {
    const defaults = brandMetaDefaults[brand] || brandMetaDefaults.personal;
    const title = overrides.title || 'Satviky';
    const description = overrides.description || 'Portfolio of Satvik Gupta, also known as Satviky.';
    const canonical = resolveSiteUrl(overrides.canonical || pathname);
    const ogImage = resolveSiteUrl(overrides.ogImage || defaults.ogImage);

    return {
        title,
        description,
        author: defaults.author,
        keywords: defaults.keywords,
        canonical,
        ogTitle: overrides.ogTitle || title,
        ogDescription: overrides.ogDescription || description,
        ogImage,
        ...overrides,
        canonical,
        ogImage
    };
};

const renderPage = (res, view, pathname, options = {}) => {
    const brand = options.brand || 'personal';

    res.render(view, {
        ...options,
        meta: buildMeta(pathname, brand, options.meta)
    });
};

const renderLegacyPage = (res, view) => {
    res.render(view, { layout: false });
};

app.get('/', (req, res) => {
    renderPage(res, 'index', '/', {
        brand: 'personal',
        progressType: true,
        active: 'home',
        meta: {
            title: 'Satviky || Satvik Gupta',
            description: 'Portfolio of Satvik Gupta, also known as Satviky, a web developer, app builder, and founder of Shadowveil Studioz.',
            keywords: homeKeywords,
            ogTitle: 'Satvik Gupta | Satviky Portfolio',
            ogDescription: 'Visit the site to know about Satvik Gupta, web developer, creator of Project Rescue, and founder of Shadowveil Studioz.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Satvik Gupta",
            "nationality": "India",
            "birthDate": "2004-05-04",
            "email": "satvikgupta050404@gmail.com",
            "url": "https://www.gsatvik.in",
            "sameAs": [
                "https://github.com/satviky",
                "https://www.linkedin.com/in/satvik-g-27bb4a26a/"
            ],
            "jobTitle": "Founder & Developer",
            "worksFor": {
                "@type": "Organization",
                "name": "Shadowveil Studioz"
            }
        },
    });
});

app.get('/cv', (req, res) => {
    renderPage(res, 'satviky/cv', '/cv', {
        brand: 'personal',
        progressType: true,
        active: 'cv',
        meta: {
            title: 'Satviky | CV',
            description: 'Resume of Satvik Gupta.',
            keywords: cvKeywords,
            ogTitle: 'Satvik Gupta | CV',
            ogDescription: 'Resume, experience, skills, and project highlights of Satvik Gupta.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Satvik Gupta",
            "url": "https://www.gsatvik.in/cv",
            "email": "satvikgupta050404@gmail.com",
            "sameAs": [
                "https://github.com/satviky",
                "https://www.linkedin.com/in/satvik-g-27bb4a26a/"
            ]
        },
    });
});

app.get('/projects', (req, res) => {
    renderPage(res, 'satviky/projects', '/projects', {
        brand: 'personal',
        active: 'projects',
        meta: {
            title: 'Projects || Satviky',
            description: 'Projects made and currently being developed by Satviky, including Project Rescue and other web experiments.',
            keywords: projectsKeywords,
            ogTitle: 'Satviky | Projects',
            ogDescription: 'Explore Project Rescue, web experiments, and other builds by Satvik Gupta.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Satvik Gupta",
            "email": "satvikgupta050404@gmail.com",
            "url": "https://www.gsatvik.in/projects",
            "sameAs": [
                "https://github.com/Satviky?tab=repositories",
            ]
        },
    });
});

app.get('/app', (req, res) => {
    renderPage(res, 'satviky/app', '/app', {
        brand: 'personal',
        active: 'app',
        meta: {
            title: 'App Development | Satviky',
            description: 'App development projects by Satvik Gupta, including concepts like Simplify Goals and Chromogram.',
            keywords: appKeywords,
            ogTitle: 'Satviky | App Development',
            ogDescription: 'Explore mobile app ideas and app development work by Satvik Gupta.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Satvik Gupta",
            "email": "satvikgupta050404@gmail.com",
            "url": "https://www.gsatvik.in/apps",
            "sameAs": [
                "https://github.com/Satviky?tab=repositories",
            ],
            "jobTitle": "Founder & Developer",
            "worksFor": {
                "@type": "Organization",
                "name": "Shadowveil Studioz"
            }
        },
    });
});

app.get('/contact', (req, res) => {
    renderPage(res, 'contact', '/contact', {
        brand: 'personal',
        active: 'contact',
        meta: {
            title: 'Contact || Satviky',
            description: 'Contact Satvik Gupta for collaborations, freelance work, project ideas, or creative discussions.',
            keywords: contactKeywords,
            ogTitle: 'Contact',
            ogDescription: 'Get in touch with Satvik Gupta for collaborations, ideas, and project discussions.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shadowveil Studioz",
            "url": "https://www.gsatvik.in/contact",
            "email": "shadowveilstudioz@gmail.com",
            "founder": {
                "@type": "Person",
                "name": "Satvik Gupta"
            }
        }
    });
});

app.get('/error', (req, res) => {
    res.status(404);
    renderLegacyPage(res, 'not-found');
});

app.get('/test', (req, res) => {
    renderPage(res, 'test', '/test', {
        brand: 'personal',
        active: true,
        meta: {
            title: 'Testing | Satviky',
            description: 'Internal testing page for layout and component experiments.',
            keywords: testKeywords
        }
    });
});

app.get('/lt', (req, res) => {
    renderLegacyPage(res, 'lt');
});

app.get('/privacy-policy', (req, res) => {
    renderLegacyPage(res, 'privacy-policy');
});

app.get('/ToS', (req, res) => {
    renderLegacyPage(res, 'tos');
});

app.get('/shadowveil-studioZ', (req, res) => {
    renderPage(res, 'shadowveil-studioz/ssz', '/shadowveil-studioZ', {
        brand: 'ssz',
        active: true,
        meta: {
            title: 'Shadowveil Studioz',
            description: 'Shadowveil Studioz is an indie digital studio crafting interactive systems, apps, games, and story-driven experiences.',
            keywords: sszHomeKeywords,
            ogTitle: 'Shadowveil Studioz',
            ogDescription: 'Enter the experimental lab of Shadowveil Studioz and explore current digital projects.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shadowveil StudioZ",
            "url": "https://www.gsatvik.in/Shadowveil-StudioZ",
            "logo": "https://www.gsatvik.in/images/ssz-logo-def.png",
            "email": "shadowveilstudioz@gmail.com",
            "@id": "https://www.gsatvik.in/#organisation",

            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            },

            "founder": [
                {
                    "@type": "Person",
                    "name": "Satvik Gupta",
                    "url": "https://www.gsatvik.in"
                },
                {
                    "@type": "Person",
                    "name": "Saksham Gupta",
                    "url": "https://www.gsatvik.in/team#cofounder"
                }
            ],

            "description": "Shadowveil StudioZ creates narrative games, productivity tools, and digital experiences. Known for Spiele Zone and Simplify Goals.",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "business inquiries",
                "email": "shadowveilstudioz@gmail.com"
            },
            "sameAs": [
                "https://github.com/Shadowveil-StudioZ",
                "https://www.linkedin.com/company/shadowveil-studioz"
            ]
        }
    });
});

app.get('/shadowveil-studioZ/projects', (req, res) => {
    renderPage(res, 'shadowveil-studioz/ssproj', '/shadowveil-studioZ/projects', {
        brand: 'ssz',
        active: true,
        meta: {
            title: 'Shadowveil Studioz | Projects',
            description: 'Projects, experiments, and prototypes being built under Shadowveil Studioz.',
            keywords: sszProjectsKeywords,
            ogTitle: 'Shadowveil Studioz Projects',
            ogDescription: 'Explore current experiments and interactive projects by Shadowveil Studioz.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Shadowveil StudioZ - Projects",
            "url": "https://www.gsatvik.in/Shadowveil-StudioZ/projects",
            "logo": "https://www.gsatvik.in/images/ssz-logo-def.png",
            "email": "shadowveilstudioz@gmail.com",

            "sameAs": [
                "https://github.com/orgs/Shadowveil-StudioZ",
                "https://www.linkedin.com/company/shadowveil-studioz"
            ],
            "creator": {
                "@id": "https://www.gsatvik.in/#organisation"
            }
        }
    });
});

app.get('/shadowveil-studioZ/simplify-goals', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sg', '/shadowveil-studioZ/simplify-goals', {
        brand: 'ssz',
        active: true,
        meta: {
            title: 'Simplify Goals | Shadowveil Studioz',
            description: 'Simplify Goals is a productivity-focused concept by Shadowveil Studioz with notes, details, and development progress.',
            keywords: simplifyGoalsKeywords,
            ogTitle: 'Simplify Goals | Shadowveil Studioz',
            ogDescription: 'Read about Simplify Goals, a productivity system concept by Shadowveil Studioz.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Simplify Goals",
            "url": "https://www.gsatvik.in/shadowveil-studioz/simplify-goals",

            "codeRepository": "https://github.com/Satviky/Simplify-Goals",

            "creator": {
                "@id": "https://www.gsatvik.in/#organisation"
            },
            "author": {
                "@type": "Person",
                "name": "Satvik Gupta"
            }
        }
    });
});

app.get('/shadowveil-studioz/lt', (req, res) => {
    renderPage(res, 'shadowveil-studioz/lk-ssz', '/shadowveil-studioz/lt', {
        brand: 'ssz',
        active: true,
        meta: {
            title: 'Linktree | Shadowveil Studioz',
            description: 'A link hub for Shadowveil Studioz pages, projects, and related profiles.',
            keywords: sszLinkKeywords,
            ogTitle: 'Shadowveil Studioz Links',
            ogDescription: 'Browse key links and pages from Shadowveil Studioz.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Shadowveil StudioZ- Link Tree",
            "url": "https://www.gsatvik.in/Shadowveil-StudioZ/lt",
            "logo": "https://www.gsatvik.in/images/ssz-logo-def.png",
            "email": "shadowveilstudioz@gmail.com",

            "creator": {
                "@id": "https://www.gsatvik.in/#organisation"
            }
        }
    });
});

app.get('/shadowveil-studioz/lingo', (req, res) => {
    renderPage(res, 'shadowveil-studioz/lingo/lingo', '/shadowveil-studioz/lingo', {
        brand: 'none',
        active: true,
        meta: {
            title: 'Lingo',
            description: 'Lingo is a Shadowveil Studioz project focused on language learning and accessible learning experiences.',
            keywords: lingoHomeKeywords,
            ogTitle: 'Lingo | Shadowveil Studioz',
            ogDescription: 'Explore Lingo by Shadowveil Studioz.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Lingo",
            "applicationCategory": "BotApplication",
            "url": "https://www.gsatvik.in/shadowveil-studioz/lingo",
            "operatingSystem": "Discord",
            "creator": {
                "@id": "https://www.gsatvik.in/#organisation"
            },
            "author": {
                "@type": "Person",
                "name": "Satvik Gupta"
            }
        }
    });
});

app.get('/shadowveil-studioz/lingo/privacy-policy', (req, res) => {
    renderPage(res, 'shadowveil-studioz/lingo/lingo-pp', '/shadowveil-studioz/lingo/privacy-policy', {
        brand: 'none',
        active: true,
        meta: {
            title: 'Lingo - Privacy Policy | Shadowveil Studioz',
            description: 'Privacy policy for the Lingo project by Shadowveil Studioz.',
            keywords: lingoPrivacyKeywords,
            ogTitle: 'Lingo Privacy Policy',
            ogDescription: 'Read the privacy policy for Lingo by Shadowveil Studioz.'
        }
    });
});

app.get('/shadowveil-studioz/lingo/tos', (req, res) => {
    renderPage(res, 'shadowveil-studioz/lingo/lingo-tos', '/shadowveil-studioz/lingo/tos', {
        brand: 'none',
        active: true,
        meta: {
            title: 'Lingo - TOS | Shadowveil Studioz',
            description: 'Terms of service for the Lingo project by Shadowveil Studioz.',
            keywords: lingoTosKeywords,
            ogTitle: 'Lingo Terms of Service',
            ogDescription: 'Read the terms of service for Lingo by Shadowveil Studioz.'
        }
    });
});

app.get('/shadowveil-studioz/sayori', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/sayori', '/shadowveil-studioz/sayori', {
        brand: 'sayori',
        active: true,
        
        meta: {
            title: 'Sayori',
            description: 'Sayori is an interactive Discord bot by Shadowveil Studioz with games, utility features, and social interactions.',
            keywords: sayoriHomeKeywords,
            ogTitle: 'Sayori | Shadowveil Studioz',
            ogDescription: 'Meet Sayori, the interactive Discord bot by Shadowveil Studioz.'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Sayori",
            "applicationCategory": "BotApplication",
            "url": "https://www.gsatvik.in/shadowveil-studioz/sayori",
            "operatingSystem": "Discord",
            "creator": {
                "@id": "https://www.gsatvik.in/#organisation"
            },
            "author": {
                "@type": "Person",
                "name": "Saksham Gupta"
            }
        }
    });
});

app.get('/shadowveil-studioz/sayori/privacy-policy', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/sayori-prpo', '/shadowveil-studioz/sayori/privacy-policy', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Sayori - Privacy Policy',
            description: 'Privacy policy for the Sayori Discord bot by Shadowveil Studioz.',
            keywords: sayoriPrivacyKeywords,
            ogTitle: 'Sayori Privacy Policy',
            ogDescription: 'Read the privacy policy for Sayori by Shadowveil Studioz.'
        }
    });
});

app.get('/shadowveil-studioz/sayori/tos', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/sayori-tos', '/shadowveil-studioz/sayori/tos', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Sayori - TOS | Shadowveil Studioz',
            description: 'Terms of service for the Sayori Discord bot by Shadowveil Studioz.',
            keywords: sayoriTosKeywords,
            ogTitle: 'Sayori Terms of Service',
            ogDescription: 'Read the terms of service for Sayori by Shadowveil Studioz.'
        }
    });
});
app.get('/shadowveil-studioz/sayori/feedback', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/feedback', '/shadowveil-studioz/sayori/tos', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Sayori - Feedback | Shadowveil Studioz',
            description: 'Submit feedback and suggestions regarding Sayori - Discord bot by Shadowveil Studioz.',
            keywords: sayoriHomeKeywords,
            ogTitle: 'Sayori Feedbacks & Suggestions',
            ogDescription: 'Submit feedbacks and sggestions regarding Sayori by Shadowveil Studioz.'
        }
    });
});
app.get('/shadowveil-studioz/sayori/featured-servers', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/featured-servers', '/shadowveil-studioz/sayori/featured-servers', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Sayori - Featured Servers | Shadowveil Studioz',
            description: 'View and join servers featured by Sayori - Discord bot by Shadowveil Studioz.',
            keywords: sayoriHomeKeywords,
            ogTitle: 'Sayori Featured servers',
            ogDescription: 'find a server to play Sayori on.'
        }
    });
});
app.get('/shadowveil-studioz/sayori/changelog', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/changelog', '/shadowveil-studioz/sayori/changelog', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Sayori - Changelog | Shadowveil Studioz',
            description: 'Read the changelog and find how Sayori became the current Sayori you know.',
            keywords: sayoriHomeKeywords,
            ogTitle: 'Sayori Changelogs',
            ogDescription: 'Read about the new updates and upcoming updates as well.'
        }
    });
});
app.get('/shadowveil-studioz/sayori/more-commands', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/morecommands', '/shadowveil-studioz/sayori/morecommands', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Sayori - Commands | Shadowveil Studioz',
            description: 'Read about every non game command.',
            keywords: sayoriHomeKeywords,
            ogTitle: 'Sayori - Commands',
            ogDescription: 'Read about the new updates and upcoming updates as well.'
        }
    });
});

app.get('/shadowveil-studioz/sayori/mafia/rules', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/mafia-rules', '/shadowveil-studioz/sayori/mafia/rules', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Mafia Rules - Sayori Bot | Shadowveil Studioz',
            description: 'Rules and gameplay reference for the Mafia mode in the Sayori Discord bot.',
            keywords: sayoriMafiaKeywords,
            ogTitle: 'Mafia Rules | Sayori Bot',
            ogDescription: 'Learn the rules for the Mafia game mode in Sayori.'
        }
    });
});

app.get('/shadowveil-studioz/sayori/gta', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/sayori-games/gta', '/shadowveil-studioz/sayori/gta', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Guess the Agent | Shadowveil Studioz',
            description: 'Guess the Agent is a Sayori game experience by Shadowveil Studioz.',
            keywords: sayoriGtaKeywords,
            ogTitle: 'Guess the Agent | Sayori',
            ogDescription: 'Play Guess the Agent through the Sayori experience by Shadowveil Studioz.'
        }
    });
});
app.get('/shadowveil-studioz/sayori/mafia', (req, res) => {
    renderPage(res, 'shadowveil-studioz/sayori/sayori-games/mafia', '/shadowveil-studioz/sayori/mafia', {
        brand: 'sayori',
        active: true,
        meta: {
            title: 'Mafia guide | Shadowveil Studioz',
            description: 'Mafia is a Sayori game experience by Shadowveil Studioz.',
            keywords: sayoriGtaKeywords,
            ogTitle: 'Mafia Guide | Sayori',
            ogDescription: 'Play Mafia through the Sayori experience by Shadowveil Studioz.'
        }
    });
});

app.get('/shadowveil-studioz/sayori/socialdeduction', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/socialdeduction',
        '/shadowveil-studioz/sayori/socialdeduction',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Social Deduction Games - Sayori | Shadowveil Studioz',
                description:
                    'Explore social deduction games available in Sayori, including Mafia and Guess the Agent.',
                keywords: sayoriSDKeywords,
                ogTitle: 'Social Deduction Games | Sayori',
                ogDescription:
                    'Discover social deduction games available in Sayori.'
            }
        }
    );
});
app.get('/shadowveil-studioz/sayori/word-games', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/wordgames',
        '/shadowveil-studioz/sayori/wordgames',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Word Games - Sayori | Shadowveil Studioz',
                description:
                    'Explore word games available in Sayori, like guessword, wordchain, wordle.',
                keywords: sWGKeywords,
                ogTitle: 'Word Games | Sayori',
                ogDescription:
                    'Discover word games available in Sayori.'
            }
        }
    );
});
app.get('/shadowveil-studioz/sayori/guess-games', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/guess',
        '/shadowveil-studioz/sayori/guess',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Guess - Sayori | Shadowveil Studioz',
                description:
                    'Explore Guess games available in Sayori, like guessword, guess, guesstime, etc.',
                keywords: sGGKeywords,
                ogTitle: 'Guess Games | Sayori',
                ogDescription:
                    'Discover guessing games available in Sayori.'
            }
        }
    );
});
app.get('/shadowveil-studioz/sayori/tea-games', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/tea',
        '/shadowveil-studioz/sayori/tea',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Tea - Sayori | Shadowveil Studioz',
                description:
                    'Explore Tea games available in Sayori, like guessword, guess, guesstime, etc.',
                keywords: sTTKeywords,
                ogTitle: 'Tea Games | Sayori',
                ogDescription:
                    'Discover tea games available in Sayori. Tea games are rapid fire rounds which you can play alone or with your friends.'
            }
        }
    );
});
app.get('/shadowveil-studioz/sayori/trivia-games', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/trivia',
        '/shadowveil-studioz/sayori/trivia',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Trivia - Sayori | Shadowveil Studioz',
                description:
                    'Explore Tea games available in Sayori, like guessword, guess, guesstime, etc.',
                keywords: sTTKeywords,
                ogTitle: 'Trivia Games | Sayori',
                ogDescription:
                    'Discover trivia games available in Sayori.'
            }
        }
    );
});
app.get('/shadowveil-studioz/sayori/simplefun/single-player', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/simplefnsp',
        '/shadowveil-studioz/sayori/simplefunsp',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Simple Fun | Single player | Shadowveil Studioz - Sayori',
                description:
                    'Simple, easy to understand and casual games available on Sayori.',
                keywords: sSFKeywords,
                ogTitle: 'Simple Fun Games | Sayori',
                ogDescription:
                    'Discover Simple Fun games available in Sayori.'
            }
        }
    );
});
app.get('/shadowveil-studioz/sayori/simplefun/two-player', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/simplefun2p',
        '/shadowveil-studioz/sayori/simplefunsp',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Simple Fun | 2 player | Shadowveil Studioz - Sayori',
                description:
                    'Simple, easy to understand and casual games available on Sayori.',
                keywords: sSFKeywords,
                ogTitle: 'Simple Fun Games | Sayori',
                ogDescription:
                    'Discover Simple Fun games available in Sayori.'
            }
        }
    );
});
app.get('/shadowveil-studioz/sayori/simplefun/multiplayer', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/simplefunmp',
        '/shadowveil-studioz/sayori/simplefunsp',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Simple Fun | multiplayer | Shadowveil Studioz - Sayori',
                description:
                    'Simple, easy to understand and casual games available on Sayori.',
                keywords: sSFKeywords,
                ogTitle: 'Simple Fun Games | Sayori',
                ogDescription:
                    'Discover Simple Fun games available in Sayori.'
            }
        }
    );
});
app.get('/shadowveil-studioz/sayori/simplefun', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/sayori-games/simplefun',
        '/shadowveil-studioz/sayori/simple-fun',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Simple Fun | Shadowveil Studioz - Sayori',
                description:
                    'Choose between Single Player, Two Player and Multiplayer casual games available in Sayori.',
                keywords: sSFKeywords,
                ogTitle: 'Simple Fun | Sayori',
                ogDescription:
                    'Browse every Simple Fun game category available in Sayori.'
            }
        }
    );
});
app.get('/shadowveil-studioz/shadowpedia/sayori', (req, res) => {
    renderPage(
        res,
        'shadowveil-studioz/sayori/s-sayori',
        '/shadowveil-studioz/sayori/s-sayori',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Sayori | Shadowpedia | Shadowveil Studioz',
                description:
                    'Shadowpedia is a cool encyclopedia featuring people, products and characters linked to shadowveil studioz.',
                keywords: shadowpediaSayoriKeywords,
                ogTitle: 'Shadowpedia',
                ogDescription:
                    'Read about Sayori on shadowpedia'
            }
        }
    );
});
app.get('/shadowveil-studioz/shadowpedia/satviky', (req, res) => {
    renderPage(
        res,
        'shadowpedia/satviky',
        '/shadowpedia/satviky',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Satviky | Shadowpedia | Shadowveil Studioz',
                description:
                    'Shadowpedia is a cool encyclopedia featuring people, products and characters linked to shadowveil studioz.',
                keywords: homeKeywords,
                ogTitle: 'Shadowpedia',
                ogDescription:
                    'Read about Sayori on shadowpedia'
            }
        }
    );
});
app.get('/shadowveil-studioz/shadowpedia/kaddu', (req, res) => {
    renderPage(
        res,
        'shadowpedia/kaddu',
        '/shadowpedia/kaddu',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Kaddu | Shadowpedia | Shadowveil Studioz',
                description:
                    'Shadowpedia is a cool encyclopedia featuring people, products and characters linked to shadowveil studioz.',
                keywords: homeKeywords,
                ogTitle: 'Shadowpedia',
                ogDescription:
                    'Read about Sayori on shadowpedia'
            }
        }
    );
});
app.get('/shadowveil-studioz/shadowpedia/syst', (req, res) => {
    renderPage(
        res,
        'shadowpedia/syst',
        '/shadowpedia/syst',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Syst | Shadowpedia | Shadowveil Studioz',
                description:
                    'Shadowpedia is a cool encyclopedia featuring people, products and characters linked to shadowveil studioz.',
                keywords: homeKeywords,
                ogTitle: 'Shadowpedia',
                ogDescription:
                    'Read about Sayori on shadowpedia'
            }
        }
    );
});
app.get('/shadowveil-studioz/shadowpedia/endeavour', (req, res) => {
    renderPage(
        res,
        'shadowpedia/endeavour',
        '/shadowpedia/endeavour',
        {
            brand: 'sayori',
            active: true,
            meta: {
                title: 'Endeavour | Shadowpedia | Shadowveil Studioz',
                description:
                    'Shadowpedia is a cool encyclopedia featuring people, products and characters linked to shadowveil studioz.',
                keywords: homeKeywords,
                ogTitle: 'Shadowpedia',
                ogDescription:
                    'Read about Sayori on shadowpedia'
            }
        }
    );
});

app.use((req, res) => {
    res.status(404);
    renderLegacyPage(res, 'not-found');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
