import { NextResponse } from 'next/server';

// Mock data - Replace with actual database queries
const mockCalligraphers = [
  {
    id: 1,
    name: '王羲之',
    enName: 'Wang Xizhi',
    dynasty: 'Jin Dynasty',
    biography: 'Wang Xizhi was a legendary calligrapher of the Jin Dynasty, known as the "Sage of Calligraphy".',
  },
  {
    id: 2,
    name: '颜真卿',
    enName: 'Yan Zhenqing',
    dynasty: 'Tang Dynasty',
    biography: 'Yan Zhenqing was a renowned Tang Dynasty calligrapher known for his powerful and distinctive style.',
  },
  {
    id: 3,
    name: '柳公权',
    enName: 'Liu Gongquan',
    dynasty: 'Tang Dynasty',
    biography: 'Liu Gongquan was a Tang Dynasty official and celebrated calligrapher.',
  },
];

export async function GET() {
  return NextResponse.json(mockCalligraphers);
}
