import { useRef } from 'react';

export const useConversionCanvas = () => {
    const imageRef = useRef<HTMLImageElement>(null);

    const convertAction = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
    };
};
