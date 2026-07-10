import { NextResponse } from 'next/server';

const mockCalligraphers: Record<number, any> = {
  1: {
    id: 1,
    name: '王羲之',
    enName: 'Wang Xizhi',
    dynasty: 'Jin Dynasty',
    biography: `Wang Xizhi was a legendary calligrapher of the Jin Dynasty, known as the "Sage of Calligraphy".

He lived during the Eastern Jin Dynasty (303-361) and is widely regarded as one of the most influential calligraphers in Chinese history. His work "Preface to the Poems Composed at the Orchid Pavilion" is considered one of the finest examples of running script (xingshu).

Wang Xizhi's style is characterized by its balance, elegance, and fluidity. He mastered multiple script styles including seal script, clerical script, and running script. His influence on later calligraphers cannot be overstated, and his works continue to be studied and admired today.`,
  },
  2: {
    id: 2,
    name: '颜真卿',
    enName: 'Yan Zhenqing',
    dynasty: 'Tang Dynasty',
    biography: `Yan Zhenqing was a renowned Tang Dynasty calligrapher known for his powerful and distinctive style.

Living from 709-785, Yan Zhenqing was both a government official and an artist. His calligraphy is characterized by thick, strong strokes and a bold, authoritative presence. He is particularly known for his development of the "Yan-style" regular script.

His most famous work is the "Document in Commemoration of a Loyal Minister," which demonstrates his mastery of powerful brushwork and structural balance.`,
  },
  3: {
    id: 3,
    name: '柳公权',
    enName: 'Liu Gongquan',
    dynasty: 'Tang Dynasty',
    biography: `Liu Gongquan was a Tang Dynasty official and celebrated calligrapher who lived from 778-865.

Known for his neat, precise handwriting and distinctive style, Liu Gongquan's work exemplifies the refinement of regular script during the Tang Dynasty. His calligraphy is noted for its geometric precision and elegant proportions.

He served as an official under three Tang emperors and received high honors for both his administrative work and artistic achievements. His style, known as "Liu-style," continues to be an important tradition in Chinese calligraphy education.`,
  },
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const calligrapher = mockCalligraphers[id];
  
  if (!calligrapher) {
    return NextResponse.json(
      { error: 'Calligrapher not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(calligrapher);
}
