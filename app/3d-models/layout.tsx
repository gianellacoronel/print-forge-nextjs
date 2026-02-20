import Link from "next/link";
import { getAllCategories } from "../lib/categories";
import type { ReactNode } from "react";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories = getAllCategories();
  return (
    <div>
      <nav>
        <Link href="/3d-models">All</Link>
        {categories.map((category) => (
          <Link
            href={`/3d-models/categories/${category.slug}`}
            key={category.slug}
          >
            {category.displayName}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
