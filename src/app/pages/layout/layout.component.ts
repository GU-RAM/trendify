import { Component } from '@angular/core';
import { HeaderComponent } from '@trendify/components';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
