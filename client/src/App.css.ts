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
    alignItems: 'center'
});

export const ActionBtnsSection = style({
    flex: 0.5,
    display: 'grid',
    placeItems: 'center'
});
