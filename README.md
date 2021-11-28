# BusApplication

### 作品說明
The F2E 全台公車動態時刻查詢應用服務

### 系統說明
**啟動方式** : 拉取本倉庫之master後
```
$ npm install
```
```
$ ng serve -o
``` 
```sh
*注意: ng serve前 需要於.src下建立enviorment資料夾，其中.ts包含PTX APP KEY以及PTX APP ID
```

### 版本
- angular/cli: 12.1.4
- npm : 6.14.14

### 主要資料夾說明
- home : 起始頁
- bus-inquire : 公車查詢
- near-station : 附近公車站
- inter-city-bus-inquire : 客運查詢
- service : 相關服務(如:Query)

### 使用技術
- Angular
- AWD (support Mobile,Tablet,Desktop)

### 第三方服務
- PTX API
