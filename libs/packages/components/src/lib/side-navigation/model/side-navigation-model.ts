export class SideNavigationModel {

    /**
     * 
     */
    navigationLinks: NavigationLink[];
}


export class NavigationLink implements Selectable {
    /**
     * Text to be displayed in the link or button
     */
    text: string;

    /**
     * Navigation Route 
     */
    route: string;

    /**
     * List of child navigation items that will show when no route is provieded
     */
    children?: NavigationLink[];

    /**
     * Identifier for the item when search for selected 
     */
    id: string;

    /**
     * Status of if the item is selected 
     */
    selected?: boolean;
}


export interface Selectable {
    /**
     * Identifier for the item when search for selected 
     */
    id: string;

    /**
     * Status of if the item is selected 
     */
    selected?: boolean;
}


