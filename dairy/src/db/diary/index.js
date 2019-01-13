/**
 * 日記テーブルアクセスクラス
 */
import Realm from 'realm';

/**
 * スキーマ定義
 * id : primary
 * writed_on : 書込日
 * day : 曜日
 * sentence : 日記本文
 */
const schema = {
    name : "dairy",
    primaryKey: "id",
    properties: {
        id : {type: "int"},
        writed_on: {type: "date"},
        sentence: {type: "string"},
    }
};

/**
 * Diaryテーブルアクセスクラス
 */
export default class DiaryAccess {
    constructor() {
        this.realm = new Realm({schema: [schema]});
    }

    /**
     * 日記書き込み
     * idを指定した場合、更新処理
     * idを指定しない場合、登録処理
     * @param {{id: number,writed_on: Date, sentence: string}} record テーブルに書き込むレコード
     */
    wrireDairy = (record) => {
        this.realm.write(() => {
            this.realm.create(
                "dairy",
                {id:record.id ? record.id : this.maxId() + 1,
                 writed_on : record.writed_on,
                 sentence : record.sentence
                },
                true    
            )
        });
    }

    /**
     * IDの最大値を取得
     */
    maxId = () => {
        const maxId = this.realm.objects("dairy").max("id");
        return maxId ? maxId : 0;
    }

    /**
     * レコードの全件取得
     */
    allRecords = () => {
        return this.realm.objects("dairy")   
    }
}