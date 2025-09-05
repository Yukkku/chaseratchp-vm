// @ts-check

import BlockType from '../../extension-support/block-type';
import ArgumentType from '../../extension-support/argument-type';
import formatMessage from 'format-message';

export class CHaser {
    getInfo () {
        const i18n = (() => {
            const loc = formatMessage.setup().locale;
            /**
             * @param {string} ja
             * @param {string} hira
             * @returns {string}
             */
            return (ja, hira) => {
                if (loc === 'ja-Hira') return hira;
                return ja;
            };
        })();
        return {
            id: 'chaser',
            name: 'CHaser',
            docsURI: '',
            blocks: [
                {
                    opcode: 'connect',
                    blockType: BlockType.COMMAND,
                    text: i18n('[HOST]:[PORT]に接続する (名前: [NAME])', '[HOST]:[PORT]にせつぞくする (なまえ: [NAME])'),
                    arguments: {
                        HOST: { type: ArgumentType.STRING, defaultValue: '127.0.0.1' },
                        PORT: { type: ArgumentType.NUMBER, defaultValue: '2009' },
                        NAME: { type: ArgumentType.STRING, defaultValue: 'ゲストさん' },
                    },
                },
                {
                    opcode: 'close',
                    blockType: BlockType.COMMAND,
                    text: i18n('切断する', 'せつだんする'),
                },
                {
                    opcode: 'is_connecting',
                    blockType: BlockType.BOOLEAN,
                    text: i18n('接続されている', 'せつぞくされている'),
                },
                {
                    opcode: 'is_myturn',
                    blockType: BlockType.BOOLEAN,
                    text: i18n('自分のターン', 'じぶんのターン'),
                },
                {
                    opcode: 'walk',
                    blockType: BlockType.COMMAND,
                    text:  i18n('[DIR] に歩く', '[DIR] にあるく'),
                    arguments: {
                        DIR: {
                            type: ArgumentType.STRING,
                            menu: 'dir4',
                            defaultValue: 'u',
                        },
                    },
                },
                {
                    opcode: 'put',
                    blockType: BlockType.COMMAND,
                    text: i18n('[DIR] にブロックを置く', '[DIR] にブロックをおく'),
                    arguments: {
                        DIR: {
                            type: ArgumentType.STRING,
                            menu: 'dir4',
                            defaultValue: 'u',
                        },
                    },
                },
                {
                    opcode: 'search',
                    blockType: BlockType.COMMAND,
                    text: i18n('[DIR] を調べる', '[DIR] をしらべる'),
                    arguments: {
                        DIR: {
                            type: ArgumentType.STRING,
                            menu: 'dir4',
                            defaultValue: 'u',
                        },
                    },
                },
                {
                    opcode: 'look',
                    blockType: BlockType.COMMAND,
                    text: i18n('[DIR] を見る', '[DIR] をみる'),
                    arguments: {
                        DIR: {
                            type: ArgumentType.STRING,
                            menu: 'dir4',
                            defaultValue: 'u',
                        },
                    },
                },
                {
                    opcode: 'check',
                    blockType: BlockType.BOOLEAN,
                    text: '[DIR] に [COND]',
                    arguments: {
                        DIR: {
                            type: ArgumentType.STRING,
                            menu: 'dir8',
                            defaultValue: 1,
                        },
                        COND: {
                            type: ArgumentType.STRING,
                            menu: 'cellinfo',
                            defaultValue: 1,
                        },
                    },
                },
                {
                    opcode: 'check_com',
                    blockType: BlockType.BOOLEAN,
                    text: i18n('[IDX] 番目のマスに [COND]', '[IDX] ばんめのマスに [COND]'),
                    arguments: {
                        IDX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        COND: {
                            type: ArgumentType.STRING,
                            menu: 'cellinfo',
                            defaultValue: 1,
                        },
                    },
                },
            ],
            menus: {
                dir4: {
                    acceptReporters: false,
                    items: [
                        {text: i18n('上', 'うえ'), value: 'u'},
                        {text: i18n('下', 'した'), value: 'd'},
                        {text: i18n('左', 'ひだり'), value: 'l'},
                        {text: i18n('右', 'みぎ'), value: 'r'},
                    ]
                },
                dir8: {
                    acceptReporters: false,
                    items: [
                        {text: i18n('左上', 'ひだりうえ'), value: 1},
                        {text: i18n('上', 'うえ'), value: 2},
                        {text: i18n('右上', 'みぎうえ'), value: 3},
                        {text: i18n('左', 'ひだり'), value: 4},
                        {text: i18n('右', 'みぎ'), value: 6},
                        {text: i18n('左下', 'ひだりした'), value: 7},
                        {text: i18n('下', 'した'), value: 8},
                        {text: i18n('右下', 'みぎした'), value: 9},
                    ]
                },
                cellinfo: {
                    acceptReporters: false,
                    items: [
                        {text: i18n('何もない', 'なにもない'), value: 0},
                        {text: i18n('相手がいる', 'あいてがいる'), value: 1},
                        {text: i18n('ブロックがある', 'ブロックがある'), value: 2},
                        {text: i18n('アイテムがある', 'アイテムがある'), value: 3},
                    ]
                },
            }
        };
    }
}
