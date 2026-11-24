import { useState } from 'react';

const categories = ['Dosas', 'Sides', 'Drinks'] as const;
type Category = (typeof categories)[number];

type Illustration =
  | 'masala-dosa'
  | 'plain-dosa'
  | 'onion-dosa'
  | 'mysore-dosa'
  | 'idli'
  | 'vada'
  | 'sambar'
  | 'chutney'
  | 'coffee'
  | 'chai'
  | 'lassi'
  | 'lime';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  note: string;
  illustration: Illustration;
};

const sampleMenu: Record<Category, MenuItem[]> = {
  Dosas: [
    {
      name: 'Masala Dosa',
      description: 'A crisp rice-and-lentil crêpe wrapped around gently spiced potatoes.',
      price: '$12',
      note: 'A savory classic',
      illustration: 'masala-dosa',
    },
    {
      name: 'Plain Dosa',
      description: 'A golden, delicate crêpe with a satisfying crunch.',
      price: '$9',
      note: 'Simple & crisp',
      illustration: 'plain-dosa',
    },
    {
      name: 'Onion Dosa',
      description: 'A golden dosa scattered with onions for a savory bite.',
      price: '$11',
      note: 'Golden & fragrant',
      illustration: 'onion-dosa',
    },
    {
      name: 'Mysore Masala Dosa',
      description: 'A crisp dosa with a spicy red chutney and potato filling.',
      price: '$13',
      note: 'A little heat',
      illustration: 'mysore-dosa',
    },
  ],
  Sides: [
    {
      name: 'Idli',
      description: 'Soft, steamed rice-and-lentil cakes, light and comforting.',
      price: '$6',
      note: 'Soft & fluffy',
      illustration: 'idli',
    },
    {
      name: 'Medu Vada',
      description: 'Golden lentil fritters with a crisp outside and tender center.',
      price: '$7',
      note: 'Crisp & savory',
      illustration: 'vada',
    },
    {
      name: 'Sambar',
      description: 'A warming lentil and vegetable stew with aromatic spices.',
      price: '$5',
      note: 'Warm & cozy',
      illustration: 'sambar',
    },
    {
      name: 'Coconut Chutney',
      description: 'A creamy coconut accompaniment with a gently savory finish.',
      price: '$3',
      note: 'A little something extra',
      illustration: 'chutney',
    },
  ],
  Drinks: [
    {
      name: 'Filter Coffee',
      description: 'A South Indian-style coffee, rich and traditionally served with milk.',
      price: '$4',
      note: 'A comforting classic',
      illustration: 'coffee',
    },
    {
      name: 'Masala Chai',
      description: 'Black tea simmered with warming spices and milk.',
      price: '$4',
      note: 'Spiced & soothing',
      illustration: 'chai',
    },
    {
      name: 'Mango Lassi',
      description: 'A creamy yogurt drink with the sunny sweetness of mango.',
      price: '$6',
      note: 'Cool & creamy',
      illustration: 'lassi',
    },
    {
      name: 'Lime Soda',
      description: 'A bright, bubbly lime drink for a refreshing sip.',
      price: '$4',
      note: 'Bright & bubbly',
      illustration: 'lime',
    },
  ],
};

