import { Component, OnInit } from '@angular/core';
import { FullMenu } from 'app/model/full-menu.model';
import { FullMenuService } from 'app/services/fullMenuService';

@Component({
  selector: 'data-table-grid',
  templateUrl: './data-table-grid.component.html',
  providers: [FullMenuService]
})
export class DataTableGridComponent implements OnInit {

    menu: FullMenu[];
    
    constructor(private fullMenuService: FullMenuService) { }

    ngOnInit() {
        this.fullMenuService.getMenuData().then(menu => this.menu = menu);
    }
}
