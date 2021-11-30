import { CardModel, NavModel } from "./models";

export const COMPANYID = 'MCGAYE';
export const CLIENT = 'Client';
export const POLICY = 'POLICY';
export const PREMIUM = 'Premium';
export const PREMIUM_BENEFIT = 'Premium_Benefit';
export const BENEFIT = 'Benefit';
export const USER_POLICY = 'UserPolicy';
export const IMAGE_CROP_SIZE = 700;
export const CONFIG = 'CONFIG';
export const SERVICES: CardModel[] = [
    {
        heading: `silver`,
        body: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ex molestias incidunt voluptatibus eligendi quae! Corporis
        excepturi ipsam odio nisi eligendi voluptatibus maiores, quia nesciunt, officia quod optio illo facilis!`,
        img: `assets/images/silver.svg`,
        url: ``
    },
    {
        heading: `Platnum`,
        body: `
      
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ex molestias incidunt voluptatibus eligendi quae! Corporis
excepturi ipsam odio nisi eligendi voluptatibus maiores, quia nesciunt, officia quod optio illo facilis!
        `,
        img: `assets/images/plat.svg`,
        url: ``
    },
    {
        heading: `gold`,
        body: `

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ex molestias incidunt voluptatibus eligendi quae! Corporis
        excepturi ipsam odio nisi eligendi voluptatibus maiores, quia nesciunt, officia quod optio illo facilis!
        `,
        img: `assets/images/gold.svg`,
        url: ``
    },
];


export const MENUITEMS: NavModel[] = [
    {
        Name: `Home`,
        Url: ``
    },
    {
        Name: `About Us`,
        Url: `about-us`
    },
    {
        Name: `Top Ups`,
        Url: `our-vision-mission-values`
    },
    {
        Name: `Our Services`,
        Url: `our-services`
    },
    {
        Name: `Contact Us`,
        Url: `contact-us`

    }
]

export const ADMIN = 'Admin';
export const CUSTOMER = 'Customer';


export const DASHBOARD_MENU: NavModel[] = [
    {
        Name: `Dashboard`,
        Url: `dashboard`
    },
    {
        Name: `Clients`,
        Url: `clients`
    },
    {
        Name: `Policies`,
        Url: `policies`
    },
    {
        Name: `Benefits`,
        Url: `benefits`
    },
    {
        Name: `Claims`,
        Url: `claims`
    },
    {
        Name: `Call backs`,
        Url: `call-backs`
    }
]



export const LOGGED_IN_MENU: NavModel[] = [
    {
        Name: `Profile`,
        Url: `profile`,
        Classes: ['btn-primary']
    },
    {
        Name: `Logout`,
        Url: `logout`,
        Classes: ['btn-link']
    }
]


export const GUEST_MENU: NavModel[] = [
    {
        Name: `Login`,
        Url: `login`,
        Classes: ['btn-link']
    },
    {
        Name: `Get a qoute`,
        Url: `get-qoute`,
        Classes: ['btn-primary']
    }
]



export const MEMBERTYPES: any[] = [
    {
        Name: `Standard Premium`,
        Classes: ['btn-link']
    },
    {
        Name: `Single Member (16-65)`,
        Classes: ['btn-link']
    },
    {
        Name: `Family (Parents & Children(1-10))`,
        Classes: ['btn-primary']
    },
    {
        Name: `Member (65-85) + Children(1-10)`,
        Classes: ['btn-primary']
    },
    {
        Name: `Member (85+)`,
        Classes: ['btn-primary']
    }
]



export const PLAN_INCLUDES: any[] = [
    {
        Name: `Plan Includes`,
        Classes: ['btn-link']
    },
    {
        Name: `Cemetery`,
        Classes: ['btn-link']
    },
    {
        Name: `Home`,
        Classes: ['btn-primary']
    }
]
