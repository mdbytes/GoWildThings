'use client';

export const ScrollToTop = () => {
    function scrollToTop() {
        //window.scrollTo(0, 0);
    }

    return (
        <div>
            <button
                className="shadow btn rounded-circle back-to-top"
                onClick={scrollToTop}
            >
                <i className="bi bi-chevron-up"></i>
            </button>
        </div>
    );
};
