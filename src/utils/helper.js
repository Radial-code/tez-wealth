import { ABOUT_LINK_PATH, CHOOSE_LINK_PATH, FAQ_LINK_PATH, HOME_LINK_PATH, SERVICE_LINK_PATH } from "./constants";

// /ABOUT DATA
export const ABOUT_TEZ_LIST = [
    {
        icon: './assets/images/svg/ai-powered.svg',
        description: 'AI-powered financial insights that help users improve net worth, reach budgeting targets, and achieve future goals.'
    },
    {
        icon: './assets/images/svg/focus.svg',
        description: 'Focus on helping users achieve FIRE (Financial Independence, Retire Early).'
    },
    {
        icon: './assets/images/svg/interest.svg',
        description: 'Interest-earning capabilities through referring to High Yield Savings Accounts.'
    },
    {
        icon: './assets/images/svg/demand.svg',
        description: 'On-demand access to human advisors⁠⁠ using existing providers and their network.'
    }
];

// SERVICE DATA
export const SERVICE_DATA_LIST = [
    {
        image:"/assets/images/webp/service-ai.webp",
        description: 'AI-powered financial insights',
    },
    {
        image: '/assets/images/webp/service-management.webp',
        description: 'Comprehensive wealth management',
    },
    {
        image: '/assets/images/webp/service-fire.webp',
        description: 'FIRE (Financial Independence, Retire Early) planning',
    },
    {
        image: '/assets/images/webp/service-interest.webp',
        description: 'Interest-earning capabilities',
    },
    {
        image: '/assets/images/webp/service-network.webp',
        description:
            'On-demand access to human advisors⁠⁠ using existing providers and their network.',
    },
]

// WEALTH DATA
export const WEALTH_DATA = [
    {
        leftImage: "./assets/images/svg/welth-left.svg",
        rightImage: "./assets/images/svg/welth-right.svg",
        items: [
            {
                icon: "./assets/images/svg/wealth-tailored.svg",
                text: "Tailored for net worth between $100k and $2 million",
            },
            {
                icon: "./assets/images/svg/wealth-advanced.svg",
                text: "Advanced AI technology for personalized advice",
            },
        ],
    },
    {
        leftImage: "./assets/images/svg/welth-left.svg",
        rightImage: "./assets/images/svg/welth-right.svg",
        items: [
            {
                icon: "./assets/images/svg/holistic.svg",
                text: "Holistic approach to wealth management",
            },
            {
                icon: "./assets/images/svg/wealth-focus.svg",
                text: "Focus on achieving financial independence",
            },
        ],
    },
    {
        items: [
            {
                icon: "./assets/images/svg/seamless.svg",
                text: "Seamless integration with your existing accounts",
            },
        ],
    },
];

// NAV DATA
export const NAV_LINK_LIST = [
    {
        link: "Home",
        url:HOME_LINK_PATH
    },
    {
        link: "About Tez Wealth",
        url: ABOUT_LINK_PATH
    },
    {
        link: "Our Services",
        url: SERVICE_LINK_PATH
    },
    {
        link: "Why Choose Tez Wealth?",
        url: CHOOSE_LINK_PATH
    },
    {
        link: "FAQs",
        url: FAQ_LINK_PATH
    },
]