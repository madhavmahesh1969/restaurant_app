import { MenuItem } from 'app/model/menu-item.model';
/**
* Provides a `FullMenu` object
*/
export interface FullMenu {
    menuName: string;
    menuCode: string;
    menuList: MenuItem[];
}