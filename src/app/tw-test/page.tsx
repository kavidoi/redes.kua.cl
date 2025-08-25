export default function TwTest() {
  return (
    <div className="min-h-screen p-8 space-y-6">
      <h1 className="text-3xl font-bold">Tailwind Test</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-16 bg-red-500 rounded" />
        <div className="h-16 bg-green-500 rounded" />
        <div className="h-16 bg-blue-500 rounded" />
        <div className="h-16 bg-gradient-to-r from-pink-500 to-yellow-500 rounded" />
        <div className="h-16 border border-dashed border-gray-400 rounded" />
        <div className="h-16 shadow-lg rounded" />
      </div>
      <p className="text-sm text-muted-foreground">If these blocks aren\'t colored/styled, Tailwind isn\'t being applied.</p>
    </div>
  );
}
