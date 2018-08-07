import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './Section.component';
import { ContentComponent } from '../Content/Content.component';
import { LocationsComponent } from '../Locations/Locations.component';
import { RateMyAgentComponent } from '../RateMyAgent/RateMyAgent.component';
import { VideoTestimonialsComponent } from '../VideoTestimonials/VideoTestimonials.component';
import { PortalUpgradeTractionComponent } from '../PortalUpgradeTraction/PortalUpgradeTraction.component';

const sectionRoutes: Routes = [
    {
        path: 'advantage',
        component: SectionComponent,
        children : [
           {
                path : 'history',
                component: ContentComponent
           }
        ]
    },
    // { path: 'advantage/history', component: ContentComponent, outlet: 'section' },
    // { path: 'advantage/locations', component: LocationsComponent },
    // { path: 'advantage/wages', component: ContentComponent },
    // { path: 'advantage/succeeding', component: ContentComponent },
    // { path: 'advantage/method', component: ContentComponent },
    // { path: 'saying/ratemyagent', component: RateMyAgentComponent },
    // { path: 'saying/videotestimonials', component: VideoTestimonialsComponent },
    // { path: 'marketing/premium', component: ContentComponent },
    // { path: 'marketing/musthave', component: ContentComponent },
    // {
    //     path: 'marketing/photography',
    //     component: PortalUpgradeTractionComponent
    // },
    // { path: 'marketing/extras', component: ContentComponent },
    // { path: 'here/mortgage', component: ContentComponent },
    // { path: 'here/conveyancing', component: ContentComponent },
    // { path: 'here/buildingpest', component: ContentComponent },
    // { path: 'here/smokealarms', component: ContentComponent },
    // { path: 'here/propertymanagement', component: ContentComponent },
    {
        path: '',
        component: SectionComponent
    }
];
@NgModule({
    imports: [
      RouterModule.forChild(sectionRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class SectionRoutingModule { }
