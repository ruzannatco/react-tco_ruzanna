export const NAVBAR_LINKS = {
    project: {
        link: "project",
        label: "Project",
    },
    contact: {
        link: "contact",
        label: "Contact",
    },
    aboutMe: {
        link: "",
        label: "About Me",
    },
};

export const SORT_FIELDS = [
    { label: 'A - Z', value: "a-z" },
    { label: 'Z - A', value: "z-a" },
    { label: 'Created newest', value: "creation_date_newest" },
    { label: 'Created oldest', value: "creation_date_oldest" },
    { label: 'Completed newest', value: "completion_date_newest" },
    { label: 'Completed oldest', value: "completion_date_oldest" }
]

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const STATUS_LIST = [
    {
        value: 'active',
        label: 'Active'
    },
    {
        value: 'done',
        label: 'Done'
    }
]