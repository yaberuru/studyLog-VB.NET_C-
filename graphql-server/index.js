const { ApolloServer, gql} = require('apollo-server');

//スキーマ定義
const typeDefs = gql`
    type Query {
        hello: String
    }
    `;

//リゾルバ定義
const resolvers = {
    Query: {
        hello: () => 'こんにちは、GraphqQL',
    },
};

//Apollo Server インスタンス作成
const server = new ApolloServer({ typeDefs, resolvers});

//起動
server.listen().then(({ url }) => {
    console.log(`🚀 server ready at ${url}`);
});