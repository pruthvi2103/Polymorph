import { style } from '@vanilla-extract/css';

export const PreviewContainer = style({
    position: 'relative'
});

export const DeleteBtn = style({
    position: 'absolute',
    zIndex: '2',
    borderRadius: '50%',
    aspectRatio: '1'
});

export const PreviewImg = style({
    objectFit: 'cover'
});
