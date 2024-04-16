import { FaArrowRight } from "react-icons/fa6";
import { IoMdHome, IoIosNotificationsOutline } from "react-icons/io";
import { IoPeople, IoChatbubbleSharp } from "react-icons/io5";
import { PiSelectionForegroundFill } from "react-icons/pi";

export const LinkItems = [
    {
        url: '',
        name: 'Home',
        icon: IoMdHome,
    },
    {
        url: '/artfeeds',
        name: 'Art Feeds',
        icon: IoPeople,
    },
    {
        url: '/articles',
        name: 'Artiles',
        icon: PiSelectionForegroundFill,
    },
    {
        url: '/library',
        name: 'Library',
        icon: IoChatbubbleSharp,
    },
    {
        url: '',
        name: 'Notifications',
        icon: IoIosNotificationsOutline,
    },
]

export const ActionLinks = [
    {
        url: '',
        name: 'Followed Authors',
        icon: FaArrowRight,
    },
    {
        url: '',
        name: 'Followed Readers',
        icon: FaArrowRight,
    },
    {
        url: '',
        name: 'My Teams',
        icon: FaArrowRight,
    }
]

