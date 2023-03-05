import { style } from '@vanilla-extract/css';

export const GlobalWrapper = style({
    minHeight: '100vh',
    display: 'flex'
});

export const FileInputSection = style({
    flex: 0.5,
    gap: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundImage: 'url(/bg.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
});

export const ActionBtnsSection = style({
    flex: 0.5,
    display: 'grid',
    placeItems: 'center',
    padding: 40,
    gap: 15
});

export const PreviewImgGrid = style({
    display: 'grid',
    placeItems: 'center',
    overflowY: 'scroll',
    height: 500,
    width: '100%'
});

export const ConvertToBtn = style({
    display: 'block',
    width: '100%',
    padding: 15
});
