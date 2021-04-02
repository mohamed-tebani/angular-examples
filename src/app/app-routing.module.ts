import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { SwipeComponent } from './swipe/swipe.component';

const routes: Routes = [
  { path: 'drag-and-drop', component: DragAndDropComponent },
  { path: 'swipe', component: SwipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
