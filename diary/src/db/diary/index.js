/**
 * Diaryテーブル操作クラス
 */
import NeDB from 'nedb';

/**
 * DiaryDB初期化
 * データ構造
 * {
 *  _id:string,
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
 * 受け取るjsonの形式
 * {
 *  write_on:string,
 *  day:string,
 *  sentence:string,
 *  kind:array[string]
 * }
 * 
 * @param {json} obj 
 * @returns boolean
 */
export const insert = (obj) => {

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

    // データの入れ替え
    const date = {
        write_on : obj.write_on,
        day      : obj.day,
        sentence : obj.sentence,
        kind     : obj.kind
    }

    // DB読み込み
    db.diary.loadDatabase();

    // DB登録
    db.diary.insert(data,function(err,newDoc) {
        console.log("[INSERT]")
        console.log(newDoc)
        return false;
    });

    return true;
}

/**
 * Dairyテーブルへの更新
 * 
 * jsonデータを受け取り、
 * テーブルレコードを更新する。
 * 
 * 受け取るjsonの形式
 * {
 *  _id : string,
 *  write_on:string,
 *  day:string,
 *  sentence:string,
 *  kind:array[string]
 * }
 * 
 * @param {json} obj
 * @returns boolean
 */
export const update = (obj) => {

    if(!obj) {
        console.log("obj is illegal")
        return false;
    };

    if(!obj._id) {
        console.log("_id is illegal")
        return false;
    }

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

    // DB読み込み
    db.diary.loadDatabase();

    // DB更新
    db.diary.upadate(
        {_id : obj._id},
        {
          write_on : obj.write_on,
          day:obj.day,
          sentence:obj.sentence,
          kind:obj.kind
        },
        {},
        function(err,numReplaced) {
            console.log("[UPDATE]");
            console.log(numReplaced);
            return false;
        }
    )

    return true;

}