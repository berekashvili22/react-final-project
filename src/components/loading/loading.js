import { ThreeBounce } from 'better-react-spinkit';

function Loading() {
    return (
        <>
            <div className="loading-contaianer">
                <ThreeBounce></ThreeBounce>
            </div>
            <style jsx>{`
                div {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    );
}

export default Loading;
