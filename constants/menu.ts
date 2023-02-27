
export default [
    {title: "Leads", icon: "stock", route: "/leads"},
    {title: "Roles", icon: "role", route: "/roles"},
    {title: "Employees", icon: "stock", route: "/employees"},
    {title: "Teachers", icon: "stock"},
    {title: "Rooms", icon: "stock"},
    {title: "Groups", icon: "stock", route: "/finance/product-services"},
    {title: "Students", icon: "stock"},
    {title: "Finance", icon: "stock"},
    {title: "Reports", icon: "stock"},
    {title: "Tasks", icon: "stock"},
    {title: "Action history", icon: "stock"},
];

export const settingConstants = {
    title: "Settings",
    icon: "stock",
    route: "/settings",
    child: [
        {title: "Company Settings", route: "/settings/company-settings"},
        {title: "Academic Settings", route: "/settings/academic-settings"},
        {title: "Students balance"},
        {title: "Payment statistics"},
        {title: "Salary"},
        {title: "Cashflow"},
    ],
};
