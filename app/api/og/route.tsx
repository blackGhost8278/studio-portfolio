import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { getIndustryConfig } from '@/constants/industryConfig';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const industry = searchParams.get('industry') || 'generic';
        const company = searchParams.get('company');

        const config = getIndustryConfig(industry);

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#0a0a0a',
                        position: 'relative',
                    }}
                >
                    {/* Background Gradient */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${config.theme.primary}20, ${config.theme.secondary}20)`,
                        }}
                    />

                    {/* Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '80px',
                            zIndex: 1,
                        }}
                    >
                        {/* Logo/Icon */}
                        <div
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '30px',
                                background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '40px',
                                fontSize: '60px',
                            }}
                        >
                            S
                        </div>

                        {/* Headline */}
                        <div
                            style={{
                                fontSize: company ? '48px' : '56px',
                                fontWeight: 'bold',
                                color: '#ffffff',
                                textAlign: 'center',
                                marginBottom: '20px',
                                maxWidth: '900px',
                            }}
                        >
                            {company
                                ? `Bespoke ${config.name} Solutions for ${company}`
                                : config.headline}
                        </div>

                        {/* Subheadline */}
                        <div
                            style={{
                                fontSize: '28px',
                                color: '#a0a0a0',
                                textAlign: 'center',
                                maxWidth: '800px',
                            }}
                        >
                            {config.subheadline}
                        </div>

                        {/* Studio Name */}
                        <div
                            style={{
                                marginTop: '60px',
                                fontSize: '20px',
                                color: '#666666',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <span>Studio</span>
                            <span style={{ color: config.theme.primary }}>•</span>
                            <span>Multi-Disciplinary Creative Agency</span>
                        </div>
                    </div>

                    {/* Industry Badge */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            right: '40px',
                            padding: '12px 24px',
                            borderRadius: '100px',
                            background: `${config.theme.primary}30`,
                            border: `2px solid ${config.theme.primary}`,
                            color: config.theme.primary,
                            fontSize: '18px',
                            fontWeight: '600',
                        }}
                    >
                        {config.name} Solutions
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.error('OG Image generation failed:', e.message);
        return new Response('Failed to generate image', { status: 500 });
    }
}
