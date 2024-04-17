import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'mint',
          label: `Mint`,
          target: 'eip155:8453:0xb0d94258bcee18c3fcfbd6b0ac336cdf4e2b67a9:3' // CAIP-10
        },
      ],
      image: {
        src: `https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeiguki3qedvyurasao3st5w4yirj7g4yi7jk75rvcw3c46hz7fgxfm&w=1920&q=75`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
