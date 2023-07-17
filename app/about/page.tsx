import _ from 'lodash'
import Image from 'next/image'
import Tabs from '../components/base/Tabs'
import Scrollbar from '../components/base/Scrollbar'
import {CursorArrowRaysIcon} from '@heroicons/react/24/outline'
import TimelineWithIcon from '../components/base/timeline-with-icon'

export default async function Page() {
  const tabs = [
    {
      label: '소개',
      value: 'wtb',
    },
    {
      label: '기술 스택',
      value: 'tech',
    },
    {
      label: '팀원',
      value: 'team',
    },
  ]

  const timelineEvents = [
    {
      title: '2021년 2월 3일',
      content: '디스코드 장터 "동물의 왕국"',
      iconURL: '/dongwang.png',
    },
    {
      title: '2023년 6월 30일',
      content: 'WTB.KR 베타 버전 공개',
      iconURL: '/wtb-logo-square.png',
    },
  ]

  return (
    <div className='flex flex-col'>
      <Scrollbar z='z-40' negativeTop='-top-100' top='top-11'>
        <div className='pt-4 pb-4 md:pt-6 md:pb-6 px-2 bg-white'>
          <Tabs tabs={tabs} />
        </div>
      </Scrollbar>
      <div className='z-0 pt-16 px-4 mb-24 text-sm md:text-base'>
        <div className='flex flex-col max-w-2xl gap-8 md:gap-8'>
          <div id='wtb' className='flex flex-col gap-4'>
            <div className='flex items-center justify-center'>
              <Image className='rounded' src={'/wtb-logo-square.png'} alt='WTB Logo' width={32} height={32} />
            </div>
            <div className='flex justify-center'>
              <TimelineWithIcon timelineEvents={timelineEvents} />
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col'>
                <div className='text-base md:text-lg font-semibold'>Want to Buy : 좋아하는 것을 구매해요</div>
                <div>
                  <div>커스텀 키보드를 좋아하는 사람들과 거래해요</div>
                  <div>커스텀 키보드 전문가들과 거래해요</div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='text-base md:text-lg font-semibold'>White to Black : 모던한 흑백 디자인을 추구해요</div>
                <div>
                  <div>단순하게 만들어요</div>
                  <div>편하게 머물 수 있는 공간을 만들어요</div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='text-base md:text-lg font-semibold'>What to Build : 이런 걸 개발해요</div>
                <div>
                  <div className='flex flex-col'>
                    <div className=' font-semibold'>거래</div>
                    <ul className='list-disc pl-5'>
                      <li>판매</li>
                      <li>구매</li>
                      <li>교환</li>
                    </ul>
                    <div className='font-semibold'>경매</div>
                    <ul className='list-disc pl-5'>
                      <li>판매</li>
                      <li>입찰</li>
                      <li>위약금 설정</li>
                    </ul>
                    <div className='font-semibold'>양도/양수</div>
                    <ul className='list-disc pl-5'>
                      <li>표준 계약서</li>
                      <li>계약금 설정</li>
                    </ul>
                    <div className='font-semibold'>공통</div>
                    <ul className='list-disc pl-5'>
                      <li>본인 인증</li>
                      <li>알림</li>
                      <li>활동 기록</li>
                      <li>거래 내역</li>
                      <li>송장 트랙킹</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='tech'>
            <div className='flex justify-center pb-2'>
              <button disabled className={`max-w-sm rounded p-1 overflow-hidden shadow-sm bg-black text-white`}>
                <div className='font-bold'>기술 스택</div>
              </button>
            </div>
            <div className='text-base md:text-lg font-semibold'>언어</div>
            <p>TypeScript</p>
            <div className='text-base md:text-lg pt-4 font-semibold'>프론트엔드</div>
            <p>Next.js, React, React Query, Redux</p>
            <p>Tailwind CSS, Material Tailwind, heroicons</p>
            <div className='text-base md:text-lg pt-4 font-semibold'>백엔드</div>
            <p>Node.js, Express, PostgreSQL</p>
            <p>Prisma, discord.js</p>
            <div className='text-base md:text-lg pt-4 font-semibold'>인프라</div>
            <p>AWS Beanstalk, Amplify, RDS, Route 53, S3</p>
          </div>
          <div id='team'>
            <div className='flex flex-row gap-2 items-center justify-center pb-2'>
              <button disabled className={`max-w-sm rounded p-1 overflow-hidden shadow-sm bg-black text-white`}>
                <div className='font-bold'>팀원</div>
              </button>
            </div>
            <div className='font-medium items-center'>
              <a
                className='flex flex-row gap-1 text-base md:text-lg font-semibold'
                href={'https://forms.gle/wfcw2aFLaMDv5kNC8'}
                target='_blank'
              >
                지원하기 <CursorArrowRaysIcon width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
