import './globals.css';
import type { Metadata, Viewport } from 'next';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { getLocale } from '@/lib/i18n/config';
import { SWRConfig } from 'swr';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  if (locale === 'en') {
    return {
      title: 'Robotics Intelligence',
      description:
        'An industrial intelligence and navigation platform for robotics news, company databases, funding, papers, market data, and AI research workflows.'
    };
  }

  return {
    title: '机器人产业智库',
    description:
      '机器人产业导航与智库入口，聚合行业资讯、公司数据库、投融资、技术论文、产业数据和 AI 研究助手。'
  };
}

export const viewport: Viewport = {
  maximumScale: 1
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale === 'zh' ? 'zh-CN' : 'en'}
      className="bg-theme-bg text-theme-text"
    >
      <body className="min-h-[100dvh] bg-theme-bg">
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              '/api/user': getUser(),
              '/api/team': getTeamForUser()
            }
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
