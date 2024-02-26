import Tabs from '@/components/base/tabs';
import Scrollbar from '@/components/base/scrollbar';
import TimelineWithIcon from '@/components/base/timeline-with-icon';

export default async function Page() {
  const tabs = [
    {
      label: '소개',
      value: 'guheyo',
    },
    {
      label: '기술 스택',
      value: 'tech',
    },
    {
      label: '팀',
      value: 'team',
    },
  ];

  const timelineEvents = [
    {
      title: '2021년 2월 3일',
      content: '디스코드 장터 "동물의 왕국"',
      iconURL: '/dongwang/dongwang.png',
    },
    {
      title: '2023년 6월 30일',
      content: 'guheyo 베타 버전 공개',
      iconURL: '/star/star-bg-purple-rounded.png',
    },
  ];

  return (
    <div className="flex flex-col">
      <Scrollbar upPosition="top-0" zIndex={20}>
        <div className="pt-4 pb-4 md:pt-6 md:pb-6 px-2 bg-dark-500">
          <Tabs tabs={tabs} />
        </div>
      </Scrollbar>
      <div className="z-0 pt-16 px-4 mb-24 text-sm md:text-base">
        <div className="flex flex-col max-w-2xl gap-8 md:gap-8">
          <div id="guheyo" className="flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <button
                type="button"
                disabled
                className="max-w-sm rounded p-1 overflow-hidden shadow-sm bg-black text-white"
              >
                <div className="font-bold">소개</div>
              </button>
            </div>
            <TimelineWithIcon timelineEvents={timelineEvents} />
            <div>
              <div className="text-base md:text-lg font-semibold">
                프로젝트 소개
              </div>
              <a
                className="text-blue-500"
                href="https://github.com/guheyo/guheyo-server/wiki"
                target="_blank"
                rel="noopener noreferrer"
              >
                guheyo 위키
              </a>
            </div>
          </div>
          <div id="tech">
            <div className="flex justify-center pb-2">
              <button
                type="button"
                disabled
                className="max-w-sm rounded p-1 overflow-hidden shadow-sm bg-black text-white"
              >
                <div className="font-bold">기술 스택</div>
              </button>
            </div>
            <div className="text-base md:text-lg font-semibold">언어</div>
            <p>TypeScript</p>
            <div className="text-base md:text-lg pt-4 font-semibold">
              프론트엔드
            </div>
            <p>Next.js, React, Apollo, GraphQL</p>
            <p>Tailwind CSS, MUI</p>
            <div className="text-base md:text-lg pt-4 font-semibold">
              백엔드
            </div>
            <p>Node.js, NestJS, PostgreSQL</p>
            <p>Prisma, discord.js</p>
            <div className="text-base md:text-lg pt-4 font-semibold">
              인프라
            </div>
            <p>AWS ECS, Amplify, RDS, Route 53, S3</p>
          </div>
          <div id="team">
            <div className="flex flex-row gap-2 items-center justify-center pb-2">
              <button
                type="button"
                disabled
                className="max-w-sm rounded p-1 overflow-hidden shadow-sm bg-black text-white"
              >
                <div className="font-bold">팀</div>
              </button>
            </div>
            <div>
              <div className="text-base md:text-lg font-semibold">팀</div>
              <a
                className="text-blue-500"
                href="https://github.com/orgs/guheyo/people"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github 팀
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
