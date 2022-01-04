import Navbar from '../../components/CLIENT/Navbar/Navbar';
import Home from '../../components/CLIENT/Home/Home';
import Services from '../../components/CLIENT/Services/Services';
import SectionProduct from '../../components/CLIENT/SectionProduct/SectionProduct';
import Head from 'next/head';

export default function() {
    return (
        <div className='h-auto w-full bg-white z-10'>
            <Head>
                <title>Cepesito | Home</title>
            </Head>
            <Navbar />
            <Home />
            <Services />
            <SectionProduct />
            <script src="https://unpkg.com/scrollreveal"></script>
        </div>
    )
}