/**
 * @file
 * @date 2021-12-17
 * @author zhoubin
 * @lastModify zhoubin 2021-12-17
 */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 *
 * @param callback callback function
 * @param delay time out time
 */
export function useTimeout(callback: () => void, delay: number): void {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };
        if (delay !== null) {
            const id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
}

/**
 *
 * @param onUnmountHandler callback
 */
export function useComponentWillUnmount(onUnmountHandler: () => void): void {
    useEffect(() => {
        return () => {
            onUnmountHandler();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
/**
 *
 * @returns width height
 */
export const useWindowSize = (): number[] => {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

/**
 *
 * @returns window width
 */
export const useWindowWidth = (): number => {
    const [width, setWidth] = useState(0);
    const oldWidth = useRef(0);

    useLayoutEffect(() => {
        const updateWidth = () => {
            const minCondition = oldWidth.current < 1440 && window.innerWidth >= 1440;
            const maxCondition = oldWidth.current >= 1440 && window.innerWidth < 1440;
            if (oldWidth.current === 0 || minCondition || maxCondition) {
                setWidth(window.innerWidth);
                oldWidth.current = window.innerWidth;
            }
        };
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return width;
};
