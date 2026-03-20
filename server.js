const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const siteUrl = process.env.SITE_URL || 'https://www.gsatvik.in';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const expressLayouts = require('express-ejs-layouts');

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

const sayoriHomeKeywords = 'Sayori bot, Sayori Discord bot, Shadowveil Studioz Sayori, interactive Discord bot, Discord bot games, Sayori bot features';
const sayoriPrivacyKeywords = 'Sayori privacy policy, Sayori bot privacy, Shadowveil Studioz Sayori privacy policy, Discord bot privacy policy';
const sayoriTosKeywords = 'Sayori terms of service, Sayori bot terms, Shadowveil Studioz Sayori terms, Discord bot terms';
const sayoriMafiaKeywords = 'Sayori mafia rules, mafia rules Discord bot, Sayori mafia game, Shadowveil Studioz mafia rules';
const sayoriGtaKeywords = 'Guess the Agent, Sayori Guess the Agent, Shadowveil Studioz game, Sayori bot game';

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
        ogImage: '/images/op-ssz.png'
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
            "url": "https://www.gsatvik.in",
            "image": "",
            "sameAs": [
                "https://github.com/satviky",
                "https://www.linkedin.com/in/satvik-g-27bb4a26a/"
            ]
        }
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
        }
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
        }
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
        }
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
            ogTitle: 'Contact Satviky',
            ogDescription: 'Get in touch with Satvik Gupta for collaborations, ideas, and project discussions.'
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

app.use((req, res) => {
    res.status(404);
    renderLegacyPage(res, 'not-found');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
