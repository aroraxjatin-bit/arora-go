import { createFileRoute, notFound } from "@tanstack/react-router";
import { findPackage, packages } from "@/data/packages";
import { PackageDetail } from "@/components/PackageDetail";

const VALID_SLUGS = new Set(packages.map((p) => p.slug));

export const Route = createFileRoute("/$slug")({
  beforeLoad: ({ params }) => {
    if (!VALID_SLUGS.has(params.slug)) throw notFound();
  },
  loader: ({ params }) => {
    const pkg = findPackage(params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => {
    const pkg = loaderData?.pkg;
    if (!pkg) return { meta: [{ title: "Package — AroraGo" }] };
    return {
      meta: [
        { title: `${pkg.emoji} ${pkg.name} — ${pkg.duration} | AroraGo` },
        { name: "description", content: `${pkg.name} from Delhi by private cab. ${pkg.duration} / ${pkg.nights}. Starting at ₹${pkg.price.toLocaleString("en-IN")} (${pkg.discount}% off). Expert-guided yatra by AroraGo.` },
        { property: "og:title", content: `${pkg.emoji} ${pkg.name} — AroraGo` },
        { property: "og:description", content: pkg.subtitle ?? `${pkg.duration} expert-guided yatra from Delhi by private cab.` },
        { property: "og:image", content: pkg.heroImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: pkg.heroImage },
      ],
    };
  },
  component: PackageRoute,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-3xl font-bold text-deep-green">Package not found</h1>
        <p className="mt-2 text-muted-foreground">This yatra doesn't exist. Browse all packages on the homepage.</p>
      </div>
    </div>
  ),
});

function PackageRoute() {
  const { pkg } = Route.useLoaderData();
  return <PackageDetail pkg={pkg} />;
}
