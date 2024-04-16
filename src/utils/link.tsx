import clsx from "clsx";
import { Link as Route, useMatch } from "react-router-dom";


export default function Link({ children, to, className }: { children: React.ReactNode; to: string, className?: string }) {
    const match = useMatch(to);

    return (
        <Route to={to} className={clsx({ "bg-base-content bg-opacity-[0.1]": match }, { [className || ""]: className})}>
            {children}
        </Route>
    );
}
