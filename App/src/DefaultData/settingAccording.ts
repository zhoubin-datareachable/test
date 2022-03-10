/**
 * @file
 * @date 2022-02-14
 * @author zhoubin
 * @lastModify zhoubin 2022-02-14
 */
const labels = [
    {
        id: '001',
        content: 'Parameter Name xxxxxxxxx 001',
    },
    {
        id: '002',
        content: 'Parameter Name xxxxx 002',
        child: [
            {
                content: 'Parameter Name xxxxxxxxx 003',
                id: '002_1',
            },
            {
                content: 'Parameter Name xxxxxx xxxx 06',
                id: '002_2',
                child: [
                    {
                        content: 'Parameter Name xxxxxxxxx 003',
                        id: '002_1_1',
                    },
                    {
                        content: 'Parameter Name xxxxxx xxxx 06',
                        id: '002_2_2',
                    },
                ],
            },
        ],
    },
    {
        id: '003',
        content: 'Parameter Name xxxxxxx 004',
    },
];

export default labels;
