

export interface IMenu {
    id: number;
    label: string;
    url: string;
    children?: IMenu[];
}

export const menuItems = [
    {
        id: 1,
        label: "Home",
        url: "/",
    },
    {
        id: 2,
        label: "About Us",
        url: "/about-us",
        children: [
            {
                id: 21,
                label: "Why AI Ears?",
                url: "/about-us/why-ai-ears",
            },
            {
                id: 22,
                label: "Our Team",
                url: "/about-us/our-team",
                children: [
                    {
                        id: 21,
                        label: "our-team-1",
                        url: "/about-us/our-team/our-team-1",
                        children: [
                            {
                                id: 21,
                                label: "our-team-1-2",
                                url: "/about-us/our-team/our-team-1/our-team-1-2",

                            }
                        ]
                    },
                    {
                        id: 21,
                        label: "our-team-2",
                        url: "/about-us/our-team/our-team-2",
                        children: [
                            {
                                id: 21,
                                label: "our-team-2-2",
                                url: "/about-us/our-team/our-team-2/our-team-2-2",

                            }
                        ]
                    }
                ]
            },
            {
                id: 23,
                label: "Corporate",
                url: "/about-us/corporate",
            },
            {
                id: 24,
                label: "Community",
                url: "/about-us/our-community",
            },
            // {
            //   id: 23,
            //   label: "Support",
            //   url: "/about-us/support",
            // },
            {
                id: 24,
                label: "FAQs",
                url: "/about-us/FAQs",
            },
            {
                id: 25,
                label: "Contact Us",
                url: "/about-us/contact-us",
            },
        ],
    },
    {
        id: 3,
        label: "Shop",
        url: "/purchase",
        children: [
            {
                id: 31,
                label: "Golden Rose",
                url: "/purchase/product/golden",
            },
            {
                id: 32,
                label: "Platinum Gold",
                url: "/purchase/product/platinum",
            },
            {
                id: 32,
                label: "Dark Grey",
                url: "/purchase/product/dark",
            },
        ],
    },
    {
        id: 4,
        label: "Community",
        url: "/community",
    },
];
