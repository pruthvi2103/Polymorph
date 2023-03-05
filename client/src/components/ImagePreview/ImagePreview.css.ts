import { style } from '@vanilla-extract/css';

export const PreviewContainer = style({
    position: 'relative'
});

export const DeleteBtn = style({
    position: 'absolute',
    top: -10,
    height: 20,
    width: 20,
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    padding: 0,
    background: 'rgba(255,255,255,1)'
});

export const PreviewImg = style({
    objectFit: 'cover'
});