/** Small, original vector illustrations; the adjacent text names each dish. */
function DishIllustration({ kind }: { kind: Illustration }) {
  const isDosa = kind.endsWith('-dosa');
  const isCup = kind === 'coffee' || kind === 'chai';
  const isGlass = kind === 'lassi' || kind === 'lime';

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 160 96"
      style={{ display: 'block', width: '100%', maxWidth: 190, height: 108, margin: '0.35rem auto 0.8rem' }}
    >
      <circle cx="80" cy="45" r="39" fill="#f8eddb" />
      <path d="M20 30l2 3 3 1-3 1-2 3-1-3-3-1 3-1zM139 17l2 3 3 1-3 1-2 3-1-3-3-1 3-1z" fill="#d79757" />
      <ellipse cx="80" cy="77" rx="55" ry="7" fill="#e7d6b9" />

      {isDosa && (
        <g stroke="#9b512c" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M25 59c7-11 20-23 43-30 11-3 29-2 54 6l14 18c-22-7-42-8-57-4-22 5-39 15-54 10z" fill="#d98a3c" />
          <path d="M25 59c15 5 32-5 54-10 15-4 35-3 57 4-9 12-26 17-49 16-26-1-46-3-62-10z" fill="#e8a653" />
          <path d="M39 54c19-9 39-18 62-15M46 60c19-8 39-15 61-13" fill="none" stroke="#bf7133" opacity=".7" />
          <path d="M33 58c4 0 7-2 10-4M115 51l8 3" fill="none" stroke="#f8d99d" strokeWidth="2" />
          {kind === 'masala-dosa' && <><circle cx="67" cy="48" r="3" fill="#eebc58" /><circle cx="82" cy="44" r="2.5" fill="#eebc58" /><path d="M74 48l3-4 3 4" fill="#688047" stroke="none" /></>}
          {kind === 'onion-dosa' && <><path d="M60 49c3-5 7-5 8 0M77 45c3-5 7-5 8 0M94 45c3-5 7-5 8 0" fill="none" stroke="#f6e6df" strokeWidth="2.5" /></>}
          {kind === 'mysore-dosa' && <><circle cx="65" cy="48" r="2.5" fill="#af3e2c" stroke="none" /><circle cx="81" cy="44" r="2.5" fill="#af3e2c" stroke="none" /><circle cx="97" cy="44" r="2.5" fill="#af3e2c" stroke="none" /></>}
        </g>
      )}

      {kind === 'idli' && (
        <g stroke="#c4a988" strokeWidth="1.5">
          <ellipse cx="68" cy="58" rx="27" ry="15" fill="#fff9eb" />
          <ellipse cx="96" cy="53" rx="27" ry="15" fill="#fffdf4" />
          <path d="M49 57c7-7 19-9 29-6M79 51c7-7 20-8 30-4" fill="none" stroke="#e6dac6" />
          <circle cx="55" cy="53" r="1" fill="#e4d6bf" stroke="none" /><circle cx="100" cy="49" r="1" fill="#e4d6bf" stroke="none" />
        </g>
      )}

      {kind === 'vada' && (
        <g stroke="#ad652f" strokeWidth="1.5">
          <ellipse cx="67" cy="59" rx="25" ry="17" fill="#d89042" />
          <ellipse cx="67" cy="58" rx="7" ry="5" fill="#f8eddb" />
          <ellipse cx="98" cy="53" rx="25" ry="17" fill="#e3a451" />
          <ellipse cx="98" cy="52" rx="7" ry="5" fill="#f8eddb" />
          <path d="M50 57l3-2m18 11 4-2m13-17 4-2m15 12 4-2" stroke="#f5c778" strokeWidth="2" />
        </g>
      )}

      {(kind === 'sambar' || kind === 'chutney') && (
        <g stroke="#a45b3a" strokeWidth="1.5">
          <path d="M41 51c2 16 12 23 39 23s37-7 39-23z" fill="#c76e42" />
          <ellipse cx="80" cy="51" rx="39" ry="12" fill={kind === 'sambar' ? '#d8813e' : '#f3e5ba'} />
          {kind === 'sambar' ? (
            <><path d="M59 51l8-3 4 4-6 3zM91 47l7 2-3 5-7-1z" fill="#eab653" stroke="none" /><path d="M76 51c3-6 7-7 10-7-1 6-4 9-10 7z" fill="#718146" stroke="none" /></>
          ) : (
            <><path d="M75 50c3-6 7-7 10-7-1 6-4 9-10 7z" fill="#718146" stroke="none" /><circle cx="64" cy="52" r="1.5" fill="#694831" stroke="none" /><circle cx="94" cy="50" r="1.5" fill="#694831" stroke="none" /></>
          )}
        </g>
      )}

      {isCup && (
        <g stroke="#9b5e3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M105 48h10c10 0 9 15-1 16h-9" fill="none" strokeWidth="4" />
          <path d="M53 45h54l-4 24c-.6 4-5 6-23 6s-22-2-23-6z" fill={kind === 'coffee' ? '#cf8053' : '#e0a35f'} />
          <ellipse cx="80" cy="45" rx="27" ry="7" fill={kind === 'coffee' ? '#76482f' : '#b77b47'} />
          <path d="M70 32c-5-5 5-8 0-13M83 31c-5-5 5-8 0-13M95 33c-4-4 4-7 0-11" fill="none" stroke="#be9875" />
          <path d="M64 46c7 3 24 3 32 0" fill="none" stroke="#f2d8a8" />
        </g>
      )}

      {isGlass && (
        <g stroke="#a26c48" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M56 34h48l-5 39H61z" fill={kind === 'lassi' ? '#efb85a' : '#e4e8b5'} />
          <ellipse cx="80" cy="34" rx="24" ry="6" fill={kind === 'lassi' ? '#f7d58b' : '#f3f4cf'} />
          <path d="M66 42l3 23" stroke="#fff9e8" strokeWidth="3" opacity=".7" />
          {kind === 'lassi' ? (
            <path d="M81 25c6-7 12-7 14-6-1 6-6 9-14 6z" fill="#789251" />
          ) : (
            <><circle cx="102" cy="33" r="10" fill="#c8d58b" /><circle cx="102" cy="33" r="7" fill="#f3f2ce" /><path d="M102 26v14m-7-7h14m-12-5 10 10m0-10-10 10" stroke="#b3c476" strokeWidth="1" /><circle cx="84" cy="48" r="2" fill="#fff" stroke="none" /><circle cx="91" cy="57" r="1.5" fill="#fff" stroke="none" /></>
          )}
        </g>
      )}
    </svg>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('Dosas');

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-heading">
      <div className="menu-inner">
        <div className="menu-top">
          <div>
            <p className="section-kicker">A little taste of South India</p>
            <h2 className="section-heading" id="menu-heading">Something delicious <em>awaits.</em></h2>
            <p className="section-intro">From crisp dosas to comforting sides and refreshing sips, explore a little inspiration for the road ahead.</p>
            <p className="menu-card-note">Sample menu &amp; prices — awaiting confirmation</p>
          </div>
          <div className="menu-tabs" role="group" aria-label="Filter sample menu by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`menu-tab${activeCategory === category ? ' menu-tab-active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-grid" aria-label={`Sample ${activeCategory.toLowerCase()} menu`}>
          {sampleMenu[activeCategory].map((item, index) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-card-top">
                <span className="menu-card-index">{String(index + 1).padStart(2, '0')} / {activeCategory}</span>
                <span className="menu-card-price">{item.price}</span>
              </div>
              <DishIllustration kind={item.illustration} />
              <h3 className="menu-card-name">{item.name}</h3>
              <p className="menu-card-desc">{item.description}</p>
              <p className="menu-card-note">{item.note}</p>
            </article>
          ))}
        </div>

        <div className="menu-bottom">
          <p>Items and prices shown are examples only and are pending confirmation.</p>
          <a className="text-link" href="#menu">Back to menu <span aria-hidden="true">↑</span></a>
          <span className="menu-flourish" aria-hidden="true">✽</span>
        </div>
      </div>
    </section>
  );
}
