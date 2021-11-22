import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { QueryNearbyService } from '../service/query-nearby.service';
@Component({
  selector: 'app-near-station',
  templateUrl: './near-station.component.html',
  styleUrls: ['./near-station.component.scss']
})
export class NearStationComponent implements OnInit {
  myPosition = { lng: '', lat: '' }
  busStopData: any;

  constructor(
    private commonService: CommonService,
    private queryNearbyService: QueryNearbyService
  ) { }

  ngOnInit(): void {
    this.getPosition();

    this.commonService.getMyPositionV2().then(res => {
      console.log('當前位置', res)
    })
  }

  /**
   * 透過Web API取得當前位置
   */
  private getPosition() {
    this.commonService.getMyPositionV1().then(res => {
      this.myPosition.lng = res.lng;
      this.myPosition.lat = res.lat;
      this.getBusStopNearby();
    }).catch(err => {
      console.log('沒有打開地圖權限')
    })
  }

  /**
   * 透過網路API取得當前位置，主要是要取得當前城市
   */
  private getBusStopNearby() {
    this.queryNearbyService.getBusStopNearby(this.myPosition.lat, this.myPosition.lng).then(res => {
      this.busStopData = res;
      console.log(this.busStopData)
    })
  }

}
