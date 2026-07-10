import { NextResponse } from 'next/server';

const mockWorks: Record<number, any> = {
  1: {
    id: 1,
    title: 'Orchid Pavilion Preface',
    author: 'Wang Xizhi',
    dynasty: 'Jin Dynasty',
    script: 'Running Script',
    words: 'Prose',
    width: 24.8,
    height: 69.3,
    description: 'The Preface to the Poems Composed at the Orchid Pavilion is one of the most famous works of Chinese calligraphy. Created in 353 AD, it showcases Wang Xizhi\'s mastery of the running script style.\n\nThis work is celebrated for its perfect balance between structure and spontaneity, demonstrating the artist\'s deep understanding of brushwork and composition. The characters flow naturally while maintaining individual character integrity, setting a standard for excellence that has been followed for over 1,600 years.',
    museum: 'Palace Museum, Beijing',
    imageUrls: [
      'https://via.placeholder.com/600x800?text=Orchid+Pavilion',
      'https://via.placeholder.com/600x800?text=Detail+1',
    ],
  },
  2: {
    id: 2,
    title: 'Eulogy in Running Script',
    author: 'Yan Zhenqing',
    dynasty: 'Tang Dynasty',
    script: 'Regular Script',
    words: 'Verse',
    width: 28.3,
    height: 75.5,
    description: 'A masterpiece of regular script demonstrating the powerful and authoritative style characteristic of Yan Zhenqing\'s work.\n\nEach stroke is carefully constructed with thick, powerful lines that convey a sense of strength and permanence. This work exemplifies the development of the "Yan-style" regular script that became influential throughout the Tang Dynasty and beyond.',
    museum: 'National Palace Museum, Taipei',
    imageUrls: [
      'https://via.placeholder.com/600x800?text=Yan+Zhenqing',
      'https://via.placeholder.com/600x800?text=Detail+2',
    ],
  },
  3: {
    id: 3,
    title: 'Divine Prediction Scripture',
    author: 'Liu Gongquan',
    dynasty: 'Tang Dynasty',
    script: 'Regular Script',
    words: 'Religious Text',
    width: 25.0,
    height: 75.0,
    description: 'An exemplary work showing Liu Gongquan\'s refined regular script style with geometric precision and elegant proportions.\n\nThe characters display a mathematical exactitude while maintaining artistic beauty. This balance between precision and aesthetics is what makes Liu Gongquan\'s "Liu-style" regular script so distinctive and influential.',
    museum: 'Shaanxi Museum, Xi\'an',
    imageUrls: [
      'https://via.placeholder.com/600x800?text=Liu+Gongquan',
      'https://via.placeholder.com/600x800?text=Detail+3',
    ],
  },
  4: {
    id: 4,
    title: 'Letter to Nephew',
    author: 'Wang Xizhi',
    dynasty: 'Jin Dynasty',
    script: 'Running Script',
    words: 'Correspondence',
    width: 19.2,
    height: 53.4,
    description: 'A personal letter showcasing Wang Xizhi\'s spontaneous and elegant running script style.\n\nThis more informal work reveals the artist\'s ability to balance structure with spontaneity in personal correspondence. The flowing lines and varied character sizes demonstrate the dynamic nature of his artistic approach.',
    museum: 'National Palace Museum, Taipei',
    imageUrls: [
      'https://via.placeholder.com/600x800?text=Letter+to+Nephew',
    ],
  },
  5: {
    id: 5,
    title: 'Memorial on Remonstration',
    author: 'Yan Zhenqing',
    dynasty: 'Tang Dynasty',
    script: 'Regular Script',
    words: 'Official Document',
    width: 30.0,
    height: 80.0,
    description: 'A powerful official document demonstrating Yan Zhenqing\'s bold and authoritative calligraphic style.\n\nWritten with deep conviction and powerful brushstrokes, this memorial reflects both the political importance of the document and the artistic mastery of its creator. The strong, assertive characters convey the gravity and significance of the official message.',
    museum: 'Palace Museum, Beijing',
    imageUrls: [
      'https://via.placeholder.com/600x800?text=Memorial',
    ],
  },
  6: {
    id: 6,
    title: 'Epistle on Poetry',
    author: 'Liu Gongquan',
    dynasty: 'Tang Dynasty',
    script: 'Running Script',
    words: 'Correspondence',
    width: 22.0,
    height: 65.0,
    description: 'A refined example of Liu Gongquan\'s running script with balanced proportions and elegant forms.\n\nThis work showcases the artist\'s mastery of flowing lines while maintaining structural integrity. The elegant composition and refined brushwork demonstrate why Liu Gongquan is considered one of the greatest calligraphers of the Tang Dynasty.',
    museum: 'Shaanxi Museum, Xi\'an',
    imageUrls: [
      'https://via.placeholder.com/600x800?text=Epistle',
    ],
  },
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const work = mockWorks[id];
  
  if (!work) {
    return NextResponse.json(
      { error: 'Work not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(work);
}
