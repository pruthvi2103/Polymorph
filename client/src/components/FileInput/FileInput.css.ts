import { style } from '@vanilla-extract/css';

export const InputImage = style({
    display: 'none'
});

export const InputBox = style({
    backgroundColor: '#e7e7f4',
    outline: '1px dashed gray',
    outlineOffset: -10,
    borderRadius: 2,
    padding: '8rem'
});

export const FocusedStyle = style({
    borderColor: '#2196f3'
});

export const AcceptStyle = style({
    borderColor: '#00e676'
});

export const RejectStyle = style({
    borderColor: '#ff1744'
});
