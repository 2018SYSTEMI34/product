/**
 * Diaryテーブル操作クラス
 */
import NeDB from 'nedb';

/**
 * DiaryDB初期化
 * データ構造
 * {
 *  write_on:string,
 *  day:string,
 *  sentence:string,
 *  kind:array[string]
 * }
 */
let db = {};
db.diary = new NeDB({
    filename: 'dairy'
});

/**
 * Diaryテーブルへの登録
 * 
 * jsonデータを受け取り、
 * Diaryテーブルデータを登録する。
 * 
 * @param {登録データ} obj 
 * @returns bool
 */
const insert = (obj) => {

    if(!obj) {
        console.log("obj is illegal")
        return false;
    };

    if(!obj.write_on) {
        console.log("write_on is illegal")
        return false;
    };

    if(!obj.day) {
        console.log("day is illegal")
        return false;
    };

    if(!obj.sentence) {
        console.log("sentence is illegal")
        return false;
    };

    // DB登録
    db.diary.insert(obj,function(err,newDoc) {
        console.log("[INSERT]")
        console.log(newDoc)
        return false;
    });

    return true;
}