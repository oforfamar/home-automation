# home-automation

Check service is running on PI:
```
systemctl status zigbee2mqtt.service
```

In order to update zigbee2mqtt follow the instructions here:
https://www.zigbee2mqtt.io/getting_started/running_zigbee2mqtt.html#6-for-later-update-zigbee2mqtt-to-the-latest-version

Check application is running:
# You should see HomeAutomation in the list
pm2 ls

Other usefull commands:
```
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
```