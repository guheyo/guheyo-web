'use client';

import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useLogoutMutation, useWithdrawMutation } from '@/generated/graphql';
import Avatar from '../avatar/avatar';
import BgDialog from '../base/bg-dialog';
import { useRouter } from 'next/navigation';

export default function Withdraw({ username }: { username: string }) {
  const router = useRouter();
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [withdraw] = useWithdrawMutation();
  const [logout] = useLogoutMutation();

  const handleWithdraw = async (): Promise<void> => {
    if (username !== usernameInput) {
      setAlertText('유저네임을 정확히 입력해야 합니다.');
      setOpenAlert(true);
      return;
    }
    if (!agree) {
      setAlertText('회원 탈퇴 안내에 동의해야 합니다.');
      setOpenAlert(true);
      return;
    }
    setLoading(true);

    try {
      await withdraw();
      await logout();
      router.push('/');
    } catch (err) {
      setAlertText('내부 오류가 발생했습니다.');
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpenAlert(false);
  };

  return (
    <div className="flex flex-col gap-8 w-full mx-auto text-gray-400">
      <Avatar
        name="guheyo logo"
        src="/guheyo/guheyo-logo.svg"
        fontSize="text-base"
        variant="rounded"
      />

      <p>구해요 탈퇴 전 확인하세요.</p>
      <p>
        탈퇴하시면 이용 중인 구해요가 폐쇄되며, 모든 데이터는 복구 불가합니다.
      </p>

      <div className="bg-dark-400 text-gray-300 p-4 rounded-lg">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>동일한 소셜 로그인으로 재가입할 수 없습니다.</li>
          <li>계정과 연결된 동물의 왕국 서버의 모든 이용 권한을 상실합니다.</li>
          <li>글, 댓글은 삭제되지 않으니 미리 확인하세요.</li>
        </ul>
      </div>

      <Box mt={2}>
        <div>
          회원 탈퇴를 진행할 계정 {' '}
          <b className="text-gray-300">{username}</b> 을 정확히 입력하세요.
        </div>

        <TextField
          fullWidth
          placeholder={username}
          value={usernameInput}
          variant="outlined"
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'gray',
              opacity: 1,
            },
          }}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
      </Box>

      <label className="flex items-center">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mr-2"
        />
        <span className="text-base">
          안내사항을 모두 확인하였으며, 이에 동의합니다.
        </span>
      </label>

      <Button
        onClick={handleWithdraw}
        disabled={!agree || username !== usernameInput || loading}
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition
          ${
            agree && username === usernameInput
              ? 'bg-red-800 hover:bg-red-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
      >
        {loading ? '처리 중...' : '탈퇴하기'}
      </Button>
      <BgDialog
        open={openAlert}
        title="안내"
        content={alertText}
        closeButtonName="확인"
        onClose={handleClose}
      />
    </div>
  );
}
