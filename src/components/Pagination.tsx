import { useCallback, useMemo } from "react";

interface Props {
    page: number;
    totalPage: number;
    handlePage?: (page: number) => void;
}

export const Pagination = (props: Props) => {
    const { page, totalPage, handlePage } = props;

    const handleNextPage = () => {
        if (page < totalPage && handlePage) {
            handlePage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1 && handlePage) {
            handlePage(page - 1);
        }
    };

    const handleFirstPage = useCallback(() => {
        if (handlePage) {
            handlePage(1);
        }
    }, [handlePage]);

    const handleLastPage = useCallback(() => {
        if (handlePage) {
            handlePage(totalPage);
        }
    }, [handlePage, totalPage]);

    return (
        <div className="py-2 flex justify-center ">
            <nav className="block text-center">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    <li>
                        <a
                            onClick={handleFirstPage}
                            href="javascript:void(0)"
                            className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-slate-500 bg-white text-slate-500"
                        >
                            <i className="fas fa-chevron-left -ml-px"></i>
                            <i className="fas fa-chevron-left -ml-px"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:void(0)"
                            onClick={handlePreviousPage}
                            className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-slate-500 bg-white text-slate-500"
                        >
                            <i className="fas fa-chevron-left -ml-px"></i>
                        </a>
                    </li>
                    {[...Array(totalPage)].map((item, index) => (
                        <li key={index}>
                            <a
                                onClick={() => {
                                    if (handlePage) {
                                        handlePage(index + 1);
                                    }
                                }}
                                href="javascript:void(0)"
                                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-slate-500 ${
                                    index + 1 === page
                                        ? "text-white bg-slate-500"
                                        : "bg-white text-slate-500"
                                }`}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            onClick={handleNextPage}
                            href="javascript:void(0)"
                            className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-slate-500 bg-white text-slate-500"
                        >
                            <i className="fas fa-chevron-right -mr-px"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={handleLastPage}
                            href="javascript:void(0)"
                            className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-slate-500 bg-white text-slate-500"
                        >
                            <i className="fas fa-chevron-right -mr-px"></i>
                            <i className="fas fa-chevron-right -mr-px"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
