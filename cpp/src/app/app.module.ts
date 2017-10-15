import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CalculateComponent } from './calculate/calculate.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
	{ path: '', component: CalculateComponent },
	{ path: 'calculate', component: CalculateComponent },
	{ path: 'results', component: ResultsComponent },
	{ path: 'tutorial', component: TutorialComponent },
	{ path: 'about', component: AboutComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		CalculateComponent,
		TutorialComponent,
		AboutComponent,
		SocialComponent,
		ResultsComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: true}
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
