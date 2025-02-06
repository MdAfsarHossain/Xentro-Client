import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Xentro | Home</title>
            </Helmet>
            <div className='flex flex-col justify-center items-center h-52 lg:h-[550px] gap-4'>
                <h1 className='text-4xl lg:text-5xl uppercase font-bold'>Welcome to the</h1>
                <h1 className='text-4xl lg:text-5xl uppercase font-bold text-green-500'>Xentro Info Tech</h1>
            </div>
        </>
    );
};

export default Home;