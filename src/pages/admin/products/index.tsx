import ProductsSidebar from "../../../../components/DASHBOARD/products/ProductsSidebar"
import ProductsMain from "../../../../components/DASHBOARD/products/ProductsMain"

export default function Index() {
    return (
        <div className='flex h-screen bg-purple-800'>
            <ProductsSidebar />
            <ProductsMain />
        </div>
    )
}