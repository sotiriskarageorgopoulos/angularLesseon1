import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component'
import { NotFoundComponent } from '../not-found/not-found.component';
import { GitSearchComponent } from '../git-search/git-search.component';

export const routes : Routes = [
{path:'',component:HomePageComponent},
{path:'search', redirectTo:'search/angular', pathMatch:'full'},
{path:'search/:query', component:GitSearchComponent, data:{title:'Git Search'}},
{path:"**",component:NotFoundComponent}
];