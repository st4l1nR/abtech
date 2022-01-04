import OrderSidebar from "../../../components/DASHBOARD/orders/OrdersSidebar";
import OrdersMain from "../../../components/DASHBOARD/orders/OrdersMain";

export default function Orders() {
    return (
        <div className='flex h-screen bg-purple-800'>
            <OrderSidebar />
            <OrdersMain />
        </div>
    )
}