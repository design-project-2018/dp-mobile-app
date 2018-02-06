import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';
import { DrivePage } from '../drive/drive';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DrivePage;
  tab2Root = HistoryPage;

  constructor() {

  }
}
