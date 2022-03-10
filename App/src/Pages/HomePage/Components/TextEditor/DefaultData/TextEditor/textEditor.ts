import {
    faTextWidth,
    faBold,
    faItalic,
    faUnderline,
    faMinus,
    faFill,
    faFont,
    faRemoveFormat,
} from '@fortawesome/free-solid-svg-icons';
import { SyntheticEvent } from 'react';
import { toolBarFunction } from '../../util/toolBarFunction';
export const styleBarSet = [
    {
        title: 'Font Size',
        subMenu: true,
        icon: faTextWidth,
        func: (e: SyntheticEvent) => {
            console.log('Font Size');
        },
        subMenuSet: [
            {
                title: 'Xsmall',
                icon: faTextWidth,
                func: (e: SyntheticEvent) => {
                    toolBarFunction.fontSize(e, '1');
                },
            },
            {
                title: 'Small',
                icon: faTextWidth,
                func: (e: SyntheticEvent) => {
                    toolBarFunction.fontSize(e, '2');
                },
            },
            {
                title: 'Middile',
                icon: faTextWidth,
                func: (e: SyntheticEvent) => {
                    toolBarFunction.fontSize(e, '3');
                },
            },
            {
                title: 'Large',
                icon: faTextWidth,
                func: (e: SyntheticEvent) => {
                    toolBarFunction.fontSize(e, '4');
                },
            },
            {
                title: 'Xlarge',
                icon: faTextWidth,
                func: (e: SyntheticEvent) => {
                    toolBarFunction.fontSize(e, '5');
                },
            },
        ],
    },
    {
        title: 'Bold',
        subMenu: false,
        func: (e: SyntheticEvent) => {
            toolBarFunction.bold(e);
        },
        icon: faBold,
        subMenuSet: [],
    },
    {
        title: 'Italic',
        subMenu: false,
        func: (e: SyntheticEvent) => {
            toolBarFunction.italic(e);
        },
        icon: faItalic,
        subMenuSet: [],
    },
    {
        title: 'Underline',
        subMenu: false,
        func: (e: SyntheticEvent) => {
            toolBarFunction.underLine(e);
        },
        icon: faUnderline,
        subMenuSet: [],
    },
    {
        title: 'Crossline',
        subMenu: false,
        func: (e: SyntheticEvent) => {
            toolBarFunction.crossLine(e);
        },
        icon: faMinus,
        subMenuSet: [],
    },
];

export const fontColorSet = {
    title: 'Font Color',
    icon: faFont,
    subMenuSet: [
        {
            color: '#262626',
            title: 'Default',
            customered: false,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#262626');
            },
        },
        {
            color: '#BDBDBD',
            title: 'Gray',
            customered: false,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#BDBDBD');
            },
        },
        {
            color: '#EB5757',
            title: 'Red',
            customered: false,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#EB5757');
            },
        },
        {
            color: '#F2994A',
            title: 'Orange',
            customered: false,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#F2994A');
            },
        },
        {
            color: '#F2C94C',
            title: 'Yellow',
            customered: false,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#F2C94C');
            },
        },
        {
            color: '#219653',
            title: 'Green',
            customered: false,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#219653');
            },
        },
        {
            color: '#2D9CDB',
            title: 'Blue',
            customered: false,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#2D9CDB');
            },
        },
        {
            color: '#BB6BD9',
            title: 'Purple',
            customered: false,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#BB6BD9');
            },
        },
        {
            color: '#828282',
            title: 'Customize',
            customered: true,
            icon: faFont,
            func: (e: SyntheticEvent) => {
                toolBarFunction.fortColor(e, '#828282');
            },
        },
    ],
};

export const filledColorSet = {
    title: 'Filled',
    icon: faFill,
    subMenuSet: [
        {
            color: '#8c8c8c',
            title: 'Default',
            customered: false,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#ffffff');
            },
        },
        {
            color: '#BDBDBD',
            title: 'Gray',
            customered: false,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#BDBDBD');
            },
        },
        {
            color: '#EB5757',
            title: 'Red',
            customered: false,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#EB5757');
            },
        },
        {
            color: '#F2994A',
            title: 'Orange',
            customered: false,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#F2994A');
            },
        },
        {
            color: '#F2C94C',
            title: 'Yellow',
            customered: false,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#F2C94C');
            },
        },
        {
            color: '#219653',
            title: 'Green',
            customered: false,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#219653');
            },
        },
        {
            color: '#2D9CDB',
            title: 'Blue',
            customered: false,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#2D9CDB');
            },
        },
        {
            color: '#BB6BD9',
            title: 'Purple',
            customered: false,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#BB6BD9');
            },
        },
        {
            color: '#828282',
            title: 'Customize',
            customered: true,
            icon: faFill,
            func: (e: SyntheticEvent) => {
                toolBarFunction.filledColor(e, '#828282');
            },
        },
    ],
};
export const settingBarSet = [
    {
        title: 'Remove',
        icon: faRemoveFormat,
        func: (e: SyntheticEvent) => {
            toolBarFunction.removeStyle(e);
        },
    },
];

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const handleChangeIntoComment = (event: SyntheticEvent) => {};
