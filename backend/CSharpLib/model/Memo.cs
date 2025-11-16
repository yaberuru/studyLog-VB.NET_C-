namespace CSharpLib.Models 
{
    public class Memo
    {
        public int Id { get; set; }
        public string Text { get; set; } = "";
        public string Context { get; set;} = "";

        public DateTime createdAt { get; set; } = DateTime.Now;
        public DateTime updatedAt { get; set; } =DateTime.Now;
    }

}
