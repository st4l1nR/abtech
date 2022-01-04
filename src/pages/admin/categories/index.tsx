import CategoriesSidebar from "../../../../components/DASHBOARD/categories/CategoriesSidebar"
import CategoriesMain from "../../../../components/DASHBOARD/categories/CategoriesMain"

export default function Index() {
    return (
        <div className='flex h-screen  bg-purple-800 '>
            <CategoriesSidebar />
            <CategoriesMain />
        </div>
    )
}