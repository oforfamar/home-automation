# home-automation

I started this project because i wanted to play around with home automation and because some of the Xiaomi devices i bought were only working with the China server or were having a huge delay when executing the commands.

Huge thank you to [Koenkk](https://github.com/Koenkk) for his wonderful [Zigbee2mqtt](https://github.com/koenkk/zigbee2mqtt) library that made it all possible.

Check service is running on machine:

```
systemctl status zigbee2mqtt.service
```

Check logs of service

```
sudo journalctl -u zigbee2mqtt.service -f
```

In order to update zigbee2mqtt follow the instructions here:
https://www.zigbee2mqtt.io/getting_started/running_zigbee2mqtt.html#6-for-later-update-zigbee2mqtt-to-the-latest-version

Check application is running:

```
pm2 ls
```

Other usefull commands:

```
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
$ pm2 logs [options] id/app_name
```
