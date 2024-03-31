import { ReportReason } from './report.interfaces';

export const REPORT_REASONS: ReportReason[] = [
  {
    title: '아이디 인증 사진에 오류가 있어요',
    content: '메모지에 적힌 아이디와 실제 아이디가 다르거나 조작되었어요',
  },
  {
    title: '선제시 유도 문구를 포함하고 있어요',
    content:
      '옵션별 정확한 가격을 기재하지 않고, 상대방에게 가격 제시를 유도중이에요',
  },
  {
    title: '24시간 이내에 동일 제품을 업로드를 했어요',
    content: '같은 게시글은 24시간 뒤에 다시 끌어올릴 수 있어요',
  },
  {
    title: '전문 업자 같아요',
    content: '일반 채널에서 유통, 제작, 의뢰 제품을 반복 판매하고 있어요',
  },
  {
    title: '카테고리가 불일치 해요',
    content:
      '게시글 성격 또는 제품군과 어울리지 않은 카테고리가 설정되어 있어요',
  },
  {
    title: '기타 분쟁 또는 제품 상태에 이상이 있어요',
    content: '거래 과정에서 겪은 불편 사항은 비매너 후기에 작성해 주세요',
  },
];

export const PRIVATE_REPORT_OPTIONS = [
  { value: 'received', label: '받은 신고' },
  { value: 'submitted', label: '제출한 신고' },
];

export const PUBLIC_REPORT_OPTIONS = [
  { value: 'received', label: '받은 신고' },
];
