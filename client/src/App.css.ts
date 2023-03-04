import { style } from '@vanilla-extract/css';

export const GlobalWrapper = style({
    minHeight: '100vh',
    display: 'flex'
});

export const FileInputSection = style({
    flex: 0.5,
    display: 'grid',
    placeItems: 'center'
});

export const ActionBtnsSection = style({
    flex: 0.5,
    display: 'grid',
    placeItems: 'center'
});
