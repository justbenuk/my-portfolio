import { fetchAllCategories } from "@/actions/category-actions";
import AllCategoriesTable from "@/components/dashboard/all-categories-table";
import CategoryPopup from "@/components/dashboard/category-popup";
import DashboardTitle from "@/components/dashboard/dashboard-title";

export const dynamic = 'force-dynamic';

export default async function CategoryPage() {
  const categories = await fetchAllCategories()
  if (!categories) return null
  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-row items-center justify-between mb-8">
        <DashboardTitle title="Categories" description="Manage your Categories" />
        <CategoryPopup type='new' />
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden p-4">
        <AllCategoriesTable categories={categories} />
      </div>
    </div>
  )
}

