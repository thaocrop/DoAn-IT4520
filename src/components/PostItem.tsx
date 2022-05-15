import Router from "next/router";
import { useCallback } from "react";
import Moment from "react-moment";

interface Props {
    image: string;
    title: string;
    date: string;
    slug: string;
    description: string;
}

export const PostItem = (props: Props) => {
    const { image, title, date, slug, description } = props;

    const handleClick = useCallback(() => {
        Router.push(`posts/${slug}`);
    }, [slug]);
    return (
        <div
            className="w-full lg:mb-0 justify-center py-4 flex flex-wrap border-t-2 border-slate-200 cursor-pointer"
            onClick={handleClick}
        >
            <img alt={title} src={image} className=" rounded-lg object-cover h-48 " />
            <div className="ml-5 md:w-full xl:w-3/4">
                <h5 className="text-xl font-bold">{title}</h5>
                <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                    <Moment format="HH:mm DD/MM/YYYY">{date}</Moment>
                </p>
                <p className="text-md font-light mt-2 text-Gray-200">{description}</p>
            </div>
        </div>
    );
};
