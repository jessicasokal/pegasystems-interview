import navigationIcons from "./navigationIcons";

const navigationTabs = [
    {
        "label" : "Home",
        "icon" : navigationIcons["house"],
        "link" : "/"
    },
    {
        "label" : "My Dashboard",
        "icon" : navigationIcons["mydashboard"],
        "link" : "/mydashboard"
    },
    {
        "label" : "Spaces",
        "icon" : navigationIcons["spaces"],
        "link" : "/spaces"
    },
    {
        "label" : "Documents",
        "icon" : navigationIcons["documents"],
        "link" : "/documents"
    },
    {
        "label" : "Bugs",
        "icon" : navigationIcons["bugs"],
        "link" : "/bugs"
    },
    {
        "label" : "Epics",
        "icon" : navigationIcons["epics"],
        "link" : "/epics"
    },
    {
        "label" : "Goals",
        "icon" : navigationIcons["goals"],
        "link" : "/goals"
    }
]

export default navigationTabs;