export default async function DynamicRouting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Hi I&apos;m page number {id}</h1>
    </div>
  );
}
