import SendIcon from '@mui/icons-material/Send';

export default function SendButton() {
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="submit"
      className="rounded text-light-200 hover:text-white ml-6"
    >
      <SendIcon fontSize="inherit" />
    </button>
  );
}
