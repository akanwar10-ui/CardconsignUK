const listings = [
  { name: '1999 Pokémon Base Set Charizard', grade: 'PSA 9', status: 'Live auction', price: '£2,450' },
  { name: '2003-04 Topps Chrome LeBron James', grade: 'BGS 8.5', status: 'Consigned', price: '£1,180' },
  { name: '2018 Panini Prizm Mbappé', grade: 'PSA 10', status: 'Grading', price: '£640' },
  { name: '1996 Pokémon Japanese Blastoise', grade: 'CGC 8', status: 'Live auction', price: '£515' },
]

const steps = [
  { title: 'Send your cards', body: 'Free insured tracked postage from anywhere in the UK.' },
  { title: 'We grade & list', body: 'Photography, grading submission and marketplace listing handled for you.' },
  { title: 'Get paid', body: 'Funds cleared to your bank within 5 working days of sale.' },
]

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 32px',
          background: 'var(--surface)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 18 }}>
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'var(--accent)',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              fontSize: 14,
            }}
          >
            C
          </span>
          CardConsign UK
        </div>
        <nav style={{ display: 'flex', gap: 24, fontSize: 14, color: 'var(--muted)' }}>
          <span>How it works</span>
          <span>Consignments</span>
          <span>Pricing</span>
        </nav>
      </header>

      <main
        style={{
          width: '100%',
          maxWidth: 1040,
          margin: '0 auto',
          padding: '48px 32px 64px',
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
      >
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
          <h1 style={{ margin: 0, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Consign your trading cards, we handle the rest
          </h1>
          <p style={{ margin: 0, fontSize: 18, color: 'var(--muted)', lineHeight: 1.6 }}>
            Grading, photography, listing and payouts for UK collectors selling sports and TCG singles.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <button
              style={{
                padding: '12px 20px',
                borderRadius: 10,
                border: 'none',
                background: 'var(--accent)',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Start a consignment
            </button>
            <button
              style={{
                padding: '12px 20px',
                borderRadius: 10,
                border: '1px solid var(--line)',
                background: 'var(--surface)',
                color: 'var(--ink)',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              View live auctions
            </button>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {steps.map((s, i) => (
            <div
              key={s.title}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 12,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>Step {i + 1}</span>
              <strong style={{ fontSize: 16 }}>{s.title}</strong>
              <span style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>{s.body}</span>
            </div>
          ))}
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ margin: 0, fontSize: 22 }}>Recent consignments</h2>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            {listings.map((l, i) => (
              <div
                key={l.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr auto',
                  gap: 16,
                  alignItems: 'center',
                  padding: '14px 20px',
                  borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                  fontSize: 14,
                }}
              >
                <span style={{ fontWeight: 600 }}>{l.name}</span>
                <span style={{ color: 'var(--muted)' }}>{l.grade}</span>
                <span style={{ color: 'var(--muted)' }}>{l.status}</span>
                <span style={{ fontWeight: 700 }}>{l.price}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer
        style={{
          borderTop: '1px solid var(--line)',
          background: 'var(--surface)',
          padding: '20px 32px',
          fontSize: 13,
          color: 'var(--muted)',
        }}
      >
        CardConsign UK — consignment platform starter
      </footer>
    </div>
  )
}
