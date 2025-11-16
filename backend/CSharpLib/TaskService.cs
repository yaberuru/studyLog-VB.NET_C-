using System.Collections.Generic;

namespace CSharpLib
{
    //公開クラス。他プロジェクトからも呼び出し可能。
    public class TaskService
    {

        //プライベートフィールド。文字列のリスト、クラス外からアクセス不可。(Javaと同じ)
        private List<string> tasks = new List<string>();

        //タスクを文字列に追加する。戻り値はなし。
        public void AddTask(string task)
        {
            tasks.Add(task);
        }

        public List<string> GetTask()
        {
            return tasks;
        }
    }
    
}