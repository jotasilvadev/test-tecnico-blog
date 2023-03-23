import React from "react";

interface Props {
    author: string;
}

const Footer: React.FC<Props> = ({ author }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-700 h-20 top-0 flex justify-center items-center">
            <p>
                &copy; {currentYear} |{" "}
                <a target={"_blank"} href="https://www.jotasilvadev.click/">
                    {author}
                </a>
            </p>
        </footer>
    );
};

export {Footer};
