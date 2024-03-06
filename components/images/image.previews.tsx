import CloseIcon from '@mui/icons-material/Close';
import { DEFAULT_CLOSE_ICON_COLOR } from '@/lib/image/image.colors';
import {
  BROWSER_CLOSE_ICON_STYLE,
  DEFAULT_IMAGE_PREVIEWS_STYLE,
  DEFAULT_IMAGE_PREVIEW_LAYOUT_STYLE,
  MOBILE_CLOSE_ICON_STYLE,
} from '@/lib/image/image.styles';
import { isMobile } from 'react-device-detect';
import { IMAGE_PREVIEWS_BUTTON_ARIA_LABEL } from '@/lib/image/image.constants';
import ImagePreview from './image.preview';
import { UserImage } from '../../lib/image/image.interfaces';

export default function ImagePreviews({
  images,
  previewsProp,
}: {
  images: UserImage[];
  previewsProp: {
    onClick: (position: number) => void;
  };
}) {
  return (
    <div className={DEFAULT_IMAGE_PREVIEWS_STYLE}>
      {images.map((image) => (
        <div key={image.id} className={DEFAULT_IMAGE_PREVIEW_LAYOUT_STYLE}>
          <button
            type="button"
            aria-label={IMAGE_PREVIEWS_BUTTON_ARIA_LABEL}
            onClick={() => previewsProp.onClick(image.position)}
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
          <ImagePreview key={image.id} image={image} />
        </div>
      ))}
    </div>
  );
}
