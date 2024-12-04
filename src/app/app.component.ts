import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SubMenu';

  MENU_ITEMS = [
    {
      label: 'Action',
      link: '#',
      children: [],
    },
    {
      label: 'Another action',
      link: '#',
      children: [],
    },
    {
      label: 'Submenu',
      link: '#',
      children: [
        {
          label: 'Submenu item 1',
          link: '#',
          children: [
            {
              label: 'Another action 2',
              link: '#',
              children: [],
            }
          ],
        },
        {
          label: 'Submenu item 2',
          link: '#',
          children: [],
        },
        {
          label: 'Submenu item 3',
          link: '#',
          children: [
            {
              label: 'Multi level 1',
              link: '#',
              children: [],
            },
            {
              label: 'Multi level 2',
              link: '#',
              children: [
                {
                  label: 'Multi levele 333',
                  link: '#',
                  children: [
                    {
                      label: 'Multi levele 444',
                      link: '#',
                      children: [],
                    }
                  ],
                }
              ],
            },
          ],
        },
      ],
    },
  ];

  handleClick(menuName: string) {
    alert(`You clicked on: ${menuName}`);
  }

  toggleSubmenu(event: MouseEvent, isVisible: boolean): void {
    const target = event.target as HTMLElement;
    const submenu = target.nextElementSibling as HTMLElement;

    if (submenu && submenu.classList.contains('dropdown-submenu')) {
      // Toggle the display property for the submenu
      submenu.style.display = isVisible ? 'block' : 'none';
    }
  }
}
