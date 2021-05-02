import React from 'react';
import images from './assets/images';
import MiddleInverted from './assets/images/middle_inverted.svg';
import ChampionInverted from './assets/images/champion_inverted.svg';
import Group_521 from './assets/images/Group_521.png';
import Group_522 from './assets/images/Group_522.png';
import LolChar1 from './assets/images/lol_char-1.png';
import LolChar2 from './assets/images/lol_char-2.png';
import LolChar3 from './assets/images/lol_char-3.png';
import Image_51 from './assets/images/Image_51.png';
import Image_52 from './assets/images/Image_52.png';
import Image_53 from './assets/images/Image_53.png';
import LolRune1 from './assets/images/lol_rune1.png';
import LolRune3 from './assets/images/lol_rune3.png';
import LolRune4 from './assets/images/lol_rune4.png';
import Group_332 from './assets/images/Group_332.svg';
import Group_506 from './assets/images/Group_506.svg';
import Group_546 from './assets/images/Group_546.svg';
import Group_562 from './assets/images/Group_562.svg';
import TopInverted from './assets/images/top_inverted.svg';
import SupportInverted from './assets/images/support_inverted.svg';
import ScoreInverted from './assets/images/score_inverted.svg';


export const historyData = [
    {
        id:0,
        col1:{
            case:'VICTORY',
            time:'23:19 min',
            date:'10h ago'
        },
        col2:<MiddleInverted/>,
        col3:{
            left:images.lolChar2,
            level:14,
            right: images.group522
        },
        col4:{
            imgTop: images.lolRune1,
            imgBottom: images.lolRune4
        },
        col5:{
            numberTop:'11/1/11',
            numberBottom:'22.0'
        },
        col6:images.image52,
        col7: '113',
        col8: '6930'
    },
    {
        id:1,
        col1:{
            case:'VICTORY',
            time:'20:29 min',
            date:'12h ago'
        },
        col2:<SupportInverted/>,
        col3:{
            left:images.lolChar3,
            level:14,
            right: images.group522
        },
        col4:{
            imgTop: images.lolRune1,
            imgBottom: images.lolRune4
        },
        col5:{
            numberTop:'11/14/1',
            numberBottom:'2.0'
        },
        col6:images.image51,
        col7: '113',
        col8: '6930'
    },
    {
        id:2,
        col1:{
            case:'VICTORY',
            time:'34:09 min',
            date:'yesterday'
        },
        col2:<TopInverted/>,
        col3:{
            left:images.lolChar1,
            level:17,
            right: images.group521
        },
        col4:{
            imgTop: images.lolRune1,
            imgBottom: images.lolRune3
        },
        col5:{
            numberTop:'14/12/13',
            numberBottom:'4.3'
        },
        col6:images.image52,
        col7: '113',
        col8: '6930'
    },
    {
        id:3,
        col1:{
            case:'VICTORY',
            time:'17:03 min',
            date:'yesterday'
        },
        col2:<MiddleInverted/>,
        col3:{
            left:images.lolChar2,
            level:14,
            right: images.group521
        },
        col4:{
            imgTop: images.lolRune4,
            imgBottom: images.lolRune3
        },
        col5:{
            numberTop:'12/11/9',
            numberBottom:'1.8'
        },
        col6:images.image53,
        col7: '113',
        col8: '6930'
    },
    {
        id:4,
        col1:{
            case:'VICTORY',
            time:'33:19 min',
            date:'2 days ego'
        },
        col2:<MiddleInverted/>,
        col3:{
            left:images.lolChar3,
            level:14,
            right: images.group522
        },
        col4:{
            imgTop: images.lolRune1,
            imgBottom: images.lolRune3
        },
        col5:{
            numberTop:'1/12/21',
            numberBottom:'1.7'
        },
        col6:images.image51,
        col7: '113',
        col8: '6930'
    },
];