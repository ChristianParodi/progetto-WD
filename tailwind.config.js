/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
import theme from "./src/theme";
export default withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryUnclicked: theme.colors.primaryUnclicked,
                primaryClicked: theme.colors.primaryClicked,
                secondaryUnclicked: theme.colors.secondaryUnclicked,
                secondaryClicked: theme.colors.secondaryClicked,
            },
        },
    },
    plugins: [],
});