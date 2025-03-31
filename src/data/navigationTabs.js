import navigationIcons from "./navigationIcons";

const navigationTabs = [
    {
        "label" : "Create",
        "hasSubNav" : true,
        "icon" : navigationIcons["plus"],
        "subNavTabs" : [
            {
                "label" : "Bug",
                "link" : "/create/bug"
            },
            {
                "label" : "Epic",
                "link" : "/create/epic"
            },
            {
                "label" : "User Story",
                "link" : "/create/userstory"
            }
        ]
    }, 
    {
        "label" : "Home",
        "hasSubNav" : false,
        "icon" : navigationIcons["house"],
        "link" : "/"
    },
    {
        "label" : "My Dashboard",
        "hasSubNav" : false,
        "icon" : navigationIcons["mydashboard"],
        "link" : "/mydashboard"
    },
    {
        "label" : "Spaces",
        "hasSubNav" : false,
        "icon" : navigationIcons["spaces"],
        "link" : "/spaces"
    },
    {
        "label" : "Documents",
        "hasSubNav" : false,
        "icon" : navigationIcons["documents"],
        "link" : "/documents"
    },
    {
        "label" : "Bugs",
        "hasSubNav" : false,
        "icon" : navigationIcons["bugs"],
        "link" : "/bugs"
    },
    {
        "label" : "Epics",
        "hasSubNav" : false,
        "icon" : navigationIcons["epics"],
        "link" : "/epics"
    },
    {
        "label" : "Goals",
        "hasSubNav" : false,
        "icon" : navigationIcons["goals"],
        "link" : "/goals"
    }
]

export default navigationTabs;