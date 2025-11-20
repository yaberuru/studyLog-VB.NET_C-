function list_child_processes(){
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 4263;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 4263 > /dev/null;
done;

for child in $(list_child_processes 5615);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/hoshisachihaku/MyApp/WebApp/bin/Debug/net6.0/be887aeccd784c6190e12b896295a5a1.sh;
