const { gql } = require('apollo-server');

// スキーマ定義、Queryタイプのリストにはnullを許さない構造
// クライアントが実行できる全てのクエリと各々の返り値の型が表示される。
// Mutation typeはデータの作成、更新、削除等の書き込み操作を定義。
const typeDefs = gql`
    type StudyLog {
        id: ID!
        title: String!
        content: String!
        date: String!
    }
    
    type Query {
        studyLogs: [StudyLog!]!
    }

    type Mutation {
        addStudyLog(title: String!, content: String!, date: String!): StudyLog
    
    }
    `;

    module.exports = typeDefs;