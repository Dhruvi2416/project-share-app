import { db } from "@/db";
import { products } from "@/db/schema";
import { asc, desc, eq } from "drizzle-orm";
import { connection } from "next/server";
import { resolve } from "path";

export async function getFeaturedProducts() {
  //Caching the function as recentlylaunched product does not re-executes this function
  "use cache";
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"));
  // .orderBy(asc(products.voteCount));
  return productsData;
}

export async function getAllProducts() {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"));
  // .orderBy(asc(products.voteCount));
  return productsData;
}

export async function getRecentlyLaunchedProducts() {
  //Dynamic rendering
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const productsData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  return productsData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo,
  );
}
