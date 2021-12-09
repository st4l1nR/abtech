import Sidebar from '../../../components/DASHBOARD/Admin-idx/Sidebar';
import SidebarMain from "../../../components/DASHBOARD/Admin-idx/SidebarMain";
import Head from 'next/head';

export default function Index() {
    return (
        <div className='flex h-screen bg-purple-800'>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Sidebar />
            <SidebarMain />
        </div>
    )
}