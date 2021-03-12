/* eslint-disable */

import cpu from './flv2fmp4';
// var cpu=require('chimee-flv2fmp4')

const temp = new cpu();
console.log(temp);
window.flvParse = {
    mp4File: null,
    succ: null,
    // ftyp_moov:null,
    tracks: [],
    baseTime: 0,
    setFlv(uint8, baseTime) {
        if (flvParse.baseTime != baseTime) {
            flvParse.baseTime = baseTime;
            temp.seek(baseTime);
        }
        // MP4媒体流的信息头初始化
        if (window.mp4Init) {
            temp.onInitSegment = window.mp4Init;
        }
        // 配置 生成MP4数据传输的回调
        if (window.onMediaSegment) {
            temp.onMediaSegment = window.onMediaSegment;
        }
        if (window.seekCallBack) {
            // temp.seekCallBack = window.se
            temp.seekCallBack = window.seekCallBack;
        }
        // 取得解码完后媒体信息后的回调 用来初始化MediaSource
        if (window.onMediaInfo) {
            temp.onMediaInfo = window.onMediaInfo;
        }
        return temp.setflv(uint8.buffer, baseTime);

        // 用来获取moov

    },
    setLocFlv(uin8) {
        return temp.setflvloc(uin8);
    }
};