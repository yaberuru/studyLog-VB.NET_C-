let logs = []; //仮のメモリ保存(DBの代わり)

// リゾルバはスキーマ定義で定義したデータ操作を実際に行うための定義。
const resolvers = {
    Query: {
        studyLogs: () => logs,
    },
    Mutaion: {
        addStudyLog: (_, { title, content, date}) => {
            const newLog = {
                id: logs.length + 1,
                title,
                content,
                date,
            };
            logs.push(newLog);
            return newLog;
        },
    },
};

module.exports = resolvers;