import { ReactComponent as DashboardIcon } from '../Assets/dashboard.svg'
import { ReactComponent as SearchIcon } from '../Assets/search.svg'
import { ReactComponent as FiltersIcon } from '../Assets/filters.svg'
import { ReactComponent as TopicIcon } from '../Assets/topic-modelling.svg'
import { ReactComponent as ReviewIcon } from '../Assets/review.svg'
import { ReactComponent as IvisIcon } from '../Assets/ivis.svg'
import { ReactComponent as LightbulbIcon } from '../Assets/lightbulb.svg'
import { ReactComponent as FilesIcon } from '../Assets/all-files.svg'

export const sidebarConstants = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        linkRef: "dashboard"
    },
    {
        title: "Search",
        icon: <SearchIcon/>,
        linkRef: "dashboard"
    },
    {
        title: "Filter",
        icon: <FiltersIcon/>,
        linkRef: "dashboard"
    },
    {
        title: "Topic modelling",
        icon: <TopicIcon/>,
        linkRef: "dashboard"
    },
    {
        title: "Review",
        icon: <ReviewIcon/>,
        linkRef: "dashboard"
    },
    {
        title: "ivis",
        icon: <IvisIcon/>
    },
    {
        title: "Ai+iQ",
        icon: <LightbulbIcon/>
    },
    {
        title: "All files",
        icon: <FilesIcon/>
    },
]
