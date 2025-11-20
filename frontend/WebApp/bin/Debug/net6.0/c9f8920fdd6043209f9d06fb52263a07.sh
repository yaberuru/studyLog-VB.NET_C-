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

ps 7383;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 7383 > /dev/null;
done;

for child in $(list_child_processes 7524);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/hoshisachihaku/MyApp/WebApp/bin/Debug/net6.0/c9f8920fdd6043209f9d06fb52263a07.sh;
