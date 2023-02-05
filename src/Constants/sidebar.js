import { ReactComponent as DashboardIcon } from '../Assets/dashboard.svg'
import { ReactComponent as SearchIcon } from '../Assets/search.svg'
import { ReactComponent as FiltersIcon } from '../Assets/filters.svg'
import { ReactComponent as TopicIcon } from '../Assets/topic-modelling.svg'
import { ReactComponent as ReviewIcon } from '../Assets/review.svg'
import { ReactComponent as IvisIcon } from '../Assets/ivis.svg'
import { ReactComponent as LightbulbIcon } from '../Assets/lightbulb.svg'
import { ReactComponent as FilesIcon } from '../Assets/all-files.svg'

// Consists the data of the Sidebar in the form of an array

export const sidebarConstants = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "#",
    },
    {
        title: "Search",
        icon: <SearchIcon/>,
        link: "/search",
        libraryVariable: true
    },
    {
        title: "Filter",
        icon: <FiltersIcon/>,
        link: "/filter",
        libraryVariable: true
    },
    {
        title: "Topic modelling",
        icon: <TopicIcon/>,
        link: "#"
    },
    {
        title: "Review",
        icon: <ReviewIcon/>,
        link: "#"
    },
    {
        title: "ivis",
        icon: <IvisIcon/>,
        link: "#"
    },
    {
        title: "Ai+iQ",
        icon: <LightbulbIcon/>,
        link: "#"
    },
    {
        title: "All files",
        icon: <FilesIcon/>,
        link: "#"
    },
]
