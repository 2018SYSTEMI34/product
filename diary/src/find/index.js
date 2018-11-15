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

/**
 * Dairyテーブルの初期表示用全件検索
 * 
 * jsonデータを受け取り、
 * テーブルレコードを検索する。
 * 
 * 受け取るjsonの形式
 * {
 *  write_on_start:string,
 *  write_on_end:string,
 *  day:string,
 *  sentence:string,
 *  category:array[string]
 * }
 * 
 * @param {json} obj
 * @returns boolean
 */
export const findall = (obj) => {
    
    // DB読み込み
    db.diary.loadDatabase();

    // DB全件検索
    db.diary.find({}).sort({ write_on: -1 }).exec((err, docs) => {
        console.log("[FIND]");
        console.log(docs);
        return false;
    });

    return true;

}

/**
 * Dairyテーブルの検索
 * 
 * jsonデータを受け取り、
 * テーブルレコードを検索する。
 * 
 * 受け取るjsonの形式
 * {
 *  write_on_start:string,
 *  write_on_end:string,
 *  day:string,
 *  sentence:string,
 *  category:array[string]
 * }
 * 
 * @param {json} obj
 * @returns boolean
 */
export const find = (obj) => {

    //クエリ変数の初期化
    var queryObject1 = {};
    var queryObject2 = {};
    var queryObject3 = {};
    var queryObject4 = {};
    var queryObject5 = {};

    // 投稿日
    if(obj.write_on_start) {
        queryObject1 = {write_on: { $gte: obj.write_on_start }};
    };
    if(obj.write_on_end) {
        queryObject2 = {write_on: { $lte: obj.write_on_end }};
    };
    
    //曜日
    if(obj.day) {
        queryObject3 = {day: { $in: obj.day }};
    };

    // キーワード
    if(obj.sentence) {
		var searchWord = new RegExp(obj.sentence, 'mi');
        queryObject4 = {sentense: searchWord};
    };

    // カテゴリー
    if(obj.category) {
        queryObject5 = {category: { $in: obj.category }};
    };
    
    // DB読み込み
    db.diary.loadDatabase();

    // DB検索
    db.diary.find({ $and: [queryObject1, queryObject2, queryObject3, queryObject4, queryObject5]}).sort({ write_on: -1 }).exec((err, docs) => {
        console.log("[FIND]");
        console.log(docs);
        return false;
    });

    return true;

}