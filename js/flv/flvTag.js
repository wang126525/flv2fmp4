/* eslint-disable */
export default class FlvTag {
    constructor() {
        this.tagType = -1;
        this.dataSize = -1;//数据 flvParse.read(length)产出
        this.Timestamp = -1; //是一个数组 00 00 00 00 3+1 时间戳+扩展时间戳
        this.StreamID = -1;
        this.body = -1;
        this.time = -1;
        this.arr = [];
        this.size=-1; // 是一个数组 4字节 
    }
    getTime() {
        // this.Timestamp.pop();
        this.arr = [];
        for (let i = 0; i < this.Timestamp.length; i++) {
            this.arr.push((this.Timestamp[i].toString(16).length == 1 ? '0' + this.Timestamp[i].toString(16) : this.Timestamp[i].toString(16)));
        }
        this.arr.pop();
        const time = this.arr.join('');
        console.log(time,"time");
        this.time = parseInt(time, 16);
        return parseInt(time, 16);
    }
}