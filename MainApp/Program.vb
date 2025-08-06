Imports System
Imports CSharpLib

Module Program
    Sub Main()
        Console.WriteLine("VB.NET コンソールアプリ起動")

        Dim service = New TaskService()
        service.AddTask("コンソールから追加したタスク")
        service.AddTask("次のタスク")

        For Each task In service.GetTask()
            Console.WriteLine($"タスク：{task}")
        Next

        Console.WriteLine("終了 - Enterで閉じる")
        Console.ReadLine()
    End Sub
End Module