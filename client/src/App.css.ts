import { style } from '@vanilla-extract/css';

export const Logo = style({
    position: 'absolute',
    top: 10,
    left: 10
});

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
    backgroundImage:
        'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.2)), url(/bg.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
});

export const ActionBtnsSection = style({
    flex: 0.5,
    display: 'grid',
    placeItems: 'center',
    padding: '30px 40px',
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
