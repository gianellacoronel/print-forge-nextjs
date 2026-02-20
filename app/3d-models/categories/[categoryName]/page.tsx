import { getCategoryBySlug } from "@/app/lib/categories";
import { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;

  const category = getCategoryBySlug(categoryName);
  return <p>{category.displayName}</p>;
}
