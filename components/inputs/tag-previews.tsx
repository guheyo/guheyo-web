import CloseIcon from '@mui/icons-material/Close';
import {
  BROWSER_CLOSE_ICON_STYLE,
  MOBILE_CLOSE_ICON_STYLE,
} from '@/lib/image/image.styles';
import { isMobile } from 'react-device-detect';
import {
  DEFAULT_TAG_PREVIEW_LAYOUT_STYLE,
  DEFAULT_TAG_PREVIEW_STYLE,
  DEFAULT_TAG_PREVIEWS_STYLE,
  TAG_PREVIEWS_BUTTON_ARIA_LABEL,
} from '@/lib/text/tag.constants';
import { DEFAULT_CLOSE_ICON_COLOR } from '@/lib/image/image.colors';

export default function TagPreviews({
  tags,
  previewsProp,
}: {
  tags: string[];
  previewsProp: {
    onClick: (position: number) => void;
  };
}) {
  return (
    <div className={DEFAULT_TAG_PREVIEWS_STYLE}>
      {tags.map((tag, i) => (
        <div key={tag} className={DEFAULT_TAG_PREVIEW_LAYOUT_STYLE}>
          <button
            type="button"
            aria-label={TAG_PREVIEWS_BUTTON_ARIA_LABEL}
            onClick={() => previewsProp.onClick(i)}
          >
            <CloseIcon
              className={
                isMobile ? MOBILE_CLOSE_ICON_STYLE : BROWSER_CLOSE_ICON_STYLE
              }
              sx={{
                color: DEFAULT_CLOSE_ICON_COLOR,
                fontSize: isMobile ? '16px' : '18px',
              }}
            />
          </button>
          <div className={DEFAULT_TAG_PREVIEW_STYLE}>{tag}</div>
        </div>
      ))}
    </div>
  );
}
