import type { Metadata } from 'next';
import { getIndustryConfig, getPersonalizedHeadline } from '@/constants/industryConfig';

interface GenerateMetadataProps {
    params: { industry: string };
    searchParams: { company?: string; ref?: string };
}

export async function generateMetadata({
    params,
    searchParams,
}: GenerateMetadataProps): Promise<Metadata> {
    const config = getIndustryConfig(params.industry);
    const headline = getPersonalizedHeadline(config, searchParams.company);

    // Generate OG image URL
    const ogImageUrl = new URL('/api/og', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
    ogImageUrl.searchParams.set('industry', params.industry);
    if (searchParams.company) {
        ogImageUrl.searchParams.set('company', searchParams.company);
    }

    return {
        title: `${headline} | Studio`,
        description: config.subheadline,
        openGraph: {
            title: headline,
            description: config.subheadline,
            images: [
                {
                    url: ogImageUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: headline,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: headline,
            description: config.subheadline,
            images: [ogImageUrl.toString()],
        },
    };
}
