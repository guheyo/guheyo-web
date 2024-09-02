import { ReportReason } from './report.interfaces';

export const REPORT_REASONS: ReportReason[] = [
  {
    reason: '아이디 인증 사진에 오류가 있어요',
    description: '메모지에 적힌 아이디와 실제 아이디가 다르거나 조작되었어요',
    disabled: false,
  },
  {
    reason: '선제시 유도 문구를 포함하고 있어요',
    description:
      '옵션별 정확한 가격을 기재하지 않고, 상대방에게 가격 제시를 유도중이에요',
    disabled: false,
  },
  {
    reason: '24시간 이내에 동일 제품을 업로드 했어요',
    description: '같은 게시글은 24시간 뒤에 다시 끌어올릴 수 있어요',
    disabled: false,
  },
  {
    reason: '전문 업자 같아요',
    description: '일반 채널에서 유통, 제작, 의뢰 제품을 반복 판매하고 있어요',
    disabled: false,
  },
  {
    reason: '다중 카테고리에 중복 업로드 했어요',
    description:
      '같은 게시글은 한 카테고리에만 올릴 수 있어요, 여러 카테고리 제품을 섞은 게시글은 분리해 주세요',
    disabled: false,
  },
  {
    reason: '카테고리가 불일치 해요',
    description:
      '게시글 성격 또는 제품군과 어울리지 않은 카테고리가 설정되어 있어요',
    disabled: false,
  },
  {
    reason:
      '증빙이 필요한 거래 과정에서의 불편 사항은 비매너 후기로 알려주세요',
    description: '',
    disabled: true,
  },
];

export const PRIVATE_REPORT_OPTIONS = [
  { value: 'received', label: '받은 신고' },
  { value: 'submitted', label: '제출한 신고' },
];

export const PUBLIC_REPORT_OPTIONS = [
  { value: 'received', label: '받은 신고' },
];

export const REPORT_TYPE_OPTIONS = [
  { value: 'all', label: '전체' },
  { value: 'post', label: '게시글 신고' },
  { value: 'comment', label: '댓글 신고' },
];
