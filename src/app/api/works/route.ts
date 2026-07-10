import { NextResponse } from 'next/server';

const mockWorks = [
  {
    id: 1,
    title: 'Orchid Pavilion Preface',
    author: 'Wang Xizhi',
    dynasty: 'Jin Dynasty',
    script: 'Running Script',
    words: 'Prose',
    width: 24.8,
    height: 69.3,
    description: 'The Preface to the Poems Composed at the Orchid Pavilion is one of the most famous works of Chinese calligraphy. Created in 353 AD, it showcases Wang Xizhi\'s mastery of the running script style.',
    museum: 'Palace Museum, Beijing',
    imageUrls: ['https://via.placeholder.com/600x800?text=Orchid+Pavilion'],
  },
  {
    id: 2,
    title: 'Eulogy in Running Script',
    author: 'Yan Zhenqing',
    dynasty: 'Tang Dynasty',
    script: 'Regular Script',
    words: 'Verse',
    width: 28.3,
    height: 75.5,
    description: 'A masterpiece of regular script demonstrating the powerful and authoritative style characteristic of Yan Zhenqing\'s work.',
    museum: 'National Palace Museum, Taipei',
    imageUrls: ['https://via.placeholder.com/600x800?text=Yan+Zhenqing'],
  },
  {
    id: 3,
    title: 'Divine Prediction Scripture',
    author: 'Liu Gongquan',
    dynasty: 'Tang Dynasty',
    script: 'Regular Script',
    words: 'Religious Text',
    width: 25.0,
    height: 75.0,
    description: 'An exemplary work showing Liu Gongquan\'s refined regular script style with geometric precision and elegant proportions.',
    museum: 'Shaanxi Museum, Xi\'an',
    imageUrls: ['https://via.placeholder.com/600x800?text=Liu+Gongquan'],
  },
  {
    id: 4,
    title: 'Letter to Nephew',
    author: 'Wang Xizhi',
    dynasty: 'Jin Dynasty',
    script: 'Running Script',
    words: 'Correspondence',
    width: 19.2,
    height: 53.4,
    description: 'A personal letter showcasing Wang Xizhi\'s spontaneous and elegant running script style.',
    museum: 'National Palace Museum, Taipei',
    imageUrls: ['https://via.placeholder.com/600x800?text=Letter+to+Nephew'],
  },
  {
    id: 5,
    title: 'Memorial on Remonstration',
    author: 'Yan Zhenqing',
    dynasty: 'Tang Dynasty',
    script: 'Regular Script',
    words: 'Official Document',
    width: 30.0,
    height: 80.0,
    description: 'A powerful official document demonstrating Yan Zhenqing\'s bold and authoritative calligraphic style.',
    museum: 'Palace Museum, Beijing',
    imageUrls: ['https://via.placeholder.com/600x800?text=Memorial'],
  },
  {
    id: 6,
    title: 'Epistle on Poetry',
    author: 'Liu Gongquan',
    dynasty: 'Tang Dynasty',
    script: 'Running Script',
    words: 'Correspondence',
    width: 22.0,
    height: 65.0,
    description: 'A refined example of Liu Gongquan\'s running script with balanced proportions and elegant forms.',
    museum: 'Shaanxi Museum, Xi\'an',
    imageUrls: ['https://via.placeholder.com/600x800?text=Epistle'],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const filter = searchParams.get('filter');

  let results = mockWorks;

  if (search) {
    const query = search.toLowerCase();
    results = results.filter(
      (work) =>
        work.title.toLowerCase().includes(query) ||
        work.author.toLowerCase().includes(query) ||
        work.dynasty.toLowerCase().includes(query) ||
        work.script.toLowerCase().includes(query)
    );
  }

  if (filter === 'dynasty') {
    results = results.sort((a, b) => a.dynasty.localeCompare(b.dynasty));
  } else if (filter === 'script') {
    results = results.sort((a, b) => a.script.localeCompare(b.script));
  }

  return NextResponse.json(results);
}
