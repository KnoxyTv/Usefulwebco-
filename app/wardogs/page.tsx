export const metadata = {
  title: 'WARDOGS Quick Fire | Useful Web Co',
  description: 'Fast WARDOGS mortar and artillery firing solution calculator.',
};

export default function WardogsPage() {
  return (
    <main style={{ width: '100%', height: '100dvh', margin: 0, background: '#070b09' }}>
      <iframe
        src="/wardogs.html"
        title="WARDOGS Quick Fire"
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
      />
    </main>
  );
}
